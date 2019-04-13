import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AddZipcode, ZipcodeActionTypes, LocationLoaded, LocationLoadFialed } from '../actions/zipcode.actions';
import { ZipCodeService } from '../zipcode/app.zipcode.service';
import { Observable, of } from 'rxjs';
import { Zipcode } from '../zipcode/api';
import { mergeMap, map, catchError } from 'rxjs/operators';



@Injectable()
export class LocationEffects {

  @Effect()
  loadLocation$: Observable<any> = this.actions$.pipe(
    ofType(ZipcodeActionTypes.AddZipcode),
    mergeMap((action: AddZipcode ) =>
      this.zipcodeService.loadZipcodeLoctation(action.zipcode.id).pipe(
        map(location => new LocationLoaded(action.zipcode.id, location)),
        catchError((err: any) => of(new LocationLoadFialed(action.zipcode.id, err)))
      )
    )
  );

  constructor(private actions$: Actions<AddZipcode>, private zipcodeService: ZipCodeService) {}

}
