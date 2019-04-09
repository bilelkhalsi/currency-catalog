import { Injectable } from '@angular/core';

@Injectable()
export class ZipCodeService {

    constructor() { }

    getZipcode(): string {
        return '94300';
    }
}
