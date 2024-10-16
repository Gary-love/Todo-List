import kaneImg from"../images/Kane.jpg";
import cmPunkImg from"../images/cmPunk.jpg";
import drewImg from"../images/drew.jpg";
import shamusImg from"../images/shamus.jpeg";
const content=document.querySelector("#content");
let about=function(){
    content.style=`
    overflow-y: auto; 
    max-height: 900px;
    `
    let staff=document.createElement("div");
    staff.id="staff";
    staff.textContent="Our Staff";
    let location=document.createElement("div");
    let kane=document.createElement("div");
    let cmPunk=document.createElement("div");
    let drew=document.createElement("div");
    let shamus=document.createElement("div");
    let kanePic=document.createElement("img");
    let cmPunkPic=document.createElement("img");
    let drewPic=document.createElement("img");
    let shamusPic=document.createElement("img");
    let masterChef=document.createElement("p");
    let desertChef=document.createElement("p");
    let waiter1=document.createElement("p");
    let waiter2=document.createElement("p");
    masterChef.textContent="Master chef/Chef from hell: Kane";
    desertChef.textContent="Desert chef/Straight Edge: CmPunk";
    waiter1.textContent="Waiter/A good feller: Shamus";
    waiter2.textContent="Waiter/Hypocrite: Drew";
    kanePic.classList="pics";
    cmPunkPic.classList="pics";
    drewPic.classList="pics";
    shamusPic.classList="pics";
    kanePic.id="kane";
    cmPunkPic.id="cmPunk";
    drewPic.id="drew";
    shamusPic.id="shamus";
    kanePic.src=kaneImg;
    cmPunkPic.src=cmPunkImg;
    drewPic.src=drewImg;
    shamusPic.src=shamusImg;
    location.id="location";
    location.textContent="We are located at 123 Main St, Champion's Feast, CA 90210";
    kane.textContent="Meet Chef Kane, the culinary titan who’s as intense in the kitchen as he was in the ring! Known for his fiery dishes and larger-than-life personality, Kane brings a unique blend of flavor and flair to every meal. With his signature red and black attire replaced by a chef’s apron, he whips up everything from spicy BBQ ribs to decadent desserts that could take down even the toughest competitor. Fun fact: he’s also the brother of WWE legend The Undertaker, proving that talent runs deep in the family—whether in the ring or the kitchen!"
    cmPunk.textContent="Introducing Chef CM Punk, the master of decadent desserts! Known for his edgy flair and rebellious spirit, Punk creates mouthwatering treats that challenge the status quo. His specialty? The legendary \"CM Punk Ice Cream Bars,\" a delicious twist on a classic, featuring bold flavors and an unforgettable crunch. But be warned: always keep him away from Drew! Their playful rivalry could turn a simple pastry into a culinary showdown. With CM Punk behind the whisk, every dessert is a sweet rebellion!"
    shamus.textContent="Meet Sheamus, our charismatic waiter known for his larger-than-life personality! With a hearty laugh and a charming accent, he brings an infectious energy to every table. Always ready with a clever quip, he’ll make sure your dining experience is filled with fun. When it comes to drinks, Sheamus loves to introduce guests to unique craft beers and playful cocktails, ensuring you have a great time—just watch out, or he might have you raising a toast all night long!"
    drew.textContent="Introducing Drew, the life of the party and your go-to waiter for a fantastic evening! With a warm smile and a knack for mixing the perfect drink, he knows how to create a lively atmosphere. Whether he’s recommending a delicious wine or concocting a signature cocktail, Drew is all about elevating your experience. Just a heads up: once he starts pouring, you might find yourself having the time of your life, so be prepared for an unforgettable night!";
    kane.appendChild(kanePic);
    cmPunk.appendChild(cmPunkPic);
    drew.appendChild(drewPic);
    shamus.appendChild(shamusPic);
    kane.appendChild(masterChef);
    cmPunk.appendChild(desertChef);
    shamus.appendChild(waiter1);
    drew.appendChild(waiter2);
    staff.appendChild(kane);
    staff.appendChild(cmPunk);
    staff.appendChild(shamus);
    staff.appendChild(drew);
    content.appendChild(staff);
    content.appendChild(location);
}
export default about;