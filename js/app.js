import createHamburgerMenu from "./hamburger.js";
import toggleMode from "./toggle.js";
import createScrollButton from "./scroll.js";

document.addEventListener("DOMContentLoaded", (e) => {
    createHamburgerMenu(
        ".panel-btn", ".panel", ".menu a"
    );
    toggleMode("toggle-colors");
    createScrollButton(".scroll");
}); 

console.log('Hello learning to invoke JS code from HTML');