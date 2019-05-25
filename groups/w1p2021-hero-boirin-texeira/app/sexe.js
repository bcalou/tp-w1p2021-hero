class Sexe {
  constructor() {
    this.male = false;
  }

  getSexe(sexe) {
    if (sexe === "male") {
      this.male = true;
    } else {
      this.male = false;

    }
    console.log(this.male)
  }
}

module.exports = new Sexe();