/* Import */
import { dataFile } from "../js/blocs/declarations/declarationsData";
import stars from "./stars";
//

/* Export */
export let ufo, alians, planet, bubble, cookie, mouths, eyes, animationsAppear;
//

/* Class */
class CharacterClass {
  constructor() {}

  /*
   * Function who call animations
   */
  animationAppear(animationSelect) {
    animationSelect.forEach(select => {
      animationsAppear = select != null ? this[select]() : 0;
      animationsAppear === true
        ? dataFile.UFO.characters.animationsCharacters.push(select)
        : 0;
    });
  }
  //

  /*
   * Put the animations back if the page is refreshed
   */
  initializationAnimation() {
    dataFile.UFO.characters.animationsCharacters.forEach(animationSelect => {
      this[animationSelect]();
    });
  }
  //

  /*
   * Remove animation
   */
  removeAnimation(animationSelect) {
    animationSelect.forEach(select => {
      dataFile.UFO.characters.animationsCharacters.splice(
        dataFile.UFO.characters.animationsCharacters.indexOf(select),
        1
      );
      this[select]();
    });
  }
  //

  /*
   * Add glasses to alians
   */
  accountant_Animation() {
    alians = document.querySelectorAll(`.alian`);
    alians.forEach(alian => {
      alian.classList.toggle("alian--bureau");
    });
    return true;
  }
  //

  /*
   * Add barman style
   */
  barman_Animation() {
    alians = document.querySelectorAll(`.alian`);
    alians.forEach(alian => {
      alian.classList.toggle("alian--punk");
    });
    return true;
  }
  //

  /*
   * TakeOff the ship
   */
  takeOff_Animation() {
    document.querySelector(".ufo--main").classList.toggle("ufo--starting");
    document.querySelector(".planet").classList.toggle("planet--flying");
    return true;
  }
  //

  /*
   * brokenGlass_Animation
   */
  brokenGlass_Animation() {
    document
      .querySelector(".brokenglass")
      .classList.toggle("brokenglass--active");
    return true;
  }
  //

  /*
   * Driving
   */
  driving_Animation() {
    document.querySelector(".ufo--main").classList.toggle("ufo--driving");
    document.querySelector(".roue").classList.toggle("roue--turning");
    return true;
  }
  //

  /*
   * Music
   */
  music_Animation() {
    document.querySelectorAll(".ufo--main .alian").forEach(function(mouth) {
      mouth.classList.toggle("alian--music");
    });

    return true;
  }
  //

  /*
   * Alian can speak
   */
  gameoverBG_Animation() {
    document.querySelector(".frame").classList.toggle("frame--gameover");
    return true;
  }
  //

  /*
   * Alian can speak
   */
  speaking_Animation() {
    document.querySelectorAll(".alian__mouth").forEach(function(mouth) {
      mouth.classList.toggle("alian__mouth--speaking");
    });
    return true;
  }
  //

  /*
   * bubbelgum animation with the right alian
   */
  bubbelgum_Animation() {
    document
      .querySelector(".ufo--main")
      .classList.toggle("ufo--bubbelgum--active");
    document
      .querySelector(".alian--right .alian__mouth")
      .classList.toggle("alian__mouth--closing");
    return true;
  }
  //

  /*
   * Add alcohol bottle
   */
  drinkAlcohol_Animation() {
    document.querySelector(".bottle").classList.toggle("bottle--active");
    document.querySelector(".bottle").classList.add("bottle--alk");
    return true;
  }
  //

  /*
   * Add orangeJuice bottle
   */
  drinkOrange_Animation() {
    document.querySelector(".bottle").classList.toggle("bottle--active");
    document.querySelector(".bottle").classList.add("bottle--orange");
    return true;
  }
  //

  /*
   * Appear the policeMen
   */
  policeAppear_Animation() {
    document
      .querySelector(".ufo--police")
      .classList.toggle("ufo--police--active");
    return true;
  }
  //

  /*
   * Appear the prision
   */
  prison_Animation() {
    document
      .querySelector(".prison")
      .classList.toggle("prison--active");
    return true;
  }
  //

  /*
   * Appear the policeMen
   */
  panne_Animation() {
    document
      .querySelector(".ufo--panne")
      .classList.toggle("ufo--panne--active");
    return true;
  }
  //

  /*
   * Appear the pirat
   */
  alianblock_Animation() {
    document
      .querySelector(".alian--block")
      .classList.toggle("alian--block--active");
    return true;
  }
  //

