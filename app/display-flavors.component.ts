import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Flavor } from './flavor';


@Component({
  selector: 'display-flavors',
  template: `
  <ul>
    <li *ngFor="let flavor of childFlavorList">
       <h3>{{flavor.name}}
         <img [src]="showKosher(flavor)">
         <img [src]="showVegan(flavor)">
       </h3>
       <p>Brand: {{flavor.brand}}</p>
       <p>Price: $\{{flavor.price}}</p>
       <p>Description: {{flavor.description}}</p>
       <button (click)="editFlavorButton(flavor)">Edit</button>
    </li>
  </ul>
  `
})

export class DisplayFlavorsComponent {
  @Input() childFlavorList: Flavor[];
  @Output() editSender = new EventEmitter();

  editFlavorButton(flavorToEdit: Flavor) {
    this.editSender.emit(flavorToEdit);
  }

  showKosher(flavor) {
    if (flavor.kosher === true) {
      return "http://failedmessiah.typepad.com/.a/6a00d83451b71f69e20133ed3f51f4970b-600wi";
    } else {
      return "http://clipart-library.com/images/8cxKBeG9i.png";
    }
  }

  showVegan(flavor) {
    if (flavor.vegan === true) {
      return "https://i.pinimg.com/736x/7c/57/7e/7c577e9a7dc7599838b316a0b5fb6651--vegan-symbol-vegan-tattoo.jpg";
    } else {
      return "http://alipmandesign.com/wp-content/uploads/2015/07/cow-v3.png";
    }
  }

}
