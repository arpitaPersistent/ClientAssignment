import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let store: MockStore;
  const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ RegisterComponent ],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
