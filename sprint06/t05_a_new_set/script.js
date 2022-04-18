let result = [];
const form = document.getElementsByTagName('form');

form[0].addEventListener('submit', Result);

function Result(element) {
    let render = 'POST<br><br>Array<br>(<br>';
    element.preventDefault();
    [...form[0]].map(item => {
        if (item.name) {
            result.push([item.name, item.value]);
            render += `\t [${item.name}] => ${item.value}\n <br>`;
        }
    });
    render += ')</br>';
    document.querySelector('#result').innerHTML = render;
}
