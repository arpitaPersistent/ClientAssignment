import { Podcast } from '../../models/podcast';
import { PodcastActionTypes, All } from '../actions/podcast.actions';


export interface State {
  // if authenticated, there should be a user object
  podcast: Podcast | null;
  podcasts: Podcast[] | null;
  // error message
  successMessage: string | null;
  errorMessage: string | null;
}

export const initialState: State = {
    podcast: null,
    podcasts: [],
    successMessage: null,
    errorMessage: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    
    case PodcastActionTypes.LOAD_SUCCESS: {
      console.log(action.payload);
        return {
          ...state,
          podcasts: action.payload,
        };
      }
    case PodcastActionTypes.LOAD_FAILURE: {
    return {
        ...state,
        errorMessage: 'Not able to get podcast detail.',
    };
    }
    case PodcastActionTypes.LOADBYID_SUCCESS: {
        return {
          ...state,
          podcast: action.payload,
        };
      }
    case PodcastActionTypes.LOADBYID_FAILURE: {
    return {
        ...state,
        errorMessage: 'Not able to get podcast detail.',
    };
    }
    case PodcastActionTypes.ADD_SUCCESS: {
      return {
        ...state,
        podcast: action.payload,
        successMessage: 'Podcast Detail has been added successfully.',
        errorMessage: null
      };
    }
    case PodcastActionTypes.ADD_FAILURE: {
      return {
        ...state,
        errorMessage: 'Podcast Detail has not been added successfully.',
      };
    }
    case PodcastActionTypes.EDIT_SUCCESS: {
      return {
        ...state,
        podcast: action.payload,
        successMessage: 'Podcast Detail has been updated successfully.',
        errorMessage: null
      };
    }
    case PodcastActionTypes.EDIT_FAILURE: {
      return {
        ...state,
        errorMessage: 'Detail has not been updated.'
      };
    }
    case PodcastActionTypes.DELETE_SUCCESS: {
        return {
            ...state,
            successMessage: 'Delete Successfully.'
          };
    }
    case PodcastActionTypes.DELETE_FAILURE: {
        return {
            ...state,
            errorMessage: 'There is an issue while deleting.'
          };
    }
    default: {
      return state;
    }
  }
}
