import "./styles.css";
import {generateHomeContent} from "./home.js";

const content = document.querySelector("div#content");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    generateHomeContent(content);
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    generateMenuContent(content);
});

aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    generateAboutContent(content);
});

// Initial setup
generateHomeContent(content);
console.log("I am running!");