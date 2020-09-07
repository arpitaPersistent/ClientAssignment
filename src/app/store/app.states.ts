import { createFeatureSelector } from '@ngrx/store';

import * as auth from './reducers/auth.reducers';

import * as podcast from './reducers/podcast.reducers';


export interface AppState {
  authState: auth.State;
  podcastState: podcast.State;
}

export const reducers = {
  auth: auth.reducer,
  podcast: podcast.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
