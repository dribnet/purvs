let main_canvas = null;

let arc1_slider = null;
let arc1end_slider = null;
let arc1rad_slider = null;

let arc2_slider = null;
let arc2end_slider = null;
let arc2rad_slider = null;

let arc3_slider = null;
let arc3end_slider = null;
let arc3rad_slider = null;


const canvasWidth = 960;
const canvasHeight = 500;

let savedValues = {
  "default":
   {
  "box1": {
    "arcStart": 274,
    "arcEnd": 274
  },
  "box2": {
    "arcStart": 304,
    "arcEnd": 304
  },
  "box3": {
    "arcStart": 0,
    "arcEnd": 360
  }
},
  "A":
   {
  "box1": {
    "arcStart": 154,
    "arcEnd": 29,
    "rad": 200
  },
  "box2": {
    "arcStart": 16,
    "arcEnd": 167,
    "rad": 150
  },
  "box3": {
    "arcStart": 45,
    "arcEnd": 135,
    "rad": 100
  }  
},
  "B":
    {
   "box1": {
    "arcStart": 47,
    "arcEnd": 266,
    "rad": 200
  },
  "box2": {
    "arcStart": 0,
    "arcEnd": 96,
    "rad": 150
  },
  "box3": {
    "arcStart": 96,
    "arcEnd": 360,
    "rad": 100
  }
},
  "C":
    {
   "box1": {
    "arcStart": 61,
    "arcEnd": 297,
    "rad": 200
  },
  "box2": {
    "arcStart": 60,
    "arcEnd": 295,
    "rad": 150
  },
  "box3": {
    "arcStart": 66,
    "arcEnd": 291,
    "rad": 100
  }
},
  "D":
  {
    "box1": {
    "arcStart": 257,
    "arcEnd": 106
  },
  "box2": {
    "arcStart": 254,
    "arcEnd": 106
  },
  "box3": {
    "arcStart": 249,
    "arcEnd": 110
  }
},
  "E":
  {
  "box1": {
    "arcStart": 61,
    "arcEnd": 298
  },
  "box2": {
    "arcStart": 133,
    "arcEnd": 226
  },
  "box3": {
    "arcStart": 152,
    "arcEnd": 204
  }
},
  "F":
  {
  "box1": {
    "arcStart": 111,
    "arcEnd": 331
  },
  "box2": {
    "arcStart": 156,
    "arcEnd": 321
  },
  "box3": {
    "arcStart": 166,
    "arcEnd": 199
  }
},
  "G":
  {
  "box1": {
    "arcStart": 33,
    "arcEnd": 269
  },
  "box2": {
    "arcStart": 32,
    "arcEnd": 75
  },
  "box3": {
    "arcStart": 31,
    "arcEnd": 70
  }
},
  "H":
  {
  "box1": {
    "arcStart": 128,
    "arcEnd": 232
  },
  "box2": {
    "arcStart": 301,
    "arcEnd": 66
  },
  "box3": {
    "arcStart": 190,
    "arcEnd": 351
  }
},
  "I":
  {
  "box1": {
    "arcStart": 242,
    "arcEnd": 299
  },
  "box2": {
    "arcStart": 54,
    "arcEnd": 126
  },
  "box3": {
    "arcStart": 75,
    "arcEnd": 105
  }
},
  "J":
  {
  "box1": {
    "arcStart": 240,
    "arcEnd": 142
  },
  "box2": {
    "arcStart": 240,
    "arcEnd": 304
  },
  "box3": {
    "arcStart": 240,
    "arcEnd": 302
  }
},
  "K":
  {
  "box1": {
    "arcStart": 134,
    "arcEnd": 228
  },
  "box2": {
    "arcStart": 85,
    "arcEnd": 170
  },
  "box3": {
    "arcStart": 174,
    "arcEnd": 270
  }
},
  "L":
  {
  "box1": {
    "arcStart": 41,
    "arcEnd": 229
  },
  "box2": {
    "arcStart": 43,
    "arcEnd": 230
  },
  "box3": {
    "arcStart": 43,
    "arcEnd": 144
  }
},
  "M":
  {
  "box1": {
    "arcStart": 146,
    "arcEnd": 35
  },
  "box2": {
    "arcStart": 227,
    "arcEnd": 316
  },
  "box3": {
    "arcStart": 248,
    "arcEnd": 292
  }
},
  "N":
  {
  "box1": {
    "arcStart": 146,
    "arcEnd": 35
  },
  "box2": {
    "arcStart": 137,
    "arcEnd": 43
  },
  "box3": {
    "arcStart": 121,
    "arcEnd": 57
  }
},
  "O":
  {
  "box1": {
    "arcStart": 360,
    "arcEnd": 0
  },
  "box2": {
    "arcStart": 360,
    "arcEnd": 0
  },
  "box3": {
    "arcStart": 360,
    "arcEnd": 0
  }
},
  "P":
  {
  "box1": {
    "arcStart": 119,
    "arcEnd": 245
  },
  "box2": {
    "arcStart": 221,
    "arcEnd": 20
  },
  "box3": {
    "arcStart": 0,
    "arcEnd": 0
  }
},
  "Q":
  {
  "box1": {
    "arcStart": 41,
    "arcEnd": 65
  },
  "box2": {
    "arcStart": 69,
    "arcEnd": 37
  },
  "box3": {
    "arcStart": 38,
    "arcEnd": 67
  }
},
  "R":
  {
  "box1": {
    "arcStart": 123,
    "arcEnd": 214
  },
  "box2": {
    "arcStart": 125,
    "arcEnd": 319
  },
  "box3": {
    "arcStart": 215,
    "arcEnd": 315
  }
},
  "S":
  {
  "box1": {
    "arcStart": 193,
    "arcEnd": 324
  },
  "box2": {
    "arcStart": 7,
    "arcEnd": 142
  },
  "box3": {
    "arcStart": 194,
    "arcEnd": 0
  }
},
  "T":
  {
  "box1": {
    "arcStart": 204,
    "arcEnd": 337
  },
  "box2": {
    "arcStart": 253,
    "arcEnd": 290
  },
  "box3": {
    "arcStart": 210,
    "arcEnd": 332
  }
},
  "U":
  {
  "box1": {
    "arcStart": 333,
    "arcEnd": 208
  },
  "box2": {
    "arcStart": 331,
    "arcEnd": 209
  },
  "box3": {
    "arcStart": 329,
    "arcEnd": 211
  }
},
  "V":
  {
  "box1": {
    "arcStart": 333,
    "arcEnd": 208
  },
  "box2": {
    "arcStart": 350,
    "arcEnd": 189
  },
  "box3": {
    "arcStart": 34,
    "arcEnd": 149
  }
},
  "W":
  {
  "box1": {
    "arcStart": 333,
    "arcEnd": 208
  },
  "box2": {
    "arcStart": 58,
    "arcEnd": 124
  },
  "box3": {
    "arcStart": 71,
    "arcEnd": 111
  }
},
  "X":
  {
  "box1": {
    "arcStart": 219,
    "arcEnd": 320
  },
  "box2": {
    "arcStart": 40,
    "arcEnd": 141
  },
  "box3": {
    "arcStart": 0,
    "arcEnd": 0
  }
},
  "Y":
  {
  "box1": {
    "arcStart": 321,
    "arcEnd": 143
  },
  "box2": {
    "arcStart": 322,
    "arcEnd": 16
  },
  "box3": {
    "arcStart": 319,
    "arcEnd": 222
  }
},
  "Z":
  {
  "box1": {
    "arcStart": 216,
    "arcEnd": 347
  },
  "box2": {
    "arcStart": 25,
    "arcEnd": 176
  },
  "box3": {
    "arcStart": 180,
    "arcEnd": 344
  }
}


}
wxyz
function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  // create two sliders
  arc1_slider = createSlider(0, 360, 90);
  arc1end_slider = createSlider(0, 360, 270);
  arc1rad_slider = createSlider(150, 350, 200);
  arc1rad_slider.position(250, 20);

  arc2_slider = createSlider(0, 360, 90);
  arc2end_slider = createSlider(0, 360, 270);
  arc2rad_slider = createSlider(100, 300, 150);
  arc2rad_slider.position(250, 70);

  arc3_slider = createSlider(0, 360, 90);
  arc3end_slider = createSlider(0, 360, 270);
  arc3rad_slider = createSlider(50, 250, 100);
  arc3rad_slider.position(250, 120);


  sel = createSelect();
  sel.option('default');
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.option('D');
  sel.option('E');
  sel.option('F');
  sel.option('G');
  sel.option('H');
  sel.option('I');
  sel.option('J');
  sel.option('K');
  sel.option('L');
  sel.option('M');
  sel.option('N');
  sel.option('O');
  sel.option('P');
  sel.option('Q');
  sel.option('R');
  sel.option('S');
  sel.option('T');
  sel.option('U');
  sel.option('V');
  sel.option('W');
  sel.option('X');
  sel.option('Y');
  sel.option('Z');
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // position each element on the page
  main_canvas.parent('canvasContainer');
  arc1_slider.parent('slider1Container');
  arc1end_slider.parent('slider2Container');
  arc2_slider.parent('slider3Container');
  arc2end_slider.parent('slider4Container');
  arc3_slider.parent('slider5Container');
  arc3end_slider.parent('slider6Container');

  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {
  let obj = {};
  obj["box1"] = {};
  obj["box1"]["arcStart"] = arc1_slider.value();
  obj["box1"]["arcEnd"] = arc1end_slider.value();
  //obj["box1"]["rad"] = arc1rad_slider.value();
  obj["box2"] = {};
  obj["box2"]["arcStart"] = arc2_slider.value();
  obj["box2"]["arcEnd"] = arc2end_slider.value();
  //obj["box2"]["rad"] = arc2rad_slider.value();
  obj["box3"] = {};
  obj["box3"]["arcStart"] = arc3_slider.value();
  obj["box3"]["arcEnd"] = arc3end_slider.value();
  //obj["box3"]["rad"] = arc3rad_slider.value();
  return obj;
}

