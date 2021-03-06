import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Zipcode } from './api';
import { map } from 'rxjs/operators';

@Injectable()
export class ZipCodeService {


    constructor(private http: HttpClient) { }

    loadZipcodeLoctation(zip: number): Observable<Zipcode> {
        return this.http.get<Zipcode>(`http://api.zippopotam.us/fr/${zip}`).pipe(
            map(raw => new Zipcode(zip, raw))
        );
    }
}
