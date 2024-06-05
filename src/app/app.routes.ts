import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewMomentComponent } from './pages/new-moment/new-moment.component';
import { MomentComponent } from './pages/moment/moment.component';
import { EditMomentComponent } from './pages/edit-moment/edit-moment.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'moments/new', component: NewMomentComponent},
    {path: 'moments/edit/:id', component: EditMomentComponent},
    {path: 'moments/:id', component: MomentComponent},
    {path: 'about', component: AboutComponent},
];
