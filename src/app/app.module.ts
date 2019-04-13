import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppCurrenciesModule } from './currency/app.currency.module';
import { AppRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { ZipCodeModule } from './zipcode/app.zipcode.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AppCurrenciesModule,
    ZipCodeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
