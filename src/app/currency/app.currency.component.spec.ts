import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppCurrencyRoutingModule } from './app.currency.router';
import { AppCurrencyComponent } from './app.currency.component';
import { AppCurrenciesService } from './app.currencies.service';
import { of } from 'rxjs';
import { Currency } from './api';
import { Router } from '@angular/router';
import { AppCurrenciesComponent } from './app.currencies.component';


const currency = new Currency({
    'id': 'USD',
    'attributes': {
        'code': 'USD',
        'name': 'US Dollar',
        'currency_type': 'national',
        'code_iso_numeric3': '840',
        'code_iso_alpha3': 'USD',
        'symbol': '$',
        'native_symbol': '$',
        'category': 'others'
    },
});
const mockLoader = <AppCurrenciesService>{ findbyId: (id: string) => of(currency) };

describe('AppCurrenciesComponent', () => {

    let router: Router;
    let fixture;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                AppCurrencyRoutingModule
            ],
            declarations: [
                AppCurrenciesComponent,
                AppCurrencyComponent
            ],
            providers: [{
                provide: AppCurrenciesService, useValue: mockLoader
            }]
        }).compileComponents();
        // location = TestBed.get(Location);
        router = TestBed.get(Router);
        fixture = TestBed.createComponent(AppCurrencyComponent);
        router.initialNavigation();
    }));

});
