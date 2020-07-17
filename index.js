//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and
//append it as a child of the element that has the 'id = a-1'(the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!.
//Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

//resolve // QUESTION 1 here
let newDiv = document.createElement("div"); //new div element is created
let parentDiv1 = document.getElementById("a-1"); //get a div which is to be a parent for our new div
parentDiv1.appendChild(newDiv); //new div element is appended to its parent
newDiv.className = "square"; //a class name for the new div element is set

//a listener for the click event is set on the new div element
newDiv.addEventListener("click", function () {
  //an action for the event is set: change of the inner html content via ternary operator
  newDiv.innerHTML = newDiv.innerHTML === "x" ? "o" : "x";
});

//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow,
//those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'

//resolve // QUESTION 2 here
const colors = ["red", "white", "black", "green", "orange"];

let parentDiv2 = document.getElementById("a-2");
let dropdList = document.createElement("select"); //creating an element for dropdown list and assigning it to the newly declared variable
let removeBtn = document.createElement("button"); //creating an element for a button and assigning it to the newly declared variable
removeBtn.innerHTML = "Remove the option"; //button text
//new elements are placed in DOM nested in the parent element
parentDiv2.appendChild(dropdList);
parentDiv2.appendChild(removeBtn);

//creting the dropdown list
for (var i = 0; i < colors.length; i++) {
  let option = document.createElement("option");
  option.value = colors[i];
  option.text = colors[i];
  dropdList.appendChild(option);
}
//function for removing the selected option
removeBtn.addEventListener("click", function () {
  dropdList.remove(dropdList.selectIndex);
});

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program
//to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

const calculate_sphere = (event) => {
  event.preventDefault(); //prevention  from submitting the form (to keep data)
  // assignment of input for radius value to newly declared variable after its coercion to number type.

  let radius = Number(document.querySelector("#radius").value);
  let sphereVolume = (4 / 3) * Math.PI * Math.pow(radius, 3); //declared variable for volume and assigning to it the result of math expression
  let sphereArea = 4 * Math.PI * Math.pow(radius, 2); //declared variable for area and assigning to it the result of math expression

  let volumeData = document.querySelector("#volume"); //get the element for volume data
  let areaData = document.querySelector("#area"); //get the element for area data
  //assign the results of math expressions to the values of elements for V and A
  volumeData.value = sphereVolume;
  areaData.value = sphereArea;
};
window.onload = document.getElementById("MyForm").onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked

//------------------------Question 4 ---------------------------
//Now in this Exercise we want you to create 3 buttons wich clicks actions are going to hide the respective
//question above
//swer and if they are hidden then the click option should be display the question with their respective aswer
// append the 3 buttons to the element with the 'id = a-4' as childrens

//resolve // QUESTION 4 here

let parentDiv4 = document.getElementById("a-4"); //the parent of buttons, which are to be created

//creating buttons
for (let i = 0; i < 3; i++) {
  let task4Btn = document.createElement("button"); //button is created and assigned to variable
  parentDiv4.appendChild(task4Btn); //button is placed as a child of parentDiv4
  parentDiv4.children[i].id = `magic${i + 1}`; //placing id for each button using the counter
  parentDiv4.children[i].innerHTML = `Hide and show the task # ${i + 1}`; //placing innerHTML for each button using the counter
}

//get .question-container, which is supposed to be hidden and shown up to fulfil requirements of the task
//and assign it to a newly declared variable
let questContainer = document.querySelector(".question-container");

//creating of the click event listener on the level of buttons' parent
parentDiv4.addEventListener("click", (event) => {
  if (event.target.id === "magic1") {
    if (questContainer.children[0].style.visibility !== "hidden") {
      questContainer.children[0].style.visibility = "hidden";
    } else if (questContainer.children[0].style.visibility == "hidden") {
      questContainer.children[0].style.visibility = "visible";
    }
  } else if (event.target.id == "magic2") {
    if (questContainer.children[1].style.visibility !== "hidden") {
      questContainer.children[1].style.visibility = "hidden";
    } else if (questContainer.children[1].style.visibility == "hidden") {
      questContainer.children[1].style.visibility = "visible";
    }
  } else if (event.target.id == "magic3") {
    if (questContainer.children[2].style.visibility !== "hidden") {
      questContainer.children[2].style.visibility = "hidden";
    } else if (questContainer.children[2].style.visibility == "hidden") {
      questContainer.children[2].style.visibility = "visible";
    }
  }
});
