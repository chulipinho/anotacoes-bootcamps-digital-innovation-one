function changeText() {
    const lightModeText = "Light Mode";
    const darkModeText = "Dark Mode";
    
    const body = document.getElementById("body");
    const mainText = document.getElementById("main-text");

    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightModeText;
        mainText.innerHTML = darkModeText + ' ON';
    }else {
        button.innerHTML = darkModeText;
        mainText.innerHTML = lightModeText + ' ON';
    }
}

function toggleDarkMode() {
    const darkModables = document.getElementsByClassName("darkmodable");
    [...darkModables].map((e) => e.classList.toggle(darkModeClass));
    changeText();
}

const darkModeClass = "dark-mode";
const button = document.getElementById("mode-selector");

button.addEventListener("click", toggleDarkMode)