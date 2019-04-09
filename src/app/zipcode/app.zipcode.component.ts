import { Component, OnInit } from '@angular/core';
import { ZipCodeService } from './app.zipcode.service';

@Component({
    selector: 'app-zipcode',
    templateUrl: './app.zipcode.component.html'
})

export class ZipCodeComponent implements OnInit {

    zipcode: string;

    constructor(private service: ZipCodeService) { }

    ngOnInit() {
        this.zipcode = this.service.getZipcode();
    }
}
