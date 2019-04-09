const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES); 
  let w = 100;
  let h = 200;
  let startX = 0;
  let startY = 0;
  let lineWidth = w;
  let lineHeight = h / 2;
  let currentLine = "top";
  strokeWeight(5);
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
        if (thisLine > 0.1 && thisLine <= 1) {  
          line(startX, startY, startX+lineWidth, startY);
        }
        else if(thisLine > 1 && thisLine <= 2){
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
        } else if(thisLine === 1.5) {
          let adjustedY = startX + lineHeight/2;
          line(startX, startY, startX,adjustedY);
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
      default:
      // code block
    }
  }
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["lines"] = []
  // new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  // new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  // new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["lines"][0] = map(percent, 0, 100, oldObj["lines"][0], newObj["lines"][0]);
  new_letter["lines"][1] = map(percent, 0, 100, oldObj["lines"][1], newObj["lines"][1]);
  new_letter["lines"][2] = map(percent, 0, 100, oldObj["lines"][2], newObj["lines"][2]);
  new_letter["lines"][3] = map(percent, 0, 100, oldObj["lines"][3], newObj["lines"][3]);
  new_letter["lines"][4] = map(percent, 0, 100, oldObj["lines"][4], newObj["lines"][4]);
  new_letter["lines"][5] = map(percent, 0, 100, oldObj["lines"][5], newObj["lines"][5]);
  new_letter["lines"][6] = map(percent, 0, 100, oldObj["lines"][6], newObj["lines"][6]);
  // new_letter["lines"][5] = map(percent, 0, 100, oldObj["lines"][5], newObj["lines"][5]);
  new_letter["box1"] = map(percent, 0, 100, oldObj["box1"], newObj["box1"]);
  new_letter["box2"] = map(percent, 0, 100, oldObj["box2"], newObj["box2"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]