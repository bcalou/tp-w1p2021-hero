class AudioCount {
  constructor() {
    //Save audio after refresh
    if (localStorage.getItem('audio')) {
      this.count = localStorage.getItem('audio');
    } else {
      this.count = 10;
    }
    // this.count = 10;
    
  }
  decrement() {
    this.count--;

    if (this.count < 0) {
      this.count = 0;
    }

    localStorage.setItem('audio', this.count);
  }
  value() {
    return this.count;
  }
}

module.exports = new AudioCount();
