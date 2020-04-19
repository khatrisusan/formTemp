("use strict");
import { endpoint, apiKey } from "./modules/settings";
window.form = form;
const form = document.querySelector("form");
window.elements = elements;
const elements = form.elements;
console.dir(elements.name.value);
//elements.name.value = "susan";
//elements.date.setAttribute("disabled", true);
//elements.name.addEventListener("click", () => {
// console.log("focus");
// elements.name.type = "password";
//});
//focus();blur();click()---->click is for radio or checkbox type
window.addEventListener("load", () => {
  elements.company.blur();
});

/* elements.name.addEventListener("keyup", (e) => {
  // console.dir(e.target.value);
  document.querySelector("h1").innerText = e.target.value;
}); */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    //send to rest db
    console.log("isvalid");
  } else {
    if (!form.name.checkValidity()) {
      //show error for name
      console.log("name is invalid");
    }
  }
});
