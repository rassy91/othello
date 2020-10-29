;(function() {

    document.addEventListener('DOMContentLoaded', function() {

        const foo = (name) => {
            console.log(name);
        };

        foo('igarashi');

        const data = {
            name: 'Jon',
            age: 20,
            gender: 'male',
            height: 180,
            weight: 80
        };

        const p1 = new window.practice.Person(data);
        p1.greeting();

    });

}());