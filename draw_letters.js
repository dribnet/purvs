// const colorFront1  = "#ffffff";
// const colorFront2  = "#000000";
// const colorFront3  = "#aaaaaa";

//SOVIET APPROVED COLORS
const colorFront1  = "#FCEA97";
const colorFront2  = "#FFC003";
const colorFront3  = "#A60202";

// SHADOW DEBUG HEX ff59c4
 /* Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

  //EXCEPTION SCALERS
  let accentG = 0.0;
  let accentH = 0.0;
  let accentK = 0.0;
  let accentO = 0.0;
  let accentV = 0.0;
  let accentX = 0.0;
  let accentZ = 0.0;
  let accent0 = 0.0;
  let accent2 = 0.0;
  let accent3 = 0.0;

function drawLetter(letterData) {
  // color/stroke setup
 noStroke();

  //Triangle number 1
  //Vertex1
  let x1 = letterData["x1"];
  let y1 = letterData["y1"];
  //Vertex2
  let x2 = letterData["x2"];
  let y2 = letterData["y2"];
  //Vertex3
  let x3 = letterData["x3"];
  let y3 = letterData["y3"];
  
  //Triangle number 2
  //Vertex1
  let x4 = letterData["x4"];
  let y4 = letterData["y4"];
  //Vertex2
  let x5 = letterData["x5"];
  let y5 = letterData["y5"];
  //Vertex3
  let x6 = letterData["x6"];
  let y6 = letterData["y6"];
  
  //Shadow For Triangle 1
  //scale
  let t1s = letterData["t1s"];
  //translatex
  let t1sx= letterData["t1sx"];
  //translatey
  let t1sy= letterData["t1sy"];
  
  //Shadow for triangle 2
  //scale
  let t2s = letterData["t2s"];
  //translatex
  let t2sx= letterData["t2sx"];
  //translatey
  let t2sy= letterData["t2sy"];

  //Which kind of exception
  let exception= letterData["exception"];

//EXCEPTION SWITCH STATEMENT
  switch(exception){
    case 0:
      accentG = 0.0;
      accentH = 0.0;
      accentK = 0.0;
      accentO = 0.0;
      accentV = 0.0;
      accentX = 0.0;
      accentZ = 0.0;
      accent0 = 0.0;
      accent2 = 0.0;
      accent3 = 0.0;
      break;
    case 1:
      accentG =1.0;
      accentH = 0.0;
      accentK = 0.0;
      accentO = 0.0;
      accentV = 0.0;
      accentX = 0.0;
      accentZ = 0.0;
      accent0 = 0.0;
      accent2 = 0.0;
      accent3 = 0.0;
      break;
    case 2:
      accentH =1.0;
      accentG = 0.0;
      accentK = 0.0;
      accentO = 0.0;
      accentV = 0.0;
      accentX = 0.0;
      accentZ = 0.0;
      accent0 = 0.0;
      accent2 = 0.0;
      accent3 = 0.0;
      break;
    case 3:
      accentK =1.0;
      accentG = 0.0;
      accentH = 0.0;
      accentO = 0.0;
      accentV = 0.0;
      accentX = 0.0;
      accentZ = 0.0;
      accent0 = 0.0;
      accent2 = 0.0;
      accent3 = 0.0;
      break;
    case 4:
      accentO =1.0;
      accentG = 0.0;
      accentH = 0.0;
      accentK = 0.0;
      accentV = 0.0;
      accentX = 0.0;
      accentZ = 0.0;
      accent0 = 0.0;
      accent2 = 0.0;
      accent3 = 0.0;
      break;
    case 5:
      accentV =1.0;
      accentG = 0.0;
      accentH = 0.0;
      accentK = 0.0;
      accentO = 0.0;
      accentX = 0.0;
      accentZ = 0.0;
      accent0 = 0.0;
      accent2 = 0.0;
      accent3 = 0.0;
      break;
    case 6:
      accentX =1.0;
      accentG = 0.0;
      accentH = 0.0;
      accentK = 0.0;
      accentO = 0.0;
      accentV = 0.0;
      accentZ = 0.0;
      accent0 = 0.0;
      accent2 = 0.0;
      accent3 = 0.0;
      break;
    case 7:
      accentZ =1.0;
      accentG = 0.0;
      accentH = 0.0;
      accentK = 0.0;
      accentO = 0.0;
      accentV = 0.0;
      accentX = 0.0;
      accent0 = 0.0;
      accent2 = 0.0;
      accent3 = 0.0;
      break;
    case 8:
      accent0 =1.0;
      accentG = 0.0;
      accentH = 0.0;
      accentK = 0.0;
      accentO = 0.0;
      accentV = 0.0;
      accentX = 0.0;
      accentZ = 0.0;
      accent2 = 0.0;
      accent3 = 0.0;
      break;
    case 9:
      accent2 =1.0;
      accentG = 0.0;
      accentH = 0.0;
      accentK = 0.0;
      accentO = 0.0;
      accentV = 0.0;
      accentX = 0.0;
      accentZ = 0.0;
      accent0 = 0.0;
      accent3 = 0.0;
      break;
    case 10:
      accent3 =1.0;
      accentG = 0.0;
      accentH = 0.0;
      accentK = 0.0;
      accentO = 0.0;
      accentV = 0.0;
      accentX = 0.0;
      accentZ = 0.0;
      accent0 = 0.0;
      accent2 = 0.0;
      break;
  }


  //DRAW Triangle 1
  push();
    fill(colorFront2);
    triangle(x1,y1,x2,y2,x3,y3);
  pop();
    
    //accent on 0
      push();
        scale(accent0);
        fill(colorFront2);
        scale(-1,1);
        translate(-100,0);
        triangle(x1,y1,x2,y2,x3,y3);
      pop();

    //accent on Z
      push();
        scale(accentZ);
        fill(colorFront2);
        scale(-1,1);
        translate(-100,0);
        triangle(x1,y1,x2,y2,x3,y3);
      pop();

    //accent on V
      push();
        scale(accentV);
        fill(colorFront2);
        rect(45,0,10,30);
      pop();

    //accent on O
      push();
        scale(accentO);
        fill(colorFront2);
        scale(-1,1);
        translate(-100,0);
        triangle(x1,y1,x2,y2,x3,y3);
      pop();

    //accent on H
      push();
        scale(accentH);
        fill(colorFront2);
        scale(-1,1);
        translate(-100,0);
        triangle(x1,y1,x2,y2,x3,y3);
      pop();

  //DRAW Triangle 1 Shadow
  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(x1,y1,x2,y2,x3,y3);
  pop();
    
    //accent on 2
    push();
    scale(accent2);
      fill(colorFront2);
      translate(80,0);
      triangle(x1,y1,x2,y2,x3,y3);
      fill(colorFront3);
      translate(20,0);
      triangle(x1,y1,x2,y2,x3,y3);
    pop();
    //accent on 0
      push();
        scale(accent0);
        fill(colorFront3);
        scale(t1s);
        translate(t1sx,t1sy);
        scale(-1,1);
        translate(-150,0);
        triangle(x1,y1,x2,y2,x3,y3);
      pop();

    //accent on Z
    push();
      scale(accentZ);
      fill(colorFront3);
      scale(t1s);
      translate(t1sx,t1sy);
      scale(-1,1);
      translate(-149,0);
      triangle(x1,y1,x2,y2,x3,y3);
    pop();

    //accent on O
      push();
        scale(accentO);
        fill(colorFront3);
        scale(t1s);
        translate(t1sx,t1sy);
        scale(-1,1);
        translate(-90,0);
        triangle(x1,y1,x2,y2,x3,y3);
      pop();
    
    //accent on H
      push();
        scale(accentH);
        fill(colorFront3);
        scale(t1s);
        translate(t1sx,t1sy);
        scale(-1,1);
        translate(-140,0);
        triangle(x1,y1,x2,y2,x3,y3);
      pop();

  //DRAW Triangle 2
  push();
    fill(colorFront1)
    triangle(x4,y4,x5,y5,x6,y6);
  pop();
    
    //accent on 0
      push();
        scale(accent0);
        fill(colorFront1)
        scale(-1,1);
        translate(-100,0);
        triangle(x4,y4,x5,y5,x6,y6);
      pop();

    //accent on Z 
    push();
      scale(accentZ);
      fill(colorFront1)
      scale(-1,1);
      translate(-100,0);
      triangle(x4,y4,x5,y5,x6,y6);
    pop();

    //accent on V
      push();
        scale(accentV);
        fill(colorFront1)
        rect(45,170,10,30);
      pop();

    //accent on O
      push();
        scale(accentO);
        fill(colorFront1)
        scale(-1,1);
        translate(-100,0);
        triangle(x4,y4,x5,y5,x6,y6);
      pop();

    //accent on H
      push();
        scale(accentH);
        fill(colorFront1)
        scale(-1,1);
        translate(-100,0);
        triangle(x4,y4,x5,y5,x6,y6);
      pop();

  //DRAW Triangle 2 Shadow
  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(x4,y4,x5,y5,x6,y6);
  pop();

    //accent on 3
      push();
        scale(accent3);
        fill(colorFront2);
        triangle(0,25,25,0,25,25);
      pop();
    //accent on 0
      push();
        scale(accent0);
        fill(colorFront3);
        scale(t2s);
        translate(t2sx,t2sy);
        scale(-1,1);
        translate(-150,0);
        triangle(x4,y4,x5,y5,x6,y6);
      pop();

      push();
        scale(accent0);
        fill(colorFront2);
        triangle(75,175,100,175,100,200);
      pop();

    //accent on Z
    push();
      scale(accentZ);
      fill(colorFront3);
      scale(t2s);
      translate(t2sx,t2sy);
      scale(-1,1);
      translate(-150,0);
      triangle(x4,y4,x5,y5,x6,y6);
    pop();

    //accent on X
      push();
        scale(accentX);
        fill(colorFront2);
        triangle(75,175,100,175,100,200);
      pop();
    //accent on O
      push();
        scale(accentO);
        fill(colorFront3);
        scale(t2s);
        translate(t2sx,t2sy);
        scale(-1,1);
        translate(-90,0);
        triangle(x4,y4,x5,y5,x6,y6);
      pop();

    //accent on H
      push();
        scale(accentH);
        fill(colorFront3);
        scale(t2s);
        translate(t2sx,t2sy);
        scale(-1,1);
        translate(-140,0);
        triangle(x4,y4,x5,y5,x6,y6);
      pop();
    
    //accent on K
      push();
      scale(accentK);
      fill(colorFront2);
      triangle(25,5,50,30,75,5);
      pop(); 
    
    //accent on G
      push();
      scale(accentG);
      fill(colorFront2);
      triangle(25,25,40,5,55,25);
      fill(colorFront1);
      triangle(45,5,60,25,75,5);
      pop();




}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["x1"]    = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["x2"]    = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["x3"]    = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["t1s"] = map(percent, 0, 100, oldObj["t1s"], newObj["t1s"]);
  new_letter["t1sx"] = map(percent, 0, 100, oldObj["t1sx"], newObj["t1sx"]);
  new_letter["t1sy"] = map(percent, 0, 100, oldObj["t1sy"], newObj["t1sy"]);
  new_letter["x4"]    = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["x5"]    = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["y5"] = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  new_letter["x6"]    = map(percent, 0, 100, oldObj["x6"], newObj["x6"]);
  new_letter["y6"] = map(percent, 0, 100, oldObj["y6"], newObj["y6"]);
  new_letter["t2s"] = map(percent, 0, 100, oldObj["t2s"], newObj["t2s"]);
  new_letter["t2sx"] = map(percent, 0, 100, oldObj["t2sx"], newObj["t2sx"]);
  new_letter["t2sy"] = map(percent, 0, 100, oldObj["t2sy"], newObj["t2sy"]);
  new_letter["exception"] = map(percent, 0, 100, oldObj["exception"], newObj["exception"]);
  
  // let old_exception = oldObj["exception"];
  // let old_accent_scale = 0;
  // if (old_exception!=0) {
  //   old_accent_scale= 1;
  // }

  // let new_exception = newObj["exception"];
  // let new_accent_scale =0;
  // if (new_exception!=0) {
  //   new_accent_scale= 1;
  // }

  // new_letter["accentG"] = map(percent, 0, 100, old_accent_scale, new_accent_scale);

  let old_exception = oldObj["exception"];
  let old_G=0;
  let old_H=0;
  let old_K=0;
  let old_O=0;
  let old_V=0;
  let old_X=0;
  let old_Z=0;
  let old_0=0;
  let old_2=0;
  let old_3=0;
    if (old_exception=1) {
      let old_G=1;
      let old_H=0;
      let old_K=0;
      let old_O=0;
      let old_V=0;
      let old_X=0;
      let old_Z=0;
      let old_0=0;
      let old_2=0;
      let old_3=0;
    } else if (old_exception=2) {
      let old_G=0;
      let old_H=1;
      let old_K=0;
      let old_O=0;
      let old_V=0;
      let old_X=0;
      let old_Z=0;
      let old_0=0;
      let old_2=0;
      let old_3=0;
    } else if (old_exception=3) {
      let old_G=0;
      let old_H=0;
      let old_K=1;
      let old_O=0;
      let old_V=0;
      let old_X=0;
      let old_Z=0;
      let old_0=0;
      let old_2=0;
      let old_3=0;
    } else if (old_exception=4) {
      let old_G=0;
      let old_H=0;
      let old_K=0;
      let old_O=1;
      let old_V=0;
      let old_X=0;
      let old_Z=0;
      let old_0=0;
      let old_2=0;
      let old_3=0;
    } else if (old_exception=5) {
      let old_G=0;
      let old_H=0;
      let old_K=0;
      let old_O=0;
      let old_V=1;
      let old_X=0;
      let old_Z=0;
      let old_0=0;
      let old_2=0;
      let old_3=0;
    } else if (old_exception=6) {
      let old_G=0;
      let old_H=0;
      let old_K=0;
      let old_O=0;
      let old_V=0;
      let old_X=1;
      let old_Z=0;
      let old_0=0;
      let old_2=0;
      let old_3=0;
    } else if (old_exception=7) {
      let old_G=0;
      let old_H=0;
      let old_K=0;
      let old_O=0;
      let old_V=0;
      let old_X=0;
      let old_Z=1;
      let old_0=0;
      let old_2=0;
      let old_3=0;
    } else if (old_exception=8) {
      let old_G=0;
      let old_H=0;
      let old_K=0;
      let old_O=0;
      let old_V=0;
      let old_X=0;
      let old_Z=0;
      let old_0=1;
      let old_2=0;
      let old_3=0;  
    } else if (old_exception=9) {
      let old_G=0;
      let old_H=0;
      let old_K=0;
      let old_O=0;
      let old_V=0;
      let old_X=0;
      let old_Z=0;
      let old_0=0;
      let old_2=1;
      let old_3=0;
    } else if (old_exception=10) {
      let old_G=0;
      let old_H=0;
      let old_K=0;
      let old_O=0;
      let old_V=0;
      let old_X=0;
      let old_Z=0;
      let old_0=0;
      let old_2=0;
      let old_3=1;
    } else {
      let old_G=0;
      let old_H=0;
      let old_K=0;
      let old_O=0;
      let old_V=0;
      let old_X=0;
      let old_Z=0;
      let old_0=0;
      let old_2=0;
      let old_3=0;
    }

  let new_exception = newObj["exception"];

  let new_G=0;
  let new_H=0;
  let new_K=0;
  let new_O=0;
  let new_V=0;
  let new_X=0;
  let new_Z=0;
  let new_0=0;
  let new_2=0;
  let new_3=0;
    if (new_exception=1) {
      let new_G=1;
      let new_H=0;
      let new_K=0;
      let new_O=0;
      let new_V=0;
      let new_X=0;
      let new_Z=0;
      let new_0=0;
      let new_2=0;
      let new_3=0;
    } else if (new_exception=2) {
      let new_G=0;
      let new_H=1;
      let new_K=0;
      let new_O=0;
      let new_V=0;
      let new_X=0;
      let new_Z=0;
      let new_0=0;
      let new_2=0;
      let new_3=0;
    } else if (new_exception=3) {
      let new_G=0;
      let new_H=0;
      let new_K=1;
      let new_O=0;
      let new_V=0;
      let new_X=0;
      let new_Z=0;
      let new_0=0;
      let new_2=0;
      let new_3=0;
    } else if (new_exception=4) {
      let new_G=0;
      let new_H=0;
      let new_K=0;
      let new_O=1;
      let new_V=0;
      let new_X=0;
      let new_Z=0;
      let new_0=0;
      let new_2=0;
      let new_3=0;
    } else if (new_exception=5) {
      let new_G=0;
      let new_H=0;
      let new_K=0;
      let new_O=0;
      let new_V=1;
      let new_X=0;
      let new_Z=0;
      let new_0=0;
      let new_2=0;
      let new_3=0;
    } else if (new_exception=6) {
      let new_G=0;
      let new_H=0;
      let new_K=0;
      let new_O=0;
      let new_V=0;
      let new_X=1;
      let new_Z=0;
      let new_0=0;
      let new_2=0;
      let new_3=0;
    } else if (new_exception=7) {
      let new_G=0;
      let new_H=0;
      let new_K=0;
      let new_O=0;
      let new_V=0;
      let new_X=0;
      let new_Z=1;
      let new_0=0;
      let new_2=0;
      let new_3=0;
    } else if (new_exception=8) {
      let new_G=0;
      let new_H=0;
      let new_K=0;
      let new_O=0;
      let new_V=0;
      let new_X=0;
      let new_Z=0;
      let new_0=1;
      let new_2=0;
      let new_3=0;  
    } else if (new_exception=9) {
      let new_G=0;
      let new_H=0;
      let new_K=0;
      let new_O=0;
      let new_V=0;
      let new_X=0;
      let new_Z=0;
      let new_0=0;
      let new_2=1;
      let new_3=0;
    } else if (new_exception=10) {
      let new_G=0;
      let new_H=0;
      let new_K=0;
      let new_O=0;
      let new_V=0;
      let new_X=0;
      let new_Z=0;
      let new_0=0;
      let new_2=0;
      let new_3=1;
    } else {
      let new_G=0;
      let new_H=0;
      let new_K=0;
      let new_O=0;
      let new_V=0;
      let new_X=0;
      let new_Z=0;
      let new_0=0;
      let new_2=0;
      let new_3=0;
    }

  new_letter["accentG"] = map(percent, 0, 100, old_G, new_G);
  new_letter["accentH"] = map(percent, 0, 100, old_H, new_H);
  new_letter["accentK"] = map(percent, 0, 100, old_K, new_K);
  new_letter["accentO"] = map(percent, 0, 100, old_O, new_O);
  new_letter["accentV"] = map(percent, 0, 100, old_V, new_V);
  new_letter["accentX"] = map(percent, 0, 100, old_X, new_X);
  new_letter["accentZ"] = map(percent, 0, 100, old_Z, new_Z);
  new_letter["accent0"] = map(percent, 0, 100, old_0, new_0);
  new_letter["accent2"] = map(percent, 0, 100, old_2, new_2);
  new_letter["accent3"] = map(percent, 0, 100, old_3, new_3);
 


  return new_letter;
}

var swapWords = [
  "SCFEFOJ6",
  "DMUQPST1",
  "SULJOS2O",
  "BM6T1",
  "SULA",
  "QJIEFX"
]