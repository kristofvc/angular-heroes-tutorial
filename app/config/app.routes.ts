import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from '../components/dashboard.component';
import { HeroesComponent } from '../components/heroes.component';
import { HeroDetailComponent } from '../components/hero-detail.component';


const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];