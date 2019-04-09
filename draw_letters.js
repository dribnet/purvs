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
/*
if(letterData["level"] == 2){
  scale(1, 1.25);
  translate(0, -10);

} else if (letterData["level"] == 1) {
  scale(1, 0.8);
  translate(0, 80);
} else if (letterData["level"] == 0) {
  scale(1, 1.2);
  translate(0, 0);
}
else if (letterData["level"] == -1) {
  scale(1, 1.1);
  translate(0, 50);
}
*/
scale(1, letterData["scale"]);
translate(0, letterData["level"]);
/*
scale(1, letterData["scale"]);
translate(0, letterData["level"]);
*/
/*
if(letterData["scale"] < 1.2){

} else {
  translate(0, -(letterData["scale"]*10) - 115);
}
*/
//2 -> 1.25         -> -10
//0 -> 1.2 ^ 0.05   -> -5
//-1 -> 1.1 ^ 0.1   -> 50
//1 -> 0.8 ^ 0.3    -> 80
//translate(0, 90);


if((letterData["line1"] > 0 && letterData["line1"] < 1) || (letterData["line1"] > 1 && letterData["line1"] < 2)){
 // print("transitioning");
 // print(letterData["line1"]);

} 
if((letterData["line2"] > 0 && letterData["line2"] < 1) || (letterData["line2"] > 1 && letterData["line2"] < 2)){
 // print("transitioning2");
 // print(letterData["line2"]);

} if((letterData["line3"] > 0 && letterData["line3"] < 1) || (letterData["line3"] > 1 && letterData["line3"] < 2)){
 // print("transitioning3");
  //print(letterData["line3"]);

}if((letterData["line4"] > 0 && letterData["line4"] < 1) || (letterData["line4"] > 1 && letterData["line4"] < 2)){
 // print("transitioning4");
//print(letterData["line4"]);

}if((letterData["line5"] > 0 && letterData["line5"] < 1) || (letterData["line5"] > 1 && letterData["line5"] < 2)){
 // print("transitioning5");
//print(letterData["line5"]);

} if((letterData["line6"] > 0 && letterData["line6"] < 1) || (letterData["line6"] > 1 && letterData["line6"] < 2)){
  //print("transitioning6");
//print(letterData["line6"]);

} if((letterData["line7"] > 0 && letterData["line7"] < 1) || (letterData["line7"] > 1 && letterData["line7"] < 2)){
  //print("transitioning7");
//print(letterData["line7"]);

}

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
/*
  let circle1x = letterData["circle1x"];
  let circle1y = letterData["circle1y"];
  let circle2x = letterData["circle2x"];
  let circle2y = letterData["circle2y"];
  let circle3x = letterData["circle3x"];
  let circle3y = letterData["circle3y"];
  let size = letterData["size"];



 
  noStroke();
  //push();
  strokeWeight(1);
  fill('#ff59c4');
  push();
  //translate(posx, posy);
  rectMode(red(C), green(C), blue(C)ENTER);
  translate(50, 100);
  rect(0, 0, 100, 100, 20);  
  pop();

  fill('#e3eded');
  push();
  translate(50, 100);


  if(size > 100){
    ellipse(circle1x, circle1y, 60, size);
  } else {
    ellipse(circle1x, circle1y, size, size);
  }

  ellipse(circle2x, circle2y, 40, 40);
  ellipse(circle3x, circle3y, 40, 40);

  pop();

*/
}

