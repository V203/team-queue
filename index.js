let Node = require("./node");
let Queue = require("./queue");

let node = Node()
let queue = Queue();

console.log(`Value at the front :=> ${queue.front()}`);

console.log(`value at back :=>  ${queue.back()}`);
console.log("Before enqueu :=> "+queue.display_arr());
queue.enqueue(222);
console.log("After enque :=> "+queue.display_arr());
queue.dequeue()
console.log("After deque :=> "+queue.display_arr());










