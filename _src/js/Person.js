;(function() {

    class Person {
        constructor(data) {
            this.name = data.name;
            this.age = data.age;
            this.gender = data.gender;
            this.height = data.height;
            this.weight = data.weight;
        }

        greeting() {
            console.log('Hi, I am ' + this.name);
        }
    }

    if (typeof window.practice === 'undefined') {
        window.practice = {};
    }
    window.practice.Person = Person;

}());