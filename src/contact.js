const main = document.querySelector('#content');

const contact = () => {
  const section = main.appendChild(document.createElement('section'));
  section.setAttribute('class', 'sec');
  const sectionDiv = section.appendChild(document.createElement('div'));
  sectionDiv.setAttribute('class', 'card');
  const sectionDIvDiv = sectionDiv.appendChild(document.createElement('div'));
  sectionDIvDiv.setAttribute('class', 'card-header bg-primary mt-4');
  document.querySelector('.card-header').innerHTML = 'Contact Here';
  sectionDiv.appendChild(document.createElement('div')).setAttribute('class', 'card-body');
  document.querySelector('.card-body').innerHTML = '+91-8800926672';
  sectionDiv.appendChild(document.createElement('div')).setAttribute('class', 'card-footer');
  document.querySelector('.card-footer').innerHTML = 'Thank you';

  return section;
};
export default contact;