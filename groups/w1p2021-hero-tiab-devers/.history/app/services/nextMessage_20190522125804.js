class NextMessage {
  constructor() {
    this.position = 0;
  }
  increment() {
    this.position++;
  }
  decrement() {
    this.position--;
  }
  value() {
    return this.position;
  }
}

module.exports = new NextMessage();