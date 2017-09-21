import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Flavor } from './flavor';

@Component({
  selector: 'edit-details',
  template: `
  <div *ngIf="childSelectedFlavor">
  <h1><input [(ngModel)]="childSelectedFlavor.name"></h1>
  <h3>Brand: <input [(ngModel)]="childSelectedFlavor.brand"></h3>
  <h3>Price: <input [(ngModel)]="childSelectedFlavor.price"></h3>
  <h3>Description: <input [(ngModel)]="childSelectedFlavor.description"></h3>

  <button (click) ="doneButtonClicked()">Save Flavor</button>

  </div>
  `
})

export class EditDetailsComponent{
  @Input() childSelectedFlavor: Flavor;
  @Output() doneButtonClickedSender = new EventEmitter();

  hide(): void {
    this.flavor = null;
  }

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
