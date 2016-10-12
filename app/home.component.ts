// home.component.ts - applicatie met routing
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {AppComponent} from "./app.component";
import {DuurzaamComponent} from "./duurzaam.component";
import {KlantService} from "./services/klant.service";
import {SchilderWensService} from "./services/schilderwens.service";
import {RoutingComponent} from "./routing.component";

@Component({
	selector  : 'home-component',
	template  : `
		<h2>Gebouwonderhoud - goed en duurzaam</h2>
		  <a [routerLink]="['Home']" class="btn btn-primary">Overzicht Klanten</a>
		  <a [routerLink]="['Duurzaam']" class="btn btn-primary">Duurzaam Schilderen</a>
		  <a [routerLink]="['Routing']" class="btn btn-primary">Routing testen</a>
		  <a [routerLink]="['RoutingMetParam',{name:paramNaam,id:paramId}]" class="btn btn-primary">Routing met param</a>
		  <hr>
		  <!-- Hier dynamisch componenten tonen -->
		  <router-outlet></router-outlet>
		  <!-- hieronder eventueel footer, disclaimer, enzovoort -->
		  `,
	// providers:[KlantService, SchilderWensService],
	providers:[KlantService],
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path: '/', name: 'root', redirectTo: ['Home']},
	{path: '/home', name: 'Home', component: AppComponent},
	{path: '/duurzaam', name: 'Duurzaam', component: DuurzaamComponent},
	{path: '/routing', name: 'Routing', component: RoutingComponent},
	{path: '/routing/:name/:id', name: 'RoutingMetParam', component: RoutingComponent}

])

export class HomeComponent {
	paramNaam:string;
	paramId:number;
	constructor(private klantService:KlantService) {
		this.paramNaam = "Groningen";
		this.paramId = 5;
		
	}

}
