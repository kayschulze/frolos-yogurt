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
    <div class="addFlavor">
      <h2>Add A New Flavor</h2>
      <label for="name">Name</label>
      <input type="text" class="form-control" #name placeholder="name" required>

      <label for="brand">Brand</label>
      <input type="text" class="form-control" #brand placeholder="brand" required>

      <label for="price">Price</label>
      <input type="number" class="form-control" #price placeholder="price" required>

      <label for="description">Description</label>
      <input type="text" class="form-control" #description placeholder="description" required>

      <label for="kosher">Kosher</label>
      <select #isKosher>
        <option [value]="true">Yes</option>
        <option [value]="false">No</option>
      </select>

      <label for="vegan">Vegan</label>
      <select #isVegan>
        <option [value]="true">Yes</option>
        <option [value]="false">No</option>
      </select>

      <button (click)="addFlavor(name.value, brand.value, price.value, description.value, isKosher.value, isVegan.value)">Add Flavor</button>
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
    console.log(flavor.name, flavor.kosher);
    if (flavor.kosher === true) {
      return "http://failedmessiah.typepad.com/.a/6a00d83451b71f69e20133ed3f51f4970b-600wi";
    } else {
      return "http://clipart-library.com/images/8cxKBeG9i.png";
    }
  }

  showVegan(flavor) {
    console.log(flavor.vegan);
    if (flavor.vegan === true) {
      return "https://i.pinimg.com/736x/7c/57/7e/7c577e9a7dc7599838b316a0b5fb6651--vegan-symbol-vegan-tattoo.jpg";
    } else {
      return "http://alipmandesign.com/wp-content/uploads/2015/07/cow-v3.png";
    }
  }

  addFlavor(name, brand, price, description, kosher, vegan) {
    this.allFlavors.push(new Flavor(name, brand, price, description, kosher, vegan));
  }
}
