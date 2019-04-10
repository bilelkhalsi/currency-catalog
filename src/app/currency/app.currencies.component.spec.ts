import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppCurrenciesComponent } from './app.currencies.component';
import { AppCurrenciesService } from './app.currencies.service';
import { of } from 'rxjs';
import { Currency } from './api';

const currencies = [
    new Currency({
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
    }),
    new Currency({
        'id': 'EUR',
        'attributes': {
            'code': 'EUR',
            'name': 'Euro',
            'currency_type': 'national',
            'code_iso_numeric3': '978',
            'code_iso_alpha3': 'EUR',
            'symbol': '€',
            'native_symbol': '€',
            'category': 'others'
        }
    })
];
const mockLoader = <AppCurrenciesService>{ load: () => of(currencies) };

describe('AppCurrenciesComponent', () => {
    let fixture;
    let component;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, ReactiveFormsModule
            ],
            declarations: [
                AppCurrenciesComponent
            ],
            providers: [{
                provide: AppCurrenciesService, useValue: mockLoader
            }]
        }).compileComponents();
        fixture = TestBed.createComponent(AppCurrenciesComponent);
        component = fixture.componentInstance;
    });

    it('should render a title in h2 element', () => {
        fixture.detectChanges();
        // const component = fixture.debugElement.nativeElement;
        expect(component.querySelector('h2').textContent).toEqual('Available currencies');
    });


    it('should render a list of currencies', () => {
        fixture.detectChanges();
        const template = fixture.debugElement.nativeElement;
        expect(template.querySelectorAll('ul li').length).toEqual(2);
    });


});
