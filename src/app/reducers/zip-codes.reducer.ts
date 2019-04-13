import { Action } from '@ngrx/store';
import { ZipcodeActionTypes, ZipcodeActions } from '../actions';
import { Zipcode } from '../zipcode/api';
import { RemoveZipcode, AddZipcode, LocationLoaded, LocationLoadFialed } from '../actions/zipcode.actions';
import { zip } from 'rxjs/operators';

export interface ZipcodeState {
  zipcodes: Array<Zipcode>;
}

export const initialState: ZipcodeState = {
  zipcodes: []
};

const removeZipcodeBiFn = (state: ZipcodeState, id: string) => {
  return { ...state, zipcodes: state.zipcodes.filter(z1 => id === z1.id) };
};


const updateErrorMsg = (state: ZipcodeState, id: string, error: any) => {
  return { ...state, zipcodes: state.zipcodes.map(z1 => (id === z1.id) ? new Zipcode(id, {errorMessage: error})  : z1)};
};

const updateZipcodeBiFn = (state: ZipcodeState, newValue: Zipcode) => {
  return { ...state, zipcodes: state.zipcodes.map(z1 => newValue.id !== z1.id ? z1 : newValue) };
};

const upsertZipcodeBiFn = (state: ZipcodeState, zipcode: Zipcode) => {
  if (state.zipcodes.some(z3 => zipcode.id === z3.id)) {
    return updateZipcodeBiFn(state, zipcode);
  }
  return {
    ...state, zipcodes: [...state.zipcodes, zipcode]
  };
};

export function zipcodeReducer(state = initialState, action: ZipcodeActions): ZipcodeState {
  switch (action.type) {
    case ZipcodeActionTypes.AddZipcode: return upsertZipcodeBiFn(state, (<AddZipcode>action).zipcode);
    case ZipcodeActionTypes.RemoveZipcode: return removeZipcodeBiFn(state, (<RemoveZipcode>action).zipcode);
    case ZipcodeActionTypes.LocationLoaded: return updateZipcodeBiFn(state, (<LocationLoaded>action).loaction);
    case ZipcodeActionTypes.LocationLoadFailed:
    return updateErrorMsg(state, (<LocationLoadFialed>action).zipcode, (<LocationLoadFialed>action).error);
    default:
      return state;
  }
}
