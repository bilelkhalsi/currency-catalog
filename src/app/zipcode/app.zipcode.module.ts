import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../app.material.module';
import { ZipCodeRouter } from './app.zipcode.router';
import { ZipCodeComponent } from './app.zipcode.component';
import { ZipCodeService } from './app.zipcode.service';
import { ZipCodesComponent } from './app.zipcodes.component';

@NgModule({
    imports: [CommonModule, HttpClientModule, MaterialModule, ZipCodeRouter],
    exports: [],
    declarations: [ZipCodeComponent, ZipCodesComponent],
    providers: [ZipCodeService],
})
export class ZipCodeModule { }
