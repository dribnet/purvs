var canvasWidth = 960;
var canvasHeight = 500;
var curRandomSeed;
var randomNum;
var lastSwapTime = 0;
var millisPerSwap = 5000;
var faceImages = [];
var curFaceIndex = 0;
var faceSelector;
var facelist = [];
var NUMFACES = 6*9;

var faceMapping = null;

function preload () {
  if (faceData == null) {
    faceData = loadJSON('face_data.json');
  }
}

var faceData = [
  {
  "url": "z_face1.jpg",
  "embedding": [null],
  "landmarks": [
      {
          "bottom_lip":
              [[219, 206], [208, 221], [194, 226], [185, 227], [175, 227], [164, 221], [154, 208], [158, 209], [176, 218], [185, 219], [194, 218], [217, 207]],
          "nose_tip":
              [[169, 189], [176, 191], [184, 192], [191, 190], [200, 189]],
          "nose_bridge":
              [[183, 141], [183, 154], [183, 167], [183, 180]],
          "top_lip":
              [[154, 208], [165, 205], [176, 202], [185, 204], [193, 202], [207, 204], [219, 206], [217, 207], [193, 208], [185, 210], [176, 209], [158, 209]],
          "right_eyebrow":
              [[195, 125], [208, 120], [222, 119], [235, 122], [245, 131]],
          "left_eye":
              [[144, 143], [151, 139], [159, 139], [166, 146], [159, 147], [150, 146]],
          "left_eyebrow":
              [[131, 132], [138, 123], [149, 120], [161, 121], [172, 125]],
          "chin":
              [[122, 151], [121, 168], [123, 185], [127, 202], [133, 219], [143, 233], [154, 247], [167, 258], [185, 262], [203, 259], [221, 251], [237, 238], [250, 224], [256, 207], [259, 189], [261, 170], [261, 152]],
          "right_eye":
              [[205, 146], [212, 139], [221, 138], [228, 143], [221, 145], [212, 146]]
      }
    ]
  },
  {
  "url": "z_face2.jpg",
  "embedding": [null],
  "landmarks": [
    {"nose_tip": [[258, 199], [266, 200], [274, 201], [282, 199], [289, 197]], "left_eye": [[216, 159], [226, 152], [239, 152], [250, 161], [239, 164], [225, 164]], "right_eyebrow": [[286, 130], [300, 123], [315, 121], [330, 125], [338, 137]], "right_eye": [[291, 159], [300, 148], [313, 147], [323, 154], [315, 160], [302, 161]], "left_eyebrow": [[197, 144], [206, 132], [221, 126], [237, 127], [253, 131]], "bottom_lip": [[310, 217], [297, 229], [286, 234], [277, 235], [268, 235], [255, 232], [239, 221], [245, 222], [268, 225], [276, 226], [285, 224], [304, 218]], "chin": [[185, 160], [189, 180], [194, 199], [200, 216], [209, 233], [222, 246], [238, 257], [256, 265], [276, 267], [295, 263], [311, 252], [325, 240], [336, 226], [343, 209], [345, 190], [346, 172], [347, 153]], "nose_bridge": [[271, 152], [272, 164], [273, 175], [274, 186]], "top_lip": [[239, 221], [255, 218], [268, 215], [276, 216], [284, 214], [296, 216], [310, 217], [304, 218], [284, 220], [276, 221], [268, 221], [245, 222]]}
    ]
  },
  {
  "url": "z_face3.jpg",
  "embedding": [null],
  "landmarks": [
    {"bottom_lip": [[253, 150], [244, 153], [237, 153], [232, 152], [228, 150], [224, 147], [221, 142], [224, 142], [230, 144], [234, 146], [238, 146], [250, 149]], "nose_tip": [[231, 128], [234, 131], [237, 133], [242, 133], [246, 132]], "top_lip": [[221, 142], [226, 139], [232, 139], [235, 141], [240, 141], [246, 145], [253, 150], [250, 149], [239, 146], [235, 145], [231, 144], [224, 142]], "left_eye": [[221, 97], [226, 95], [232, 96], [236, 102], [231, 102], [225, 101]], "right_eye": [[258, 107], [264, 104], [271, 105], [275, 110], [270, 111], [263, 110]], "right_eyebrow": [[255, 94], [264, 92], [272, 93], [281, 96], [287, 101]], "chin": [[209, 96], [206, 107], [205, 118], [204, 129], [205, 140], [208, 150], [214, 159], [220, 167], [231, 172], [243, 173], [257, 171], [270, 166], [281, 160], [288, 151], [293, 139], [297, 128], [300, 116]], "left_eyebrow": [[215, 86], [221, 84], [228, 85], [235, 87], [241, 92]], "nose_bridge": [[245, 102], [243, 109], [240, 117], [238, 124]]}
    ]
  }
]

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  curRandomSeed = int(focusedRandom(0, 100));

  for(var i=0; i<NUMFACES; i++) {
  var monFace = new Face();
  facelist.push(monFace);
}

