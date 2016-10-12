//viewSchilderWens.component.ts

import {Component, OnInit} from "angular2/core";
import {SchilderWensService} from "./services/schilderwens.service";
import {Klant} from "./model/Klant.model";

@Component({
    selector: 'viewSchilderWens',
    template:`
    <h4>Aantal keer schilderwens = {{aantalKeerSchilderenGemeld}}</h4>
    
    `
})

export class ViewSchilderWens implements OnInit{
    aantalKeerSchilderenGemeld:number=0;
    gebouw:string;

    constructor(private schilderWensService:SchilderWensService){

    }

    ngOnInit() {
        this.schilderWensService.Stream
            .subscribe(
                (aantal:number) => this.aantalKeerSchilderenGemeld=aantal,
                (err)=>console.log("Er is iets fout gegaan bij het melden van de schilderwens."),
                ()=>console.log("Schilderwens is processed.")

            )
    }
}
