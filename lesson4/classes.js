class Greet {
  greet(message) {
    console.log(message);
  }
}

class Hello extends Greet {
  hi() {
    this.greet('Hello');
  }
}

class Goodbye extends Greet {
  bye() {
    this.greet("Goodbye");
  }
}

let greg = new Hello();
greg.hi();

let betty = new Goodbye();
betty.bye('hello');