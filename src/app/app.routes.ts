import { Routes } from '@angular/router';
import { HomepageComponent } from './COMPONENTS/homepage/homepage.component';
import { AboutComponent } from './COMPONENTS/about/about.component';

export const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
];
