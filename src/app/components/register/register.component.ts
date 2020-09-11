import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SignUp } from '../../store/actions/auth.actions';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';
import { selectAuthState } from 'src/app/store/app.states';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    getState: Observable<any>;
    errorMessage: string | null;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store
    ) { this.getState = this.store.select(selectAuthState); }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        this.getState.subscribe((state) => {
            console.log(state, 'state');
            this.errorMessage = state.errorMessage;
          });
    }

    // convenience getter for easy access to form fields
    get f(): any { return this.registerForm.controls; }

    // submit form
    onSubmit(): void {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        const payload = {
            form: this.registerForm.value
          };
        this.store.dispatch(new SignUp(payload));
    }
}
