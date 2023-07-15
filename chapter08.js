// Chapter08: Events & other DOM Properties

let element = document.getElementsByClassName("BoxContainer");
let commentNode = document.body.firstChild;

//console.dir(element);
console.log(element[0]);
console.dir(element[0]);

// tagName vs. nodeName
console.log(element[0].tagName); // can only be used on elementNode
console.log(commentNode.nodeName); // can be used on all nodes

// innerHTML vs. outerHTML : both can be to set and get on elementsNodes only
element[0].firstElementChild.firstElementChild.innerHTML =
  "boxOne by innerHTML"; // changes content inside selected element
element[0].firstElementChild.nextElementSibling.firstElementChild.outerHTML =
  "<h3>boxTwo by outerHTML</h3>"; // changes content + selected element

// get and set other nodes:
commentNode.data = "A commentNode after change with .data";
console.log(commentNode.data);
// or
commentNode.nodeValue = "A commentNode after change with .nodeValue";
console.log(commentNode.nodeValue);

// textContent
// element[0].firstElementChild.firstElementChild.textContent =
//   "this changed due to textContent";
console.log(element[0].firstElementChild.firstElementChild.textContent);

// Attribute Methods:
let boxOne = document.getElementById("boxOne");
let boxTwo = document.getElementById("boxTwo");
let boxThree = document.getElementById("boxThree");
let boxFour = document.getElementById("boxFour");
let boxFive = document.getElementById("boxFive");

let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let btnFour = document.getElementById("btnFour");
let btnFive = document.getElementById("btnFive");

const hasAttributeFunction = () => {
  console.log(boxOne.hasAttribute("id"));
}; // checks existence of attribute within HTML onclick

btnTwo.onclick = function () {
  console.log(boxTwo.getAttribute("class"));
}; // returns value of given attribute within js onclick

btnThree.addEventListener("click", function () {
  boxThree.setAttribute("id", "boxSetAttribute");
}); // set an attribute a value if attribute does't exists it creats one with addEventListner

btnFour.addEventListener("click", function () {
  boxFour.removeAttribute("id");
}); // removes attribute

btnFive.addEventListener("click", function () {
  console.log(boxFive.attributes);
}); // returns collection of attributes

// custom attributes data-*:
console.log(boxFive.dataset);
console.log(boxFive.dataset.name);

// Insertion methods:
const paraOne = document.createElement("p"); // creates an element and stores it into paraOne
paraOne.className = "paragraphOne"; // sets a class="paragraphOne"
paraOne.innerHTML =
  "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vitae saepe adipisci! Tenetur error ipsa voluptatibus accusantium"; // inserts content inside <p></p>
const insertionContainer = document.getElementById("insertionContainer");

insertionContainer.append(paraOne); // inserts element at inner end
insertionContainer.prepend(paraOne); // inserts element at inner start
insertionContainer.before(paraOne); // inserts element at outer start
insertionContainer.after(paraOne); // inserts element at outer end
const heading = document.createElement("div");
heading.innerHTML = "<h3>Hello😈!</h3>";
insertionContainer.firstElementChild.nextElementSibling.replaceWith(heading);

// insertAdjacentHTML/Text/Element:
const aDiv = document.getElementById("aDiv");
aDiv.insertAdjacentHTML("beforebegin", "<h2>beforebegin😀</h2>");
aDiv.insertAdjacentHTML("afterbegin", "<h2>afterbegin😁</h2>");
aDiv.insertAdjacentHTML("beforeend", "<h2>beforeend😂</h2>");
aDiv.insertAdjacentHTML("afterend", "<h2>afterend🤣</h2>");

// node removal node.remove();
paraOne.remove();

// className & classList add/remove/toggle:
const colorContainer = document.getElementById("colorContainer");
console.log(colorContainer.classList); // returns a collection of classes
console.log(colorContainer.classList.contains("space")); // checks contains or not and return boolean
colorContainer.firstElementChild.classList.remove("red"); // removes a class
colorContainer.firstElementChild.nextElementSibling.classList.add("blue"); // adds a class
colorContainer.firstElementChild.classList.toggle("red"); // if class were present removes it if absent adds it

