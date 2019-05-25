/* Import */
import { dataFile } from "../js/blocs/declarations/declarationsData";
//

/* Export */
export let selectNarrator, selectTalk, select;
export let transformationSelect = {
  man: `{{ manName }}`,
  woman: `{{ missName }}`
};
//

/* Class */
class StoryClass {
  constructor() {
    this.numberSteps = 0;
  }

  /*
   * Define the value for each item selected
   */
  itemsDefine(itemsArray) {
    console.log(this.numberSteps);
    itemsArray.forEach(select => {
      dataFile.UFO.characters.items[select.type] = select.value;
    });
  }
  //

  /*
   *
   */
  endValue(steps) {
    this.numberSteps = steps;
  }
  //
}

module.exports = new StoryClass();
//
