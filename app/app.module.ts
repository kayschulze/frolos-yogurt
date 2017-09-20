import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FlavorDetailsComponent } from './flavor-details.component';
import { FormsModule }  from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FlavorDetailsComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
