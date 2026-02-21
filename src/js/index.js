//index.js
import { debounce } from "./debounce";

const BUTTON = document.querySelector("#my-button");
const SPAN = document.querySelector("#button-text");
const LOADER = document.querySelector("#loader");

const toggleButton = (isLoading, text, callback) => {
  BUTTON.disabled = isLoading;
  SPAN.textContent = text;
  LOADER.classList.toggle("hidden", !isLoading);
  callback && callback();
};

const handleClick = debounce(() => {
  toggleButton(true, "Loading...", () => {
    setTimeout(() => {
      toggleButton(false, "Get weather");
    }, 2000);
  });
}, 2000);

BUTTON.addEventListener("click", handleClick);




