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

  podcastForm: FormGroup;
  subscription: any;
  id = '';
  podcast: any;
  submitted = false;
  items = ['Art', 'Comedy  ', 'Action', 'Fiction', 'Music', 'News'];
  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;
  successMessage = null;


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute, private router: Router, private store: Store<AppState>) {
                this.getState = this.store.select(selectAuthState);
                this.id = this.route.snapshot.paramMap.get('id');
               }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.errorMessage = state.errorMessage;
      this.user = state.user;
    });
    this.podcastForm = this.fb.group({
      title: [null, Validators.compose(
        [Validators.maxLength(20), Validators.required])],
      desc: [null,  Validators.required],
      categories: [null,  Validators.required],
      userId: [this.user.sub]
    });

    this.subscription = this.store.subscribe((res: any) => {
      this.podcast = res.podcast.podcast;
      if (this.podcast !== null) {
        this.podcastForm.patchValue({
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

  get f(): any { return this.podcastForm.controls; }


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
    if (this.podcastForm.invalid) {
      return;
   }
    this.submitted = true;
    if (!this.podcastForm.value ) { return; }

    const payload = {
      form: this.podcastForm.value,
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
