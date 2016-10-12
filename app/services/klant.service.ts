//klant.service.ts

import {Injectable} from 'angular2/core';
import {Klant} from "../model/klant.model";

@Injectable()

export class KlantService {
    private klanten:Klant[] = [
        	new Klant(1, 'Shell BV', 'Oliestraat 23', 'Amsterdam', 1001,12,["Hoofdkantoor","MoerdijkCompleex"],0),
			new Klant(2, 'Unilever', 'Zeepweg 123', 'Rotterdam', 1002,10,["Research Vlaardingen"],0),
			new Klant(3, 'Fortis NL', 'Geldallee 1023', 'Utrecht', 1003,5,["Grijze flat","AMEV gebouw"],0),
			new Klant(4, 'Philips', 'Lichboulevard 222', 'Eindhoven', 1004,8,["Evoluon","Hoofdkantoor AmstelToren"],0)
    ]

    //Get alle klanten
    getKlanten():Klant[]{
        return this.klanten;
    }

    //Get 1 klant
    getKlant(id:number):Klant{
        return this.klanten[id-1];
    }
}