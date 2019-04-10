import { AppCurrenciesService } from './app.currencies.service';
import { CURRENCIES_MOCK } from './api';
import { of } from 'rxjs';


const CURRENCY =  {
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
};

describe('AppCurrenciesService', () => {

    let httpClientSpy: { get: jasmine.Spy};
    let sut: AppCurrenciesService;

    beforeEach( () => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        sut = new AppCurrenciesService(<any>httpClientSpy);
    });


    it('#load() should return list of currencies from observable', () => {
        httpClientSpy.get.and.returnValue(of(CURRENCIES_MOCK));
        sut.load().subscribe(currencies => {
            expect(currencies).not.toBeNull();
            expect(currencies.length).toBeGreaterThan(0);
        }, fail);
    });

    it('#findById should return a currency from observable', () => {
        httpClientSpy.get.and.returnValue(of(CURRENCY));
        sut.findbyId('USD').subscribe(currency => {
            expect(currency).not.toBeNull();
            expect(currency.id).toEqual('USD');
        }, fail);
    });

    it('#findById should not find currency with the given id', () => {
        httpClientSpy.get.and.returnValue(of(CURRENCY));
        sut.findbyId('XXX').subscribe(currency => {
            expect(currency).toBeNull();
        }, fail);
    });


});
