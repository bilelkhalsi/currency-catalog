import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, tap, count, first, take, skip, toArray } from 'rxjs/operators';
import { Currency, CURRENCIES_MOCK } from './api';

@Injectable()
export class AppCurrenciesService {

    currenciesUrl = '/api/auto/currencymap.json?name=Y';

    constructor(private http: HttpClient) { }


    public load(): Observable<Currency[]> {
        return of(CURRENCIES_MOCK).pipe(
            tap(c => console.log(c)),
            map(currencies  => currencies.map(c => new Currency(c)))
        );
    }

    public count(): Observable<number> {
        return from(CURRENCIES_MOCK).pipe(
            count()
        );
    }

    public loadPage(page: number, pageSize: number): Observable<Currency[]> {
        return from(CURRENCIES_MOCK).pipe(
            skip(pageSize * page),
            take(pageSize),
            map(currency => new Currency(currency)),
            toArray()
        );
    }

    /**
     * Find one currency by its id.
     * @param id currency id.
     */
    public findbyId(id: string): Observable<Currency> {
        return from(CURRENCIES_MOCK).pipe(
            tap(c => console.log(c)),
            map(c => new Currency(c)),
            first(c => id === c.id, null),
            tap(c => console.log(c))
        );
    }

    public _load(): Observable<Currency> {
        return this.http.get<Currency>(this.currenciesUrl).pipe(
            tap(c => console.log(c)),
            map(c => new Currency(c))
        );
    }
}

