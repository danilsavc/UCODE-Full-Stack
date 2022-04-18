function FirsLastName() {
    var First = prompt("Enter First name");
    var Last = prompt("Enter Last name");

    let check1 = First.match(/^[a-z]+$/i);
    let check2 = Last.match(/^[a-z]+$/i);

    if (check1 && check2) {
        alert("Hey," + " " + First.charAt(0).toUpperCase() + First.slice(1) + " " + Last.charAt(0).toUpperCase() + Last.slice(1));
    }
    else {
        alert("Wrong");
    }
    
}

FirsLastName();
