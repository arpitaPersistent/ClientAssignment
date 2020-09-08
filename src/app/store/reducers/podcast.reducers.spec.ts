import { Podcast } from '../../models/podcast';
import { State, reducer } from '../reducers/podcast.reducers';
import { AddPodcast, AddPodcastSuccess, AddPodcastFailure, DeletePodcastSuccess,
     DeletePodcastFailure, DeletePodcast, EditPodcastFailure, EditPodcastSuccess, EditPodcast, LoadPodcast, LoadPodcastSuccess, LoadPodcastFailure, LoadById, LoadByIdSuccess, LoadByIdFailure } from '../actions/podcast.actions';


const initialState: State = {
    podcast: null,
    podcasts: [],
    successMessage: null,
    errorMessage: null,
};
const testPodcast: Podcast = {
    id:1,
    title:"test",
    desc: "test",
    categories:['art'],
    userId: 1
};

describe('action not given', () => {
    it('should return the default state when no action given', () => {
        const passedState: State = {
            podcast: null,
            podcasts: [],
            successMessage: null,
            errorMessage: null
        };
        expect(reducer(passedState, Object.assign({}))).toEqual(passedState);
    });
});

describe('LoadPodcast', () => {
    it('should return added podcast', () => {
        const podcastAction = new LoadPodcast();
        const passedState: State = {
            podcast: null,
            podcasts: null,
            successMessage: null,
            errorMessage: null
        };
        expect(reducer(passedState, podcastAction)).toEqual(passedState);
    });
});


describe('LoadPodcastSuccess', () => {
    it('should return added podcast', () => {
        const podcastAction = new LoadPodcastSuccess(testPodcast);
        const passedState: State = {
            podcast: null,
            podcasts: [testPodcast],
            successMessage: null,
            errorMessage: null
        };
        expect(reducer(passedState, podcastAction)).toEqual(passedState);
    });
});


describe('LoadPodcastFailure', () => {
    it('should return added podcast', () => {
        const podcastAction = new LoadPodcastFailure(testPodcast);
        const passedState: State = {
            podcast: null,
            podcasts: [],
            successMessage: null,
            errorMessage: 'Not able to get podcast detail.',
        };
        expect(reducer(passedState, podcastAction)).toEqual(passedState);
    });
});

describe('LoadById', () => {
    it('should return added podcast', () => {
        const podcastAction = new LoadById(testPodcast);
        const passedState: State = {
            podcast: testPodcast,
            podcasts: [],
            successMessage: null,
            errorMessage: null,
        };
        expect(reducer(passedState, podcastAction)).toEqual(passedState);
    });
});

describe('LoadByIdSuccess', () => {
    it('should return added podcast', () => {
        const podcastAction = new LoadByIdSuccess(testPodcast);
        const passedState: State = {
            podcast: testPodcast,
            podcasts: [],
            successMessage: null,
            errorMessage: null
        };
        expect(reducer(passedState, podcastAction)).toEqual(passedState);
    });
});


describe('LoadByIdFailure', () => {
    it('should return added podcast', () => {
        const podcastAction = new LoadByIdFailure(testPodcast);
        const passedState: State = {
            podcast: null,
            podcasts: [],
            successMessage: null,
            errorMessage: 'Not able to get podcast detail.',
        };
        expect(reducer(passedState, podcastAction)).toEqual(passedState);
    });
});

describe('AddPodcastSuccess', () => {
    it('should return the details of validated entry after successful', () => {
        const podcastAction = new AddPodcastSuccess(testPodcast);
        const passedState: State = {
            podcast: testPodcast,
            podcasts: [],
            successMessage: 'Podcast Detail has been added successfully.',
            errorMessage: null,
        };
        expect(reducer(passedState, podcastAction)).toEqual(passedState);
    });
});

describe('AddPodcastFailure', () => {
    it('should return the message stating that the the failure', () => {
        const loginAction = new AddPodcastFailure(testPodcast);
        const passedState: State = {
            podcast: null,
            podcasts: [],
            successMessage: null,
            errorMessage: 'Podcast Detail has not been added successfully.',
        };
        expect(reducer(passedState, loginAction)).toEqual(passedState);
    });
});

describe('EditPodcast', () => {
    it('should return added podcast', () => {
        const podcastAction = new EditPodcast(testPodcast);
        const passedState: State = {
            podcast: null,
            podcasts: [testPodcast],
            successMessage: null,
            errorMessage: null
        };
        expect(reducer(passedState, podcastAction)).toEqual(passedState);
    });
});

describe('EditPodcastSuccess', () => {
    it('should return the details of validated entry after successful', () => {
        const podcastAction = new EditPodcastSuccess(testPodcast);
        const passedState: State = {
            podcast: testPodcast,
            podcasts: [],
            successMessage: 'Podcast Detail has been updated successfully.',
            errorMessage: null,
        };
        expect(reducer(passedState, podcastAction)).toEqual(passedState);
    });
});

describe('EditPodcastFailure', () => {
    it('should return the message stating that the the failure', () => {
        const editPodcastFailure = new EditPodcastFailure(testPodcast);
        const passedState: State = {
            podcast: null,
            podcasts: [],
            successMessage: null,
            errorMessage:  'Detail has not been updated.',
        };
        expect(reducer(passedState, editPodcastFailure)).toEqual(passedState);
    });
});

describe('DeletePodcast', () => {
    it('should return the message stating that the credentials are invalid', () => {
        const deletePodcast = new DeletePodcast(testPodcast);
        const passedState: State = {
            podcast: null,
            podcasts: [],
            successMessage: null,
            errorMessage: null,
        };
        expect(reducer(passedState, deletePodcast)).toEqual(passedState);
    });
});

describe('DeletePodcastFailure', () => {
    it('should return the message stating that the credentials are invalid', () => {
        const deletePodcastFailure = new DeletePodcastFailure(testPodcast);
        const passedState: State = {
            podcast: null,
            podcasts: [],
            successMessage: null,
            errorMessage: "There is an issue while deleting."
        };
        expect(reducer(passedState, deletePodcastFailure)).toEqual(passedState);
    });
});

describe('DeletePodcastSuccess', () => {
    it('should return the message stating that the credentials are invalid', () => {
        const deletePodcastSuccess = new DeletePodcastSuccess(testPodcast);
        const passedState: State = {
            podcast: null,
            podcasts: [],
            successMessage: "Delete Successfully.",
            errorMessage: null,
        };
        expect(reducer(passedState, deletePodcastSuccess)).toEqual(passedState);
    });
});