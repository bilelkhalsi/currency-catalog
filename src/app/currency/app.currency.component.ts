import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Currency } from './api';

@Component({
    selector: 'app-currency',
    templateUrl: 'app.currency.component.html',
    styleUrls: ['app.currency.component.scss']
})
export class AppCurrencyComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    currency: Currency;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this.route.data.subscribe((data: {currency: Currency}) => {
            this.currency = data.currency;
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
