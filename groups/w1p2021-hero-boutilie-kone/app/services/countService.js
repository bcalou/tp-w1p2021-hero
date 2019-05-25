 function getTimer(){
      let barre = document.querySelector('.timer');
      var timer = setInterval(() => {
        this.theTime++;
        barre.style.transform = `translateX(${this.theTime}vw)`
        if ( this.theTime <= -1 ) {
         }else{
           if ( this.choice && !this.isChoice ){
             this.isChoice = true;
             this.theTime = -100;
             this.getTimer();
             clearInterval( timer );
           }else{
             this.newPage(0)
           }
         }
      }, 50 );
    }

module.exports = getTimer() ;
