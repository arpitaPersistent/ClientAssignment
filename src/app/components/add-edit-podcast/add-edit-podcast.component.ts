import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddPodcast, LoadById } from 'src/app/store/actions/podcast.actions';
import { AppState, selectAuthState } from 'src/app/store/app.states';

@Component({
  selector: 'app-add-edit-podcast',
  templateUrl: './add-edit-podcast.component.html',
  styleUrls: ['./add-edit-podcast.component.scss']
})
export class AddEditPodcastComponent implements OnInit, OnDestroy {

  form: FormGroup;
  subscription: any;
  id = '';
  podcast: any;
  submitted = false;
  items = ['Art', 'Comedy  ', 'Action', 'Fiction', 'Music', 'News'];
  getState: Observable<any>;
  isAuthenticated: false;
  user = {sub: null};
  errorMessage = null;
  successMessage = null;


  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private router: Router, private store: Store<AppState>) {
                this.getState = this.store.select(selectAuthState);
               }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.compose(
        [Validators.maxLength(20), Validators.required])],
      desc: [null,  Validators.required],
      categories: [null,  Validators.required],
      userId: [this.user.sub]
    });

    if (this.route.snapshot.paramMap.get('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
    }
    
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.errorMessage = state.errorMessage;
      this.user = state.user;
    });

    this.subscription = this.store.subscribe((res: any) => {
      if (res.podcast.podcast) {
        this.podcast = res.podcast.podcast;
      }
      
      if (this.podcast !== null && this.podcast !== undefined) {
        this.form.patchValue({
          title: this.podcast.title,
          desc: this.podcast.desc,
          categories: this.podcast.categories,
          userId: this.podcast.userId });
      }
    });

    if (this.id) {
      this.store.dispatch(new LoadById({id: this.id}));
    }
  }

  get f(): any { return this.form.controls; }


  /*
  ** Back to the main Page   **
  */
  public back(): void {
    this.router.navigateByUrl('');
  }

   /*
  **  Submit Form   **
  */
  public onSubmit(): void {
    if (this.form.invalid) {
      return;
   }
    this.submitted = true;
    if (!this.form.value ) { return; }

    const payload = {
      form: this.form.value,
      id: this.id
    };
    this.store.dispatch(new AddPodcast(payload));
    this.subscription =  this.store.subscribe((res) => {
      this.router.navigateByUrl('/');
    });
  }

  // Destro Subscription
  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}
