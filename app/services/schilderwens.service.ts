//schilderwens.service.ts

// Deze class wordt gebruikt in de event bus om berichten op te vangen/events als een
// component vindt dat een gebouw moet worden geschilderd.
// Dit is de service, er is ook een model

import {Subject} from "rxjs/Subject";
import {Injectable} from "angular2/core";
import {Klant} from "../model/Klant.model";

@Injectable()
export class SchilderWensService {
    Stream:Subject<number>;
    aantal:number;

    constructor() {
        this.Stream = new Subject();
        this.aantal=0;
    }


}