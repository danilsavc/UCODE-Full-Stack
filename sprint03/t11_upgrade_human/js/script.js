class Human {
    constructor(options) {
        this.fname = options.firstName;
        this.lname = options.lastName;
        this.gender = options.gender;
        this.age = options.age;
        this.calories = options.calories ;
        this.img = options.img;
        this.hero = false;
    }

    sleepFor() {
        document.querySelector('#info').innerHTML = "I'm sleeping";
    }
    feed() {
        document.querySelector('#info').innerHTML = "Nom nom nom";
    }
}

class Superhero extends Human{
    fly() {
        document.querySelector('#info').innerHTML = `I'm flying`;
        setTimeout(()=> {
            document.querySelector('#info').innerHTML = "Shazam!";
            document.querySelector('img').src = 'assets/images/dancing.gif';
        }, 10000);
    }
    fight () {
        document.querySelector('#info').innerHTML ="Khhhh-chh..." + "Bang-g-g-g... Evil is defeated!";
    }
}

let human = new Human({
    firstName: setName(),
    lastName: setlastName(),
    gender: setGender(),
    age: setAge(),
    calories: setCalories(600),
    hero: false
});


let superhero = new Superhero(human);

document.querySelector('img').src = 'assets/images/human.gif';
document.querySelector('#fly').disabled = true;
document.querySelector('#fight').disabled = true;

setTimeout(() => {
    loop()
}, 5000);
setInterval(loop, 60000);

function loop() {
    if (superhero.hero === false) 
    {
        if (human.calories > 0) {
            human.calories -= 200;
            setCalories(human.calories);
        }
        if (human.calories < 500)
            document.querySelector('#info').innerHTML = "I'm still hungry";
    }
    else {
        if (superhero.calories > 0) {
            superhero.calories -= 200;
            setCalories(superhero.calories);
        }
        if (superhero.calories < 500)
            document.querySelector('#info').innerHTML = "I'm still hungry";
    }
}

function hero() {
    if(human.hero === false) {
        if(human.calories > 500) {
            setName("Shazam");
            setLastName("");
            superhero.hero = true;
            human.hero = true;
            superhero.calories = human.calories;
            document.querySelector('#info').innerHTML = "Shazam!";
            document.querySelector('img').src = 'assets/images/transformation.jpg';
            document.querySelector('#hero').innerText = 'Back to human';
            enableButtons();
            console.log(`human extended to superhero`);
        }
        else {
            document.querySelector('#info').innerHTML = "Not enough calories";
            console.log(`FAIL: human extended to superhero`);
        }
    }
    else if (superhero.hero === true) {
        setFirstName(human.firstName);
        setLastName(human.lastName);
        superhero.hero = false;
        human.hero = false;
        human.calories = superhero.calories;
        document.querySelector('#info').innerHTML = "I'm human";
        document.querySelector('img').src = 'assets/images/superhero.jpg';
        document.querySelector('#hero').innerText = 'Shazam!';
        document.querySelector('#fly').disabled = true;
        document.querySelector('#fight').disabled = true;
        console.log(`superhero decreased to human`);
    }
}

function feed() {
    if (superhero.hero === false) {
        if (human.calories < 500) {
            human.feed()
            document.querySelector('img').src = 'assets/images/eat.jpg'
            disableButtons();
            setTimeout(() => {
                human.calories += 200;
                setCalories(human.calories);
                document.querySelector('img').src = 'assets/images/superhero.jpg';
                document.querySelector('#info').innerHTML = "I'm human";
                enableButtons();
            }, 10000)
            console.log(`feeding successful`);
        }
        else {
            document.querySelector('#info').innerHTML = "I am not hungry";
            console.log(`feeding failed`);
        }
    }
    else {
        if (superhero.calories < 500) {
            superhero.feed()
            document.querySelector('img').src = 'assets/images/eat.jpg'
            disableButtons();
            setTimeout(() => {
                superhero.calories += 200;
                setCalories(superhero.calories);
                document.querySelector('img').src = 'assets/images/eat.jpg';
                document.querySelector('#info').innerHTML = "Shazam!";
                enableButtons();
            }, 10000)
            console.log(`feeding successful`);
        } 
        else {
            document.querySelector('#info').innerHTML = "I am not hungry";
            console.log(`feeding failed`);
        }
    }
}

