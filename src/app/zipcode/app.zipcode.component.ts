import { Component, OnInit } from '@angular/core';
import { ZipCodeService } from './app.zipcode.service';
import { Observable, of } from 'rxjs';
import { startWith, catchError } from 'rxjs/operators';
import { ZipCode } from './api';

@Component({
    selector: 'app-zipcode',
    templateUrl: './app.zipcode.component.html',
    styleUrls: ['./app.zipcode.component.scss']
})

export class ZipCodeComponent implements OnInit {

    zipcode: Observable<ZipCode>;
    errorMessage = '';

    constructor(private service: ZipCodeService) { }

    ngOnInit() {
        this.zipcode = this.service.zipCodeObservable('94300').pipe(
            catchError(err => {
                setTimeout( () => this.errorMessage = err.message || err.toString());
                return of(undefined);
            })
        );
    }
}
