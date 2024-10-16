import "../styles/home.css";
const content=document.querySelector("#content");
let home=function(){
    content.style=`
    overflow-y: none; 
    `
    let reviews=document.createElement("div");
    let workingHours=document.createElement("div");
    let imageShowCase=document.createElement("div");
    let container=document.createElement("div");
    let ourFood=document.createElement("div");
    let food=document.createElement("div");
    let review1=document.createElement("div");
    let review2=document.createElement("div");
    let review3=document.createElement("div");
    let review4=document.createElement("div");
    let monday=document.createElement("div");
    let tuesday=document.createElement("div");
    let wednesday=document.createElement("div");
    let thursday=document.createElement("div");
    let friday=document.createElement("div");
    let saturday=document.createElement("div");
    let sunday=document.createElement("div");
    container.id="container";
    ourFood.id="food";
    imageShowCase.id="image";
    food.src=food;
    review1.textContent="\"I had the pleasure of dining at Champion’s Feast. The ambiance was warm and inviting, with the walls adorned with championship belts and memorabilia. The food was delicious, with tender and flavorful ribs that complemented the fresh sides. The service was attentive and enthusiastic, with my server sharing insights into the wrestling lore behind each dish.\""
    review2.textContent="\"Champion’s Feast is an absolute knockout! The moment you step inside, you’re immersed in the electrifying world of wrestling. The decor is filled with memorabilia, and the atmosphere is buzzing with excitement. I ordered the 'Stone Cold Stunner Nachos'—they were massive and loaded with flavor! The staff is super friendly, and the service is top-notch. A must-visit for any wrestling fan!\""
    review3.textContent="\"What a fantastic dining experience at Champion’s Feast! The menu is creatively themed, with dishes named after legendary wrestlers. I tried the 'Royal Rumble Ribs,' and they were tender and juicy, served with a tangy barbecue sauce. The vibe is perfect for family and friends, and the giant screens showing classic matches make it even better. I’ll definitely be back for more!\"";
    review4.textContent="\"If you love wrestling, you’ll love Champion’s Feast! The ambiance is electric, filled with wrestling decor and memorabilia that makes you feel like you’re part of the action. I enjoyed the 'Undertaker's Tacos,' which were packed with flavor! Plus, the live events they host are amazing. It’s not just a meal; it’s an experience!\"";
    reviews.classList.add("reviews");
    review1.classList.add("review");
    review2.classList.add("review");
    review3.classList.add("review");
    review4.classList.add("review");
    reviews.appendChild(review1);
    reviews.appendChild(review2);
    reviews.appendChild(review3);
    reviews.appendChild(review4); 
    workingHours.textContent="Hours";
    workingHours.id="hours";
    monday.textContent="Monday: 11:00 AM - 1:00 PM";
    tuesday.textContent="Tuesday: 11:00 AM - 1:00 PM";
    wednesday.textContent="Wednesday: 11:00 AM - 1:00 PM";
    thursday.textContent="Thursday: 11:00 AM - 1:00 PM";
    friday.textContent="Friday: 11:00 AM - 1:00 PM";
    saturday.textContent="Saturday: 11:00 AM - 1:00 PM";
    sunday.textContent="Sunday: 11:00 AM - 1:00 PM";
    workingHours.appendChild(monday);
    workingHours.appendChild(tuesday);
    workingHours.appendChild(wednesday);
    workingHours.appendChild(thursday);
    workingHours.appendChild(friday);
    workingHours.appendChild(saturday);
    workingHours.appendChild(sunday);
    content.appendChild(imageShowCase);
    content.appendChild(reviews);
    ourFood.appendChild(food);
    container.appendChild(ourFood);
    content.appendChild(container);
    container.appendChild(workingHours);
}
export default home;