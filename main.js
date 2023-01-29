//! WHAT IS A DOM?
//! Document Object Model>> Used to manipulate Content,style and structure in javascript.
//! One of the most Unique and useful tools of javascript.

// DOM Manipulation
//DOM Manipulation is a way to get/select, change, add, or delete HTML elements.
// ! The 5 major ways of selecting elements in the DOM tree.

// ! 1. getElementById()
// This method is used to select or target an element by its unique id.
const titles = document.getElementById("main-heading");
//  Here, we targeted the id of main-heading and stored in a variable called TITLE from which we cn now manipulate as we desire

// ! 2. getElementByClassName()
// This method is used to select or target elements by their class names.  It returns in an array-like all the child elements given their CSS class names.
const listItem = document.getElementsByClassName("list-items");

// ! 3. getElementByTagName()
// This method is used to select or target elements by their tag names. It is similar to the getElementByClassName() as it returns in an array-like all elements given their CSS tag names
const lis = document.getElementsByTagName("li");
// Here, It returns all the elements by their tag name which is "li"

// ! 4. querySelector()
// The Document method querySelector() returns the first Element within the document that matches the specified CSS selector, or group of CSS selectors. If no matches are found, null is returned
const container = document.querySelector("div");
console.log(container);

// ! 5 querySelectorAll()
// Unlike the querySelector() method which returns the first element of a specified CSS selector, This method returns all the elemnts within the document that matches the specified CSS selector.
const alldiv = document.querySelectorAll("div");
console.log(alldiv);

const title = document.querySelector("#main-heading");
console.log(title);

//! ACCESSSING CSS PROPERTIES IN JAVASCRIPT.
// To access CSS properties in javascript, we do the following;
//! >>> 1) we call the variable we want to apply the styling to.
//! >>> 2) add . and then initiate te style property. example >> title.style
//! >>> 3) add . and then we add any CSS property we want to apply to the element. example >> title.style.color =
//! >>> 4) add = and then in a string, we write what we want to be executed. example >> title.style.color = "red"
// ? This is the in-line styling in javascript.

// title.style.color = 'blue' //! this changes the color of the title element to blue.

//! APPLYING STYLE ALL THE ITEMS SELECTED VIA querySelectorAll() METHOD...
// To achieve this, we have to loop through them.
//! EXAMPLE >>>
const list = document.querySelectorAll(".list-items");
for (i = 0; i < list.length; i++) {
  list[i].style.color = "red"; // the list items of; the matrix, star wars, etc will all become red.
}

//! CREATING ELEMENTS
// We can as well create elements in our html file from our javascript.
// In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.
// The Element.append() method inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes.

const ul = document.querySelector("ul");
const li = document.createElement("li");

ul.append(li);
li.innerText = "X-men";
li.style.color = "red"; 


// for (let i = 0; i < listItem.length; i++){
//   listItem[i].style.fontWeight = 'bold';
//   listItem[i].style.color = 'blue';
// }

li.remove();
console.log(ul.childNodes);



//! ======== EVENT LISTENERS ========



