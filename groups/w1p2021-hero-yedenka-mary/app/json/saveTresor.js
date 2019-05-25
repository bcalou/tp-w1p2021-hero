class Save {
    constructor() {
        this.item2 = 'tresor';
    }
    save() {
        localStorage.setItem('item2', this.item2);
        localStorage.getItem('item2');
    }
    value() {
        return this.item2;
    }
}



module.exports = new Save();