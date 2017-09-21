import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FlavorDetailsComponent } from './flavor-details.component';
import { FormsModule }  from '@angular/forms';
import { DisplayFlavorsComponent } from './display-flavors.component';
import { AddFlavorComponent } from './add-flavor.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FlavorDetailsComponent, DisplayFlavorsComponent, AddFlavorComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
