class keyDoor {
  constructor() {
    this.verify = false;
  }

  verifyTrue () {
    return this.verify = true;
  }

  value() {
    return console.log(this.verify);
  }
}

module.exports = new keyDoor()