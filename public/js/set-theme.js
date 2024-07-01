const theme = window.localStorage.getItem("theme");
const themeDefault = "light";

if (theme == undefined) {
  window.localStorage.setItem("theme", themeDefault);
}

document.documentElement.setAttribute("data-theme", theme || themeDefault);