var mainFace = new Face();

for(var i=0; i<faceData.length; i++) {
  var data = faceData[i];
  data.image = loadImage(data.url)
 }

 faceSelector = createSelect();
 faceSelector.option('draw1');
 faceSelector.option('draw2');
 faceSelector.value('draw1');
 faceSelector.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);
}

//increases the seed by 1
function changeRandomSeed() {
  curRandomSeed+=1;
  lastSwapTime = millis();
}

// global variables for colors
var white = [255,255,255];
var lightGray = [220,220,220];
var shadow = [0,30];
var shadowLight = [255,65];

//color schemes
//KEY: background, face, pupil, horns, nose, mouth
// pink
var scheme1 = [[242,58,107],[243,100,242],[243,150,242],[255,255,255],[133,133,238],[97,97,235]];
// light blue
var scheme2 = [[191,210,251],[132,130,237],[34,28,234],[255,255,255],[83,85,227],[39,36,226]];
//orange
var scheme3 = [[255,209,48],[254,150,48],[255,81,0],[255,255,255],[249,118,67],[241,45,43]];
//green
var scheme4 = [[160,231,139],[63,161,77],[255,161,143],[255,255,255],[156,153,154],[30,84,36]];
//red
var scheme5 = [[248,130,78],[248,39,34],[129,105,95],[255,255,255],[126,102,91],[123,106,106]];

//contains all schemes
var schemes = [scheme2,scheme3,scheme4,scheme5];


//main draw function:
//makes a grid & randomizes each monster
function draw () {
  resetFocusedRandom(curRandomSeed);

  var data = faceData[curFaceIndex];
 var mode = faceSelector.value();

  if(millis() > lastSwapTime + millisPerSwap) {
  changeRandomSeed();
  }

  noStroke();

  var cols = 9;
  var rows = 5;

  var w = canvasWidth / cols;
  var h = canvasHeight / rows;
  for(var row=0; row<rows; row++) {
    for(var col=0; col<cols; col++) {
      var x = w*col;
      var y = h*row;

      //random color scheme is used
      scheme = schemes[Math.floor(focusedRandom(0,schemes.length))];
      fill(scheme[0]);
      //background rect
      rect(x,y,w,h);
      //lighter inside rectangle
      backgroundShape(x,y,w,h,shadowLight);

     //randomized variables
     var faceWidth = focusedRandom(-(h/6.66),-(h/20));
     var faceHeight = focusedRandom(-(h/16.66),(h/16.66));
     var eye_value = getEyeNum();
     var mouthType = Math.floor(focusedRandom(1,3));
     var noseType = Math.floor(focusedRandom(1,3));
     var hornSize = focusedRandom(-(h/5),(h/20));
     var hornType = getHornType();
     var face = getFaceType();

     var monFace = new Face();
     monFace.drawMonster(x-(w/2.5),y,faceWidth,faceHeight,eye_value,mouthType,noseType,hornSize,hornType,h,scheme,face);
   }
 }
}

function getNewFace(x,y,w,h){

  //randomized variables
  var faceWidth = focusedRandom(-(h/6.66),-(h/20));
  var faceHeight = focusedRandom(-(h/16.66),(h/16.66));
  var eye_value = getEyeNum();
  var mouthType = Math.floor(focusedRandom(1,3));
  var noseType = Math.floor(focusedRandom(1,3));
  var hornSize = focusedRandom(-(h/5),(h/20));
  var hornType = getHornType();
  var face = getFaceType();

  var newFace = new Face();
  monFace.drawMonster(x-(w/3),y,faceWidth,faceHeight,eye_value,mouthType,noseType,hornSize,hornType,h,scheme,face);

  return newFace;

}

//lighter rect inside of background rect
function backgroundShape(x,y,w,h,color){

  var shapeType = Math.floor(focusedRandom(1,6));
  fill(color);
  rectMode(CORNER);
  var strokeSize = focusedRandom(8,12);
  rect(x+strokeSize,y+strokeSize,w-strokeSize*2,h-strokeSize*2);

}

//gets a distribution of eye numbers
function getEyeNum(){

  randomNum = focusedRandom(0,100);

  if(randomNum<5){
    return 1;
  }
  else if(randomNum < 30){
    return 2;
  }
  else if (randomNum < 80){
    return 3;
  }
  else{
    return 4;
  }

}

//gets a distribution of horn types
function getHornType(){

  randomNum = focusedRandom(0,100);

  if(randomNum<90){
    return 1;
  }
  else{
    return 2;
  }
}

//gets a distribution of face types
function getFaceType(){

  randomNum = focusedRandom(0,100);

  if(randomNum<15){
    return 1;
  }
  else if(randomNum<30){
    return 2;
  }
  else if(randomNum<50){
    return 3;
  }
  else if(randomNum<75){
    return 4;
  }
  else{
    return 5;
  }

}


function mouseClicked(){
  changeRandomSeed();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