function sleep() {
    if (superhero.hero === false) {
        document.querySelector('img').src = 'assets/images/sleep.jpg';
        disableButtons();
        human.sleepFor();
        setTimeout(() => {
            document.querySelector('#info').innerHTML = "I'm awake now";
            setTimeout(() => {
                document.querySelector('img').src = 'assets/images/superhero.jpg';
                document.querySelector('#info').innerHTML = "I'm human";
                enableButtons();
            },2000);
        },10000);
        console.log(`sleeping successful`);
    }
    else {
        document.querySelector('img').src = 'assets/images/sleep.jpg';
        disableButtons();
        superhero.sleepFor();
        setTimeout(() => {
            document.querySelector('#info').innerHTML = "I'm awake now";
            setTimeout(() => {
                document.querySelector('img').src = 'assets/images/sleep.jpg';
                document.querySelector('#info').innerHTML = "Ready to rock!";
                enableButtons();
            },2000);
            enableButtons();
        },10000);
        console.log(`sleeping successful`);
    }
}

function fly() {
    document.querySelector('img').src = 'assets/images/fly.jpg';
    superhero.fly();
    disableButtons();
    setTimeout(() => {
        document.querySelector('img').src = 'assets/images/fly.jpg'
        document.querySelector('#info').innerHTML = "Shazam!"
        enableButtons();
    },10000);
    console.log(`flying successful`);
}

function fight() {
    document.querySelector('img').src = 'assets/images/fight.jpg';
    superhero.fight();
    disableButtons();
    setTimeout(() => {
        document.querySelector('img').src = 'assets/images/fight.jpg'
        document.querySelector('#info').innerHTML = "Shazam!"
        enableButtons();
    },10000);
    console.log(`fighting successful`);
}

function setName(name) {
    let firstName = document.getElementById('firstName');
    if(name === undefined) {
        while(firstName.innerText === "" || firstName.innerText === null) {
            firstName.innerText = prompt("What is name your Superhero?");
        }
    }
    else firstName.innerText = name;
    return firstName.innerText;
}

function setlastName(lastname) {
    let lastName = document.getElementById('lastName');
    if(lastname === undefined) {
        while(lastName.innerText === "" || lastName.innerText === null) {
            lastName.innerText = prompt("What is name your Superhero?");
        }
    }
    else lastName.innerText = lastname;
    return lastName.innerText;
}

function setGender() {
    let gender = document.getElementById('gender');
    while(gender.innerText === "" || gender.innerText === null) {
        gender.innerText = prompt("Is your hero male or female?", "male");
        let regex = RegExp('^male$|^female$|^$', 'i');
        if (!regex.test(gender.innerText)) {
            alert('ERROR: Accepts only male, female gender!');
            gender.innerText = null;
        }
    }
    console.log(`gender set to ${gender.innerText}`);
    return gender.innerText;
}

function setAge() {
    let age = document.getElementById('age');
    while(age.innerText === "" || age.innerText === null) {
        age.innerText = prompt("What's the age of your hero?");
        let regex = RegExp(/^[1-9]|[0-9]{0,4}$/)
        if (!regex.test(age.innerText)) {
            alert('ERROR: Accepts only digits, cannot start with a zero, no more than 3 characters!');
            age.innerText = null;
        }
    }
    console.log(`age set to ${age.innerText}`);
    return age.innerText;
}

function setCalories(calories) {
    let cl = document.getElementById('calories');
    cl.innerText = calories;
    console.log(`calories set to ${cl.innerText}`);
    return cl.innerText;
}


function disableButtons() {
    document.querySelector('#feed').disabled = true;
    document.querySelector('#sleep').disabled = true;
    document.querySelector('#hero').disabled = true;
    document.querySelector('#fly').disabled = true;
    document.querySelector('#fight').disabled = true;
}

function enableButtons() {
    document.querySelector('#feed').disabled = false;
    document.querySelector('#sleep').disabled = false;
    document.querySelector('#hero').disabled = false;
    document.querySelector('#fly').disabled = false;
    document.querySelector('#fight').disabled = false;
}