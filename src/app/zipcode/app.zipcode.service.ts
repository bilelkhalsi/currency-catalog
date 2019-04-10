import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { ZipCode } from './api';
import { map } from 'rxjs/operators';

@Injectable()
export class ZipCodeService {


    constructor(private http: HttpClient) { }

    getZipcode(): string {
        return '94300';
    }

    zipCodeObservable(zipcode: string): Observable<ZipCode> {
        return this.http.get<ZipCode>(`http://api.zippopotam.us/fr/${zipcode}`).pipe(
            map(raw => new ZipCode(raw))
        );
    }
}
