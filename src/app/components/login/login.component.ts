import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState  } from '../../store/app.states';
import { LogIn } from '../../store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;

    user: User = new User();
    getState: Observable<any>;
    errorMessage: string | null;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private store: Store<AppState>
    ) {
        this.getState = this.store.select(selectAuthState);
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.getState.subscribe((state) => {
            this.errorMessage = state.errorMessage;
            console.log(this.errorMessage);
          });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f(): any { return this.loginForm.controls; }

    // submit function
    onSubmit(): any {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        const payload = {
            email: this.f.email.value,
            password: this.f.password.value
          };
        this.store.dispatch(new LogIn(payload));
    }
}
