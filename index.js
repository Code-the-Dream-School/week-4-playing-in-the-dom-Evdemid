//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and
//append it as a child of the element that has the 'id = a-1'(the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!.
//Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

//resolve // QUESTION 1 here
let newDiv = document.createElement("div");
let parentDiv1 = document.getElementById("a-1");
parentDiv1.appendChild(newDiv);
newDiv.className = "square";
newDiv.addEventListener("click", function () {
  newDiv.innerHTML = newDiv.innerHTML === "x" ? "o" : "x";
});

//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow,
//those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = ["red", "white", "black", "green", "orange"];

let parentDiv2 = document.getElementById("a-2");
let dropdList = document.createElement("select");
let removeBtn = document.createElement("button");
removeBtn.innerHTML = "Remove the option";
parentDiv2.appendChild(dropdList);
parentDiv2.appendChild(removeBtn);
//resolve // QUESTION 2 here

for (var i = 0; i < colors.length; i++) {
  let option = document.createElement("option");
  option.value = colors[i];
  option.text = colors[i];
  dropdList.appendChild(option);
}
// removeBtn.addEventListener("mouseover", function () {
//     removeBtn.style.backgroundColor = dropdList.selectIndex.style.color;
// });
removeBtn.addEventListener("click", function () {
  dropdList.remove(dropdList.selectIndex);
});

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program
//to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

let parentDiv3 = document.getElementById("a-3");//assignment of parent of form to newly declared variable

// assignment of input for radius value to newly declared variable after its coercion to number type.
let radius = Number(document.querySelector("#radius").value);
let sphereVolume;//declared variable for radius
let sphereArea;//declared variable for area
let calcBtn = document.querySelector("#submit");//get button #submit and assign it to the newly declared variable

//event for calculating sphere volume
calcBtn.addEventListener("click",(calculate_sphere = (radius) => {
    sphereVolume = (4 / 3) * Math.PI * radius ** 3;
    document.querySelector("#volume").value = toString(sphereVolume);
  })
);
//event for calculating sphere area
calcBtn.addEventListener("click", (radius) => {
  sphereArea = 4 * Math.PI * radius ** 2;
  document.querySelector("#area").value = toString(sphereArea);
});

window.onload = document.getElementById("MyForm").onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked

//------------------------Question 4 ---------------------------
//Now in this Exercise we want you to create 3 buttons wich clicks actions are going to hide the respective
//question above
//swer and if they are hidden then the click option should be display the question with their respective aswer
// append the 3 buttons to the element with the 'id = a-4' as childrens

//resolve // QUESTION 4 here

let parentDiv4 = document.getElementById("a-4"); //the parent of buttons, which are to be created

for (let i = 0; i < 3; i++) {
  //a loop through all 3 buttons.
  let task4Btn = document.createElement("button"); //button is created and assigned to variable
    parentDiv4.appendChild(task4Btn); //button is placed as a child of parentDiv4
  parentDiv4.children[i].id = `magic${i + 1}`; //placing id for each button using the counter
  parentDiv4.children[i].innerHTML = `Hide the task # ${i + 1}`; //placing innerHTML for each button using the counter
}

//setup of visibility property to the ".question-label"
let questContainer = document.querySelector(".question-container"); 
questContainer.children[0].style.visibility = "visible";
questContainer.children[1].style.visibility = "visible";
questContainer.children[2].style.visibility = "visible";

//creating of the click event listener on the level of buttons' parent
parentDiv4.addEventListener("click", (event) => {
  if (event.target.id === "magic1") {
    if (questContainer.children[0].style.visibility === "visible") {
      questContainer.children[0].style.visibility = "hidden";
    } else if (questContainer.children[0].style.visibility == "hidden") {
      questContainer.children[0].style.visibility = "visible";
    }
  } else if (event.target.id == "magic2") {
    if (questContainer.children[1].style.visibility === "visible") {
      questContainer.children[1].style.visibility = "hidden";
    } else if (questContainer.children[1].style.visibility == "hidden") {
      questContainer.children[1].style.visibility = "visible";
    }
  } else if (event.target.id == "magic3") {
    if (questContainer.children[2].style.visibility == "visible") {
      questContainer.children[2].style.visibility = "hidden";
    } else if (questContainer.children[2].style.visibility == "hidden") {
      questContainer.children[2].style.visibility = "visible";
    }
  }
});
