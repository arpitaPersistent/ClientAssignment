import { TestBed, inject } from '@angular/core/testing';
import { PodcastService } from './podcast.service';
import { Podcast } from '../models/podcast';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

const dummyPodcast: Podcast[] = [
{
  id: 1,
  title: 'The Anatomy of a Great Podcast',
  desc:
    'There is a lot of competition for the attention of podcast listeners, having a great podcast episode title can make the difference between being heard or being passed over. Ultimately, the episode title effects the success of your show.',
  categories: ['Blog'],
  userId: 1
},
{
  id: 2,
  title: 'The Art of Manliness',
  desc:
    'From guiding the Allies to victory in World War II as supreme commander, to steering the ship of state for eight years as one of the countrys least partisan and most popular presidents, few leaders in history have had to make as varied and consequential decisions as Dwight D. Eisenhower.',
  categories: ['Blog'],
  userId: 1
}
];

describe('PodcastService', () => {
  let service: PodcastService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ],
      providers: [ PodcastService ]});
    service = TestBed.inject(PodcastService);
  });

  beforeEach(inject(
    [PodcastService, HttpTestingController],
    (serviceInstance, httpMockInstance) => {
      service = serviceInstance;
      httpMock = httpMockInstance;
    }
  ));

  it('should be created', () => {
    const service = TestBed.inject(PodcastService);
    expect(service).toBeTruthy();
  });

  it('getById: should return a Podcast by given id', () => {
    const service = TestBed.inject(PodcastService);
    service.getbyId('1').subscribe((podcast) => {
      expect(podcast.id).toBe(1);
    });
    const req = httpMock.expectOne(`${environment.apiUrl}/podcasts/1`);
    req.flush(dummyPodcast);
    httpMock.verify();
  });

  it('getAllPodcasts: should return a list of Podcast', () => {
    const service = TestBed.inject(PodcastService);
    service.getAll().subscribe((podcast) => {
      expect(podcast).toBeDefined();
      expect(podcast.length).toBe(2);
      const req = httpMock.expectOne(`${environment.apiUrl}/podcasts/`);
      req.flush(dummyPodcast);
      httpMock.verify();
    });
  });
  it('delete: should return an empty object', () => {
    const service = TestBed.inject(PodcastService);
    service.deletePodcast('1').subscribe((podcast) => {
      expect(podcast).toBeDefined();
      const req = httpMock.expectOne(`${environment.apiUrl}/podcasts/`);
      req.flush(dummyPodcast);
      httpMock.verify();
    });
  });
  it('Add: should add a podcast and return the created podcast', () => {
    const podcastTest = {
      title: 'test -added',
      desc: 'test - added',
      userId: 1,
      category: ['test - added'],
    };
    const service = TestBed.inject(PodcastService);
    service.addEdit(podcastTest).subscribe((podcast) => {
      expect(podcast).toBeDefined();
      expect(podcast.length).toBe(1);
      const req = httpMock.expectOne(`${environment.apiUrl}/podcasts/`);
      req.flush(dummyPodcast);
      httpMock.verify();
    });
  });
  it('update: should update a podcast and return the updated podcast', () => {
    const podcastTest = {
      title: 'test -added',
      desc: 'test - added',
      userId: 1,
      category: ['test - added'],
    };
    const service = TestBed.inject(PodcastService);
    service.addEdit(podcastTest,'3').subscribe((podcast) => {
      expect(podcast).toBeDefined();
      expect(podcast.length).toBe(1);
      const req = httpMock.expectOne(`${environment.apiUrl}/podcasts/`);
      req.flush(dummyPodcast);
      httpMock.verify();
    });
  });
});
