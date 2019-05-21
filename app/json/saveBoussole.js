class Save {
    constructor() {
        this.outil = 'boussole';
    }
    save() {
        localStorage.setItem('outil', this.outil);
        localStorage.getItem('outil');
    }
    value() {
        return this.outil;
    }
}



module.exports = new Save();