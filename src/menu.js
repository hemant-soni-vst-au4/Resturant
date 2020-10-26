const main = document.querySelector('#content');
const menu = () => {
  const section = main.appendChild(document.createElement('section'));
  section.setAttribute('class', 'sec');
  const sectionDiv = section.appendChild(document.createElement('div'));
  sectionDiv.setAttribute('class', 'row mt-2 child main-section');
  const sectionDivDiv = sectionDiv.appendChild(document.createElement('div'));
  sectionDivDiv.setAttribute('class', 'card col col-3');
  const sectionDivDivImg = sectionDivDiv.appendChild(document.createElement('img'));
  sectionDivDivImg.setAttribute('class', 'card-img-top');
  sectionDivDivImg.setAttribute('src', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636');
  const card = sectionDivDiv.appendChild(document.createElement('div'));
  card.setAttribute('class', 'card-body');
  card.innerHTML = `
    <h5 class="card-title">Vegeterian</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Add to cart</a>`;

  const sectionDivDiv1 = sectionDiv.appendChild(document.createElement('div'));
  sectionDivDiv1.setAttribute('class', 'card col col-3');
  const sectionDivDiv1Img = sectionDivDiv1.appendChild(document.createElement('img'));
  sectionDivDiv1Img.setAttribute('class', 'card-img-top');
  sectionDivDiv1Img.setAttribute('src', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636');
  const card1 = sectionDivDiv1.appendChild(document.createElement('div'));
  card1.setAttribute('class', 'card-body');
  card1.innerHTML = `
    <h5 class="card-title">Vegeterian</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Add to cart</a>`;

  const sectionDivDiv2 = sectionDiv.appendChild(document.createElement('div'));
  sectionDivDiv2.setAttribute('class', 'card col col-3');
  const sectionDivDiv2Img = sectionDivDiv2.appendChild(document.createElement('img'));
  sectionDivDiv2Img.setAttribute('class', 'card-img-top');
  sectionDivDiv2Img.setAttribute('src', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636');
  const card2 = sectionDivDiv2.appendChild(document.createElement('div'));
  card2.setAttribute('class', 'card-body');
  card2.innerHTML = `
    <h5 class="card-title">Vegeterian</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Add to cart</a>`;

  const sectionDivDiv3 = sectionDiv.appendChild(document.createElement('div'));
  sectionDivDiv3.setAttribute('class', 'card col col-3');
  const sectionDivDiv3Img = sectionDivDiv3.appendChild(document.createElement('img'));
  sectionDivDiv3Img.setAttribute('class', 'card-img-top');
  sectionDivDiv3Img.setAttribute('src', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636');
  const card3 = sectionDivDiv3.appendChild(document.createElement('div'));
  card3.setAttribute('class', 'card-body');
  card3.innerHTML = `
    <h5 class="card-title">Vegeterian</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Add to cart</a>`;


  return section;
};

export default menu;