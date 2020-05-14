const colorFront1  = "#454342";
const colorFront2  = "#36d6ac";
const colorFront3  = "#f0c85b";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {


  angleMode(DEGREES)


  let size1 = letterData["size1"];
  let size1cont = letterData["size1cont"];

  let xpos1cont = letterData["offsetx1cont"];

  let ypos1cont = letterData["offsety1cont"]*50/3 * tan(30);


  let size2 = letterData["size2"];
  let size2cont = letterData["size2cont"];

  let xpos2cont = letterData["offsetx2cont"];

  let ypos2cont = letterData["offsety2cont"]*50/3 * tan(30);


  let size3 = letterData["size3"];
  let size3cont = letterData["size3cont"];

  let xpos3cont = letterData["offsetx3cont"];

  let ypos3cont = letterData["offsety3cont"]*50/3 * tan(30);


  noStroke()
  let yamm1 = size1 * tan(30)
  let yamm1cont = size1cont * tan(30)
  let yamm2 = size2 * tan(30)
  let yamm2cont = size2cont * tan(30)
  let yamm3 = size3 * tan(30)
  let yamm3cont = size3cont * tan(30)

  let xcentre = 50
  let ycentre = 100



  // Variables for Front-Left Face
  let face2topleftx = xcentre
  let face2toplefty =  ycentre

  let face2toprightx = xcentre - size2
  let face2toprighty = ycentre - yamm2

  let face2botrightx = xcentre - size2
  let face2botrighty = ycentre + yamm2

  let face2botleftx = xcentre
  let face2botlefty = ycentre + 2 * yamm2

  let cont2topleftx = xcentre - xpos2cont
  let cont2toplefty =  ycentre - ypos2cont

  let cont2toprightx = xcentre - xpos2cont - size2cont
  let cont2toprighty = ycentre - ypos2cont - yamm2cont

  let cont2botrightx = xcentre - xpos2cont - size2cont
  let cont2botrighty = ycentre - ypos2cont + yamm2cont

  let cont2botleftx = xcentre - xpos2cont
  let cont2botlefty = ycentre - ypos2cont + 2 * yamm2cont


// Variables for Front-Right Face
  let face1topleftx = xcentre
  let face1toplefty =  ycentre

  let face1toprightx = xcentre + size1
  let face1toprighty = ycentre - yamm1

  let face1botrightx = xcentre + size1
  let face1botrighty = ycentre + yamm1

  let face1botleftx = xcentre
  let face1botlefty = ycentre + 2 * yamm1

  let cont1topleftx = xcentre + xpos1cont
  let cont1toplefty =  ycentre + ypos1cont

  let cont1toprightx = xcentre + xpos1cont + size1cont
  let cont1toprighty = ycentre + ypos1cont - yamm1cont

  let cont1botrightx = xcentre + xpos1cont + size1cont
  let cont1botrighty = ycentre + ypos1cont + yamm1cont

  let cont1botleftx = xcentre + xpos1cont
  let cont1botlefty = ycentre + ypos1cont + 2 * yamm1cont


    // Variables for Top Face
  let face3botx = xcentre
  let face3boty =  ycentre

  let face3leftx = xcentre - size3
  let face3lefty = ycentre - yamm3

  let face3topx = xcentre
  let face3topy = ycentre - 2 * yamm3

  let face3rightx = xcentre + size3
  let face3righty = ycentre - yamm3

  let cont3botx = xcentre + xpos3cont
  let cont3boty = ycentre + ypos3cont

  let cont3rightx = xcentre + xpos3cont + size3cont
  let cont3righty = ycentre + ypos3cont - yamm3cont

  let cont3topx = xcentre + xpos3cont
  let cont3topy = ycentre + ypos3cont - 2 * yamm3cont

  let cont3leftx = xcentre + xpos3cont - size3cont
  let cont3lefty = ycentre + ypos3cont - yamm3cont


  //Front-left Face Top 3d
fill(colorFront3)

  beginShape()

  vertex(face2topleftx, face2toplefty)
  vertex(face2topleftx + 50/3, face2toplefty - 50/3 * tan(30))
  vertex(face2toprightx + 50/3, face2toprighty - 50/3 * tan(30))
  vertex(face2toprightx, face2toprighty)

    beginContour()

    vertex(cont2topleftx, cont2toplefty)
    vertex(cont2toprightx, cont2toprighty)
    vertex(cont2toprightx + 50/3, cont2toprighty - 50/3 * tan(30))
    vertex(cont2topleftx + 50/3, cont2toplefty - 50/3 * tan(30))

    endContour(CLOSE)

  endShape(CLOSE)

 beginShape()

 vertex(cont2botrightx, cont2botrighty)
 vertex(cont2botrightx + 50/3, cont2botrighty - 50/3 * tan(30))
 vertex(cont2botleftx + 50/3, cont2botlefty - 50/3 * tan(30))
 vertex(cont2botleftx, cont2botlefty)

 endShape(CLOSE)


//Front-Left Face Right 3d
fill(colorFront1)

beginShape()

  vertex(face2topleftx, face2toplefty)
  vertex(face2topleftx + 50/3, face2toplefty - 50/3 * tan(30))
  vertex(face2botleftx + 50/3, face2botlefty - 50/3 * tan(30))
  vertex(face2botleftx, face2botlefty)

    beginContour()

    vertex(cont2topleftx, cont2toplefty)
    vertex(cont2botleftx, cont2botlefty)
    vertex(cont2botleftx + 50/3, cont2botlefty - 50/3 * tan(30))
    vertex(cont2topleftx + 50/3, cont2toplefty - 50/3 * tan(30))

    endContour(CLOSE)

endShape(CLOSE)

 beginShape()

 vertex(cont2botrightx, cont2botrighty)
 vertex(cont2botrightx + 50/3, cont2botrighty - 50/3 * tan(30))
 vertex(cont2toprightx + 50/3, cont2toprighty - 50/3 * tan(30))
 vertex(cont2toprightx, cont2toprighty)

 endShape(CLOSE)



//Front-Right Face Top 3d
fill(colorFront3)

  beginShape()

  vertex(face1topleftx, face1toplefty)
  vertex(face1topleftx - 50/3, face1toplefty - 50/3 * tan(30))
  vertex(face1toprightx - 50/3, face1toprighty - 50/3 * tan(30))
  vertex(face1toprightx, face1toprighty)

    beginContour()

    vertex(cont1topleftx, cont1toplefty)
    vertex(cont1toprightx, cont1toprighty)
    vertex(cont1toprightx - 50/3, cont1toprighty - 50/3 * tan(30))
    vertex(cont1topleftx - 50/3, cont1toplefty - 50/3 * tan(30))

    endContour(CLOSE)

  endShape(CLOSE)

 beginShape()

 vertex(cont1botrightx, cont1botrighty)
 vertex(cont1botrightx - 50/3, cont1botrighty - 50/3 * tan(30))
 vertex(cont1botleftx - 50/3, cont1botlefty - 50/3 * tan(30))
 vertex(cont1botleftx, cont1botlefty)

 endShape(CLOSE)


//Front-Right Face left 3d
fill(colorFront2)

beginShape()

  vertex(face1topleftx, face1toplefty)
  vertex(face1topleftx - 50/3, face1toplefty - 50/3 * tan(30))
  vertex(face1botleftx - 50/3, face1botlefty - 50/3 * tan(30))
  vertex(face1botleftx, face1botlefty)

    beginContour()

    vertex(cont1topleftx, cont1toplefty)
    vertex(cont1botleftx, cont1botlefty)
    vertex(cont1botleftx - 50/3, cont1botlefty - 50/3 * tan(30))
    vertex(cont1topleftx - 50/3, cont1toplefty - 50/3 * tan(30))

    endContour(CLOSE)

endShape(CLOSE)

 beginShape()

 vertex(cont1botrightx, cont1botrighty)
 vertex(cont1botrightx - 50/3, cont1botrighty - 50/3 * tan(30))
 vertex(cont1toprightx - 50/3, cont1toprighty - 50/3 * tan(30))
 vertex(cont1toprightx, cont1toprighty)

 endShape(CLOSE)


 //Top Face Right 3d
fill(colorFront1)

beginShape()

  vertex(face3botx, face3boty)
  vertex(face3botx, face3boty + 100/3 * tan(30))
  vertex(face3rightx, face3righty + 100/3 * tan(30))
  vertex(face3rightx, face3righty)

   beginContour()

    vertex(cont3botx, cont3boty)
    vertex(cont3rightx, cont3righty)
    vertex(cont3rightx, cont3righty + 100/3 * tan(30))
    vertex(cont3botx, cont3boty + 100/3 * tan(30))
    

    endContour(CLOSE)

endShape(CLOSE)

 beginShape()

 vertex(cont3topx, cont3topy)
 vertex(cont3leftx, cont3lefty)
 vertex(cont3leftx, cont3lefty + 100/3 * tan(30))
 vertex(cont3topx, cont3topy + 100/3 * tan(30))

 endShape(CLOSE)

//Top Face Left 3d
fill(colorFront2)

beginShape()

  vertex(face3botx, face3boty)
  vertex(face3botx, face3boty + 100/3 * tan(30))
  vertex(face3leftx, face3lefty + 100/3 * tan(30))
  vertex(face3leftx, face3lefty)

   beginContour()

    vertex(cont3botx, cont3boty)
    vertex(cont3leftx, cont3lefty)
    vertex(cont3leftx, cont3lefty + 100/3 * tan(30))
    vertex(cont3botx, cont3boty + 100/3 * tan(30))
    

    endContour(CLOSE)

endShape(CLOSE)

 beginShape()

 vertex(cont3topx, cont3topy)
 vertex(cont3rightx, cont3righty)
 vertex(cont3rightx, cont3righty + 100/3 * tan(30))
 vertex(cont3topx, cont3topy + 100/3 * tan(30))

 endShape(CLOSE)


//Front-Right Face
  fill(colorFront1);

  beginShape()

  vertex(face1topleftx, face1toplefty)
  vertex(face1toprightx, face1toprighty)
  vertex(face1botrightx, face1botrighty)
  vertex(face1botleftx, face1botlefty)

    beginContour()

    vertex(cont1topleftx, cont1toplefty)
    vertex(cont1botleftx, cont1botlefty)
    vertex(cont1botrightx, cont1botrighty)
    vertex(cont1toprightx, cont1toprighty)

    endContour(CLOSE)
  
  endShape(CLOSE)


// Front-Left Face
  fill(colorFront2);

    beginShape()

  vertex(face2topleftx, face2toplefty)
  vertex(face2toprightx, face2toprighty)
  vertex(face2botrightx, face2botrighty)
  vertex(face2botleftx, face2botlefty)

    beginContour()

    vertex(cont2topleftx, cont2toplefty)
    vertex(cont2botleftx, cont2botlefty)
    vertex(cont2botrightx, cont2botrighty)
    vertex(cont2toprightx, cont2toprighty)

    endContour(CLOSE)
  
  endShape(CLOSE)


//  beginShape()

//  vertex(xcentre, ycentre)
//  vertex(xcentre - size2, ycentre - yamm2)
//  vertex(xcentre - size2, ycentre + yamm2)
//  vertex(xcentre, ycentre + 2 * yamm2)

//  beginContour()

//    vertex(xcentre + xpos2cont, ycentre + ypos2cont)
//    vertex(xcentre + xpos2cont, ycentre + ypos2cont + 2 * yamm2cont)
//    vertex(xcentre + xpos2cont - size2cont, ycentre + ypos2cont + yamm2cont)
//    vertex(xcentre + xpos2cont - size2cont, ycentre + ypos2cont - yamm2cont)
    
//    endContour(CLOSE)

//  endShape(CLOSE)

  // Top Face
  fill(colorFront3);

  beginShape()

  vertex(face3botx, face3boty)
  vertex(face3leftx, face3lefty)
  vertex(face3topx, face3topy)
  vertex(face3rightx, face3righty)

    beginContour()

    vertex(cont3botx, cont3boty)
    vertex(cont3rightx, cont3righty)
    vertex(cont3topx, cont3topy)
    vertex(cont3leftx, cont3lefty)

    endContour(CLOSE)

  endShape(CLOSE)

//  beginShape()

//  vertex(xcentre, ycentre)
//  vertex(xcentre + size3, ycentre - yamm3)
//  vertex(xcentre, ycentre - 2 * yamm3)
//  vertex(xcentre - size3, ycentre - yamm3)

//    beginContour()

//    vertex(xcentre + xpos3cont, ycentre + ypos3cont)
//    vertex(xcentre + xpos3cont - size3cont, ycentre + ypos3cont - yamm3cont)
//    vertex(xcentre + xpos3cont, ycentre + ypos3cont - 2 * yamm3cont)
//    vertex(xcentre + xpos3cont + size3cont, ycentre + ypos3cont - yamm3cont)

//    endContour(CLOSE)

//  endShape(CLOSE)

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size1"]    = map(percent, 0, 100, oldObj["size1"], newObj["size1"]);
  new_letter["size1cont"]    = map(percent, 0, 100, oldObj["size1cont"], newObj["size1cont"]);
  new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["size2cont"]    = map(percent, 0, 100, oldObj["size2cont"], newObj["size2cont"]);
  new_letter["size3"]    = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);
  new_letter["size3cont"]    = map(percent, 0, 100, oldObj["size3cont"], newObj["size3cont"]);
  new_letter["offsetx1cont"] = map(percent, 0, 100, oldObj["offsetx1cont"], newObj["offsetx1cont"]);
  new_letter["offsety1cont"] = map(percent, 0, 100, oldObj["offsety1cont"], newObj["offsety1cont"]);
  new_letter["offsetx2cont"] = map(percent, 0, 100, oldObj["offsetx2cont"], newObj["offsetx2cont"]);
  new_letter["offsety2cont"] = map(percent, 0, 100, oldObj["offsety2cont"], newObj["offsety2cont"]);
  new_letter["offsetx3cont"] = map(percent, 0, 100, oldObj["offsetx3cont"], newObj["offsetx3cont"]);
  new_letter["offsety3cont"] = map(percent, 0, 100, oldObj["offsety3cont"], newObj["offsety3cont"]);
  return new_letter;
  return new_letter;
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]