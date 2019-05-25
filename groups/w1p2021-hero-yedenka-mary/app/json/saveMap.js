class Save {
    constructor() {
        this.item = 'carte';
    }
    save() {
        localStorage.setItem('item', this.item);
        localStorage.getItem('item');
    }
    value() {
        return this.outil;
    }
}



module.exports = new Save();