import { Component, OnInit, OnDestroy } from '@angular/core';
import { PodcastService } from 'src/app/services/podcast.service';
import { Podcast } from '../../models/podcast';
import { Store } from '@ngrx/store';;
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { DeletePodcast, LoadPodcast } from 'src/app/store/actions/podcast.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  podcasts: Podcast[];
  getState: Observable<any>;
  isAuthenticated: any;
  user: User;
  errorMessage: any;
  successMessage: any;

  constructor(private podcastService: PodcastService,
              private store: Store,
              private router: Router) {
    // this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getAllPodcasts();
  }

  // Get All Podcast
  getAllPodcasts(): void{
    this.store.dispatch(new LoadPodcast());
    this.store.subscribe((res: any) => {
      this.isAuthenticated = res.auth.isAuthenticated;
      this.user = res.auth.user;
      this.errorMessage = res.auth.errorMessage;
      this.podcasts = res.podcast.podcasts;
    });
  }

  // delete podcast
  deletePodcast(id): void {
    if (confirm('Are you sure, you want to delete podcast?')) {
      const payload = {
        id
      };

      this.store.dispatch(new DeletePodcast(payload));
      this.store.subscribe((res: any) => {
        if (res.podcast.successMessage) {
        }
      });
      this.getAllPodcasts();
    }
  }

}
