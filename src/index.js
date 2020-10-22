import {home} from './home';

let main = document.querySelector('#content');

const navbar = () => {
    let nav = main.appendChild(document.createElement('nav'));
    nav.setAttribute("class","navbar navbar-expand-lg navbar-light bg-light justify-content-between")
    nav.appendChild(document.createElement('a')).setAttribute("class", "navbar-brand");
    document.querySelector('.navbar-brand').innerHTML = "RESTURANT";
    let nav_div = nav.appendChild(document.createElement('div'));
    nav_div.innerHTML = `
         <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact us</a>
          </li>
        </ul>
    `
};


navbar()
home()


