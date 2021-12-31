/* Stack */

// functions: push, pop, peek, length

var Stack = function() {
  this.count = 0;
  this.storage = {};

  //Add new value to the stack
  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  } 

  //Remove the last value in the stack and return the value
  this.pop = () => {
    if(this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  //Returns the size of the stack
  this.size = () => {
    return this.count;
  }

  //Returns the value at the end of the stack
  this.peek = () => {
    return this.storage[this.count-1]
  }
}

var myStack = new Stack();
myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.size())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.size())