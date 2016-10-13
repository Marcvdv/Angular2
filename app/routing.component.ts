//routing.component.ts

import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {RouteParams} from 'angular2/router';
import {Klant} from "./model/Klant.model";


@Component({
    selector: 'routing',
    templateUrl: 'app/routing.template.html'
   })

export class RoutingComponent implements OnInit{
    name:string;
    id:number;
    ontvangen:string=" ";

    constructor(private router:Router, private routeParams:RouteParams) {

    }
   	ngOnInit() {
		this.name = this.routeParams.get('name');
		this.id = parseInt(this.routeParams.get('id'));
        console.log("ngOnInit is doorlopen "+this.name+" "+this.id);
    }

    terugNaarHome(){
        this.router.navigate(['Home']);
    }

    getLocalStorage(){
        this.ontvangen = localStorage.getItem("key1");
    
  
}
