import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

//import Button from './button.component';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { ThemeService } from '../../services/theme.service';
import { RouterTestingModule } from '@angular/router/testing';
const podcastsList = [
{
  title: 'Non-Descript Podcast of Things',
  desc: "Jesse's Non-Descript Podcast of Things",
  categories: [
    'Fiction'
  ],
  userId: '3',
  id: 1
},
{
  title: 'Valerie In Toronto',
  desc: 'A personal, sometimes-profane primer on things particular to Toronto and Canada, from a radio refugee born in the USA but Canadian by choice.',
  categories: [
    'Action',
    'Fiction'
  ],
  "userId": "3",
  "id": 2
}];
export default {
  title: 'Podcast/Home',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      imports: [StoreModule.forRoot(reducers, {}), RouterTestingModule],
      providers: [ThemeService]
    }),
  ],
} as Meta;

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  component: HomeComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  podcasts: podcastsList
};

