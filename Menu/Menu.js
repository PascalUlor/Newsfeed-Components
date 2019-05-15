
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  if(![...menu.classList].includes('menu--open')) {
    menu.classList.add('menu--open')
    console.log(menu.classList);
  }else if([...menu.classList].includes('menu--open')) {
    menu.classList.remove('menu--open')
    console.log(menu.classList);
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
