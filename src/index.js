const MobileDetect = require("mobile-detect");
const md = new MobileDetect(window.navigator.userAgent);

console.log("md", md.ua);
console.log("hello, people!");

const template = "template";

const myFunction = () => `This is just some ${template} string`;

console.log("Updating print.js...");
