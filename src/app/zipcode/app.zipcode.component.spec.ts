import { ZipCodeComponent } from './app.zipcode.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('ZipCodeComponent:', () => {
    let component: ZipCodeComponent;
    let fixture: ComponentFixture<ZipCodeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ZipCodeComponent]
        });
        fixture = TestBed.createComponent(ZipCodeComponent);
        component = fixture.componentInstance;
    });

    it('should create zipcode component', () => {
        expect(component).toBeDefined();
    });

    it('should fail : binding happen when angular performs change detection', () => {
        const html: HTMLElement = fixture.nativeElement;
        expect(html.innerHTML).toContain('94300');
    });

});
