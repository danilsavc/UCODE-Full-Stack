let output = document.getElementById("output-text");
let history = document.getElementById("history");
let butt = document.querySelector(".butt");
let once = document.getElementById("once");
var text = '';
var result, num;
var arr = [];
var pars = false;
var pars2 = false;
var pars3 = false;


function InputToOutput (value) {
    if (value === 'C') {
        text = '';
        output.innerText = "0";
        return
    }
    if (value === '+' || value === '-' || value === "*" || value === "/" || value === '%') {
        if (output.innerText != "0") {
            pars2 = true;
        }
        if (value === '%') {
            pars = true;
        }
        text = text + " " + value + " ";
    }
    else if (value == "+/-") {
        let test = output.innerText;
        output.innerText = "";
        output.innerText = "-";
        output.innerText = output.innerText.concat(test);
        test = text;
        text = "";
        text = "-";
        text = text.concat(test);
    }
    else if (value === '=') {
        if (text == '') {
            return;
        }
        if (pars == true) {
            console.log(text);
            Parse_String(text);
            pars = false;
        }
        else {
            history.innerText = text;
            let result1 = eval(text);
            output.innerText = result1;
            pars3 = true;
            console.log(text);
            console.log(result1);
        }
        text = '';
        return;
    }
    else {
        if (output.innerText == "0" || pars2 == true || pars3 == true) {
            output.innerText = '';
            pars2 = false;
            pars3 = false;
        }
        output.innerText = output.innerText.concat(value);
        text = text + value;
    }
    // if (value === '+') {

    // }
    // else if (value === '-') {

    // }
    // else if (value === '&#215;') {

    // }
    // else if (value === '&#247;') {

    // }
    // else if (value === '+/-') {

    // }
    // else if (value === '%') {

    // }
    // else if (value === 'C') {

    // }
    // else if (value === '.') {

    // }
    // else if (value === '=') {

    // }
    // else if (Number.isInteger(value) === true) {
    //     result = result.concat(value);
    // }
}

function Parse_String (text) {
    
    arr = text.split(" ");
    let res;
    let op;
    for (let i = 0; i < arr.length; i++) {
        
        if (i == 0) {
            res = Number(arr[0]);
            continue;
        }
        if (arr[i] === "+") {
            op = '+';
            continue;
        }
        else if (arr[i] === "-") {
            op = '-';
            continue;
        }
        else if (arr[i] === "*") {
            op = '*';
            continue;
        }
        else if (arr[i] === "/") {
            op = '/';
            continue;
        }
        else if (arr[i] === "%") {
            res = 0;
            for (let j = 0; j < arr.length; j++) {
                if (j == 0) {
                    res = Number(arr[0]);
                    continue;
                }
                if (j + 3 == arr.length) {
                    res = ((res * arr[j])/100) + res;
                    break;
                }
                if (arr[j] === "+") {
                    op = '+';
                    continue;
                }
                else if (arr[j] === "-") {
                    op = '-';
                    continue;
                }
                else if (arr[j] === "*") {
                    op = '*';
                    continue;
                }
                else if (arr[j] === "/") {
                    op = '/';
                    continue;
                }
                let num1 = Number(arr[j]);
                if (Number.isInteger(num1)) {
                    if (op === '+') {
                        res = res + Number(arr[j]);
                    }
                    else if (op === '-') {
                        res = res - Number(arr[j]);
                    }
                    else if (op === '*') {
                        res = res * Number(arr[j]);
                    }
                    else if (op === '/') {
                        res = res / Number(arr[j]);
                    }
                }
            }
            break;   
        }
        // let num1 = Number(arr[i]);
        // if (Number.isInteger(num1)) {
        //     if (op === '%') {
        //         res = (arr[i] * res) / 100;
        //     }

        //     else if (op === '+') {
        //         res = res + Number(arr[i]);
        //     }
        //     else if (op === '-') {
        //         res = res - Number(arr[i]);
        //     }
        //     else if (op === '*') {
        //         res = res * Number(arr[i]);
        //     }
        //     else if (op === '/') {
        //         res = res / Number(arr[i]);
        //     }
        // }
        // else {
        //     console.log("Tut");
        // }
        
    }
    output.innerText = res;
    console.log(res);
}