function drawSpec(letterData, weight, C){
push();


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


 push();
 //rotate(90);
 //scale(2,   0.5);
 //translate(0, -200);
 //print(letterData["horizontal"]);
 //print(map(letterData["horizontal"], 0, 1, 0, 90, true));
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
//} else {

  /*

   if(letterData["line1"] < 1 && letterData["line1"] > 0){
  stroke(red(C), green(C), blue(C), map(letterData["line1"], 0, 1, 0, 255, true));
 } else if(letterData["line1"] > -1 && letterData["line1"] < 0){
  stroke(red(C), green(C), blue(C), map(letterData["line1"], 0, -1, 0, 255, true));
 } 
 else {
   stroke(red(C), green(C), blue(C));
 }

  strokeWeight(6*weight);


  line(50, 25, 50, 100);




  translate(120, 100);
 rotate(90);
 scale(1, 0.7);

*/

//}

 //translate( map(letterData["horizontal"], 0, 1, 0, 340 - (letterData["horizontal"]*280), true), map(letterData["horizontal"], 0, 1, 0, -100-(letterData["horizontal"]-100), true));

/*
 if(letterData["horizontal"] < 1){
  //scale(map(letterData["horizontal"], 0, 1, 1, 0.75, true),   map(letterData["horizontal"], 0, 1, 1, 0.75, true));
   translate( map(letterData["horizontal"], 0, 1, 0, 200, true), map(letterData["horizontal"], 0, 1, 0, -150, true));
 } else {
  //scale(map(letterData["horizontal"], 0, 1, 1, 1.25, true),   map(letterData["horizontal"], 0, 1, 1, 0.5, true));
   translate( map(letterData["horizontal"], 0, 1, 0, 60, true), map(letterData["horizontal"], 0, 1, 0, -200, true));

 }
*/
  
  //translate( map(letterData["horizontal"], 0, 1, 0, 60, true), map(letterData["horizontal"], 0, 1, 0, -200, true));

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
 //line(0, 200, 100, 200);
}

 pop();
}

pop();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["line1"]    = map(percent, 0, 100, oldObj["line1"], newObj["line1"]);

  colorMode(HSL, 360, 100, 100, 360);
  /*
  if(percent < 50){
   colorDark = lerpColor(color(321, 62, 53), color(256, 62, 53), (percent/100)*2);
  } else {
   colorDark = lerpColor(color(321, 62, 53), color(256, 62, 53), (percent/100)*2);
  }
  
   colorDark = color(map(percent, 0, 100, 0, 340, true), 62, 53);
   colorMid = color(map(percent, 0, 100, 0, 340, true), 100, 67);
   colorLight = color(map(percent, 0, 100, 0, 340, true), 100, 82.35);
  */ 
  /*
  if(percent < 50){
   colorDark = lerpColor(color(321, 62, 53), color(map(percent, 0, 100, 0, 540, true), 62, 53), (percent/100)*2);
   colorMid = lerpColor(color(321, 100, 67.45), color(map(percent, 0, 100, 0, 540, true), 100, 67.45), (percent/100)*2);
   colorLight = lerpColor(color(321, 100, 82.35), color(map(percent, 0, 100, 0, 540, true), 100, 82.35), (percent/100)*2);
  } else {
    print("testtt");
   colorDark = lerpColor(color(map(percent, 0, 100, 0, 540, true), 62, 53), color(321, 62, 53), (percent/100));
   colorMid = lerpColor(color(map(percent, 0, 100, 0, 540, true), 100, 67.45), color(321, 100, 67.45),  (percent/100));
   colorLight = lerpColor(color(map(percent, 0, 100, 0, 540, true), 100, 82.35), color(321, 100, 82.35),  (percent/100));
  }
  */
  
  
  //colorDark = "#d13e9d"; -> #653ed1
  //colorMid = "#ff59c4"; -> #9059ff
  //colorLight = "#ffa5df"; -> #c5a4ff

  new_letter["line2"]    = map(percent, 0, 100, oldObj["line2"], newObj["line2"]);
  new_letter["line3"]    = map(percent, 0, 100, oldObj["line3"], newObj["line3"]);
  new_letter["line4"]    = map(percent, 0, 100, oldObj["line4"], newObj["line4"]);
  new_letter["line5"]    = map(percent, 0, 100, oldObj["line5"], newObj["line5"]);
  new_letter["line6"]    = map(percent, 0, 100, oldObj["line6"], newObj["line6"]);
  new_letter["line7"]    = map(percent, 0, 100, oldObj["line7"], newObj["line7"]);
  new_letter["horizontal"]    = map(percent, 0, 100, oldObj["horizontal"], newObj["horizontal"]);
  new_letter["scale"]    = map(percent, 0, 100, oldObj["scale"], newObj["scale"]);
  new_letter["level"]    = map(percent, 0, 100, oldObj["level"], newObj["level"]);
  /*
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  */
  return new_letter;
}

var swapWords = [
  "COHERENT",
  "STARLORD",
  "JAZZIEST"
]