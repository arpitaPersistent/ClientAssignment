import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

//import Button from './button.component';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AddEditPodcastComponent } from './components/add-edit-podcast/add-edit-podcast.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { reducers } from './store/app.states';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { PodcastEffects } from './store/effects/podcast.effects';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export default {
  title: 'Podcast/App',
  component: AppComponent,
  decorators: [
    moduleMetadata({
        declarations: [
            LoginComponent,
            RegisterComponent,
            HeaderComponent,
            HomeComponent,
            AddEditPodcastComponent,
        ],
        imports: [
        BrowserModule,
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        CommonModule,
        TagInputModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers, {}),
        EffectsModule.forRoot([AuthEffects, PodcastEffects]),
        ],
        providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const app = Template.bind({});
app.args = {};
