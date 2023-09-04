

/*
 * Draw the letter given the letterData
 
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {




  // 12 paremeters 


  let size1 = letterData["sizeX"];
  let size2 = letterData["sizeY"];
  let pos2x =  letterData["offsetx"];
  let pos2y =  letterData["offsety"];

  // each point of my quadrilateral shapes 
  let x1 =letterData["qx1"];
  let y1 =letterData["qy1"];
  let x2=letterData["qx2"];
  let y2 =letterData["qy2"];
  let x3= letterData["qx3"];
  let y3 =letterData["qy3"];
  let x4 =letterData["qx4"];
  let y4 =letterData["qy4"];




//
noStroke()
fill (255,68,93,100);
  // building quadrilateral shapes by 4 vertex 
beginShape();
vertex(x1,y1)
vertex(x2,y2)
vertex(x3,y3)
vertex(x4,y4)
endShape();


fill (200,58,23,100);
stroke(255,208,68)
strokeWeight(3)
rect(pos2x, pos2y, size1, size2);



}

function interpolate_letter(percent, oldObj, newObj){

//addded new interations to make the font more interesting 
// to apply vibration effect to the font by using applyMatrix 

applyMatrix(1, 0, 0, 1, frameCount % 5,0);

//
  
  let new_letter = {};
  new_letter["sizeX"] = map(percent , 0, 90, oldObj ["sizeX"], newObj["sizeX"]);
  new_letter["sizeY"] = map(percent , 0, 90, oldObj ["sizeY"], newObj["sizeY"]);
  new_letter["offsetx"] = map(percent , 0, 90, oldObj ["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent , 0, 90, oldObj ["offsety"], newObj["offsety"]);
  new_letter["qx1"] = map(percent , 0, 90, oldObj ["qx1"], newObj["qx1"]);
  new_letter["qy1"] = map(percent , 0, 90, oldObj ["qy1"], newObj["qy1"]);
  new_letter["qx2"] = map(percent , 0, 90, oldObj ["qx2"], newObj["qx2"]);
  new_letter["qy2"] = map(percent , 0, 90, oldObj ["qy2"], newObj["qy2"]);
  new_letter["qx3"] = map(percent , 0, 90, oldObj ["qx3"], newObj["qx3"]);
  new_letter["qy3"] = map(percent , 0, 90, oldObj ["qy3"], newObj["qy3"]);
  new_letter["qx4"] = map(percent , 0, 90, oldObj ["qx4"], newObj["qx4"]);
  new_letter["qy4"] = map(percent , 0, 90, oldObj ["qy4"], newObj["qy4"]);

  return new_letter;

}



  var swapWords = [
  
  "ORANGEON",
  "EVERYONE",
  "UPGRADED",
  "IPHONE 7",
  "FACEBOOK",
  "ANCIENTS",
  "EGYPTIAN",
  "100 PLUS",
  "BASEBALL",
  "12345678",


]