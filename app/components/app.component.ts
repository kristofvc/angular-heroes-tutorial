import {Component, ApplicationRef} from '@angular/core';
import {ROUTER_DIRECTIVES, Router, NavigationEnd} from '@angular/router';

import '../config/rxjs-extensions';

import { HeroService } from '../services/hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  	selector: 'my-app',
  	template: `
  		<h1>{{title}}</h1>
  		<nav>
			<a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
			<a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
  		</nav>
  		<router-outlet></router-outlet>
  	`,
	styleUrls: ['app/components/styles/app.component.css'],
  	directives: [ROUTER_DIRECTIVES],
  	providers: [HeroService],
	precompile: [DashboardComponent, HeroesComponent, HeroDetailComponent]
})
export class AppComponent{
  	title = 'Tour of Heroes';

	// Fuck my life
	constructor(private applicationRef: ApplicationRef, private router: Router) {
		if(this.isMac()) {
			router.events.subscribe(ev => {
				if(ev instanceof NavigationEnd) {
					setTimeout(() => {
						applicationRef.zone.run(() => applicationRef.tick())
					}, 500)
				}
			})
		}
	}

	isMac() {
		if(navigator.userAgent.indexOf('Mac') > -1) {
			return true
		}
		return false
	}
}