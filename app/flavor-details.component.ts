import { Component, Input } from '@angular/core';
import { Flavor } from './flavor';

@Component({
  selector: 'flavor-details',
  template: `
  <div *ngIf="flavor">
  <h1><input [(ngModel)]="flavor.name"></h1>
  <h3>Brand: <input [(ngModel)]="flavor.brand"></h3>
  <h3>Price: <input [(ngModel)]="flavor.price"></h3>
  <h3>Description: <input [(ngModel)]="flavor.description"></h3>

  <button (click) ="hide()">Hide Flavor</button>

  </div>
  `
})

export class FlavorDetailsComponent{
  @Input() flavor: Flavor;

  hide(): void {
    this.flavor = null;
  }
}
