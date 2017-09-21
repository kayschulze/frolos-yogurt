import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Flavor } from './flavor';

@Component({
  selector: 'add-flavor',
  template: `
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

export class AddFlavorComponent {
  @Output() newFlavorSender = new EventEmitter();

  addFlavor(name: string, brand: string, price: number, description: string, kosher: boolean, vegan: boolean) {
    if (kosher==="true"){kosher=true}else{kosher=false};
    if (vegan==="true"){vegan=true}else{vegan=false};
    var newFlavorToAdd: Flavor = new Flavor(name, brand, price, description, kosher, vegan);
    this.newFlavorSender.emit(newFlavorToAdd);
  }
}
