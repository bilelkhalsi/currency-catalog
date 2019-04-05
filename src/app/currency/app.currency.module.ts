import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppCurrenciesComponent } from './app.currencies.component';
import { AppCurrencyComponent } from './app.currency.component';
import { AppCurrenciesService } from './app.currencies.service';
import { AppCurrencyRoutingModule } from './app.currency.router';

@NgModule({
    imports: [CommonModule, HttpClientModule, AppCurrencyRoutingModule],
    exports: [ AppCurrencyRoutingModule ],
    declarations: [AppCurrenciesComponent, AppCurrencyComponent],
    entryComponents: [AppCurrenciesComponent, AppCurrencyComponent],
    providers: [AppCurrenciesService],
})
export class AppCurrenciesModule { }
