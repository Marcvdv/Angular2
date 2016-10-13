//from: https://github.com/marcj/angular2-localstorage
//localStorage.component.ts

import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {RouteParams} from 'angular2/router';
import {Klant} from "./model/Klant.model";


@Component({
    selector: 'localstorage',
    template:`
    <div class = "row row2">
        <div class="col-md-6">
            <h2>Session en LocalStorage testen</h2><br>
            <input type="text" class="input-lg"
		        placeholder = "Nieuwe waarde..."
                #txtWaarde
		        (change)="waardeOpslaan(txtWaarde.value)"
            >
            Waarde: {{waarde}}
            <br>

            <button type="button" class="btn btn-primary" (click)="setLocalStorage()">SetButton</button>
            Verstuurd: {{verstuurd}}  
            <button type="button" class="btn btn-primary" (click)="getLocalStorage()"> GetButton </button>
            Resultaat opgehaald: {{ontvangen}}
        </div>
        <div class="col-md-6">
            <p>De tweede kolom:</p>
            <button type="button" class="btn btn-primary" (click)="terugNaarHome()">Terug naar Home</button>
        </div>
    </div>
    ` 
    })

export class LocalStorageComponent{
    verstuurd:string=" ";
    ontvangen:string=" ";
    waarde:string=" ";
   
    constructor(private router:Router, private routeParams:RouteParams) {

    }

    waardeOpslaan(w:string){
        this.waarde=w;
    }
   
    setLocalStorage(){
        this.verstuurd = this.waarde;
        localStorage.setItem("key1",this.waarde);
    }
    
    getLocalStorage(){
        this.ontvangen = localStorage.getItem("key1");

    }

        terugNaarHome(){
        this.router.navigate(['Home']);
    }
  
}
