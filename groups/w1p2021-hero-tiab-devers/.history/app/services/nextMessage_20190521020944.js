class NextMessage {
  constructor() {
    this.position = 3;
  }
  increment() {
    this.position++;
  }
  value() {
    return this.position;
  }
}

module.exports = new NextMessage();