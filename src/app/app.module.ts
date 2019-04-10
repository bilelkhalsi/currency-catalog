import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppCurrenciesModule } from './currency/app.currency.module';
import { AppRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { ZipCodeModule } from './zipcode/app.zipcode.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppCurrenciesModule,
    ZipCodeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
