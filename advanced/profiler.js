console.log('test');
var queue = new Queue();
var profileQueue = function(limit) {
  for (var i = 0; i < limit; i++) {
    queue.enqueue(Math.random() * 10);
    queue.size();
  }
};
profileQueue(10000000);