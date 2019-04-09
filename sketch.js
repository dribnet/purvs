const canvasWidth = 960;
const canvasHeight = 500;
const colorBack    = "#edf1e9";

//basic numbers for hexagonal grid
const rad = 7;
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

// Referenced images and codes
// https://image.shutterstock.com/display_pic_with_logo/2883424/276509240/stock-vector-colorful-connecting-hexagon-alphabet-letters-276509240.jpg
// https://editor.p5js.org/Rito/sketches/BJ5D_KeTg
// https://www.redblobgames.com/grids/hexagons/#coordinates-offset
// http://1.bp.blogspot.com/-rAqRNBJmz2M/TdER5PDZX6I/AAAAAAAAC7o/CLMbuXNrsOw/s1600/IMG_4388.jpg

// default polygons array
                // /*row1*/0, 0, 0, 0, 0, 0, 0,
                //   /*row2*/0, 0, 0, 0, 0, 0,
                // /*row3*/0, 0, 0, 0, 0, 0, 0,
                //   /*row4*/0, 0, 0, 0, 0, 0,
                // /*row5*/0, 0, 0, 0, 0, 0, 0,
                //   /*row6*/0, 0, 0, 0, 0, 0,
                // /*row7*/0, 0, 0, 0, 0, 0, 0

const letterA = {
  "polygons" : [/*row1*/0, 0, 0, 1, 0, 0, 0,
                  /*row2*/0, 0, 1, 1, 0, 0,
                /*row3*/0, 0, 1, 0, 1, 0, 0,
                  /*row4*/0, 1, 0, 0, 1, 0,
                /*row5*/0, 1, 1, 1, 1, 1, 0,
                  /*row6*/1, 0, 0, 0, 0, 1,
                /*row7*/1, 0, 0, 0, 0, 0, 1],
  "red": 142, "green": 226, "blue": 224
}

const letterB = {
  "polygons" : [/*row1*/1, 1, 1, 1, 1, 1, 0,
                  /*row2*/1, 0, 0, 0, 0, 1,
                /*row3*/1, 1, 0, 0, 0, 1, 0,
                  /*row4*/1, 1, 1, 1, 1, 0,
                /*row5*/1, 1, 0, 0, 0, 1, 0,
                  /*row6*/1, 0, 0, 0, 0, 1,
                /*row7*/1, 1, 1, 1, 1, 1, 0],
  "red": 244, "green": 149, "blue": 163
 }

const letterC = {
  "polygons" : [/*row1*/0, 0, 1, 1, 1, 0, 1,
                  /*row2*/1, 1, 0, 0, 1, 1,
                /*row3*/0, 1, 0, 0, 0, 0, 0,
                  /*row4*/1, 1, 0, 0, 0, 0,
                /*row5*/0, 1, 0, 0, 0, 0, 0,
                  /*row6*/1, 1, 0, 0, 0, 1,
                /*row7*/0, 0, 1, 1, 1, 1, 0],
  "red": 244, "green": 149, "blue": 163
}



function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  noStroke();
  // with no animation, redrawing the screen is not necessary
  // noLoop();
  
}

function drawLetter(x,y,letterData) {

   stroke(129, 144, 168);
   strokeWeight(1);

  for(var i = 0; i < polygons.length; i++){
  if(letterData["polygons"][i] == 1){ //Draw lit up hexagon
    fill(letterData["red"], letterData["green"], letterData["blue"]);
    polygon(polygons[i][0], polygons[i][1], polygons[i][2], polygons[i][3]);    
  }else{  //Draw hexagon
    noFill();

    polygon(polygons[i][0], polygons[i][1], polygons[i][2], polygons[i][3]);  
  } 
  polygon(polygons[i][0], polygons[i][1], polygons[i][2], polygons[i][3]);  
  }  


}

function draw() {
  // clear screen
  background(colorBack);
  // compute the center of the canvas
  let center_x = canvasWidth/2 -7*wEvenRow;  
  let center_y = canvasHeight / 2 -70;


  // draw the letters A, B, C from saved data
  push();
  translate(center_x-250, center_y);
  drawLetter(0,0, letterA);
  pop();

  push();
  translate(center_x, center_y);
  drawLetter(0,0, letterB);
  pop();

  push();
  translate (center_x+250, center_y);
  drawLetter(0,0, letterC);
  pop();

}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
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
