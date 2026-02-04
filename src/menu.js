import asana from "./images/asaana-drink.jpg";
import sobolo from "./images/sobolo.jpeg";
import waakye from "./images/waakye.jpeg";
import rice from "./images/fried-rice.jpg";
import pie from "./images/meat-pie.jpg";
import bread from "./images/bread.jpg";
import cake from "./images/cake.jpg";
import donuts from "./images/donuts.jpg";
import sandwich from "./images/sandwich.jpg";
import rolls from "./images/rolls.jpg";


function generateMenuContent(content) {

    const menuH1 = document.createElement("h1");
    menuH1.textContent = "Menu";

    /* Beverages Section */
    const beveragesH2 = document.createElement("h2");
    beveragesH2.textContent = "Beverages";
    const beveragesSection = document.createElement("div");
    
    const asanaImage = document.createElement("div");
    const asanaPic = document.createElement("img");
    asanaPic.src = asana;
    const asanaLabel = document.createElement("span");
    asanaLabel.classList.add("label");
    asanaLabel.innerHTML = "Asana drink | &#8373; 19.99";
    asanaImage.append(asanaPic, asanaLabel);

    const soboloImage = document.createElement("div");
    const soboloPic = document.createElement("img");
    soboloPic.src = sobolo;
    const soboloLabel = document.createElement("span");
    soboloLabel.classList.add("label");
    soboloLabel.innerHTML = "Bisap drink | &#8373; 19.99";
    soboloImage.append(soboloPic, soboloLabel);

    beveragesSection.append(asanaImage, soboloImage);

    /* Pastries Section */
    const pastriesH2 = document.createElement("h2");
    pastriesH2.textContent = "Pastries";
    const pastriesSection = document.createElement("div");

    const pieImage = document.createElement("div");
    const piePic = document.createElement("img");
    piePic.src = pie;
    const pieLabel = document.createElement("span");
    pieLabel.classList.add("label");
    pieLabel.innerHTML = "Meat Pie | &#8373; 6.99";
    pieImage.append(piePic, pieLabel);

    const donutsImage = document.createElement("div");
    const donutsPic = document.createElement("img");
    donutsPic.src = donuts;
    const donutsLabel = document.createElement("span");
    donutsLabel.classList.add("label");
    donutsLabel.innerHTML = "Donuts | &#8373; 12.99 for 4";
    donutsImage.append(donutsPic, donutsLabel);

    const fruitcakeImage = document.createElement("div");
    const fruitcakePic = document.createElement("img");
    fruitcakePic.src = cake;
    const fruitcakeLabel = document.createElement("span");
    fruitcakeLabel.classList.add("label");
    fruitcakeLabel.innerHTML = "Fruit Cake | &#8373; 14.99 for 1 slice";
    fruitcakeImage.append(fruitcakePic, fruitcakeLabel);

    const breadImage = document.createElement("div");
    const breadPic = document.createElement("img");
    breadPic.src = bread;
    const breadLabel = document.createElement("span");
    breadLabel.classList.add("label");
    breadLabel.innerHTML = "Loaf of bread | &#8373; 24.99";
    breadImage.append(breadPic, breadLabel);

    const sandwichImage = document.createElement("div");
    const sandwichPic = document.createElement("img");
    sandwichPic.src = sandwich;
    const sandwichLabel = document.createElement("span");
    sandwichLabel.classList.add("label");
    sandwichLabel.innerHTML = "Grilled Sandwich | &#8373; 24.99";
    sandwichImage.append(sandwichPic, sandwichLabel);

    const springrollImage = document.createElement("div"); 
    const springrollPic = document.createElement("img");
    springrollPic.src = rolls;
    const springrollLabel = document.createElement("span");
    springrollLabel.classList.add("label");
    springrollLabel.innerHTML = "Spring Rolls | &#8373; 9.99 for 3";
    springrollImage.append(springrollPic, springrollLabel);
    pastriesSection.append(pieImage, donutsImage, fruitcakeImage, breadImage, sandwichImage, springrollImage);

    /* Dishes section */
    const dishesH2 = document.createElement("h2");
    dishesH2.textContent = "Main Courses";
    const dishesSection = document.createElement("div");

    const fufuImage = document.createElement("div");
    const fufuPic = document.createElement("img");
    fufuPic.src = "https://slacker498.github.io/odin-recipes/images/fufu-and-light-soup.webp";
    const fufuLabel = document.createElement("span");
    fufuLabel.classList.add("label");
    fufuLabel.innerHTML = "Fufu and Goat Soup | &#8373; 99.99";
    fufuImage.append(fufuPic, fufuLabel);

    const jollofImage = document.createElement("div");
    const jollofPic = document.createElement("img");
    jollofPic.src = "https://slacker498.github.io/odin-recipes/images/jollof-img.jpg";
    const jollofLabel = document.createElement("span");
    jollofLabel.classList.add("label");
    jollofLabel.innerHTML = "Assorted Jollof | &#8373; 79.99";
    jollofImage.append(jollofPic, jollofLabel);

    const friedriceImage = document.createElement("div");
    const friedricePic = document.createElement("img");
    friedricePic.src = rice;
    const friedriceLabel = document.createElement("span");
    friedriceLabel.classList.add("label");
    friedriceLabel.innerHTML = "Fried Rice and Chicken | &#8373; 69.99";
    friedriceImage.append(friedricePic, friedriceLabel);

    const waakyeImage = document.createElement("div");
    const waakyePic = document.createElement("img");
    waakyePic.src = waakye;
    const waakyeLabel = document.createElement("span");
    waakyeLabel.classList.add("label");
    waakyeLabel.innerHTML = "Waakye | &#8373; 49.99";
    waakyeImage.append(waakyePic, waakyeLabel);
    dishesSection.append(fufuImage, jollofImage, friedriceImage, waakyeImage);

    /* Add sections to content#div */
    beveragesSection.classList.add("images");
    pastriesSection.classList.add("images");
    dishesSection.classList.add("images");
    content.append(menuH1, beveragesH2, beveragesSection, pastriesH2, pastriesSection, dishesH2, dishesSection);
}

export {generateMenuContent};