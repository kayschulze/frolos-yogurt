import { Flavor } from './flavor';
// import { Flavor } from './flavor';

export class FlavorManager{
  allFlavors: Flavor[] = [];

  populateFlavors(){

    let flavor1:Flavor = new Flavor('Kim\'s Delight', 'Schulze Co.', 3, 'strawberry & chocolate', true, true);
    let flavor2:Flavor = new Flavor('Mango-a-Lo-Lo', 'LoCho Inc.', 4, 'mango & banana', true, true);
    let flavor3:Flavor = new Flavor('KaiBerry', 'Hiro Unlimited', 4, 'strawberry & banana & blueberry', true, false);
    let flavor4:Flavor = new Flavor('RoboBerry', 'Robert Incorporated', 3, 'blackberry & raspberry', false, false);
    let flavor5:Flavor = new Flavor('Marsh Mudd', 'Gelatin Suprise', 7, 'marshmallow, chocolate, peanuts, and caramal sauce', false, false)

    this.allFlavors.push(flavor1, flavor2, flavor3, flavor4, flavor5);
  }
}
