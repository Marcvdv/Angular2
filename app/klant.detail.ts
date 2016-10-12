//klant.detail.ts
import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Klant} from './model/klant.model';
import {SchilderWensService} from "./services/schilderwens.service"

@Component({
	selector   : 'klant-detail',
	template:`
        <ul class="list-group">
            <li class="list-group-item">Naam: {{klant.name}}</li>
            <li class="list-group-item">Straat: {{klant.straat}}</li>
            <li class="list-group-item">Plaats: {{klant.plaats}}</li>
            <li class="list-group-item">DebNr: {{klant.debiteurnummer}}</li>
        </ul>
        <button (click)="rate(1)">+1</button>
        <button (click)="rate(-1)">-1</button>
        <span class="badge">  Waardering veranderen met @Output, dit is een badge</span>
        <br>
        <h4>Hier wordt de event bus gebruikt, met observables en observers.<br>
            Als je op deze button klikt, stuur je op dat je vindt dat er geschilderd moet worden:</h4>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="#gebouw of klant.gebouwen" (click)="schilderStem(1)">{{gebouw}} <span class="badge">Deze schilderen</span></li>
        </ul>
    `   
})

export class KlantDetail {
    @Input() klant:Klant;
    @Output() rating:EventEmitter<number> = new EventEmitter();
    schilderStemLijst:number=0;

    constructor(private schilderWensService:SchilderWensService){

    }

    rate(num){
        console.log(`Rating voor: $(this.klant.name), $(num)`);
        this.rating.emit(num);
    }

    schilderStem(aantalSchilderWensen:number){
        this.schilderWensService.aantal+=aantalSchilderWensen;
        this.schilderWensService.Stream.next(this.schilderWensService.aantal);
        console.log("Stem om te schilderen is uitgebracht vanuit klantdetail "+this.schilderWensService.aantal)        
    }


}
