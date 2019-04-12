import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { AddZipcode, RemoveZipcode } from '../actions/zipcode.actions';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-zipcodes',
    templateUrl: './app.zipcodes.component.html',
    styleUrls: ['./app.zipcodes.component.scss']
})

export class ZipCodesComponent implements OnInit {

    zipcodes: Observable<Array<string>>;

    constructor(private store: Store<State>) { }

    ngOnInit() {
        this.zipcodes = this.zipcodes = this.store.select('zipcodeState').pipe(
            map(state => state.zipcodes),
            map(state => state.zipcodes)
        );
    }

    addLocation(zipcode: string) {
        console.log('add new  location : ', zipcode);
        this.store.dispatch(new AddZipcode(zipcode));
    }

    removeLocation(zipcode: string) {
        console.log('remove location : ', zipcode);
        this.store.dispatch(new RemoveZipcode(zipcode));
    }

}
