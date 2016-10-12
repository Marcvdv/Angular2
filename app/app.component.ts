// app.component.ts
import {Component} from 'angular2/core';
import {Klant} from "./model/klant.model";
import {KlantDetail} from "./klant.detail";
import {KlantService} from "./services/klant.service";
import {SchilderWensService} from "./services/schilderwens.service";
import {ViewSchilderWens} from "./ViewSchilderWens.component";

@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.component.html',
	// providers : [KlantService, SchilderWensService],
	directives: [KlantDetail, ViewSchilderWens]
})

export class AppComponent {
	title:string  = 'Klanten overzicht';
	klanten:Klant[]=[];
	toggleMsg:string   = 'Lijst van klanten zien?';
	showKlanten:boolean = true;
	newKlant:string = '';
	textVisible:boolean = false;
	klantIdVisible:boolean = false;
	currentId:number;
	currentKlant:Klant;

	constructor(private klantService:KlantService) {
		
		this.klanten = klantService.getKlanten();
	}

	// event handler voor klikken op knop
	btnClick() {
		alert('We gaan straks details laten zien!')
	}

	// event handler voor klikken in lijst van klanten
	klantenLijstClick(klant:Klant) {
		//alert('De plaats van deze klant: ' + klant.plaats);
		this.currentKlant=klant;
		this.currentId=klant.id;
	}

		// event handler voor klant veranderen
	changeKlant(value:string) {
		this.newKlant = value;
	}

	// klikken op checkbox afvangen
	toggleKlanten() {
		this.showKlanten = !this.showKlanten;
		this.showKlanten
			? this.toggleMsg = 'Verberg lijst met klanten.'
			: this.toggleMsg = 'Toon de lijst met klanten';
	}

	toggleText(){
		this.textVisible = !this.textVisible;
	}

	// event handler voor klant toevoegen
	addKlant(value:string) {
		let nieuweKlant = new Klant(this.klanten.length+1,value,'onbekend','onbekend',0,0,[],0);
		this.klanten.push(nieuweKlant);
	}

	klantIdInSchermpje(){
		//alert("onmouseover");
		this.klantIdVisible = true;
	}

	updateSelectedKlantRating(num){
		this.currentKlant.waardering += num;
	}
}