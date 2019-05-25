class NextMessage {
  constructor() {
    this.position = 2;
  }
  increment() {
    this.position++;
  }
  value() {
    return this.position;
  }
}

module.exports = new NextMessage();