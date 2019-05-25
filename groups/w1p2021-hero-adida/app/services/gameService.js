/* A COMPLTETER */
class GameService {
  constructor() {
   this.points = null
   this.step = null
   this.mental = null
   this.sound = document.createElement("audio");
   this.sound.src = require('../assets/audio/easports.mp3');

   this.sound.setAttribute("controls", "none");
   this.sound.style.display = "none";
   document.body.appendChild(this.sound);
  }
  localStorageSetter () {
    localStorage.getItem('points')
  }
  localStorageAddGet() {
    localStorage.setItem('points',parseInt(localStorage.getItem('points'))+10)
    localStorage.setItem('Mentalite',parseInt(localStorage.getItem('Mentalite'))+8)

  }
  localStorageRemoveGet() {
    localStorage.setItem('points',parseInt(localStorage.getItem('points'))-18)
    localStorage.setItem('Mentalite',parseInt(localStorage.getItem('Mentalite'))-10)
  }
  
  removeMental() {
    localStorage.setItem('Mentalite',parseInt(localStorage.getItem('Mentalite'))-10)
  }

  addMental() {
    localStorage.setItem('Mentalite',parseInt(localStorage.getItem('Mentalite'))+7)
  }

  addPlayerMental() {
    localStorage.setItem('Mentalite',parseInt(localStorage.getItem('Mentalite'))+9)
    localStorage.setItem('joueur recrute ', true)
  }

  removePlayerMental() {
    localStorage.setItem('Mentalite',parseInt(localStorage.getItem('Mentalite'))-15)
    localStorage.setItem('joueur recrute ', false)
  }

  decrementMax() {
    localStorage.setItem('Mentalite',parseInt(localStorage.getItem('Mentalite'))-100)
  }


  playSound() {

    this.sound.play();
}
stopSound(){
    this.sound.pause();
} 


getStep()
 {
   return this.step;
 }
   

     

  value() {
    return this.points;
  }
}
module.exports = new GameService();
