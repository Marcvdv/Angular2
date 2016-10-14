//from: https://github.com/marcj/angular2-localstorage
//localStorage.component.ts
// -----
//Author: Marcvdv


import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {RouteParams} from 'angular2/router';
import {Klant} from "./model/Klant.model";


@Component({
    selector: 'localstorage',
    templateUrl:'./localStorage.template.html' 
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
