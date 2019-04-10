import { ZipCodeComponent } from './app.zipcode.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZipCodeService } from './app.zipcode.service';
import { of, throwError } from 'rxjs';
import { startWith, catchError } from 'rxjs/operators';

// { 'getZipcode': () => '94300', 'getZipcode': () => zipcodeObserv }


describe('ZipCodeComponent:', () => {
    let component: ZipCodeComponent;
    let fixture: ComponentFixture<ZipCodeComponent>;
    const serviceSub = jasmine.createSpyObj('ZipCodeService', ['getZipcode', 'zipCodeObservable']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ZipCodeComponent],
            providers: [{ provide: ZipCodeService, useValue: serviceSub }]
        });
        fixture = TestBed.createComponent(ZipCodeComponent);
        component = fixture.componentInstance;
    });

    it('should create zipcode component', () => {
        expect(component).toBeDefined();
    });

    it('should inject stub (not a real service) service instance to the component', () => {
        const sub = fixture.debugElement.injector.get(ZipCodeService);
        expect(sub).toBeDefined();
        expect(sub === serviceSub).toBeFalsy(); /* Do not reference the userServiceStub object that's
        provided to the testing module in the body of your test.
        It does not work! The userService instance injected into the component is a completely different object,
        a clone of the provided userServiceStub.
        */
    });

    it('should render zipcode', () => {
        serviceSub.zipCodeObservable.and.returnValue(of('94300'));
        fixture.detectChanges();
        const html: HTMLElement = fixture.nativeElement;
        expect(html.innerHTML).toContain('94300');
    });

    it('should render placeholder instead of zipcode', () => {
        serviceSub.zipCodeObservable.and.returnValue(throwError('zipcode not found'));
        fixture.detectChanges();
        const html: HTMLElement = fixture.nativeElement;
        expect(html.innerHTML).toContain('...');
    });

});
