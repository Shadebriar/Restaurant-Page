import home from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';
import about from './modules/about.js';

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');
const aboutButton = document.querySelector('#about');

homeButton.addEventListener('click', home);
menuButton.addEventListener('click', menu);
contactButton.addEventListener('click', contact);
aboutButton.addEventListener('click', about);

home();