import "./styles.css";
import {generateHomeContent} from "./home.js";
import {generateMenuContent} from "./menu.js";
import {generateAboutContent} from "./about.js";

const content = document.querySelector("div#content");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.style = ""; // Solution to css after effects from about.js
    generateHomeContent(content);
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.style = "";
    generateMenuContent(content);
});

aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    generateAboutContent(content);
});

// Initial setup
generateHomeContent(content);
console.log("I am running!");