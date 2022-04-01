import "./styles.css";

function addElement(element) {
  document.getElementById("app").append(element);
}

function addBigTitle(text, id) {
  var newH1 = document.createElement("h1");
  newH1.setAttribute("id", id);
  newH1.appendChild(document.createTextNode(text));
  addElement(newH1);
}

function addImage(imageLink, id) {
  var newImage = document.createElement("img");
  newImage.setAttribute("id", id);
  newImage.setAttribute("src", imageLink);
  addElement(newImage);
}

//Code here!
addBigTitle("Hello, GoCodeGirl!!! Welcome to VikeLabs!", "vikelabs-title");
addImage("http://placekitten.com/g/100/100", "samantha-cat-photo");
