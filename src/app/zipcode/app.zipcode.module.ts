import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../app.material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ZipCodeRouter } from './app.zipcode.router';
import { ZipCodeComponent } from './app.zipcode.component';
import { ZipCodeService } from './app.zipcode.service';
import { ZipCodesComponent } from './app.zipcodes.component';
import { LoadLocationError } from './pipes/app.load-location-error.pipe';
import * as fromState from '../reducers';
import { LocationEffects } from '../effects/location.effects';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        ZipCodeRouter,
        StoreModule.forFeature('zipcodeState', fromState.reducers, { metaReducers: fromState.metaReducers }),
        EffectsModule.forFeature([LocationEffects])
    ],
    exports: [],
    declarations: [
        ZipCodeComponent,
        ZipCodesComponent,
        LoadLocationError
    ],
    providers: [ZipCodeService],
})
export class ZipCodeModule { }
