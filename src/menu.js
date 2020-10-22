export const menu = () => {
    let section = main.appendChild(document.createElement('section'))
    let section_div =  section.appendChild(document.createElement('div'))
    section_div.setAttribute("class","row mt-2")
    let section_div_div = section_div.appendChild(document.createElement('div'))
    section_div_div.setAttribute("class", "card col col-3");
    let section_div_div_img = section_div_div.appendChild(document.createElement("img"))
    section_div_div_img.setAttribute("class", "card-img-top");
    let card = section_div_div.appendChild(document.createElement('div'))
    card.setAttribute("class", "card-body")
    card.innerHTML = `
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>`
}
 let main = document.querySelector('#content');