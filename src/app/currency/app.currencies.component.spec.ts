import { TestBed, async } from '@angular/core/testing';
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
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppCurrenciesComponent
            ],
            providers: [{
                provide: AppCurrenciesService, useValue: mockLoader
            }]
        }).compileComponents();
    }));

    it('should render a title in h2 element', () => {
        const fixture = TestBed.createComponent(AppCurrenciesComponent);
        fixture.detectChanges();
        const component = fixture.debugElement.nativeElement;
        expect(component.querySelector('h2').textContent).toEqual('Available currencies');
    });


    it('should render a list of currencies', () => {
        const fixture = TestBed.createComponent(AppCurrenciesComponent);
        fixture.detectChanges();
        const template = fixture.debugElement.nativeElement;
        expect(template.querySelectorAll('ul li').length).toEqual(2);
    });


});
