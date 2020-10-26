let main = document.querySelector('#content');
const menu = () => {
    let section = main.appendChild(document.createElement('section'))
    section.setAttribute("class","sec")
    let section_div =  section.appendChild(document.createElement('div'))
    section_div.setAttribute("class","row mt-2 child main-section")
    let section_div_div = section_div.appendChild(document.createElement('div'))
    section_div_div.setAttribute("class", "card col col-3");
    let section_div_div_img = section_div_div.appendChild(document.createElement("img"))
    section_div_div_img.setAttribute("class", "card-img-top");
    section_div_div_img.setAttribute("src", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636")
    let card = section_div_div.appendChild(document.createElement('div'))
    card.setAttribute("class", "card-body")
    card.innerHTML = `
    <h5 class="card-title">Vegeterian</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Add to cart</a>`

    let section_div_div1 = section_div.appendChild(document.createElement('div'))
    section_div_div1.setAttribute("class", "card col col-3");
    let section_div_div1_img = section_div_div1.appendChild(document.createElement("img"))
    section_div_div1_img.setAttribute("class", "card-img-top");
    section_div_div1_img.setAttribute("src", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636")
    let card1 = section_div_div1.appendChild(document.createElement('div'))
    card1.setAttribute("class", "card-body")
    card1.innerHTML = `
    <h5 class="card-title">Vegeterian</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Add to cart</a>`
    
    let section_div_div2 = section_div.appendChild(document.createElement('div'))
    section_div_div2.setAttribute("class", "card col col-3");
    let section_div_div2_img = section_div_div2.appendChild(document.createElement("img"))
    section_div_div2_img.setAttribute("class", "card-img-top");
    section_div_div2_img.setAttribute("src", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636")
    let card2 = section_div_div2.appendChild(document.createElement('div'))
    card2.setAttribute("class", "card-body")
    card2.innerHTML = `
    <h5 class="card-title">Vegeterian</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Add to cart</a>`

    let section_div_div3 = section_div.appendChild(document.createElement('div'))
    section_div_div3.setAttribute("class", "card col col-3");
    let section_div_div3_img = section_div_div3.appendChild(document.createElement("img"))
    section_div_div3_img.setAttribute("class", "card-img-top");
    section_div_div3_img.setAttribute("src", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636")
    let card3 = section_div_div3.appendChild(document.createElement('div'))
    card3.setAttribute("class", "card-body")
    card3.innerHTML = `
    <h5 class="card-title">Vegeterian</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Add to cart</a>`


    return section
}

export default menu;