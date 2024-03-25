/**
 * Handles the transitions and expanding of hamburgur button and mobile nav menus.
 * */

// Hamburger Button and Menu
var menuItems = document.getElementById("menu-items");
var hamburgerBtn = document.getElementById('hamburger-button');

// Initialize Menu Height
menuItems.style.maxHeight = "0px";

// Initialize internal menu state
var isMenuOpen = false;

function menuToggle() {
    // Toggle hamburger button style
    if (isMenuOpen) {
        hamburgerBtn.classList.remove('open');
    } else {
        hamburgerBtn.classList.add('open');
    }

    // Toggle menu style
    isMenuOpen = !isMenuOpen;

    menuItems.style.maxHeight = !isMenuOpen ? "0px" : "350px";
}