const buttons = document.querySelectorAll(".button-rating");
const buttonSubmit = document.querySelector("#card-check-button");
const mainCard = document.querySelector(".card-rating");
const endCard = document.querySelector(".card-end");
const rate = document.querySelector("#rate-client");
let selected = -1;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        if (selected >= 0) {
            buttons[selected].removeAttribute("id");
        }
    });

    buttons[i].addEventListener('click', function (event) {
        buttons[i].setAttribute("id","clicked");
        selected = i;
    });
}

buttonSubmit.addEventListener('click', function (event) {
    if (selected >= 0) {
        mainCard.style.display = "none";
        endCard.style.display = "flex";
        rate.innerHTML = selected+1;
    }
});