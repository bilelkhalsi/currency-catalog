import { NgModule } from '@angular/core';

import { ZipCodeComponent } from './app.zipcode.component';
import { ZipCodeService } from './app.zipcode.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [ZipCodeComponent],
    providers: [ZipCodeService],
})
export class ZipCodeModule { }
