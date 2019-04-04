import { Component, OnInit } from '@angular/core';
import { AppCurrenciesLoader } from './app.currencies.loader';
import { Observable } from 'rxjs';
import { Currency } from './api';

@Component({
    selector: 'app-currencies',
    templateUrl: './app.currencies.component.html',
    styleUrls: ['./app.currencies.component.scss']
})

export class AppCurrenciesComponent implements OnInit {

    currencies: Observable<Currency[]>;

    constructor(private loader: AppCurrenciesLoader) { }

    ngOnInit() {
        this.currencies = this.loader.load();
    }
}

