import { Pipe, PipeTransform } from '@angular/core';
import { Flavor } from './flavor';

@Pipe ({
  name: "filterness",
  pure: false
})

export class FilternessPipe implements PipeTransform {

  transform(input: Flavor[], desiredFilter) {
    var output: Flavor[] = [];
    if (desiredFilter === "isKosherAndVegan") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].kosher === true && input[i].vegan === true) {
          output.push(input[i]);
        }
      }
      return output;
    }
     else if(desiredFilter === "isKosher") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].kosher === true) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (desiredFilter === "isVegan") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].vegan === true) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}
