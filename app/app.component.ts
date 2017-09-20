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
     <ul>
       <li *ngFor="let flavor of allFlavors" [class.selected] = "flavor === selectedFlavor">
          <h3>{{flavor.name}}
            <img [src]="showKosher(flavor)">
            <img [src]="showVegan(flavor)">
          </h3>
          <p>Brand: {{flavor.brand}}</p>
          <p>Price: $\{{flavor.price}}</p>
          <p>Description: {{flavor.description}}</p>
          <button (click) = "showDetails(flavor)">Edit {{flavor.name}}</button>
       </li>
     </ul>
     <br>
     <hr>
     <flavor-details [flavor] = "selectedFlavor"></flavor-details>
    </div>
  `
})

export class AppComponent {
  selectedFlavor: Flavor;
  allFlavors = flavorManager.allFlavors;

  showDetails(flavor:Flavor): void {
    this.selectedFlavor = flavor;
  }

  showKosher(flavor) {
    if (flavor.kosher === true) {
      return "http://failedmessiah.typepad.com/.a/6a00d83451b71f69e20133ed3f51f4970b-600wi";
    }
  }

  showVegan(flavor) {
    if (flavor.vegan === true) {
      return "https://i.pinimg.com/736x/7c/57/7e/7c577e9a7dc7599838b316a0b5fb6651--vegan-symbol-vegan-tattoo.jpg";
    }
  }
}
