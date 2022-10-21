const select = document.getElementById("main-header-select");
const card_js = document.querySelectorAll('.h-c-j');
const html_css = document.querySelectorAll('.h-c');

const resetFilterList = () => {
    card_js.forEach(element => {
        element.style.display = "flex";
    });
    html_css.forEach(element => {
        element.style.display = "flex";
    });
 }
const filterList = () => {
    if(select.value === "h-c")
        {
            resetFilterList();
            card_js.forEach(element => {
                element.style.display = "none";
            });
        }
    else if(select.value === "h-c-j")
    {
        resetFilterList();
        html_css.forEach(element => {
            element.style.display = "none";
        });
    }
    else{
        resetFilterList();
    }


}

select.addEventListener('click',filterList)

const slider = document.querySelector('.switch input');
const span = document.querySelector('.switch span');
let theme = localStorage.getItem("theme");


const nightMode = () => {
    const body = document.querySelector('body');
    const selectMain = document.querySelector('main #main-header-select');
    const selectMainOptions = document.querySelectorAll('#main-header-select option');
    if(slider.checked == false)
    {
        selectMain.classList.remove('dark-mode-select');
        selectMainOptions.forEach(element => {
            element.classList.remove('dark-mode-select');
        });

        selectMain.classList.add('light-mode-select');
        selectMainOptions.forEach(element => {
            element.classList.add('light-mode-select');
        });
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        theme = "light";
    }
    else{
        selectMain.classList.add('dark-mode-select');
        selectMainOptions.forEach(element => {
            element.classList.add('dark-mode-select');
        });
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
}

span.addEventListener("click", nightMode);

if (theme === "dark") {
    document.querySelector("body").classList.add("dark-mode");
    slider.checked = false;
}

if (theme === "light") {
    document.querySelector("body").classList.add("light-mode");
    slider.checked = true;
}