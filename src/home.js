import bread from "./images/bread.jpg";
import cake from "./images/cake.jpg";
import donuts from "./images/donuts.jpg";
import pie from "./images/meat-pie.jpg";

function generateHomeContent(content) {
    // const content = document.querySelector("div#content");

    const heroDiv = document.createElement("div");
    heroDiv.classList.add("hero");
    const heroHeader = document.createElement("h1");
    heroHeader.textContent = "Culinary Delights";
    const heroText = document.createElement("p");
    heroText.textContent = "Welcome to Culinary Delights &minus; where your taste buds meet their maker. From bread to cakes to donuts and meatpies, every delicacy is made affordable, while giving you an experience to remember! Be kind to that watery mouth of yours and make your home with us!";
    heroDiv.append(heroHeader, heroText);


    /*
        Images section
    */
    const imagesDiv = document.createElement("div");
    imagesDiv.classList.add("images");

    const breadImage = document.createElement("img");
    breadImage.src = bread;
    breadImage.alt = "";

    const cakeImage = document.createElement("img");
    cakeImage.src = cake;
    cakeImage.alt = "";

    const donutsImage = document.createElement("img");
    donutsImage.src = donuts;
    donutsImage.alt = "";

    const pieImage = document.createElement("img");
    pieImage.src = pie;
    pieImage.alt = "";

    imagesDiv.append(breadImage, cakeImage, donutsImage, pieImage);

    content.append(heroDiv, imagesDiv);
    return content;
}

export {generateHomeContent};