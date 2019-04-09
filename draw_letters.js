const colorBack    = "#edf1e9";

//basic numbers for hexagonal grid
const rad = 8;
const w = Math.sqrt(3) * rad;
const h = 2 * rad;

//x values for first hexagons in even rows
const wEvenRow = 1/2*w;
const w2 = rad+wEvenRow;

//y values for each row
const hDistance = 3/4*h;
const h2 = rad+hDistance;
const h3 = rad+2*hDistance;
const h4 = rad+3*hDistance;
const h5 = rad+4*hDistance;
const h6 = rad+5*hDistance;
const h7 = rad+6*hDistance;


const polygons = [
      //first row
      [rad, rad, rad, 6],[rad+w, rad, rad, 6],[rad+2*w, rad, rad, 6],[rad+3*w, rad, rad, 6],[rad+4*w, rad, rad, 6],[rad+5*w, rad, rad, 6],[rad+6*w, rad, rad, 6],
      
      //second row
      [w2, h2, rad, 6], [w2+w, h2, rad, 6], [w2+2*w, h2, rad, 6], [w2+3*w, h2, rad, 6], [w2+4*w, h2, rad, 6], [w2+5*w, h2, rad, 6],

      //third row
      [rad, h3, rad, 6],[rad+w, h3, rad, 6],[rad+2*w, h3, rad, 6],[rad+3*w, h3, rad, 6],[rad+4*w, h3, rad, 6],[rad+5*w, h3, rad, 6],[rad+6*w, h3, rad, 6],
      
      //fourth row
      [w2, h4, rad, 6], [w2+w, h4, rad, 6], [w2+2*w, h4, rad, 6], [w2+3*w, h4, rad, 6], [w2+4*w, h4, rad, 6], [w2+5*w, h4, rad, 6],

      //fifth row
      [rad, h5, rad, 6],[rad+w, h5, rad, 6],[rad+2*w, h5, rad, 6],[rad+3*w, h5, rad, 6],[rad+4*w, h5, rad, 6],[rad+5*w, h5, rad, 6],[rad+6*w, h5, rad, 6],
      
      //sixth row
      [w2, h6, rad, 6], [w2+w, h6, rad, 6], [w2+2*w, h6, rad, 6], [w2+3*w, h6, rad, 6], [w2+4*w, h6, rad, 6], [w2+5*w, h6, rad, 6],

      //seventh row
      [rad, h7, rad, 6],[rad+w, h7, rad, 6],[rad+2*w, h7, rad, 6],[rad+3*w, h7, rad, 6],[rad+4*w, h7, rad, 6],[rad+5*w, h7, rad, 6],[rad+6*w, h7, rad, 6],
      
      ];

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

   for(var i = 0; i < polygons.length; i++){
  if(letterData["polygons"][i] == 1){ //Draw lit up hexagons
    fill(letterData["red"], letterData["green"], letterData["blue"]);
    polygon(polygons[i][0], polygons[i][1], polygons[i][2], polygons[i][3]);    
  }else{  //Draw hexagons
    noFill();
    stroke(129, 144, 168);
    strokeWeight(1);
    polygon(polygons[i][0], polygons[i][1], polygons[i][2], polygons[i][3]);  
  } 
  polygon(polygons[i][0], polygons[i][1], polygons[i][2], polygons[i][3]);  
  }
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["polygons"]    = map(percent, 0, 100, oldObj["polygons"], newObj["polygons"]);
  new_letter["red"] = map(percent, 0, 100, oldObj["red"], newObj["red"]);
  new_letter["green"] = map(percent, 0, 100, oldObj["green"], newObj["green"]);
  new_letter["blue"] = map(percent, 0, 100, oldObj["blue"], newObj["blue"]);
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
  "COOLAYE?",
  "ALPHABET"
]