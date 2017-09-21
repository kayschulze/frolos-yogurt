import { Component } from '@angular/core';
import { Flavor } from './flavor';
import { FlavorManager } from './flavor-manager';

let flavorManager : FlavorManager = new FlavorManager;
flavorManager.populateFlavors();

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>FroLo's Yogurt Shoppe</h1>
     <display-flavors [childFlavorList] = "masterFlavorList"></display-flavors>

     <br>
     <hr>
     <flavor-details></flavor-details>
    </div>

    <add-flavor></add-flavor>
  `
})


export class AppComponent {
  // selectedFlavor: Flavor;

  masterFlavorList: Flavor[] = [
    new Flavor('Kim\'s Delight', 'Schulze Co.', 3, 'strawberry & chocolate', true, true),
    new Flavor('Mango-a-Lo-Lo', 'LoCho Inc.', 4, 'mango & banana', true, true),
    new Flavor('KaiBerry', 'Hiro Unlimited', 4, 'strawberry & banana & blueberry', true, false),
    new Flavor('RoboBerry', 'Robert Incorporated', 3, 'blackberry & raspberry', false, false),
    new Flavor('Marsh Mudd', 'Gelatin Suprise', 7, 'marshmallow, chocolate, peanuts, and caramal sauce', false, false),
    new Flavor('Yum Gum', 'Gelatin Suprise', 5, 'cotton candy flavor, vanilla', true, true)
  ];

  // showDetails(flavor:Flavor): void {
  //   this.selectedFlavor = flavor;
  // }

  

  // addFlavor(name, brand, price, description, kosher, vegan) {
  //   if (kosher==="true"){kosher=true}else{kosher=false};
  //   if (vegan==="true"){vegan=true}else{vegan=false};
  //   let newFlavor = new Flavor(name, brand, price, description, kosher, vegan);
  //   this.allFlavors.push(newFlavor);
  // }
}
