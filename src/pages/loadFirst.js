import home from "./home";
import title from"../images/title.jpg";
const header=document.querySelector("header");
const body=document.body;
let loadFirst=function(){
    let footer=document.createElement("div");
    footer.classList="footer";
    footer.textContent="Made by Gary-Love";
    let restaurantName=document.createElement("img");
    restaurantName.id="restaurantName";
    restaurantName.src=title;
    header.insertBefore(restaurantName,header.firstChild);
    body.appendChild(footer);
    home();
}
export default loadFirst;