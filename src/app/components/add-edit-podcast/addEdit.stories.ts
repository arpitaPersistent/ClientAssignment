import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

//import Button from './button.component';
import { AddEditPodcastComponent } from './add-edit-podcast.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { ThemeService } from '../../services/theme.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const podcastsList =   {
    title: 'Non-Descript Podcast of Things',
    desc: "Jesse's Non-Descript Podcast of Things",
    categories: [
      'Fiction'
    ],
    userId: '3',
    id: 1
  };

export default {
  title: 'Podcast/AddEdit',
  component: AddEditPodcastComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, BrowserAnimationsModule, TagInputModule,
        StoreModule.forRoot(reducers, {})],
      providers: []
    }),
  ],
} as Meta;

const Template: Story<AddEditPodcastComponent> = (args: AddEditPodcastComponent) => ({
  component: AddEditPodcastComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const Edit = Template.bind({});
Edit.args = {
  id: '1',
  podcast: podcastsList
};
