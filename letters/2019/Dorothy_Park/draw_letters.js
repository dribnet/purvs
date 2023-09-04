const colorBack    = "#edf1e9";

//basic numbers for hexagons, radius, width and height
const rad = 8;
const w = Math.sqrt(3) * rad;
const h = 2 * rad;

//x values for first hexagons in row 2,4,6
const wEvenRow = 1/2*w;
const wi2 = rad+wEvenRow;

//y values for each row
const hDistance = 3/4*h;
const he2 = rad+hDistance;
const he3 = rad+2*hDistance;
const he4 = rad+3*hDistance;
const he5 = rad+4*hDistance;
const he6 = rad+5*hDistance;
const he7 = rad+6*hDistance;


const polygons = [
      //first row
      [rad, rad, rad, 6],[rad+w, rad, rad, 6],[rad+2*w, rad, rad, 6],[rad+3*w, rad, rad, 6],[rad+4*w, rad, rad, 6],[rad+5*w, rad, rad, 6],[rad+6*w, rad, rad, 6],
      
      //second row
      [wi2, he2, rad, 6], [wi2+w, he2, rad, 6], [wi2+2*w, he2, rad, 6], [wi2+3*w, he2, rad, 6], [wi2+4*w, he2, rad, 6], [wi2+5*w, he2, rad, 6],

      //third row
      [rad, he3, rad, 6],[rad+w, he3, rad, 6],[rad+2*w, he3, rad, 6],[rad+3*w, he3, rad, 6],[rad+4*w, he3, rad, 6],[rad+5*w, he3, rad, 6],[rad+6*w, he3, rad, 6],
      
      //fourth row
      [wi2, he4, rad, 6], [wi2+w, he4, rad, 6], [wi2+2*w, he4, rad, 6], [wi2+3*w, he4, rad, 6], [wi2+4*w, he4, rad, 6], [wi2+5*w, he4, rad, 6],

      //fifth row
      [rad, he5, rad, 6],[rad+w, he5, rad, 6],[rad+2*w, he5, rad, 6],[rad+3*w, he5, rad, 6],[rad+4*w, he5, rad, 6],[rad+5*w, he5, rad, 6],[rad+6*w, he5, rad, 6],
      
      //sixth row
      [wi2, he6, rad, 6], [wi2+w, he6, rad, 6], [wi2+2*w, he6, rad, 6], [wi2+3*w, he6, rad, 6], [wi2+4*w, he6, rad, 6], [wi2+5*w, he6, rad, 6],

      //seventh row
      [rad, he7, rad, 6],[rad+w, he7, rad, 6],[rad+2*w, he7, rad, 6],[rad+3*w, he7, rad, 6],[rad+4*w, he7, rad, 6],[rad+5*w, he7, rad, 6],[rad+6*w, he7, rad, 6],
      
      ];

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

push();
translate(0, 56);
   stroke(129, 144, 168);
   strokeWeight(1);
   for(var i = 0; i < polygons.length; i++){
  if(letterData["polygons"][i] == 1){ //Draw lit up hexagons
    fill(letterData["red"], letterData["green"], letterData["blue"]);
    polygon(polygons[i][0], polygons[i][1], polygons[i][2], polygons[i][3]);    
  }else{  //Draw hexagons
    noFill();
    polygon(polygons[i][0], polygons[i][1], polygons[i][2], polygons[i][3]);  
  } 
  polygon(polygons[i][0], polygons[i][1], polygons[i][2], polygons[i][3]);  
  }
  pop();
}

function interpolate_letter(percent, oldData, newData) {
  let new_letter = [];
  var fadeColor;

  if(percent<=50){ //Letter fades out
    new_letter["polygons"] = oldData["polygons"];
    var oC = color(oldData["red"], oldData["green"], oldData["blue"], 255);   
    fadeColor = lerpColor(oC, color(colorBack), (percent/100)+0.5);
  }else{ //Letter fades in
    new_letter["polygons"] = newData["polygons"];
    var newC = color(newData["red"], newData["green"], newData["blue"]);   
    fadeColor = lerpColor(color(colorBack), newC, (percent/100)-0.2);
  }
  //Set new colors
  new_letter["red"] = red(fadeColor);
  new_letter["green"] = green(fadeColor);
  new_letter["blue"] = blue(fadeColor);
  return new_letter;
}


function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints
  beginShape();
  for (let a = 0; a < TWO_PI ; a += angle) {
    let sx = x + sin(a) * radius;
    let sy = y + cos(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


var swapWords = [
  "HEXAFONT",
  "SOHANGRY",
  "COOLAYE?",
  "DEFAULT!"
  
]