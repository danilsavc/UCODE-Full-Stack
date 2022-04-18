document.querySelector('#images').src = 'assets/images/1.png';

var i = 1;

function next_img() {
    

    if(i == 1){
        document.querySelector('#images').src = 'assets/images/2.png';
        i=2;
    }
    else if(i == 2){
        document.querySelector('#images').src = 'assets/images/3.png';
        i=3;
    }
    else if(i == 3){
        document.querySelector('#images').src = 'assets/images/1.png';
        i = 1;
    }
}

setInterval(() => {
    next_img();
},3000);

function prev() {
    if(i == 1){
        document.querySelector('#images').src = 'assets/images/3.png';
        i=3;
    }
    else if(i == 2){
        document.querySelector('#images').src = 'assets/images/1.png';
        i=1;
    }
    else if(i == 3){
        document.querySelector('#images').src = 'assets/images/2.png';
        i=2;
    }
    
}