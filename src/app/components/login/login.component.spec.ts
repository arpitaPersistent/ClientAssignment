import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule} from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FormBuilder } from '@angular/forms';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let store: MockStore;
  const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

 
});
