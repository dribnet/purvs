// const colorFront1  = "#ffffff";
// const colorFront2  = "#000000";
// const colorFront3  = "#aaaaaa";

const colorFront1  = "#FCEA97";
const colorFront2  = "#FFC003";
const colorFront3  = "#A60202";

/*ff59c4
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
 noStroke();

  //TRIANGLE1 VERTEX 1
  let px1 = letterData["x1"];
  let py1 = letterData["y1"];
  //TRIANGLE2 VERTEX 2
  let px2 = letterData["x2"];
  let py2 = letterData["y2"];
  //TRIANGLE3 VERTEX 3  
  let px3 = letterData["x3"];
  let py3 = letterData["y3"];
  //TRIANGLE4 VERTEX 4  
  let px4 = letterData["x4"];
  let py4 = letterData["y4"];
  //TRIANGLE5 VERTEX 5  
  let px5 = letterData["x5"];
  let py5 = letterData["y5"];
  //TRIANGLE6 VERTEX 6
  let px6 = letterData["x6"];
  let py6 = letterData["y6"];
  //CUTOUT 1 SCALE
  let t1s = letterData["t1s"];
  //CUTOUT 1 X TRANSLATION
  let t1sx= letterData["t1sx"];
  //CUTOUT 1 Y TRANSLATION
  let t1sy= letterData["t1sy"];
  //CUTOUT 2 SCALE
  let t2s = letterData["t2s"];
  //CUTOUT 2 X TRANSLATION
  let t2sx= letterData["t2sx"];
  //CUTOUT 2 Y TRANSLATION
  let t2sy= letterData["t2sy"];


//IF LOOP TO CATCH THE EXCEPTIONS FOR G,H,K,O,V,X,Z,0,1,2
if (px1 ==100 && py1 ==25 && px6 == 50 && py6 ==75) {
  //G EXCEPTION DRAW Ё
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
  push();
  fill(colorFront2);
  triangle(25,25,40,5,55,25);
  fill(colorFront1);
  triangle(45,5,60,25,75,5);
  pop();

} else if (px3==50 && py3==125 && px6 ==50 && py6==75 && t1s==.5) {
  //H EXCEPTION DRAW Ж
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
    scale(-1,1);
    translate(-100,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
    scale(-1,1);
    translate(-140,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
    scale(-1,1);
    translate(-100,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
    scale(-1,1);
    translate(-140,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
}
 else if (px1 == 0 && py1 ==25 && px2 == 100 && py2 == 25 && px6 == 100 && py6 ==25) {
  //K EXCEPTION DRAW Й
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
  fill(colorFront2);
  triangle(25,5,50,30,75,5);
  pop();
}
else if (px1 == 0 && py1 == 0 && px3 == 60 && py3 == 100 && px6 ==60 && py6 ==100) {
  //O EXCEPTION DRAW Н
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
    scale(-1,1);
    translate(-100,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
    scale(-1,1);
    translate(-90,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
    scale(-1,1);
    translate(-100,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
    scale(-1,1);
    translate(-90,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
} else if (px1==45 && py1 == 10 && px6 == 55 && py6 ==190) {
  //V EXCEPTION DRAW Ф
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
    rect(45,0,10,30);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
    rect(45,170,10,30);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
} else if (px3 ==100 && py3 ==175 && px6 ==0 && py6 == 175) {
  //X EXCEPTION DRAW Ц
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
  push();
  fill(colorFront2);
  triangle(75,175,100,175,100,200);
  pop();
} else if (px3==40 && py3 ==200 && px5 ==50 && py5 ==200) {
  //Z EXCEPTION DRAW Ш
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
    scale(-1,1);
    translate(-100,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
    scale(-1,1);
    translate(-149,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
    scale(-1,1);
    translate(-100,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
    scale(-1,1);
    translate(-150,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

} else if (px3==40&&py3==175&&px6==50&&py6==0) {
  //0 EXCEPTION DRAW Щ
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
    scale(-1,1);
    translate(-100,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
    scale(-1,1);
    translate(-150,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
    scale(-1,1);
    translate(-100,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
    scale(-1,1);
    translate(-150,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
  push();
    fill(colorFront2);
    triangle(75,175,100,175,100,200);
  pop();
} else if (px5==80&&py5==150&&px6==0&&py6==200) {
  //2 EXCEPTION DRAW Ы
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront2);
    translate(80,0);
    triangle(px1,py1,px2,py2,px3,py3);
    fill(colorFront3);
    translate(20,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
} else if (px2==25&&py2==200&&px6==25&&py6==200) {
  //3 EXCEPTION DRAW Ъ
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
  
  push();
    fill(colorFront2);
    triangle(0,25,25,0,25,25);
  pop();
}
else{
  //MAIN DRAW FOR LETTERS AND NUMBERS

  //DRAWS TOP DARKER TRIANGLE
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  //DRAWS SHADOW/CUTOUT FOR TOP TRIANGLE
  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  //DRAWS BOTTOM LIGHTER TRIANGLE
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  //DRAWS SHADOW/CUTOUT FOR BOTTOM TRIANGLE
  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

}



}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  // new_letter["x1"]    = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);

    if(percent<10){
      new_letter["x1"]=oldObj["x1"];
    }
    else if(percent>80){
      new_letter["x1"]=newObj["x1"];
    }
    else {
      new_letter["x1"] = map(percent, 10, 80, oldObj["x1"], newObj["x1"]);
    }

  // new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);

    if(percent<10){
      new_letter["y1"]=oldObj["y1"];
    }
    else if(percent>80){
      new_letter["y1"]=newObj["y1"];
    }
    else {
      new_letter["y1"] = map(percent, 10, 80, oldObj["y1"], newObj["y1"]);
    }

  // new_letter["x2"]    = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
    
    if(percent<10){
      new_letter["x2"]=oldObj["x2"];
    }
    else if(percent>80){
      new_letter["x2"]=newObj["x2"];
    }
    else {
      new_letter["x2"] = map(percent, 10, 80, oldObj["x2"], newObj["x2"]);
    }

  // new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  
    if(percent<10){
      new_letter["y2"]=oldObj["y2"];
    }
    else if(percent>80){
      new_letter["y2"]=newObj["y2"];
    }
    else {
      new_letter["y2"] = map(percent, 10, 80, oldObj["y2"], newObj["y2"]);
    }

  // new_letter["x3"]    = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  
    if(percent<10){
      new_letter["x3"]=oldObj["x3"];
    }
    else if(percent>80){
      new_letter["x3"]=newObj["x3"];
    }
    else {
      new_letter["x3"] = map(percent, 10, 80, oldObj["x3"], newObj["x3"]);
    }

  // new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  
    if(percent<10){
      new_letter["y3"]=oldObj["y3"];
    }
    else if(percent>80){
      new_letter["y3"]=newObj["y3"];
    }
    else {
      new_letter["y3"] = map(percent, 10, 80, oldObj["y3"], newObj["y3"]);
    }

  // new_letter["t1s"] = map(percent, 0, 100, oldObj["t1s"], newObj["t1s"]);
    
    if(percent<10){
      new_letter["t1s"]=oldObj["t1s"];
    }
    else if(percent>80){
      new_letter["t1s"]=newObj["t1s"];
    }
    else {
      new_letter["t1s"] = map(percent, 10, 80, oldObj["t1s"], newObj["t1s"]);
    }

  // new_letter["t1sx"] = map(percent, 0, 100, oldObj["t1sx"], newObj["t1sx"]);
  
    if(percent<10){
      new_letter["t1sx"]=oldObj["t1sx"];
    }
    else if(percent>80){
      new_letter["t1sx"]=newObj["t1sx"];
    }
    else {
      new_letter["t1sx"] = map(percent, 10, 80, oldObj["t1sx"], newObj["t1sx"]);
    }

  // new_letter["t1sy"] = map(percent, 0, 100, oldObj["t1sy"], newObj["t1sy"]);
  
    if(percent<10){
      new_letter["t1sy"]=oldObj["t1sy"];
    }
    else if(percent>80){
      new_letter["t1sy"]=newObj["t1sy"];
    }
    else {
      new_letter["t1sy"] = map(percent, 10, 80, oldObj["t1sy"], newObj["t1sy"]);
    }

  // new_letter["x4"]    = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  
    if(percent<10){
      new_letter["x4"]=oldObj["x4"];
    }
    else if(percent>80){
      new_letter["x4"]=newObj["x4"];
    }
    else {
      new_letter["x4"] = map(percent, 10, 80, oldObj["x4"], newObj["x4"]);
    }

  // new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  
    if(percent<10){
      new_letter["y4"]=oldObj["y4"];
    }
    else if(percent>80){
      new_letter["y4"]=newObj["y4"];
    }
    else {
      new_letter["y4"] = map(percent, 10, 80, oldObj["y4"], newObj["y4"]);
    }

  // new_letter["x5"]    = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  
    if(percent<10){
      new_letter["x5"]=oldObj["x5"];
    }
    else if(percent>80){
      new_letter["x5"]=newObj["x5"];
    }
    else {
      new_letter["x5"] = map(percent, 10, 80, oldObj["x5"], newObj["x5"]);
    }

  // new_letter["y5"] = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  
    if(percent<10){
      new_letter["y5"]=oldObj["y5"];
    }
    else if(percent>80){
      new_letter["y5"]=newObj["y5"];
    }
    else {
      new_letter["y5"] = map(percent, 10, 80, oldObj["y5"], newObj["y5"]);
    }

  // new_letter["x6"]    = map(percent, 0, 100, oldObj["x6"], newObj["x6"]);
  
    if(percent<10){
      new_letter["x6"]=oldObj["x6"];
    }
    else if(percent>80){
      new_letter["x6"]=newObj["x6"];
    }
    else {
      new_letter["x6"] = map(percent, 10, 80, oldObj["x6"], newObj["x6"]);
    }

  // new_letter["y6"] = map(percent, 0, 100, oldObj["y6"], newObj["y6"]);
  
    if(percent<10){
      new_letter["y6"]=oldObj["y6"];
    }
    else if(percent>80){
      new_letter["y6"]=newObj["y6"];
    }
    else {
      new_letter["y6"] = map(percent, 10, 80, oldObj["y6"], newObj["y6"]);
    }

  // new_letter["t2s"] = map(percent, 0, 100, oldObj["t2s"], newObj["t2s"]);
    
    if(percent<10){
      new_letter["t2s"]=oldObj["t2s"];
    }
    else if(percent>80){
      new_letter["t2s"]=newObj["t2s"];
    }
    else {
      new_letter["t2s"] = map(percent, 10, 80, oldObj["t2s"], newObj["t2s"]);
    }

  // new_letter["t2sx"] = map(percent, 0, 100, oldObj["t2sx"], newObj["t2sx"]);
  
    if(percent<10){
      new_letter["t2sx"]=oldObj["t2sx"];
    }
    else if(percent>80){
      new_letter["t2sx"]=newObj["t2sx"];
    }
    else {
      new_letter["t2sx"] = map(percent, 10, 80, oldObj["t2sx"], newObj["t2sx"]);
    }

  // new_letter["t2sy"] = map(percent, 0, 100, oldObj["t2sy"], newObj["t2sy"]);
  
    if(percent<10){
      new_letter["t2sy"]=oldObj["t2sy"];
    }
    else if(percent>80){
      new_letter["t2sy"]=newObj["t2sy"];
    }
    else {
      new_letter["t2sy"] = map(percent, 10, 80, oldObj["t2sy"], newObj["t2sy"]);
    }


  return new_letter;
}

var swapWords = [
  "DMUQPST1",
  "SCFEFOJ6",
  "SULJOS2O",
  "BM6T1",
  "SULA",
  "QJIEFX"
]