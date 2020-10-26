let main = document.querySelector('#content');

const contact = () => {
    let section = main.appendChild(document.createElement('section'))
    section.setAttribute("class","sec")
    let section_div =  section.appendChild(document.createElement('div'))
    section_div.setAttribute("class", "card")
    let section_div_div = section_div.appendChild(document.createElement('div'))
    section_div_div.setAttribute("class", "card-header bg-primary mt-4");
    document.querySelector(".card-header").innerHTML = "Contact Here"
    section_div.appendChild(document.createElement('div')).setAttribute("class", "card-body");
    document.querySelector(".card-body").innerHTML = "+91-8800926672"
    section_div.appendChild(document.createElement('div')).setAttribute("class", "card-footer");
    document.querySelector(".card-footer").innerHTML = "Thank you"
    
    return section;

}
export default contact;