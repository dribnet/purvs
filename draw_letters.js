const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";
"#e3eded"
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

 stroke('#ff59c4');
 noFill();

 let horizontal = false;

angleMode(DEGREES);

 if(letterData["horizontal"] == 0){ 
   strokeWeight(6);   

 //1
 if(letterData["line1"] < 1 && letterData["line1"] > 0){
  stroke(255, 89, 196, map(letterData["line1"], 0, 1, 0, 255, true));
 } else if(letterData["line1"] > -1 && letterData["line1"] < 0){
  stroke(255, 89, 196, map(letterData["line1"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }

 if(letterData["line1"] != 0){  
  curve(100*(letterData["line1"]-1), 0, 0, 0, 0, 100, 100*(letterData["line1"]-1), 100);
  //line(0, 0, 0, 100); 
}


//2
if(letterData["line2"] < 1 && letterData["line2"] > 0){
  stroke(255, 89, 196, map(letterData["line2"], 0, 1, 0, 255, true));
 } else if(letterData["line2"] > -1 && letterData["line2"] < 0){
  stroke(255, 89, 196, map(letterData["line2"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }
 
 if(letterData["line2"] != 0){  
 curve(0, 100*(letterData["line2"]-1), 0, 0, 100, 0, 100, 100*(letterData["line2"]-1));

}

 //3
if(letterData["line3"] < 1 && letterData["line3"] > 0){
  stroke(255, 89, 196, map(letterData["line3"], 0, 1, 0, 255, true));
 } else if(letterData["line3"] > -1 && letterData["line3"] < 0){
  stroke(255, 89, 196, map(letterData["line3"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }

 if(letterData["line3"] != 0){
 curve(-100*(letterData["line3"]-1)+100, 0, 100, 0, 100, 100, -100*(letterData["line3"]-1)+100, 100);
 //line(100, 0, 100, 100);
}

 //4
 if(letterData["line4"] < 1 && letterData["line4"] > 0){
  stroke(255, 89, 196, map(letterData["line4"], 0, 1, 0, 255, true));
 } else if(letterData["line4"] > -1 && letterData["line4"] < 0){
  stroke(255, 89, 196, map(letterData["line4"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }

 if(letterData["line4"] != 0){
 curve(0, 100*(letterData["line4"]-1)+100, 0, 100, 100, 100, 100, 100*(letterData["line4"]-1)+100);
 //line(0, 100, 100, 100);
}

 //5
if(letterData["line5"] < 1 && letterData["line5"] > 0){
  stroke(255, 89, 196, map(letterData["line5"], 0, 1, 0, 255, true));
 } else if(letterData["line5"] > -1 && letterData["line5"] < 0){
  stroke(255, 89, 196, map(letterData["line5"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }

 if(letterData["line5"] != 0){
  curve(100*(letterData["line5"]-1), 100, 0, 100, 0, 200, 100*(letterData["line5"]-1), 200);
 //line(0, 100, 0, 200);
}

 //6
 if(letterData["line6"] < 1 && letterData["line6"] > 0){
  stroke(255, 89, 196, map(letterData["line6"], 0, 1, 0, 255, true));
 } else if(letterData["line6"] > -1 && letterData["line6"] < 0){
  stroke(255, 89, 196, map(letterData["line6"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }

 if(letterData["line6"] != 0){
curve(-100*(letterData["line6"]-1)+100, 100, 100, 100, 100, 200, -100*(letterData["line6"]-1)+100, 200);
 //line(100, 100, 100, 200);
}

 //7 
if(letterData["line7"] < 1 && letterData["line7"] > 0){
  stroke(255, 89, 196, map(letterData["line7"], 0, 1, 0, 255, true));
 } else if(letterData["line7"] > -1 && letterData["line7"] < 0){
  stroke(255, 89, 196, map(letterData["line7"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }
 if(letterData["line7"] != 0){
 curve(0, -100*(letterData["line7"]-1)+200, 0, 200, 100, 200, 100,  -100*(letterData["line7"]-1)+200);
 //line(0, 200, 100, 200);
}

}

else {


 push();
 //rotate(90);
 //scale(2,   0.5);
 //translate(0, -200);
 //print(letterData["horizontal"]);
 //print(map(letterData["horizontal"], 0, 1, 0, 90, true));
 rotate(map(letterData["horizontal"], 0, 1, 0, 90, true));
 scale(map(letterData["horizontal"], 0, 1, 1, 2, true),   map(letterData["horizontal"], 0, 1, 1, 0.5, true));
 translate(0, map(letterData["horizontal"], 0, 1, 0, -200, true));

 strokeWeight(3);

  //1
 if(letterData["line1"] < 1 && letterData["line1"] > 0){
  stroke(255, 89, 196, map(letterData["line1"], 0, 1, 0, 255, true));
 } else if(letterData["line1"] > -1 && letterData["line1"] < 0){
  stroke(255, 89, 196, map(letterData["line1"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }

 if(letterData["line1"] != 0){  
  curve(100*(letterData["line1"]-1), 0, 0, 0, 0, 100, 100*(letterData["line1"]-1), 100);
  //line(0, 0, 0, 100); 
}


strokeWeight(10);
 //2
if(letterData["line2"] < 1 && letterData["line2"] > 0){
  stroke(255, 89, 196, map(letterData["line2"], 0, 1, 0, 255, true));
 } else if(letterData["line2"] > -1 && letterData["line2"] < 0){
  stroke(255, 89, 196, map(letterData["line2"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }
 
 if(letterData["line2"] != 0){  
 curve(0, 100*(letterData["line2"]-1), 0, 0, 100, 0, 100, 100*(letterData["line2"]-1));

}
 strokeWeight(3);

 //3
if(letterData["line3"] < 1 && letterData["line3"] > 0){
  stroke(255, 89, 196, map(letterData["line3"], 0, 1, 0, 255, true));
 } else if(letterData["line3"] > -1 && letterData["line3"] < 0){
  stroke(255, 89, 196, map(letterData["line3"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }

 if(letterData["line3"] != 0){
 curve(-100*(letterData["line3"]-1)+100, 0, 100, 0, 100, 100, -100*(letterData["line3"]-1)+100, 100);
 //line(100, 0, 100, 100);
}

strokeWeight(10);
 //4
 if(letterData["line4"] < 1 && letterData["line4"] > 0){
  stroke(255, 89, 196, map(letterData["line4"], 0, 1, 0, 255, true));
 } else if(letterData["line4"] > -1 && letterData["line4"] < 0){
  stroke(255, 89, 196, map(letterData["line4"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }

 if(letterData["line4"] != 0){
 curve(0, 100*(letterData["line4"]-1)+100, 0, 100, 100, 100, 100, 100*(letterData["line4"]-1)+100);
 //line(0, 100, 100, 100);
}

 strokeWeight(3);
 //5
if(letterData["line5"] < 1 && letterData["line5"] > 0){
  stroke(255, 89, 196, map(letterData["line5"], 0, 1, 0, 255, true));
 } else if(letterData["line5"] > -1 && letterData["line5"] < 0){
  stroke(255, 89, 196, map(letterData["line5"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }

 if(letterData["line5"] != 0){
  curve(100*(letterData["line5"]-1), 100, 0, 100, 0, 200, 100*(letterData["line5"]-1), 200);
 //line(0, 100, 0, 200);
}
 strokeWeight(3);
 //6
 if(letterData["line6"] < 1 && letterData["line6"] > 0){
  stroke(255, 89, 196, map(letterData["line6"], 0, 1, 0, 255, true));
 } else if(letterData["line6"] > -1 && letterData["line6"] < 0){
  stroke(255, 89, 196, map(letterData["line6"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }

 if(letterData["line6"] != 0){
curve(-100*(letterData["line6"]-1)+100, 100, 100, 100, 100, 200, -100*(letterData["line6"]-1)+100, 200);
 //line(100, 100, 100, 200);
}

 strokeWeight(10);
 //7 
if(letterData["line7"] < 1 && letterData["line7"] > 0){
  stroke(255, 89, 196, map(letterData["line7"], 0, 1, 0, 255, true));
 } else if(letterData["line7"] > -1 && letterData["line7"] < 0){
  stroke(255, 89, 196, map(letterData["line7"], 0, -1, 0, 255, true));
 } 
 else {
   stroke('#ff59c4');
 }
 if(letterData["line7"] != 0){
 curve(0, -100*(letterData["line7"]-1)+200, 0, 200, 100, 200, 100,  -100*(letterData["line7"]-1)+200);
 //line(0, 200, 100, 200);
}

 pop();
}




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
  rectMode(CENTER);
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
  /*
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  */
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]