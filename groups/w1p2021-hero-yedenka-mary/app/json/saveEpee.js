class Save {
    constructor() {
        this.outil = 'epee';
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