
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPodcastComponent } from './add-edit-podcast.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule} from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AddEditPodcastComponent', () => {
  let component: AddEditPodcastComponent;
  let store: MockStore;
  const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };
  
  let fixture: ComponentFixture<AddEditPodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      declarations: [ AddEditPodcastComponent ],
      providers: [provideMockStore({initialState})],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

});