  /*
   * Appear the pirat
   */
  peageSchranke_Animation() {
    document
      .querySelector(".peage__schranke")
      .classList.toggle("peage__schranke--up");
    return true;
  }
  //

  /*
   * Animation with the ship who drunken
   */
  drivingDrunken_Animation() {
    document
      .querySelector(".ufo--main")
      .classList.toggle("ufo--driving--drunken");
    return true;
  }
  //

  /*
   * Appear the cookie
   */
  cookie_Animation() {
    document.querySelector(".cookie").classList.toggle("cookie--active");
    return true;
  }
  //

  /*
   * Waysign
   */
  waysign_Animation() {
    document.querySelector(".waysign").classList.toggle("waysign--active");
    return true;
  }
  //

  /*
   * Coint
   */
  moneySpent_Animation() {
    document.querySelector(".coint").classList.toggle("coint--spend");
    return true;
  }

  moneyFound_Animation() {
    document.querySelector(".coint").classList.toggle("coint--found");
    return true;
  }
  //

  /*
   * Peage
   */
  peage_Animation() {
    document.querySelector(".peage").classList.toggle("peage--active");
    return true;
  }
  //

  /*
   * Blockard--stop
   */
  blockardStop_Animation() {
    document.querySelector(".blockard").classList.toggle("blockard--active");
    document.querySelector(".blockard").classList.toggle("blockard--stop");
    return true;
  }
  //

  /*
   * Blockard--danger
   */
  blockardDanger_Animation() {
    document.querySelector(".blockard").classList.toggle("blockard--active");
    document.querySelector(".blockard").classList.toggle("blockard--danger");
    return true;
  }
  //

  /*
   * The left alian can move their eyes
   */
  eyesMoving_Animation() {
    document
      .querySelectorAll(".alian--left .alian__eye")
      .forEach(function(eye) {
        eye.classList.toggle("alian__eye--moving");
      });
    return true;
  }
  //

  /*
   * The left alian can move their eyes
   */
  sleeping_Animation() {
    document.querySelectorAll(".ufo--main .alian__eye").forEach(function(eye) {
      eye.classList.toggle("alian__eye--sleeping");
    });
    document
      .querySelectorAll(".ufo--main .alian__mouth")
      .forEach(function(mouth) {
        mouth.classList.toggle("alian__mouth--sleeping");
      });
    return true;
  }
  //

  /*
   * The left alian can move their eyes
   */
  dead_Animation() {
    document.querySelectorAll(".ufo--main .alian__eye").forEach(function(eye) {
      eye.classList.toggle("alian__eye--sleeping");
    });
    document
      .querySelectorAll(".ufo--main .alian__mouth")
      .forEach(function(mouth) {
        mouth.classList.toggle("alian__mouth--closing");
      });
    document
      .querySelector(".ufo--main")
      .classList.toggle("ufo--dead");
    return true;
  }
  //

  /*
   * Shock
   */
  faceShock_Animation() {
    document.querySelectorAll(".ufo--main .alian__eye").forEach(function(eye) {
      eye.classList.toggle("alian__eye--fear");
    });
    document
      .querySelectorAll(".ufo--main .alian__mouth")
      .forEach(function(mouth) {
        mouth.classList.toggle("alian__mouth--fear");
      });
    return true;
  }
  //

  /*
   * Shock
   */
  faceShockRight_Animation() {
    document
      .querySelectorAll(".ufo--main .alian--right .alian__eye")
      .forEach(function(eye) {
        eye.classList.toggle("alian__eye--fear");
      });
    document
      .querySelectorAll(".ufo--main .alian--right  .alian__mouth")
      .forEach(function(mouth) {
        mouth.classList.toggle("alian__mouth--fear");
      });
    return true;
  }
  //

  /*
   * Stars animation
   */
  movingStars_Animation() {
    stars.start(`star`);
    dataFile.UFO.characters.animationsCharacters.push('movingStars_Animation')
  }
  //

  /*
   * Astro animation
   */
  movingAstro_Animation() {
    stars.start(`astro`);
    dataFile.UFO.characters.animationsCharacters.push('movingAstro_Animation')
  }
  //

  /*
   * Refresh stars
   */
  refreshStars_Animation() {
    stars.refreshStars();
    dataFile.UFO.characters.animationsCharacters.push('refreshStars_Animation')
  }
  //

  /*
   * Stop animation stars
   */
  stopStars_Animation() {
    stars.stop();
    dataFile.UFO.characters.animationsCharacters.push('stopStars_Animation')
  }
  //
}

module.exports = new CharacterClass();
//
