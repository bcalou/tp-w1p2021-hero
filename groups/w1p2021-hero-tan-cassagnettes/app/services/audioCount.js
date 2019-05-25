import Vue from 'vue';

class AudioCount {
  constructor() {
    //Save audio after refresh
    this.data = new Vue({
      data() {
        return {
          count: 10
        };
      }
    });

    if (localStorage.getItem('audio')) {
      this.data.count = localStorage.getItem('audio');
    } else {
      this.data.count = 10;
    }
    // this.data.count = 10;
    
  }
  decrement() {
    this.data.count--;

    // if (this.data.count < 0) {
    //   this.data.count = 0;
    // }

    // if (this.data.count < 0) {
    //   this.data.count = 0;
    // }

    localStorage.setItem('audio', this.data.count);
  }
  increment() {
    this.data.count++;

    localStorage.setItem('audio', this.data.count);
  }
  value() {
    return this.data.count;
  }
  setvalue(value) {
    this.data.count = value;
    localStorage.setItem('audio', this.data.count);
  }
}

module.exports = new AudioCount();
