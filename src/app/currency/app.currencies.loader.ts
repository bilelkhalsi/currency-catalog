import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Currency, CURRENCIES_MOCK } from './api';

@Injectable()
export class AppCurrenciesLoader {

    currenciesUrl = '/api/auto/currencymap.json?name=Y';

    constructor(private http: HttpClient) { }


    public load(): Observable<Currency[]> {
        return of(CURRENCIES_MOCK).pipe(
            tap(c => console.log(c)),
            map(currencies  => currencies.map(c => new Currency(c)))
        );
    }

    public _load(): Observable<Currency> {
        return this.http.get<Currency>(this.currenciesUrl).pipe(
            tap(c => console.log(c)),
            map(c => new Currency(c))
        );
    }
}

