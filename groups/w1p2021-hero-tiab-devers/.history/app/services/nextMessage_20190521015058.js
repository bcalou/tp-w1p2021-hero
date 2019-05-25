class NextMessage {
  constructor() {
    this.position = 0;
  }
  increment() {
    this.position++;
  }
  value() {
    return step.messages[this.position];
  }
}

module.exports = new NextMessage();