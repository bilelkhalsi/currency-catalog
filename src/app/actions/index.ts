import { RemoveZipcode, AddZipcode, LocationLoaded, LocationLoadFialed } from './zipcode.actions';

export { ZipcodeActionTypes } from './zipcode.actions';

export type ZipcodeActions = AddZipcode | RemoveZipcode | LocationLoaded | LocationLoadFialed;
