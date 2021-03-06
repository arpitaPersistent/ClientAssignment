import { User } from '../../models/user';
import { State, reducer } from './auth.reducers';
import { LogIn, LogInSuccess, LogInFailure, SignUp, SignUpSuccess, SignUpFailure, LogOut } from '../actions/auth.actions';

const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null,
};
const testUser: User = {
    email: 'testingT@gmail.com'
};
const validatedUser: User = {
    email: 'testingT@gmail.com'
};
const invalidUser: User = {
    email: 'testingT@gmail.com'
};

describe('action not given', () => {
    it('should return the default state when no action given', () => {
        const passedState: State = {
            isAuthenticated: true,
            user: null,
            errorMessage: null,
        };
        expect(reducer(passedState, Object.assign({}))).toEqual(passedState);
    });
});

describe('LogIn', () => {
    it('should return the user post verifying the user credentials', () => {
        const loginAction = new LogIn(testUser);
        const passedState: State = {
            isAuthenticated: true,
            user: testUser,
            errorMessage: null,
        };
        expect(reducer(passedState, loginAction)).toEqual(passedState);
    });
});

describe('LogInSuccess', () => {
    it('should return the details of validated user after login successful', () => {
        const loginAction = new LogInSuccess(testUser);
        const passedState: State = {
            isAuthenticated: true,
            user: validatedUser,
            errorMessage: null,
        };
        expect(reducer(passedState, loginAction)).toEqual(passedState);
    });
});

describe('LogInFailure', () => {
    it('should return the message stating that the credentials are invalid', () => {
        const loginAction = new LogInFailure(testUser);
        const passedState: State = {
            isAuthenticated: null,
            user: invalidUser,
            errorMessage: undefined,
        };
        expect(reducer(passedState, loginAction)).toEqual(passedState);
    });
});

describe('registerSuccess', () => {
    it('should return the message stating that the credentials are invalid', () => {
        const SignUpSuccessAction = new SignUpSuccess(testUser);
        const passedState: State = {
            isAuthenticated: true,
            user: testUser,
            errorMessage: null,
        };
        expect(reducer(passedState, SignUpSuccessAction)).toEqual(passedState);
    });
});

describe('registerFailure', () => {
    it('should return the message stating that the credentials are invalid', () => {
        const SignUpSuccessAction = new SignUpFailure(testUser);
        const passedState: State = {
            isAuthenticated: true,
            user: testUser,
            errorMessage: undefined,
        };
        expect(reducer(passedState, SignUpSuccessAction)).toEqual(passedState);
    });
});

describe('Logout', () => {
    it('should return the message stating that the credentials are invalid', () => {
        const logoutAction = new LogOut();
        const passedState: State = {
            isAuthenticated: false,
            user: testUser,
            errorMessage: 'That email is already in use.',
        };
        expect(reducer(initialState, logoutAction)).toEqual(initialState);
    });
});