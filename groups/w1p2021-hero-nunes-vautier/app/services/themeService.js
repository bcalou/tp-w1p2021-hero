import Sound from './soundService';

/**
 * ### This class handles the music theme in background
 * @class theme
 */
class theme {
  /**
   *Creates an instance of theme.
   * @param {String} src a string source to the audio file
   * @param {Number} volume A volume number between 0 and 1
   * @memberof theme
   */
  constructor(src, volume) {
    this.src = new Sound(src);
    this.src.setVolume(volume);

    if (!localStorage.getItem('music')) localStorage.setItem('music', 'on');
    if (!localStorage.getItem('sounds')) localStorage.setItem('sounds', 'on');
    if (!localStorage.getItem('volume')) localStorage.setItem('volume', 0.5);
    if (!localStorage.getItem('volumeEvents')) localStorage.setItem('volumeEvents', 0.5);
  }

  /**
   * Change the theme music
   * @param {String} src a string source to the audio file
   * @param {Boolean} loop true if you want the sound to loop
   * @memberof theme
   */
  change(src, loop) {
    this.src.pause();
    document.body.removeChild(this.src.sound);
    this.src = new Sound(src, loop);
  }
  /**
   * Pause the sound
   * @memberof theme
   */
  pause() {
    this.state = 'stopped';
    this.src.pause();
  }
  /**
   * Play the sound
   * @memberof theme
   */
  play() {
    if (document.querySelector('.settings #sound').checked) {
      this.state = 'playing';
      this.src.play();
    } else {
      console.warn('Could not launch sound due to disabled music settings.');
    }
  }
  /**
   * Change sounds volume
   * @param {Number} volume A volume number between 0 and 1
   * @memberof theme
   */
  setVolume(volume) {
    this.src.setVolume(volume);
  }
}

module.exports = new theme('/sounds/home-theme.mp3', localStorage.getItem('volume'));
