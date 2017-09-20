export class Flavor {
  // public inventory: number = 20;
  // public kosher: boolean = true;
  // public vegan: boolean = true;
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public description: string,
    public kosher: boolean = false,
    public vegan: boolean = false) { }
}
