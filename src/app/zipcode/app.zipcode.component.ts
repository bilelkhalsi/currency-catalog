import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-zipcode',
    template: `<h1>{{zipcode}}</h1>`
})

export class ZipCodeComponent implements OnInit {

    zipcode = '94300';

    constructor() { }

    ngOnInit() { }
}
