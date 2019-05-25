/**
 *
 *
 * @class Map Instancie une nouvelle map.
 */
class Map {
  /**
   *Creates an instance of Map.
   * @param {DOM element} htmlTag Cible un élément du DOM
   * @param {Number} size Définis le nombre d'écran
   * @memberof Map
   */
  constructor(htmlTag, size, root) {
    this.htmlTag = htmlTag;
    this.size = size;
    this.root = root;
  }
  /**
   *
   *
   * @param {json file} root Chemin du fichier json où se trouve les maps
   * @memberof Map
   */
  create(id) {

    const tuiles = Object.keys(this.root.steps).map(id => this.root.steps[id].background);
    console.log(tuiles)
    const images = [];

    for (let i = 0; i < this.size; i++) { // loop for the rows
      const container = document.createElement('div'); // container for the row
      container.classList.add('container');
      this.htmlTag.appendChild(container);

      for (let j = 0; j < this.size; j++) { // loop for the columns
        const container = document.querySelector('.container:nth-last-child(1)');
        const tuile = document.createElement('img');
        const image = tuiles[ i * this.size + j ];
        images.push(image);
      }
    }
    /* if(this.size != (Object.keys(tuiles).length)/this.size){
      console.log(this.size)
      console.log(Object.keys(tuiles));
      console.error('Vous n\'avez pas assez d\'assets pour la map') 
    } else {
      
    } */

    return images;
  }
};

module.exports = Map