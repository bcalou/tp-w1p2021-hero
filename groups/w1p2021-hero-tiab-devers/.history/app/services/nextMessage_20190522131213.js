class NextMessage {
  constructor() {
    this.message = 0;
  }
  increment() {
    if (this.message < game.step.messages)
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