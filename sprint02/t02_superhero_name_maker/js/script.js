function func() {
    var name_animal, gender, age;

    regexp = RegExp(/[a-zA-Z]$/);

    animal = prompt("What animal is the superhero most similar to?");
    if(animal.length > 20 || !regexp.test(animal)){
        alert("error");
        return 0;
    }

    gender = prompt("Is the superhero male or female? Leave blank if unknown or other");
    if (!/^(male|female|)$/.test(gender)) {
        alert("error");
        return;
    }

    age = prompt("How old is the superhero?");
    if (!/^(?!0)[0-9]{1,5}$/.test(age)) { 
        alert("error"); 
        return; 
    }

    if (age < 18 && gender.toLowerCase() == "male") { 
        description = "boy"; 
    } else if (age < 18 && gender.toLowerCase() == "female") { 
        description = "girl"; 
    } else if (age < 18 && gender.toLowerCase() == "") { 
        description = "kid"; 
    } else if (age > 18 && gender.toLowerCase() == "male") { 
        description = "man"; 
    } else if (age > 18 && gender.toLowerCase() == "female") { 
        description = "woman"; 
    } else if (age > 18 && gender.toLowerCase() == "") { 
        description = "hero"; 
    } 
 
    alert("The superhero name is: " + name_animal + "-" + description + "!");
}

func();