function dataObjectToSliders(obj) {
  arc1_slider.value(obj["box1"]["arcStart"]);
  arc1end_slider.value(obj["box1"]["arcEnd"]);
  //arc1rad_slider.value(obj["box1"]["rad"]);
  arc2_slider.value(obj["box2"]["arcStart"]);
  arc2end_slider.value(obj["box2"]["arcEnd"]);
  //arc2rad_slider.value(obj["box2"]["rad"]);
  arc3_slider.value(obj["box3"]["arcStart"]);
  arc3end_slider.value(obj["box3"]["arcEnd"]);
  //arc3rad_slider.value(obj["box3"]["rad"]);
}

function letterChangedEvent() {
  let item = sel.value();
  dataObjectToSliders(savedValues[item]);
}

function buttonPressedEvent() {
  let obj = sliderToDataObject();
  json = JSON.stringify(obj, null, 2);
  alert(json);
}

const colorFront = [150];
const colorBack = [75];

function drawPart(y_offset, pos, tilt) {
  let middle_x = 2 * canvasWidth / 3;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + pos, middle_y + y_offset);
  rotate(tilt);

  let scale = 10;

  fill(colorFront);
  // rect(-100,-100,100,100);
  rect(-20*scale, -3*scale, 20*scale, 3*scale);
}

function drawFromSliders(y_offset, pos_slider, tilt_slider) {
  let pos = pos_slider.value();
  let tilt = tilt_slider.value();
  drawPart(y_offset, pos, tilt);
}

function draw () {
  background(75);

  noFill();
  stroke(220);
  angleMode(DEGREES);
  
  strokeWeight(12);
  arc(width/2, height/2, arc1rad_slider.value(), 200, arc1_slider.value(), arc1end_slider.value());
  strokeWeight(10);
  arc(width/2, height/2, arc2rad_slider.value(), 150, arc2_slider.value(), arc2end_slider.value());
  strokeWeight(8);
  arc(width/2, height/2, arc3rad_slider.value(), 100, arc3_slider.value(), arc3end_slider.value());

  //arc(width/2, height/2, 170, 210, arc1_slider.value(), arc1end_slider.value());
  //arc(width/2, height/2, 120, 160, arc2_slider.value(), arc2end_slider.value());
  //arc(width/2, height/2, 70, 110, arc3_slider.value(), arc3end_slider.value());

  //drawFromSliders(-50, pos1_slider, tilt1_slider);
  //drawFromSliders(  0, pos2_slider, tilt2_slider);
  //drawFromSliders( 50, pos3_slider, tilt3_slider);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
