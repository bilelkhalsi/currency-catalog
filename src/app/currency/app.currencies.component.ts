import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppCurrenciesService } from './app.currencies.service';
import { Observable, range, BehaviorSubject, Subscription, merge, race } from 'rxjs';
import { Currency } from './api';
import { tap, flatMap, map, toArray, mergeMap, concatMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-currencies',
    templateUrl: './app.currencies.component.html',
    styleUrls: ['./app.currencies.component.scss']
})

export class AppCurrenciesComponent implements OnInit, OnDestroy {

    pageSize = new FormControl(3);
    currentPage = new BehaviorSubject(0);
    pagesCount: number;
    currencies: Observable<Currency[]>;

    private _subscriptions: Subscription;

    constructor(private loader: AppCurrenciesService) { }

    ngOnInit() {
        this._subscriptions = this.pageSize.valueChanges.subscribe(size => this.currentPage.next(0));
        this.currencies = this.currentPage.pipe(
            mergeMap(currentPage => this.loader.loadPage(currentPage, this.pageSize.value))
        );
    }

    prevPage() {
        this.currentPage.next(this.currentPage.getValue() - 1);
    }


    nextPage() {
        this.currentPage.next(this.currentPage.getValue() + 1);
    }

    ngOnDestroy() {
        if (this._subscriptions) {
            this._subscriptions.unsubscribe();
        }
    }

}

