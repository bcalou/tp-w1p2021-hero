class NextMessage {
  constructor() {
    this.message = 0;
  }
  increment() {
    this.message++;
  }
  decrement() {
    this.message--;
  }
  value() {
    return this.message + ' Sa marche';
  }
}

module.exports = new NextMessage();