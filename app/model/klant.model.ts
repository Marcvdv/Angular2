// klant.model.ts
export class Klant{
	constructor(
		public id: number,
		public name: string,
		public straat: string,
        public plaats: string,
        public debiteurnummer: number,
		public waardering:number,
		public gebouwen:string[],
		public schilderAchterstandMeldingen: number
	){	}
}