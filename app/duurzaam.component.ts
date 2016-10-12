//duurzaam.component.ts

import {Component, OnInit} from "angular2/core";
import {SchilderWensService} from "./services/schilderwens.service";
import {Klant} from "./model/Klant.model";
import {ViewSchilderWens} from "./viewSchilderWens.component";

@Component({
    selector: 'duurzaam',
    template:`
    <h2>Hier een mooi verhaal over duurzaam schilderen</h2>

    <h3> Eerst even aangeven hoevaak er een schilderwens is:</h3>
    Aantal keer schilderwens = {{aantalKeerSchilderenGemeld}}<br>
    

    `,
    directives: [ViewSchilderWens]
})

export class DuurzaamComponent implements OnInit{
    aantalKeerSchilderenGemeld:number=15;
    gebouw:string;
    // aantal:number = schilderWensService.aantal;
    sws:SchilderWensService;

    constructor(private schilderWensService:SchilderWensService){

    }


    ngOnInit() {
        this.schilderWensService.Stream
            .subscribe(
                (aantal:number) => {this.aantalKeerSchilderenGemeld=aantal;
                    console.log("Subscribe is aangeroepen op de duurzaam page " + aantal);},
                (err)=>console.log("Er is iets fout gegaan bij het melden van de schilderwens."),
                ()=>console.log("Schilderwens is processed.")

            )
    }
}
