import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewMomentComponent } from './pages/new-moment/new-moment.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'moment/new', component: NewMomentComponent},
    {path: 'about', component: AboutComponent},
];
