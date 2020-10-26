const main = document.querySelector('#content');
const home = () => {
  const section = main.appendChild(document.createElement('section'));
  section.setAttribute('class', 'sec');
  const sectioDiv = section.appendChild(document.createElement('div'));
  sectioDiv.setAttribute('class', 'jumbotron  m-2 child');
  sectioDiv.appendChild(document.createElement('h1')).setAttribute('class', 'display-4');
  document.querySelector('.display-4').innerHTML = 'Hello, Welcome to the Resturant';
  sectioDiv.appendChild(document.createElement('p')).setAttribute('class', 'lead');
  document.querySelector('.lead').innerHTML = 'Feeling Hungry!!! Order Here';

  return section;
};

export default home;