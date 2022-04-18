let cookies = document.cookie;
let archive = document.querySelector('.output_text');

function update_screen(textAreaValue) {
  if (archive.innerHTML === '[Empty]') {
    archive.innerHTML = '';
    archive.insertAdjacentHTML('beforeend', `<div>-->` + textAreaValue + `</div>`);
    let textarea = document.querySelector('#inputText');
    textarea.value = '';
  }
  else {
    archive.insertAdjacentHTML('beforeend', `<div>--> `+ textAreaValue + `</div>`);
    let textarea = document.querySelector('#inputText');
    textarea.value = '';
  }
  j++;

  let textarea = document.querySelector('#inputText');
  textarea.value = '';
}

function addCookies() {
  let textAreaValue = document.querySelector('.text-color').value;
  if (textAreaValue === "") {
    alert("It's empty. Try to input something in \"Text input\"")
  }
  else {
    setCookie(cookies,textAreaValue,30);
    update_screen(textAreaValue);
  }

}

function ClearCookies() {
  let question = confirm('Are you sure?')
  if (question === true) {
    del_cookies();
    archive.innerHTML = '[Empty]';
  }
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function del_cookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function translation() {
  for (let i = 0; i < cookies.length; i++) {
    let key = getCookie(cookies);
    if(i === 0) {
      archive.innerHTML = `--> ${key}`
    } else {
      archive.innerHTML += `<div>--> ${key}</div>`
    }
  }
}

if (cookies.length === 0) {
  archive.innerHTML = '[Empty]';
} else {
  archive.innerHTML = '[Not empty]';
}

