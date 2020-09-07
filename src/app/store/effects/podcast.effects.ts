import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Actions, ofType, Effect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as podcastActions from '../actions/podcast.actions';
import { Observable, of } from 'rxjs';

import { PodcastService } from '../../services/podcast.service';
import {
  PodcastActionTypes
} from '../actions/podcast.actions';


@Injectable()
export class PodcastEffects {
  constructor(
    private actions: Actions,
    private podcastService: PodcastService,
    private router: Router,
  ) {}

  @Effect()
  AddPodcast: any = this.actions.pipe(
    ofType(PodcastActionTypes.ADD),
    mergeMap((action: podcastActions.AddPodcast) =>
    this.podcastService.addEdit(action.payload.form, action.payload.id)
        .pipe(
          map((res) =>  new podcastActions.AddPodcastSuccess(res)
          ), catchError((error) => {
              return of(new podcastActions.AddPodcastFailure(error));
            }
        ))
  ));

  @Effect({ dispatch: false })
  AddPodcastSuccess: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.ADD_SUCCESS),
    map((user) => {
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  AddPodcastFailure: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.ADD_FAILURE)
  );

  @Effect()
  EditPodcast: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.EDIT),
    mergeMap((action: podcastActions.EditPodcast) =>
    this.podcastService.addEdit(action.payload.form, action.payload.id)
    .pipe(
      map((res) => new podcastActions.AddPodcastSuccess(res)
      ), catchError((error) => {
          return of(new podcastActions.AddPodcastFailure(error));
        }
    ))
  ));

  @Effect({ dispatch: false })
  EditPodcastSuccess: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.EDIT_SUCCESS),
    map((user) => {
      this.router.navigateByUrl('/login');
    })
  );

  @Effect({ dispatch: false })
  EditPodcastFailure: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.EDIT_FAILURE)
  );

  @Effect({ dispatch: true})
  DeletePodcast: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.DELETE),
    mergeMap((action: podcastActions.DeletePodcast) =>
        this.podcastService.deletePodcast(action.payload.id)
        .pipe(
          map((data) => new podcastActions.DeletePodcastSuccess(data)
          ), catchError((error) => {
              return of(new podcastActions.DeletePodcastFailure(error));
            }
        ))
    ));

  @Effect({ dispatch: false })
    DeletePodcastSuccess: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.DELETE_SUCCESS),
    map((data) =>
      new podcastActions.LoadPodcast()
    )
  );

  @Effect({ dispatch: false })
  DeletePodcastFailure: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.DELETE_FAILURE)
  );

  @Effect({ dispatch: true })
  LoadPodcast: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.LOAD),
    mergeMap((action: podcastActions.LoadPodcast) =>
        this.podcastService.getAll().pipe(
          map((data) => new podcastActions.LoadPodcastSuccess(data)
          ), catchError((error) => {
              return of(new podcastActions.LoadPodcastFailure(error));
            }
        ))
    ));

  @Effect({ dispatch: true })
  LoadPodcastById: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.LOADBYID),
    mergeMap((action: podcastActions.LoadById) =>
        this.podcastService.getbyId(action.payload.id).pipe(
          map((data) => new podcastActions.LoadByIdSuccess(data)
          ), catchError((error) => {
              return of(new podcastActions.LoadByIdFailure(error));
            }
        ))
    ));

  @Effect({ dispatch: false })
    LoadPodcastByIdSuccess: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.LOADBYID_SUCCESS)
  );

  @Effect({ dispatch: false })
  LoadPodcastByIdFailure: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.LOADBYID_FAILURE)
  );

  @Effect({ dispatch: false })
    LoadPodcastSuccess: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.LOAD_SUCCESS),
    map((user) => {
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LoadPodcastFailure: Observable<any> = this.actions.pipe(
    ofType(PodcastActionTypes.LOAD_FAILURE)
  );
}
