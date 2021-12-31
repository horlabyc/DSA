function Queue() {
  collection = [];

  this.print = function() {
    console.log(collection)
  }
  this.enqueue = function(value) {
    collection.push(value)
  }
  this.dequeue = () => collection.shift();
  this.front = () => collection[0]
  this.size = () => collection.length;
  this.isEmpty = () => collection.length === 0;
}

var myQueue = new Queue()
myQueue.enqueue("Jamaal")
myQueue.enqueue("Akolade")
myQueue.enqueue("Afiyah")
myQueue.print()
myQueue.size()
myQueue.dequeue()
console.log(myQueue.front())
myQueue.dequeue()
myQueue.print()
console.log(myQueue.isEmpty())
console.log(myQueue.size())