// setTimeout() with clearTimeout() and setInterval() with clearInterval():

const changingBgColorWithInterval = (coolColors, intervalTime) => {
  const coolColorsDIV = document.getElementById("coolColors");
  let colorIndex = 0;
  const changeColor = () => {
    if (colorIndex < coolColors.length) {
      const color = coolColors[colorIndex];
      coolColorsDIV.style.backgroundColor = color;
      colorIndex++;
    } else {
      clearInterval(interval);
    }
  };
  const interval = setInterval(changeColor, intervalTime);
};
const intervalTime = 1000;
const coolColors = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#800080", // Purple
  "#008000", // Dark Green
  "#FFA500", // Orange
  "#800000", // Maroon
];
changingBgColorWithInterval(coolColors, intervalTime);

// const consoleColorNames = () => {
//   let timeoutTime = 1000;
//   const changeColorName = () => {
//     for (
//       let colorNameIndex = 0;
//       colorNameIndex < namesOfCoolColors.length;
//       colorNameIndex++
//     ) {
//       if (colorNameIndex < namesOfCoolColors.length) {
//         const colorName = namesOfCoolColors[colorNameIndex];
//         console.log(colorName);
//         timeoutTime = timeoutTime * colorNameIndex;
//       } else {
//         clearTimeout(timeout);
//       }
//     }
//   };
//   const timeout = setTimeout(changeColorName, timeoutTime);
// };
// const namesOfCoolColors = [
//   "Red",
//   "Green",
//   "Blue",
//   "Yellow",
//   "Magenta",
//   "Cyan",
//   "Purple",
//   "Dark Green",
//   "Orange",
//   "Maroon",
// ];
// consoleColorNames();

const consoleColorNames = () => {
  let timeoutTime = 1000;
  let colorNameIndex = 0;

  const changeColorName = () => {
    if (colorNameIndex < namesOfCoolColors.length) {
      const colorName = namesOfCoolColors[colorNameIndex];
      console.log(colorNameIndex + ")" + " " + colorName);
      document.getElementById("colorIndexH1").innerHTML = colorName;
      colorNameIndex++;
      setTimeout(changeColorName, timeoutTime);
    }
  };

  setTimeout(changeColorName, timeoutTime);
};

const namesOfCoolColors = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Magenta",
  "Cyan",
  "Purple",
  "Dark Green",
  "Orange",
  "Maroon",
];

consoleColorNames();

// addEventListener & removeEventLisener :
const clickMeBtn = document.getElementById("clickMeBtn");
const eventHandler = document.getElementById("eventHandler");

clickMeBtn.addEventListener("click", (e) => {
  clickMeBtn.textContent = "Clicked!";
  eventHandler.style.backgroundColor = "orange";
  console.log(e); // the Event Object
  console.log(e.type);
  console.log(e.currentTarget);
});
const bgColorChange = () => {
  eventHandler.style.backgroundColor = "yellow";
};
eventHandler.addEventListener("mouseover", bgColorChange);
//  eventHandler.removeEventListener("mouseover", bgColorChange);

// Practice Set08:
// Q.01
// done! using onclick attribute
// Q.02
// done! using <a> tag
// Q.03
const w3schools = document.getElementById("w3schools");
w3schools.addEventListener("click", () => {
  window.open("https://www.w3schools.com/", "_blank");
});
// Q.04
const fetchContent = async (url) => {
  res = await fetch(url);
  let a = await res.json();
  return a;
};

setInterval(async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  console.log(await fetchContent(url));
}, 10000);
// Q.05
const bulb = document.getElementById("bulb");
setInterval(() => {
  bulb.classList.toggle("bulbON");
  bulbONorOFF();
}, 1000);
const bulbONorOFF = () => {
  const bulb = document.getElementById("bulb");

  if (!bulb.classList.contains("bulbON")) {
    bulb.innerHTML = "<h2 id ='h2OfBulb'>Bulb OFF</h2>";
  } else {
    bulb.innerHTML = "<h2 id ='h2OfBulb'>Bulb ON</h2>";
  }
};
