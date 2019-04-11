import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromZipCodes from './zip-codes.reducer';

export interface State {
  zipcodes: fromZipCodes.ZipcodeState;
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: fromZipCodes.zipcodeReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
