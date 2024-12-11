var cookieName = "username";

function loadPage() {
    var username = getCookie();
    
    if (username !== ""){
        updateDom(username);
    }
}

function updateDom(username){
    var userInputComponent = document.getElementById("username");
    var nametag = document.getElementById("nametag");
    var buttonComponent = document.getElementById("button");
    var cookieButton = document.getElementById("cookieButton");

    nametag.innerHTML = "Hello " + username + "!";
    userInputComponent.hidden = true;
    buttonComponent.hidden = true;
    cookieButton.hidden = false;
}

function buttonClick() {
    var username = document.getElementById("username").value;
  
    saveCookie(username);
    updateDom(username);
}

function saveCookie(value) {
    var expiryDate = new Date();

    expiryDate.setTime(expiryDate.getTime() + 1000 * 60 * 60 * 24 * 365);   // Expires in one year.

    document.cookie = encodeURIComponent(cookieName + "=" + value + "; expires=" + expiryDate + "; path=/");
    console.log(decodeURIComponent(document.cookie));

    console.log("here");
}

function deleteCookie() {
    var expiryDate = new Date();

    expiryDate.setTime(expiryDate.getTime());   // Expires in one year.

    document.cookie = encodeURIComponent(cookieName + "=; expires=" + expiryDate + "; path=/");
    location.reload();
}

function getCookie() {
    let cookies = decodeURIComponent(document.cookie);
    let crumbs = cookies.split(';');

    for (let i = 0; i < crumbs.length; i++) {
        let x = crumbs[i].trim();
        if (x.indexOf(cookieName) == 0) {
            return x.split('=')[1];
        }
    }

    return "";
}
