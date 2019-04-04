import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppCurrenciesComponent } from './app.currencies.component';
import { AppCurrenciesLoader } from './app.currencies.loader';
import { of } from 'rxjs';
import { Currency } from './api';

const currencies = [
    new Currency({ 'code': 'aa', 'name': 'aaa', 'symbol': 'a' }),
    new Currency({ 'code': 'bb', 'name': 'bbb', 'symbol': 'b' })
];
const mockLoader = <AppCurrenciesLoader>{ load: () => of(currencies) };

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
                provide: AppCurrenciesLoader, useValue: mockLoader
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
