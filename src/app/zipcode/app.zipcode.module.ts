import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ZipCodeComponent } from './app.zipcode.component';
import { ZipCodeService } from './app.zipcode.service';
import { ZipCodeRouter } from './app.zipcode.router';
import { ZipCodesComponent } from './app.zipcodes.component';

@NgModule({
    imports: [CommonModule, HttpClientModule, ZipCodeRouter],
    exports: [],
    declarations: [ZipCodeComponent, ZipCodesComponent],
    providers: [ZipCodeService],
})
export class ZipCodeModule { }
