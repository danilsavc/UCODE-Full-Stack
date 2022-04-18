let beginRange = +prompt("Start Range");
let endRange = +prompt("End Range");

checkDivison(beginRange, endRange);

function checkDivison(beginRange, endRange) {
    for(let i = beginRange; i <= endRange; i++) {
        let descriptions = " - ";
        if  (i  % 2 === 0) {
            descriptions = " is even";
        }
        if (i % 3 === 0 && i % 2 !== 0) {
            descriptions = " is a multiple of 3";
        }
        else if (i % 3 === 0) {
            descriptions = descriptions.concat(", a multiple of 3");
        }
        if (i % 10 === 0) {
            descriptions = descriptions.concat(", a multiple of 10");
        }

        console.log(i + descriptions + '\n');
    }
}