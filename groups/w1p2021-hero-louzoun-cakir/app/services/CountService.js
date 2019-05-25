class CountService {
  constructor() {
    this.stepCount = localStorage.getItem('step') || 'error';
  }

  count(id) {
    localStorage.setItem('step', JSON.stringify(id));
  }
  value() {
    return JSON.parse(localStorage.getItem('step'));
  }
}

module.exports = new CountService();
