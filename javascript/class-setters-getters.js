// Only change code below this line
class Thermostat {
  constructor(temp) {
    console.log("constructor: " + temp);

    this.temp = temp;
  }

  get temperature() {
    console.log("getter: " + this.temp);

    return this.temp;
  }

  set temperature(updatedTemp) {
    
    this.temp = updatedTemp;
    console.log("setter: " + this.temp);
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius