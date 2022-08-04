//variables for colors
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

//variables for color names
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

//arrays for color schemes and respective color names
const monochromaticObj = [
  {main: red,
    text:
      Red
  },
  {main: redOrange,
    text:
      RedOrange
  },
  {main: orange,
    text:
      Orange
  },
  {main: orangeYellow,
    text:
      OrangeYellow
  },
  {main: yellow,
    text:
      Yellow
  },
  {main: yellowGreen,
    text:
      YellowGreen
  },
  {main: green,
    text:
      Green
  },
  {main: greenBlue,
    text:
      GreenBlue
  },
  {main: blue,
    text:
      Blue
  },
  {main: bluePurple,
    text:
      BluePurple
  },
  {main: purple,
    text:
      Purple
  },
  {main: purpleRed,
    text:
      PurpleRed
  },
];

const complementaryObj = [
  {main: red,
    accent: green,
    text: [
      Red, Green
    ]
  },
  {main: redOrange,
    accent: greenBlue,
   text: [
      RedOrange, GreenBlue
    ]
  },
  {main: orange,
    accent: blue,
   text: [
      Orange, Blue
    ]
  },
  {main: orangeYellow,
    accent: bluePurple,
   text: [
      OrangeYellow, BluePurple
    ]
  },
  {main: yellow,
    accent: purple,
   text: [
      Yellow, Purple
    ]
  },
  {main: yellowGreen,
    accent: purpleRed,
   text: [
      YellowGreen, PurpleRed
    ]
  },
  {main: green,
    accent: red,
   text: [
      Green, Red
    ]
  },
  {main: greenBlue,
    accent: redOrange,
   text: [
      GreenBlue, RedOrange
    ]
  },
  {main: blue,
    accent: orange,
   text: [
      Blue, Orange
    ]
  },
  {main: bluePurple,
    accent: orangeYellow,
   text: [
      BluePurple, OrangeYellow
    ]
  },
  {main: purple,
    accent: yellow,
   text: [
      Purple, Yellow
    ]
  },
  {main: purpleRed,
    accent: yellowGreen,
   text: [
      PurpleRed, YellowGreen
    ]
  }
];

const analogousObj = [
  {main: red,
    accent: [
      purpleRed,
      redOrange
    ],
    text: [
      Red,
      PurpleRed,
      RedOrange
    ]
  },
  {main: redOrange,
    accent: [
      red,
      orange
    ],
   text: [
      RedOrange,
      Red,
      Orange
    ]
  },
  {main: orange,
    accent: [
      redOrange,
      orangeYellow
    ],
   text: [
      Orange,
      RedOrange,
      OrangeYellow
    ]
  },
  {main: orangeYellow,
    accent: [
      orange,
      yellow
    ],
   text: [
      OrangeYellow,
      Orange,
      Yellow
    ]
  },
  {main: yellow,
    accent: [
      orangeYellow,
      yellowGreen
    ],
   text: [
      Yellow,
      OrangeYellow,
      YellowGreen
    ]
  },
  {main: yellowGreen,
    accent: [
      yellow,
      green
    ],
   text: [
      YellowGreen,
      Yellow,
      Green
    ]
  },
  {main: green,
    accent: [
      yellowGreen,
      greenBlue
    ],
   text: [
      Green,
      YellowGreen,
      GreenBlue
    ]
  },
  {main: greenBlue,
    accent: [
      green,
      blue
    ],
   text: [
      GreenBlue,
      Green,
      Blue
    ]
  },
  {main: blue,
    accent: [
      greenBlue,
      bluePurple
    ],
   text: [
      Blue,
      GreenBlue,
      BluePurple
    ]
  },
  {main: bluePurple,
    accent: [
      blue,
      purple
    ],
   text: [
      BluePurple,
      Blue,
      Purple
    ]
  },
  {main: purple,
    accent: [
      bluePurple,
      purpleRed
    ],
   text: [
      Purple,
      BluePurple,
      PurpleRed
    ]
  },
  {main: purpleRed,
    accent: [
      purple,
      red
    ],
   text: [
      PurpleRed,
      Purple,
      Red
    ]
  }
];

const scomplementaryObj = [
  {main: red,
    accent: [
      yellowGreen,
      greenBlue
    ],
   text: [
      Red,
      YellowGreen,
      GreenBlue
    ]
  },
  {main: redOrange,
    accent: [
      green,
      blue
    ],
   text: [
      RedOrange,
      Green,
      Blue
    ]
  },
  {main: orange,
    accent: [
      greenBlue,
      bluePurple
    ],
   text: [
      Orange,
      GreenBlue,
      BluePurple
    ]
  },
  {main: orangeYellow,
    accent: [
      blue,
      purple
    ],
   text: [
      OrangeYellow,
      Blue,
      Purple
    ]
  },
  {main: yellow,
    accent: [
      bluePurple,
      purpleRed
    ],
   text: [
      Yellow,
      BluePurple,
      PurpleRed
    ]
  },
  {main: yellowGreen,
    accent: [
      purple,
      red
    ],
   text: [
      YellowGreen,
      Purple,
      Red
    ]
  },
  {main: green,
    accent: [
      purpleRed,
      redOrange
    ],
   text: [
      Green,
      PurpleRed,
      RedOrange
    ]
  },
  {main: greenBlue,
    accent: [
      red,
      orange
    ],
   text: [
      GreenBlue,
      Red,
      Orange
    ]
  },
  {main: blue,
    accent: [
      redOrange,
      orangeYellow
    ],
   text: [
      Blue,
      RedOrange,
      OrangeYellow
    ]
  },
  {main: bluePurple,
    accent: [
      orange,
      yellow
    ],
   text: [
      BluePurple,
      Orange,
      Yellow
    ]
  },
  {main: purple,
    accent: [
      orangeYellow,
      yellowGreen
    ],
   text: [
      Purple,
      OrangeYellow,
      YellowGreen
    ]
  },
  {main: purpleRed,
    accent: [
      yellow,
      green
    ],
   text: [
      PurpleRed,
      Yellow,
      Green
    ]
  },
];

const triadicObj = [
  {main: red,
    accent: [
      yellow,
      blue
    ],
   text: [
      Red,
      Yellow,
      Blue
    ]
  },
  {main: redOrange,
    accent: [
      yellowGreen,
      bluePurple
    ],
   text: [
      RedOrange,
      YellowGreen,
      BluePurple
    ]
  },
  {main: orange,
    accent: [
      green,
      purple
    ],
   text: [
      Orange,
      Green,
      Purple
    ]
  },
  {main: orangeYellow,
    accent: [
      greenBlue,
      purpleRed
    ],
   text: [
      OrangeYellow,
      GreenBlue,
      PurpleRed
    ]
  },
  {main: yellow,
    accent: [
      blue,
      red
    ],
   text: [
      Yellow,
      Blue,
      Red
    ]
  },
  {main: yellowGreen,
    accent: [
      bluePurple,
      redOrange
    ],
   text: [
      YellowGreen,
      BluePurple,
      RedOrange
    ]
  },
  {main: green,
    accent: [
      purple,
      orange
    ],
   text: [
      Green,
      Purple,
      Orange
    ]
  },
  {main: greenBlue,
    accent: [
      purpleRed,
      orangeYellow
    ],
   text: [
      GreenBlue,
      PurpleRed,
      OrangeYellow
    ]
  },
  {main: blue,
    accent: [
      red,
      yellow
    ],
   text: [
      Blue,
      Red,
      Yellow
    ]
  },
  {main: bluePurple,
    accent: [
      redOrange,
      yellowGreen
    ],
   text: [
      BluePurple,
      RedOrange,
      YellowGreen
    ]
  },
  {main: purple,
    accent: [
      orange,
      green
    ],
   text: [
      Purple,
      Orange,
      Green
    ]
  },
  {main: purpleRed,
    accent: [
      orangeYellow,
      greenBlue
    ],
   text: [
      PurpleRed,
      OrangeYellow,
      GreenBlue
    ]
  },
];

const tetradicObj = [
  {main: red,
    accent: [
      orange,
      green,
      blue
    ],
   text: [
      Red,
      Orange,
      Green,
      Blue
    ]
  },
  {main: redOrange,
    accent: [
      orangeYellow,
      greenBlue,
      bluePurple
    ],
   text: [
      RedOrange,
      OrangeYellow,
      GreenBlue,
      BluePurple
    ]
  },
  {main: orange,
    accent: [
      yellow,
      blue,
      purple
    ],
   text: [
      Orange,
      Yellow,
      Blue,
      Purple
    ]
  },
  {main: orangeYellow,
    accent: [
      yellowGreen,
      bluePurple,
      purpleRed
    ],
   text: [
      OrangeYellow,
      YellowGreen,
      BluePurple,
      PurpleRed
    ]
  },
  {main: yellow,
    accent: [
      green,
      purple,
      red
    ],
   text: [
      Yellow,
      Green,
      Purple,
      Red
    ]
  },
  {main: yellowGreen,
    accent: [
      greenBlue,
      purpleRed,
      redOrange
    ],
   text: [
      YellowGreen,
      GreenBlue,
      PurpleRed,
      RedOrange
    ]
  },
  {main: green,
    accent: [
      blue,
      red,
      orange
    ],
   text: [
      Green,
      Blue,
      Red,
      Orange
    ]
  },
  {main: greenBlue,
    accent: [
      bluePurple,
      redOrange,
      orangeYellow
    ],
   text: [
      GreenBlue,
      BluePurple,
      RedOrange,
      OrangeYellow
    ]
  },
  {main: blue,
    accent: [
      purple,
      orange,
      yellow
    ],
   text: [
      Blue,
      Purple,
      Orange,
      Yellow
    ]
  },
  {main: bluePurple,
    accent: [
      purpleRed,
      orangeYellow,
      yellowGreen
    ],
   text: [
      BluePurple,
      PurpleRed,
      OrangeYellow,
      YellowGreen
    ]
  },
  {main: purple,
    accent: [
      red,
      yellow,
      green
    ],
   text: [
      Purple,
      Red,
      Yellow,
      Green
    ]
  },
  {main: purpleRed,
    accent: [
      redOrange,
      yellowGreen,
      greenBlue
    ],
   text: [
      PurpleRed,
      RedOrange,
      YellowGreen,
      GreenBlue
    ]
  },
];

//access objects to apply dropshadows to colors and display color names
function colorSchemes(id, obj){
  let index = obj.findIndex(object => {
  return object.main == id;
});
  id.classList.add("dropshadow");
 
  //if color scheme is monochromatic, unhide the selected color name
  if(obj == monochromaticObj){
      monochromaticObj[index].text.classList.remove("hide");
  
  //if the color scheme is complementary, find the accent color, a dropshadow to it & unhide the color name
  }else if(obj == complementaryObj){
      let d = complementaryObj.find(o => o.main == id).accent;
      d.classList.add("dropshadow");
  for(let i = 0; i < complementaryObj[index].text.length; i++){
      complementaryObj[index].text[i].classList.remove("hide");
    }
  
  //if color scheme is something else, find the first two accent colors and add dropshadows
  }else{
      let a = obj.find(o => o.main == id).accent[0];
      let b = obj.find(o => o.main == id).accent[1];
      let c = "";
    
      a.classList.add("dropshadow");
      b.classList.add("dropshadow"); 
  
   //for color schemes with 3 accent colors, set variable c to the third accent color and add a dropshadow to it
      if(Object.keys(obj[0].accent).length > 2){
      c = obj.find(o => o.main == id).accent[2];
      c.classList.add("dropshadow");
     }
  
  //iterate through all property value in property text and unhide the color names
      for(let i = 0; i < obj[index].text.length; i++){
      obj[index].text[i].classList.remove("hide");
     }
   }
};

//call colorScheme based on selected color scheme and 
function colorWheel(id, num){
  //call reset function
  reset();
  
  //get the color scheme from the dropdown menu
  const selectType = document.getElementById("dropdown");
  const schemeType = selectType.options[selectType.selectedIndex].text;

  //call colorSchemes with selected color id and color scheme as arguments
  if(schemeType == "Monochromatic"){
    colorSchemes(id, monochromaticObj);
  }else if(schemeType == "Complementary"){
    colorSchemes(id, complementaryObj);
  }else if(schemeType == "Analogous"){
    colorSchemes(id, analogousObj);
  }else if(schemeType == "Split-Complementary"){
    colorSchemes(id, scomplementaryObj);
  }else if(schemeType == "Triadic"){
    colorSchemes(id, triadicObj);
  }else if(schemeType == "Tetradic"){
    colorSchemes(id, tetradicObj);
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
  const colorNames = document.querySelectorAll(".colorname");
  for(const colorname of colorNames){
    colorname.classList.add("hide");
  }
}