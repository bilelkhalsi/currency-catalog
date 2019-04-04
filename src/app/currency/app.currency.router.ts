import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCurrenciesComponent } from './app.currencies.component';

const routes: Routes = [
    { path: '', component: AppCurrenciesComponent, pathMatch: 'full' }, // app's default page
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCurrencyRoutingModule { }
