/* Import */
//

/* Export */
//

/* Class */
class starsClass {
  constructor() {
    this.sizeStars = ["small", "medium", "big"];
    this.starsMoving = [];
    this.loop = null;
    this.area = null;
    this.position = null;
    this.starsArray = null;
    this.selectSide = null;
    this.arraySide = null;
    this.widthScreen = window.innerWidth;
    this.heightScreen = window.innerHeight;
    this.centerScreen = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.type = null;
  }

  /*
   * initialization stars
   */
  initialization() {
    this.area = document.querySelector(".stars");
    for (let index = 0; index < 20; index++) {
      this.area.innerHTML += `<div style="position:absolute; left: ${this.randomNumber(
        0,
        this.widthScreen
      )}px; top: ${this.randomNumber(
        0,
        this.heightScreen
      )}px" class="star--children ${
        this.sizeStars[this.randomNumber(0, this.sizeStars.length - 3)]
      }" data-timer="0"></div>`;
    }
  }
  //

  /*
   * Start the animation
   */
  start(type) {
    this.type = type;
    this.loopAnimation();
  }
  //

  /*
   * Start the animation
   */
  loopAnimation() {
    this.loop = window.requestAnimFrame(() => {
      this.animation(this.loop);
      this.loopAnimation();
    });
  }
  //

  /*
   * Refresh stars
   */
  refreshStars() {
    this.area = document.querySelector(".stars");
    this.starsArray = document.querySelectorAll(".star--children");
    this.starsArray.forEach(select => {
      this.area.removeChild(select);
    });
    window.cancelAnimationFrame(this.loop);
    this.initialization();
  }
  //

  /*
   * Stop the animation
   */
  stop() {
    window.cancelAnimationFrame(this.loop);
  }
  //

  /*
   * Function who return the size of the new star
   */
  randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //

  /*
   * Function parent
   */
  animation(timer) {
    this.createStar(timer);
    this.moveStars();
  }
  //

  /*
   *
   */
  randomPosition() {
    this.arraySide = [
      { side: `left` },
      { side: `right` },
      { side: `top` },
      { side: `bottom` }
    ];

    this.selectSide = this.arraySide[
      this.randomNumber(0, this.arraySide.length - 1)
    ];

    switch (this.selectSide.side) {
      /* Left */
      case this.arraySide[0].side:
        return { x: 0, y: this.randomNumber(0, this.heightScreen) };
        break;
      /* Right */
      case this.arraySide[1].side:
        return {
          x: this.widthScreen,
          y: this.randomNumber(0, this.heightScreen)
        };
        break;
      /* Top */
      case this.arraySide[2].side:
        return { x: this.randomNumber(0, this.widthScreen), y: 0 };
        break;
      /* Bottom */
      case this.arraySide[3].side:
        return {
          x: this.randomNumber(0, this.widthScreen),
          y: this.heightScreen
        };
        break;

      default:
    }
  }
  //

  /*
   * Random number
   */
  randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //

  /*
   * Function who create child
   */
  createStar(timer) {
    this.area = document.querySelector(".stars");

    if (timer % 20 === 0) {
      this.position = this.randomPosition();
      this.area.innerHTML += `<div style="position:absolute; left: ${
        this.position.x
      }px; top: ${this.position.y}px" class="star--children ${this.type} ${
        this.sizeStars[this.randomNumber(0, this.sizeStars.length - 1)]
      }" data-timer="0"></div>`;
    }
  }
  //

  /*
   * Function able to move stars
   */
  moveStars() {
    this.starsArray = document.querySelectorAll(".star--children");
    this.starsArray.forEach(select => {
      this.selectPosition = {
        x: Math.floor(select.getBoundingClientRect().x),
        y: Math.floor(select.getBoundingClientRect().y)
      };
      select.dataset.timer = parseInt(select.dataset.timer) + 1;

      /* Top Left  */
      if (
        this.selectPosition.x < this.centerScreen.x &&
        this.selectPosition.y < this.centerScreen.y
      ) {
        this.angle =
          (this.selectPosition.y - this.centerScreen.y) /
          (this.selectPosition.x - this.centerScreen.x);
        select.style.transform = `perspective(200px) translate3d( ${select
          .dataset.timer * 10}px, ${select.dataset.timer *
          this.angle}px, ${-select.dataset.timer * 8}px)`;

        /* Top Right  */
      } else if (
        this.selectPosition.x > this.centerScreen.x &&
        this.selectPosition.y < this.centerScreen.y
      ) {
        this.angle =
          (this.selectPosition.y - this.centerScreen.y) /
          (this.selectPosition.x - this.centerScreen.x);
        select.style.transform = `perspective(200px) translate3d( ${-select
          .dataset.timer * 10}px, ${-select.dataset.timer *
          this.angle}px, ${-select.dataset.timer * 8}px)`;

        /* Bottom Left  */
      } else if (
        this.selectPosition.x < this.centerScreen.x &&
        this.selectPosition.y > this.centerScreen.y
      ) {
        this.angle =
          (this.selectPosition.y - this.centerScreen.y) /
          (this.selectPosition.x - this.centerScreen.x);
        select.style.transform = `perspective(200px) translate3d( ${select
          .dataset.timer * 10}px, ${select.dataset.timer *
          this.angle}px, ${-select.dataset.timer * 8}px)`;

        /* Bottom Right  */
      } else if (
        this.selectPosition.x > this.centerScreen.x &&
        this.selectPosition.y > this.centerScreen.y
      ) {
        this.angle =
          (this.selectPosition.y - this.centerScreen.y) /
          (this.selectPosition.x - this.centerScreen.x);
        select.style.transform = `perspective(200px) translate3d( -${select
          .dataset.timer * 10}px, ${-select.dataset.timer *
          this.angle}px, ${-select.dataset.timer * 8}px)`;
      }

      select.dataset.timer > 300 ? this.area.removeChild(select) : 0;
    });
  }
  //
}

module.exports = new starsClass();
//
