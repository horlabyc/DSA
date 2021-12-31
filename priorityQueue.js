function PriorityQueue() {
  var collection = [];

  this.enqueue = function(element) {
    if(!this.collection.length){
      collection.push(element)
    } else {
      var added = false;
      for(var i=0; i<collection.length; i++) {
        if(element[1] < collection[i][1]){
          collection.splice(i,0,element)
          added = true;
          break;
        }
        if(!added) {
          collection.push(element)
        }
      }
    }
  }

  this dequeue = function() {
    var value = collection.shift()
    return value[0]
  }
}