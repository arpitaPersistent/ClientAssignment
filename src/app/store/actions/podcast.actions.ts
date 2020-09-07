import { Action } from '@ngrx/store';


export enum PodcastActionTypes {
  ADD = '[Podcast] Add',
  ADD_SUCCESS = '[Podcast] Add Success',
  ADD_FAILURE = '[Podcast] Add Failure',
  EDIT = '[Podcast] Edit',
  EDIT_SUCCESS = '[Podcast] Edit Success',
  EDIT_FAILURE = '[Podcast] Edit Failure',
  DELETE = '[Podcast] Delete',
  DELETE_SUCCESS = '[Podcast] Delete Success',
  DELETE_FAILURE = '[Podcast] Delete Failure',
  LOAD = '[Podcast] Load',
  LOAD_SUCCESS = '[Podcast] Load Success',
  LOAD_FAILURE = '[Podcast] Load Failure',
  LOADBYID = '[Podcast] Load By Id',
  LOADBYID_SUCCESS = '[Podcast] Load By Id Success',
  LOADBYID_FAILURE = '[Podcast] Load By Id Failure',
}

export class AddPodcast implements Action {
  readonly type = PodcastActionTypes.ADD;
  constructor(public payload: any) {}
}

export class AddPodcastSuccess implements Action {
  readonly type = PodcastActionTypes.ADD_SUCCESS;
  constructor(public payload: any) {}
}

export class AddPodcastFailure implements Action {
  readonly type = PodcastActionTypes.ADD_FAILURE;
  constructor(public payload: any) {}
}

export class EditPodcast implements Action {
  readonly type = PodcastActionTypes.EDIT;
  constructor(public payload: any) {}
}

export class EditPodcastSuccess implements Action {
  readonly type = PodcastActionTypes.EDIT_SUCCESS;
  constructor(public payload: any) {}
}

export class EditPodcastFailure implements Action {
  readonly type = PodcastActionTypes.EDIT_FAILURE;
  constructor(public payload: any) {}
}

export class DeletePodcast implements Action {
  readonly type = PodcastActionTypes.DELETE;
  constructor(public payload: any) {}
}

export class DeletePodcastSuccess implements Action {
    readonly type = PodcastActionTypes.DELETE_SUCCESS;
    constructor(public payload: any) {}
  }

export class DeletePodcastFailure implements Action {
    readonly type = PodcastActionTypes.DELETE_FAILURE;
    constructor(public payload: any) {}
  }

export class LoadPodcast implements Action {
    readonly type = PodcastActionTypes.LOAD;
  }

export class LoadPodcastSuccess implements Action {
      readonly type = PodcastActionTypes.LOAD_SUCCESS;
      constructor(public payload: any) {}
    }

export class LoadPodcastFailure implements Action {
      readonly type = PodcastActionTypes.LOAD_FAILURE;
      constructor(public payload: any) {}
    }

export class LoadById implements Action {
        readonly type = PodcastActionTypes.LOADBYID;
        constructor(public payload: any) {}
      }
export class LoadByIdSuccess implements Action {
        readonly type = PodcastActionTypes.LOADBYID_SUCCESS;
        constructor(public payload: any) {}
}
export class LoadByIdFailure implements Action {
            readonly type = PodcastActionTypes.LOADBYID_FAILURE;
            constructor(public payload: any) {}
          }

export type All =
  | AddPodcast
  | AddPodcastSuccess
  | AddPodcastFailure
  | EditPodcast
  | EditPodcastSuccess
  | EditPodcastFailure
  | DeletePodcast
  | DeletePodcastSuccess
  | DeletePodcastFailure
  | LoadPodcast
  | LoadById
  | LoadByIdSuccess
  | LoadByIdFailure
  | LoadPodcastSuccess
  | LoadPodcastFailure;
