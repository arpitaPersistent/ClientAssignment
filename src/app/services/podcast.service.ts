import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Podcast } from '../models/podcast';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor(private http: HttpClient) { }

  // Add and update podcast details
  addEdit(podcast: Podcast, id = ''): any {
    if (id) {
      return this.http.put(`${environment.apiUrl}/podcasts/${id}`, podcast);
    }
    return this.http.post(`${environment.apiUrl}/podcasts/`, podcast);
  }

  // get All podcasts
  getAll(): any {
    return this.http.get(`${environment.apiUrl}/podcasts/`);
  }

  // delete podcasts by id
  deletePodcast(id: string): any {
    return this.http.delete(`${environment.apiUrl}/podcasts/${id}`);
  }

  // get podcasts by id
  getbyId(id: string): any {
    return this.http.get(`${environment.apiUrl}/podcasts/${id}`);
  }
}
