const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";


const colorDarkSet = "#d13e9d";
const colorMidSet = "#ff59c4";
const colorLightSet = "#ffa5df";

const purple = "#873ed1";

let colorDark = "#d13e9d";
let colorMid = "#ff59c4";
let colorLight = "#ffa5df";
//"#e3eded"
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

colorMode(RGB, 255);
stroke('#cef2ff');

noFill();

let horizontal = false;

angleMode(DEGREES);

push();

scale(1, letterData["scale"]);
translate(0, letterData["level"]);



push();
scale(0.65, 0.65);
translate(25, 53);
drawSpec(letterData, 4, colorDark);
pop();

push();
scale(0.6, 0.6);
translate(25, 60);
drawSpec(letterData, 4, colorMid);
pop();

push();
scale(0.6, 0.6);
translate(20, 55);
drawSpec(letterData, 2, colorLight);
pop();

pop();

}

function drawSpec(letterData, weight, C){
push();

//vertical letter
if(letterData["line1"] != 0 && letterData["line1"] != 1 && letterData["line1"] != 2 
  && letterData["line2"] != 0 && letterData["line2"] != 1 && letterData["line2"] != 2){
  print("i am fucking begging you");
}

if(letterData["horizontal"] == 0){ 
   strokeWeight(6*weight);   

   push();
   scale(map(letterData["horizontal"], 1, 0, 1, 1, true),   map(letterData["horizontal"], 1, 0, 1, 0.75, true));
   //translate(0, 5000);
   translate(0, map(letterData["horizontal"], 1, 0, 0, 60, true));

 //1
 if(letterData["line1"] < 1 && letterData["line1"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line1"], 0, 1, 0, 255, true));
 } else if(letterData["line1"] > -1 && letterData["line1"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line1"], 0, -1, 0, 255, true));

 } 
 else {
    stroke(red(C), green(C), blue(C));
 }



 if(letterData["line1"] != 0){  
  curve(100*(letterData["line1"]-1), 0, 0, 0, 0, 100, 100*(letterData["line1"]-1), 100);
  //line(0, 0, 0, 100); 
}


//2
if(letterData["line2"] < 1 && letterData["line2"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line2"], 0, 1, 0, 255, true));
 } else if(letterData["line2"] > -1 && letterData["line2"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line2"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }
 
 if(letterData["line2"] != 0){  
 curve(0, 100*(letterData["line2"]-1), 0, 0, 100, 0, 100, 100*(letterData["line2"]-1));

}

 //3
if(letterData["line3"] < 1 && letterData["line3"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line3"], 0, 1, 0, 255, true));
 } else if(letterData["line3"] > -1 && letterData["line3"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line3"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }

 if(letterData["line3"] != 0){
 curve(-100*(letterData["line3"]-1)+100, 0, 100, 0, 100, 100, -100*(letterData["line3"]-1)+100, 100);
 //line(100, 0, 100, 100);
}

 //4
 if(letterData["line4"] < 1 && letterData["line4"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line4"], 0, 1, 0, 255, true));
 } else if(letterData["line4"] > -1 && letterData["line4"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line4"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }

 if(letterData["line4"] != 0){
 curve(0, 100*(letterData["line4"]-1)+100, 0, 100, 100, 100, 100, 100*(letterData["line4"]-1)+100);
 //line(0, 100, 100, 100);
}

 //5
if(letterData["line5"] < 1 && letterData["line5"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line5"], 0, 1, 0, 255, true));
 } else if(letterData["line5"] > -1 && letterData["line5"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line5"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }

 if(letterData["line5"] != 0){
  curve(100*(letterData["line5"]-1), 100, 0, 100, 0, 200, 100*(letterData["line5"]-1), 200);
 //line(0, 100, 0, 200);
}

 //6
 if(letterData["line6"] < 1 && letterData["line6"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line6"], 0, 1, 0, 255, true));
 } else if(letterData["line6"] > -1 && letterData["line6"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line6"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }

 if(letterData["line6"] != 0){
curve(-100*(letterData["line6"]-1)+100, 100, 100, 100, 100, 200, -100*(letterData["line6"]-1)+100, 200);
 //line(100, 100, 100, 200);
}

 //7 
if(letterData["line7"] < 1 && letterData["line7"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line7"], 0, 1, 0, 255, true));
 } else if(letterData["line7"] > -1 && letterData["line7"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line7"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }
 if(letterData["line7"] != 0){
 curve(0, -100*(letterData["line7"]-1)+200, 0, 200, 100, 200, 100,  -100*(letterData["line7"]-1)+200);
 //line(0, 200, 100, 200);
}
pop();
}

else {

//rotated letter
 push();

 if(letterData["horizontal"] > 1 && letterData["horizontal"] <= 1.1){
 shearX(map(letterData["horizontal"]-1, 0, 0.1, 0, -20, true));
 scale(map(letterData["horizontal"]-1, 0, 0.1, 1, 1.4, true),1);
  }

 if(letterData["horizontal"] < 0){
    let hori = map(letterData["horizontal"], 0, 3, 0, 1, true);

    strokeWeight(6*weight);
    stroke(red(C), green(C), blue(C));
    line(50, 0, 50, map(hori, 0, 1, 0, 50, true));

    translate(10+(100*hori), 50 * hori);
    rotate(map(hori, 0, 1, 0, 90, true));
    scale(map(hori, 0, 1, 1, 0.25+(hori*1), true), map(hori, 0, 1, 1, 1.1-(hori*0.5), true));



  }
 else {
  if (letterData["horizontal"] < 3){
 translate(10+(100*letterData["horizontal"]), 50 * letterData["horizontal"]);
 rotate(map(letterData["horizontal"], 0, 1, 0, 90, true));
 scale(map(letterData["horizontal"], 0, 1, 1, 0.25+(letterData["horizontal"]*1), true), map(letterData["horizontal"], 0, 1, 1, 1.1-(letterData["horizontal"]*0.5), true));
  }
}


 strokeWeight(6*weight);

  //1
 if(letterData["line1"] < 1 && letterData["line1"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line1"], 0, 1, 0, 255, true));
 } else if(letterData["line1"] > -1 && letterData["line1"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line1"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }

 if(letterData["line1"] != 0){  
  //print(letterData["line1"] )
  curve(100*(letterData["line1"]-1), 0, 0, 0, 0, 100, 100*(letterData["line1"]-1), 100);
  //line(0, 0, 0, 100); 
}


strokeWeight(10*weight);
 //2
if(letterData["line2"] < 1 && letterData["line2"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line2"], 0, 1, 0, 255, true));
 } else if(letterData["line2"] > -1 && letterData["line2"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line2"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }
 
 if(letterData["line2"] != 0){  
 curve(0, 100*(letterData["line2"]-1), 0, 0, 100, 0, 100, 100*(letterData["line2"]-1));

}
 strokeWeight(6*weight);

 //3
if(letterData["line3"] < 1 && letterData["line3"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line3"], 0, 1, 0, 255, true));
 } else if(letterData["line3"] > -1 && letterData["line3"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line3"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }

 if(letterData["line3"] != 0){
 curve(-100*(letterData["line3"]-1)+100, 0, 100, 0, 100, 100, -100*(letterData["line3"]-1)+100, 100);
 //line(100, 0, 100, 100);
}

strokeWeight(10*weight);
 //4
 if(letterData["line4"] < 1 && letterData["line4"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line4"], 0, 1, 0, 255, true));
 } else if(letterData["line4"] > -1 && letterData["line4"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line4"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }

 if(letterData["line4"] != 0){
 curve(0, 100*(letterData["line4"]-1)+100, 0, 100, 100, 100, 100, 100*(letterData["line4"]-1)+100);
 //line(0, 100, 100, 100);
}

 strokeWeight(6*weight);
 //5
if(letterData["line5"] < 1 && letterData["line5"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line5"], 0, 1, 0, 255, true));
 } else if(letterData["line5"] > -1 && letterData["line5"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line5"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }

 if(letterData["line5"] != 0){
  curve(100*(letterData["line5"]-1), 100, 0, 100, 0, 200, 100*(letterData["line5"]-1), 200);
 //line(0, 100, 0, 200);
}
 strokeWeight(6*weight);
 //6
 if(letterData["line6"] < 1 && letterData["line6"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line6"], 0, 1, 0, 255, true));
 } else if(letterData["line6"] > -1 && letterData["line6"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line6"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }

 if(letterData["line6"] != 0){
curve(-100*(letterData["line6"]-1)+100, 100, 100, 100, 100, 200, -100*(letterData["line6"]-1)+100, 200);
 //line(100, 100, 100, 200);
}

 strokeWeight(10*weight);
 //7 
if(letterData["line7"] < 1 && letterData["line7"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line7"], 0, 1, 0, 255, true));
 } else if(letterData["line7"] > -1 && letterData["line7"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line7"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }
 if(letterData["line7"] != 0){
 curve(0, -100*(letterData["line7"]-1)+200, 0, 200, 100, 200, 100,  -100*(letterData["line7"]-1)+200);

}

 pop();
}

pop();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["line1"]    = map(percent, 0, 100, oldObj["line1"], newObj["line1"]);
  new_letter["line2"]    = map(percent, 0, 100, oldObj["line2"], newObj["line2"]);
  new_letter["line3"]    = map(percent, 0, 100, oldObj["line3"], newObj["line3"]);
  new_letter["line4"]    = map(percent, 0, 100, oldObj["line4"], newObj["line4"]);
  new_letter["line5"]    = map(percent, 0, 100, oldObj["line5"], newObj["line5"]);
  new_letter["line6"]    = map(percent, 0, 100, oldObj["line6"], newObj["line6"]);
  new_letter["line7"]    = map(percent, 0, 100, oldObj["line7"], newObj["line7"]);
  new_letter["horizontal"]    = map(percent, 0, 100, oldObj["horizontal"], newObj["horizontal"]);
  new_letter["scale"]    = map(percent, 0, 100, oldObj["scale"], newObj["scale"]);
  new_letter["level"]    = map(percent, 0, 100, oldObj["level"], newObj["level"]);
  return new_letter;
}

var swapWords = [
  "COHERENT",
  "DEFINITE",
  "TAILORED"
]