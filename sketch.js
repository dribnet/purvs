const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */


 /**
  * ordering of lines: top, topright, botright,bottom,botleft,topleft,mid
  * 1 == draw as line
  * 1.5 == draw as half line
  * 2 == draw as arc
  */
const letterA = {
  lines: [2, 1.5, 1, 0, 1, 1.5, 1],
  box1: true,
  box2:false

}

const letterB = {
  lines: [0, 0, 2, 1.5, 1, 1, 1.5],
  box1: false,
  box2: true

}

const letterC = {
  lines: [2, 0, 0, 2, 1.5, 1.5, 0],
  box1: false,
  box2:false

}

const letterE = {
  lines: [1, 1, 1, 1, 1, 1, 0]

}
const colorFront1 = "#199cff";
const colorFront2 = "#59ccff";
const colorBack = "#e3eded";
const colorStroke = "#233f11";

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  angleMode(DEGREES); 
  let w = 100;
  let h = 200;
  let startX = posx;
  let startY = posy;
  let lineWidth = w;
  let lineHeight = h / 2;
  let currentLine = "top";

  //handle filling rectboxes
  if(letterData.box1) {
    fill(color("#4bcce0"));
    noStroke();
    // rect(startX,startY,lineWidth,lineHeight);
  }
  if(letterData.box2) {
    fill(color("#b6dd98"));
    noStroke();
    // rect(startX,startY+lineHeight,lineWidth,lineHeight);
  }
  stroke(5);
  for (let i = 0; i < letterData.lines.length; i++) {
    let thisLine = letterData.lines[i];
    //then figure out what line this is.
    switch (i) {
      case 0:
        // drawing top line
        if (thisLine === 1) {  
          line(startX, startY, startX+lineWidth, startY);
        }
        else if(thisLine === 2){
          //draw as arc
          arc(startX+lineWidth/2, startY+lineHeight/2,lineWidth,lineHeight,180,0);

        }
        startX += lineWidth;
        break;
      case 1:
        // top right line
        if (thisLine === 1) {
          // draw full line
          line(startX, startY, startX, startY + lineHeight);
        } else if (thisLine === 1.5) {
          let adjustedY = startY + lineHeight/2;
          line(startX, adjustedY, startX, adjustedY + lineHeight/2)
        }
        startY += lineHeight;
        break;
      case 2:
        // bot right line
        if (thisLine === 1) {
          line(startX, startY, startX, startY + lineHeight);
        } else if( thisLine === 2) {
          //draw as arc
          arc(startX-lineWidth/2, startY+ lineHeight/2,lineWidth,lineHeight,270,90);
        }
        startY += lineHeight;
        break;
      case 3:
        //Bottom line.
        if (thisLine === 1) {
          line(startX, startY, startX - lineWidth, startY);
        } else if (thisLine === 1.5) {
          let adjustedX = startX-lineHeight/2;
          line(adjustedX, startY, startX - lineWidth, startY)
        } else if (thisLine === 2) {
          arc(startX-lineWidth/2, startY - lineHeight/2,lineWidth,lineHeight,0,180);
        }
        startX -= lineWidth;
        break;
      case 4:
        // bot left line
        if (thisLine === 1) {
          line(startX, startY, startX, startY - lineHeight)
        } else if (thisLine === 1.5) {
          let adjustedY = startY-lineHeight/2;
          line(startX, adjustedY, startX, startY-lineHeight)
        }
        startY -= lineHeight;
        break;
      case 5:
        // top left line
        if (thisLine === 1){ 
          line(startX, startY, startX, startY - lineHeight)
        }
        else if (thisLine === 1.5) {
          let adjustedY = startY - lineHeight/2;
          line(startX, startY, startX, adjustedY)
        }
        // startY -= lineHeight;
        break;
      case 6:
        // mid line
        if (thisLine === 1) {
          line(startX, startY, startX + lineWidth, startY);
        } else if (thisLine === 1.5) {
          let adjustedX = startX + lineWidth/2;
          line(startX, startY, adjustedX, startY)
        }
        break;
      case 7:
        // top mid dot
        if (thisLine === 1) ellipse(startX+lineWidth/2, startY-lineHeight/2, 10,10);
        // startY -= lineHeight;
        break;
      case 8:
        // bot mid dot
        if (thisLine === 1) line(startX, startY, startX + lineWidth, startY);
        break;
      default:
      // code block
    }
  }


}


function draw() {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
