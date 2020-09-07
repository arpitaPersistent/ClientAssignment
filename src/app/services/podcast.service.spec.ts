import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PodcastService } from './podcast.service';

describe('PodcastService', () => {
  let service: PodcastService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientModule ],
      providers: [ PodcastService ]});
    service = TestBed.inject(PodcastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Add podcast', () => {
    const podcast = {
      title: 'test',
      desc: 'test',
      categories: ['Art', 'Music'],
      userId: 1
    };
    service.addEdit(podcast);
    expect(service.addEdit(podcast)).toBeTruthy();
  });

  it('Get All podcasts', () => {
    expect(service.getAll()).toBeTruthy();
  });
  
  it('Get podcasts by id', () => {
    expect(service.getbyId('1')).toBeTruthy();
  });

  it('Delete podcast by id', () => {
    expect(service.deletePodcast('1')).toBeTruthy();
  });

  
});
