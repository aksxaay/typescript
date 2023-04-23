// constructor counter

// it somehow stops behaving like a regular function
// I couldn't access count variable without a getter / setter

// naming stuff like class / constructor use capital
function Counter() {
  hiddenCount = 0;
  this.count = 0;
  this.incrementCounter = function () {
    hiddenCount++;
    this.count++;
  };

  this.decrementCounter = function () {
    counterInstance;
    this.count--;
  };

  this.getCount = () => console.log(this.count);
  this.getHiddenCount = () => console.log(hiddenCount);
}

let counterInstance = new Counter();
counterInstance.incrementCounter();

// can get count both ways now
console.log("counterInstance.count", counterInstance.count); // 1
console.log("counterInstance.hiddenCount", counterInstance.hiddenCount); // undefined

counterInstance.getCount();
