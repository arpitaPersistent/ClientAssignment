import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

//import Button from './button.component';
import { RegisterComponent } from './register.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { ThemeService } from '../../services/theme.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'Podcast/Register',
  component: RegisterComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule,
        StoreModule.forRoot(reducers, {})],
      providers: [ThemeService]
    }),
  ],
} as Meta;

const Template: Story<RegisterComponent> = (args: RegisterComponent) => ({
  component: RegisterComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
