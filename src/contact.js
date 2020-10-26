let main = document.querySelector('#content');

const home = () => {
    let section = main.appendChild(document.createElement('section'))
    section.setAttribute("class","sec")
    let section_div =  section.appendChild(document.createElement('div'))
    section_div.setAttribute("class", "panel-group")
    let section_div_div = section_div.appendChild(document.createElement('div')).setAttribute("class", "panel panel-primary"
    
    document.querySelector(".display-4").innerHTML = "Hello, Welcome to the Resturant";
    section_div.appendChild(document.createElement('p')).setAttribute("class", "lead")
    document.querySelector(".lead").innerHTML = "Feeling Hungry!!! Order Here";

}
export default contact;