function onClick() {
    const input = document.querySelectorAll("input");
    const div = document.querySelector(".reply");

    for (let i = 0; i < 3; i++) {
        if (input[i].checked) {
            if (input[i].classList.contains("one")) {
                div.innerText = `You are gay`;
            }
            else if (input[i].classList.contains("two")) {
                div.innerText = `You are not gay`;
            }
            else if (input[i].classList.contains("three")) {
                div.innerText = `You are lox`;
            }
        }
    }
}

