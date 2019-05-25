class Character {
  constructor() {
    this.life = 0;
    this.character = undefined;
  }
  setCharacter(character) {
    this.character = character;
  }
  getLife() {
    return this.life;
  }
  setLife(life) {
    this.life = life;
  }
  decrementLife() {
    this.life--;
  }
  incrementLife() {
    this.life++;
  }
  checkIfIsAlive() {
    if (this.life > 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new Character();
