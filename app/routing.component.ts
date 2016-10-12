//routing.component.ts

import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {RouteParams} from 'angular2/router';
import {Klant} from "./model/Klant.model";


@Component({
    selector: 'routing',
    template:`
    <div class = "row row2">
        <div class="col-md-6">
            <h2>Hier kan je naar toe routen via de hoofdpagina</h2>
            <div *ngIf="name">
                De meegegeven parameters zijn:<br>
                name = {{name}}<br>
                id = {{id}}
            </div>
        </div>
        <div class="col-md-6">
            <p>De tweede kolom:</p>
            <button>Terug naar Home</button>
            <button type="button" class="btn btn-primary" (click)="terugNaarHome()">Terug naar Home</button>
        </div>
    </div>
    ` 
    })

export class RoutingComponent implements OnInit{
    name:string;
    id:number;
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
    
  
}
