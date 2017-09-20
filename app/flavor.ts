export class Flavor {
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public description: string,
    public kosher: boolean,
    public vegan: boolean,
    public inventory: number = 20 ) { }
}
