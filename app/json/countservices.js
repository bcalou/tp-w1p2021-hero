class CountService {
    constructor() {
        if (localStorage.getItem('course')) {
            this.course = localStorage.getItem('course');
        } else {
            this.course = 0;
        }

    }
    increment() {
        this.course++;
        localStorage.setItem('course', this.course);
        localStorage.getItem('course');
    }
    value() {
        return this.course;


    }
}

module.exports = new CountService();