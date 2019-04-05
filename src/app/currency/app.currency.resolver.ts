import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppCurrenciesService } from './app.currencies.service';
import { Currency } from './api';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap, flatMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CurrencyResolver implements Resolve<Currency> {

    constructor(private currenciesService: AppCurrenciesService, private router: Router) {}

    /**
     * Resolve currency by the given id and pass it to component that will handle this routeSnapshot.
     * @param route route snapshot
     * @param state route state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Currency> | Observable<never> {
        const id = route.paramMap.get('id');
        return this.currenciesService.findbyId(id).pipe(
            mergeMap(c => {
                if ( c ) {
                    return of(c);
                }
                this.router.navigate(['']);
                return EMPTY;
            })
        );
    }
}
