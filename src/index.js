import home from './home';
import menu from './menu';
import contact from './contact';

const main = document.querySelector('#content');

const navbar = () => {
  const nav = main.appendChild(document.createElement('nav'));
  nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light justify-content-between');
  nav.appendChild(document.createElement('a')).setAttribute('class', 'navbar-brand');
  document.querySelector('.navbar-brand').innerHTML = 'RESTURANT';
  const navDiv = nav.appendChild(document.createElement('div'));
  navDiv.innerHTML = `
         <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link home" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link menu" href="#">Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link contact" href="#">Contact us</a>
          </li>
        </ul>`;

  return nav;
};

navbar();
home();

document.querySelector('.home').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#content').removeChild(document.querySelector('.sec'));
  home();
});

document.querySelector('.menu').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#content').removeChild(document.querySelector('.sec'));
  menu();
});

document.querySelector('.contact').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#content').removeChild(document.querySelector('.sec'));
  contact();
});
