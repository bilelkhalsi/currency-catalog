import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppCurrenciesComponent } from './app.currencies.component';
import { AppCurrenciesLoader } from './app.currencies.loader';
import { AppCurrencyRoutingModule } from './app.currency.router';

@NgModule({
    imports: [CommonModule, HttpClientModule, AppCurrencyRoutingModule],
    exports: [ AppCurrencyRoutingModule ],
    declarations: [AppCurrenciesComponent],
    entryComponents: [AppCurrenciesComponent],
    providers: [AppCurrenciesLoader],
})
export class AppCurrenciesModule { }
