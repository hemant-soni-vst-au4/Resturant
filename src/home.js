let main = document.querySelector('#content');
const home = () => {
    let section = main.appendChild(document.createElement('section'))
    let section_div =  section.appendChild(document.createElement('div'))
    section_div.setAttribute("class", "jumbotron m-2")
    section_div.appendChild(document.createElement('h1')).setAttribute("class", "display-4")
    document.querySelector(".display-4").innerHTML = "Hello, Welcome to the Resturant";
    section_div.appendChild(document.createElement('p')).setAttribute("class", "lead")
    document.querySelector(".lead").innerHTML = "Feeling Hungry!!! Order Here";
    
    return section;
}

export default home;