import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCurrenciesComponent } from './app.currencies.component';
import { AppCurrencyComponent } from './app.currency.component';
import { CurrencyResolver } from './app.currency.resolver';

const routes: Routes = [
    { path: '', component: AppCurrenciesComponent, pathMatch: 'full' }, // default page
    { path: 'currency/:id', component: AppCurrencyComponent, resolve: {currency: CurrencyResolver} }, // Currency details page.
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCurrencyRoutingModule { }
