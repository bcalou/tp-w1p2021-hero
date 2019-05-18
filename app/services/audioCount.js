
class AudioCount {
  constructor() {
    this.count = 10;
  }
  decrement() {
    this.count--;
  }
  value() {
    return this.count;
  }
}

module.exports = new AudioCount();