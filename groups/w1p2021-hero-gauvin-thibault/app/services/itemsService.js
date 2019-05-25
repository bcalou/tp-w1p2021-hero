/**
 *
 * Class pour link les items entre l'id et le .json concerné
 * @class items 
 */
class items {
  constructor() {
    this.item = JSON.parse(localStorage.getItem('items')) || { 
      "sword": 0, 
      "sick" : 0, 
      "shield" : 0, 
      "money" : 0,
      "thief": 0,
      "rune1": 0,
      "rune2": 0,
      "rune3": 0,
      "rune4": 0
      };
      localStorage.setItem('items', JSON.stringify(this.item));

  }

  initialisation(){
    this.item = { 
      "sword": 0, 
      "sick" : 0, 
      "shield" : 0, 
      "money" : 0,
      "thief": 0,
      "rune1": 0,
      "rune2": 0,
      "rune3": 0,
      "rune4": 0
      };
      localStorage.setItem('items', JSON.stringify(this.item));
  }
  
  update(item) { // ecrire
    this.item.sword += item.sword;
    this.item.sick += item.sick;
    this.item.shield += item.shield;
    this.item.money += item.money;
    this.item.thief += item.thief;
    this.item.rune1 += item.rune1;
    this.item.rune2 += item.rune2;
    this.item.rune3 += item.rune3;
    this.item.rune4 += item.rune4;
    localStorage.setItem('items', JSON.stringify(this.item));
  }

  getItems() {
    return JSON.parse(localStorage.getItem('items'));

  }
}

module.exports = new items();
