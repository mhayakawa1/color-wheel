//consts for colors
const red = document.getElementById("red");
const redOrange = document.getElementById("redOrange");
const orange = document.getElementById("orange");
const orangeYellow = document.getElementById("orangeYellow");
const yellow = document.getElementById("yellow");
const yellowGreen = document.getElementById("yellowGreen");
const green = document.getElementById("green");
const greenBlue = document.getElementById("greenBlue");
const blue = document.getElementById("blue");
const bluePurple = document.getElementById("bluePurple");
const purple = document.getElementById("purple");
const purpleRed = document.getElementById("purpleRed");

//consts for color names in unordered list
const Red = document.getElementById("Red");
const RedOrange = document.getElementById("RedOrange");
const Orange = document.getElementById("Orange");
const OrangeYellow = document.getElementById("OrangeYellow");
const Yellow = document.getElementById("Yellow");
const YellowGreen = document.getElementById("YellowGreen");
const Green = document.getElementById("Green");
const GreenBlue = document.getElementById("GreenBlue");
const Blue = document.getElementById("Blue");
const BluePurple = document.getElementById("BluePurple");
const Purple = document.getElementById("Purple");
const PurpleRed = document.getElementById("PurpleRed");

function colorWheel(colorId, colorNameId){
  //call reset function to remove dropshadow class from all colors
  //and add hide class to all color names
  reset();
  
  //trigger DOM reflow to reset animation timing
  //so that dropshadows always pulse at same time
  const circles = document.querySelectorAll(".circle");
  for(const circle of circles){
    void circle.offsetWidth;
  } 
  
  //get the color scheme from the dropdown menu
  const selectType = document.getElementById("dropdown");
  const schemeType = selectType.options[selectType.selectedIndex].text;
  
  //arrays for all colors and color names ids
  let allColors = [red, redOrange, orange, orangeYellow, 
                  yellow, yellowGreen, green, greenBlue, 
                  blue, bluePurple, purple, purpleRed];
  let allColorNames = [Red, RedOrange, Orange, OrangeYellow, 
                  Yellow, YellowGreen, Green, GreenBlue, 
                  Blue,BluePurple, Purple, PurpleRed];
  
  //arrange arrays to start with id of selected color
  allColors = [...allColors.splice(allColors.indexOf(colorId)), ...allColors.splice(0)];
  allColorNames = [...allColorNames.splice(allColorNames.indexOf(colorNameId)), ...allColorNames.splice(0)];
  
  //variables to be assigned to arrays of all the colors and 
  //color names that are part of the color scheme
  let selectedColors;
  let selectedColorNames;
  
  //based on schemeType, assign variables selectedColors and selectedColorNames
  //to arrays containing indexes of allColors and allColorNames
  switch(schemeType){
    case "Monochromatic":
      selectedColors = [allColors[0]]
      selectedColorNames = [allColorNames[0]]
      break;
    case "Complementary":
      selectedColors = [allColors[0], allColors[6]]
      selectedColorNames = [allColorNames[0], allColorNames[6]]
      break;
    case "Analogous":
      selectedColors = [allColors[0], allColors[1], allColors[11]]
      selectedColorNames = [allColorNames[0], allColorNames[1], allColorNames[11]]
      break;
    case "Split-Complementary":
      selectedColors = [allColors[0], allColors[5], allColors[7]]
      selectedColorNames = [allColorNames[0], allColorNames[5], allColorNames[7]]
      break;
    case "Triadic":
      selectedColors = [allColors[0], allColors[4], allColors[8]]
      selectedColorNames = [allColorNames[0], allColorNames[4], allColorNames[8]]
      break;
    case "Tetradic":
      selectedColors = [allColors[0], allColors[2], allColors[6], allColors[8]]
      selectedColorNames = [allColorNames[0], allColorNames[2], allColorNames[6], allColorNames[8]]
  }

  //add dropshadow class to all ids in selectedColors
  //remove hide class from all ids in selectedColorNames
  for(let i = 0; i < selectedColors.length; i++){
    selectedColors[i].classList.add("dropshadow");
    selectedColorNames[i].classList.remove("hide");
  }
}

//remove all dropshadows and hide all color names
function reset(){

  //find all elements with class circle and remove dropshadows
  const circles = document.querySelectorAll(".circle");
  for(const circle of circles){
    circle.classList.remove("dropshadow");
  }

  //find all elements with class colorname and add hide class
  const colorNames = document.querySelectorAll(".colorName");
  for(const colorName of colorNames){
    colorName.classList.add("hide");
  }
}