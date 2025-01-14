const display = document.getElementById("demo");
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "purple",
  "orange",
  "black",
  "white",
  "brown",
];

let colorsLength = colors.length;
// display.innerHTML = colorsLength;

let text = "<ul>";

for (let x; colorsLength; x++) {
  text += "<li>" + colors[x] + "</li>";
}
text += "</ul>";

display.innerHTML = text;
