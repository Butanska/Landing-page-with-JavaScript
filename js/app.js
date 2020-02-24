/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarMenu = document.getElementsByClassName('navbar__menu');

const navbarList = document.getElementById('navbar__list');

const navListItems = document.getElementsByClassName('menu__link');

const sectionIds = document.getElementsByTagName('section');

const fragment = document.createDocumentFragment();

const windowHeight = window.innerHeight || document.documentElement.clientHeight;

const windowWidth = window.innerWidth || document.documentElement.clientWidth;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const buildNavMenu = () => {
  for (let i=0; i<sectionIds.length; i++) {
    const anchor = document.createElement('a');
    anchor.href = `#${sectionIds[i].id}`;
    anchor.innerText = sectionIds[i].dataset["nav"];
    const newLi = document.createElement('li');
    newLi.appendChild(anchor);
    newLi.className = 'menu__link';
    newLi.setAttribute('id', `${sectionIds[i].id}_link`);
    fragment.appendChild(newLi);
  };
  navbarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport

//First check if section is in the viewport:

const checkIfInViewport = () => {
  for (let i=1; i<=sectionIds.length; i++) {
    let section = sectionIds[i-1];
    if (section.getBoundingClientRect().top <= (windowHeight/2) 
    && sectionIds[i]===undefined) {
      return section;
    } else if (section.getBoundingClientRect().top <= (windowHeight/2) 
    && sectionIds[i].getBoundingClientRect().top > windowHeight/2) {
    return section;
    };
   };
}

//Then add event listener for when active section is in viewport and add active classes:

const addActiveClass = () => {
  window.addEventListener('scroll', evt => {
    if(checkIfInViewport()!==undefined){
      let activeSection = checkIfInViewport();
      activeSection.classList.add('your-active-class');
      //Add active link class in navbar
      let activeLink = document.getElementById(`${activeSection.id}_link`);
      activeLink.classList.add('active__link');
      //Disable active state for rest of sections
      for (let section of sectionIds) {
        if (section.id != activeSection.id & section.classList.contains('your-active-class')) {
            section.classList.remove('your-active-class');
        }
    }
      //Disable active link class for rest of sections
      for (let link of navListItems) {
        if (link.id != activeLink.id & link.classList.contains('active__link')) {
            link.classList.remove('active__link');
        }
    }
    }
  });
}

// Scroll to anchor ID using the window.scroll method

const navbarClick = () => {
  for(let i=0; i<navListItems.length; i++){
    navListItems[i].addEventListener('click', evt => {
      let topOfSection = document.getElementById(`section${i+1}`).offsetTop;
          window.scroll({ top: topOfSection - document.querySelector('header').getBoundingClientRect().height, behavior: "smooth"});
      evt.preventDefault();
    })
  }
}

// Scroll to anchor ID on mobile devices in landscape

const navbarClickMobile = x => {
  if (x.matches) { // If media query matches
    for(let i=0; i<navListItems.length; i++){
      navListItems[i].addEventListener('click', evt => {
        let topOfSection = document.getElementById(`section${i+1}`).offsetTop;
        window.scroll({ top: topOfSection, behavior: "smooth"});
        evt.preventDefault();
      });
    };
    const landingContainers = document.getElementsByClassName('landing__container');
    for (let container of landingContainers) {
      container.style.padding = "20px";
      };
  } 
}

let x = window.matchMedia("(max-height: 414px)");

navbarClickMobile(x);

x.addListener(navbarClickMobile);

/**
 * End Main Functions
 * 
 * Begin Events
 * 
*/

// Build menu 

buildNavMenu ();

// Scroll to section on link click

navbarClick ();

// Set sections as active

addActiveClass();
