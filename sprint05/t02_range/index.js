exports.checkDivision = function(beginRange = 1, endRange = 60) {
    for(let i = beginRange; i <= endRange; i++) {
        let descriptions = " - ";
        if  (i  % 2 === 0) {
            descriptions = " is divisible by 2";
        }
        if (i % 3 === 0 && i % 2 !== 0) {
            descriptions = " is divisible by 3";
        }
        else if (i % 3 === 0) {
            descriptions = descriptions.concat(", is divisible by 3");
        }
        if (i % 10 === 0) {
            descriptions = descriptions.concat(", is divisible by 10");
        }

        console.log('The number ' + i + descriptions);
    }
}

