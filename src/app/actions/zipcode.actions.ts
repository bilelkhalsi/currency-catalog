import { Action } from '@ngrx/store';
import { Zipcode } from '../zipcode/api';

export enum ZipcodeActionTypes {
  AddZipcode = '[Zipcode] Add Zipcode',
  RemoveZipcode = '[Zipcode] Remove Zipcode',
  LocationLoaded = '[Location] Location loaded',
  LocationLoadFailed = '[Location] Location load failed'
}

export class AddZipcode implements Action {
  readonly type = ZipcodeActionTypes.AddZipcode;
  constructor(public zipcode: Zipcode) {}
}

export class RemoveZipcode implements Action {
  readonly type = ZipcodeActionTypes.RemoveZipcode;
  constructor(public zipcode: string) {}
}

export class LocationLoaded implements Action {
  readonly type = ZipcodeActionTypes.LocationLoaded;
  constructor(public zipcode: string, public loaction: Zipcode) {}
}

export class LocationLoadFialed implements Action {
  readonly type = ZipcodeActionTypes.LocationLoadFailed;
  constructor(public zipcode: string, public error: any) {}
}
