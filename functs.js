function flip_theme() {
    const style_link = document.getElementById("theme_css_sheet");

    if (style_link.getAttribute("href") === "style.css") {
        style_link.setAttribute("href", "style2.css");
        localStorage.setItem("theme", "dark");
    } else {
        style_link.setAttribute("href", "style.css");
        localStorage.setItem("theme", "light");
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const styleLink = document.getElementById("theme_css_sheet");

  if (savedTheme === "dark") {
    styleLink.setAttribute("href", "style2.css");
  }
});