class CircularQueue {
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.buffer = Array(bufferSize).fill(null);
  }

  info() {
    return this.bufferSize;
  }

  enqueue(arg) {
    if (this.buffer.length >= this.bufferSize) {
      this.buffer.shift();
    }
    this.buffer.push(arg);
  }

  dequeue() {
    let oldestIndex = this.buffer.findIndex(element => element !== null);
    if (oldestIndex === -1) {
      return this.buffer.shift();
    } else {
      let result = this.buffer[oldestIndex];
      this.buffer.splice(oldestIndex, 1, null);
      return result;
    }
  }
}


// let queue = new CircularQueue(3);
// console.log(queue.dequeue() === null);

// queue.enqueue(1);
// queue.enqueue(2);
// console.log(queue.dequeue() === 1);

// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.dequeue() === 2);

// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.dequeue() === 5);
// console.log(queue.dequeue() === 6);
// console.log(queue.dequeue() === 7);
// console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
console.log(anotherQueue);
anotherQueue.enqueue(2);
console.log(anotherQueue);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
console.log(anotherQueue);
anotherQueue.enqueue(4);
console.log(anotherQueue);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);