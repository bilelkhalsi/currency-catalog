import { Component, OnInit } from '@angular/core';
import { ZipCodeService } from './app.zipcode.service';
import { Observable, of } from 'rxjs';
import { startWith, catchError } from 'rxjs/operators';
import { Zipcode } from './api';

@Component({
    selector: 'app-zipcode',
    templateUrl: './app.zipcode.component.html',
    styleUrls: ['./app.zipcode.component.scss']
})

export class ZipCodeComponent implements OnInit {

    zipcode: Observable<Zipcode>;
    errorMessage = '';

    constructor(private service: ZipCodeService) { }

    ngOnInit() {}
}
