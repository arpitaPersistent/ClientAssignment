import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthState } from '../../store/app.states';
import { LogOut } from '../../store/actions/auth.actions';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() selTheme: EventEmitter<boolean> = new EventEmitter();

  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;
  selectedTheme = false;

  constructor(private store: Store, private themeService: ThemeService)
  {
    this.getState = this.store.select(selectAuthState); 
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }
  // Logout
  logout(): void {
    this.store.dispatch(new LogOut());
  }

  // Theme change
  sendVal(event: any): void {
    if (event && event.keyCode  === 13 || !event) {
      this.selectedTheme = !this.selectedTheme;
      if (this.selectedTheme) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
      // this.selTheme.emit(this.selectedTheme);
    }
  }
}
