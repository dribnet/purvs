/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let midline_x = 150 + letterData["offsety"];
  let colour = letterData[""];
  // let midline_quantity = letterData["quantity"];
  // let midline_rotation = letterData["rotation"];

  let  midline_rotation = 1
  let  midline_quanity = 1
  let  midline_length = 1
  let midline_distance = 1

  let dot_size = 10
  let mid_x = 38.3
  let mid_y = 130
  //let midline_x = 50
  let midline_y = 50

  // draw two circles
//   fill(darkBlue);
//   ellipse(50, 150, 75, 75);
//   fill(lightBlue);
//   ellipse(pos2x, pos2y, size2, size2);

  //letter experimentation:
  push;
  colorMode(HSB);
  strokeWeight(2);
  stroke(10,50,100);

  if (midline_rotation = 1) {
    if (midline_quantity = 1) {
      if (midline_length = 1) {
        centre_line(10,80); //tl
      } else {
        centre_line(10,80); //tl
        centre_line(68.3,180); //br
      }
    } else {
      if (midline_quantity = 2) {
        if (midline_distance = 0) {
          if (midline_length = 0) {
            centre_line(10,80); //tl
            centre_line(68.3,180); //tr
          } else {
            centre_line(10,80); //tl
            centre_line(68.3,180); //tr
            centre_line(10,80); //bl
            centre_line(68.3,180); //br
          }
        } else {
          if (midline_length = 1) {
            centre_line(10,80); //tl
            centre_line(68.3,180); //mr
          } else {
            centre_line(10,80); //tl
            centre_line(98.3,130); //mr
            centre_line(8.3,18); //br
            centre_line(-20,130); //ml
          }
        }
      } else {
        if (midline_quanity = 3) {
          if (midline_distance = 0) {
            if (midline_length = 0) {
              centre_line(10,80); //tl
              centre_line(68.3,180); //tr
              centre_line(68.3,180); //mr
            } else {
              centre_line(10,80); //tl
              centre_line(68.3,180); //tr
              centre_line(68.3,180); //ml
              centre_line(98.3,130); //mr
              centre_line(10,80); //bl
              centre_line(8.3,18); //br
            }
          } else {
            if (midline_length = 0) {
              centre_line(10,80); //tl
              centre_line(68.3,180); //mr
              centre_line(10,80); //bl
            } else {
              centre_line(10,80); //tl
              centre_line(68.3,180); //tr
              centre_line(68.3,180); //ml
              centre_line(98.3,130); //mr
              centre_line(10,80); //bl
              centre_line(8.3,18); //br
            }
          }
        } else {
          if (midline_quanity = 4) {
            if (midline_distance = 0) {
              if (midline_length = 0) {
                centre_line(10,80); //tl
                centre_line(68.3,180); //tr
                centre_line(68.3,180); //mr
                centre_line(8.3,18); //br
              } else {
                centre_line(10,80); //tl
                centre_line(68.3,180); //tr
                centre_line(68.3,180); //ml
                centre_line(98.3,130); //mr
                centre_line(10,80); //bl
                centre_line(8.3,18); //br
              }
            } else {
              if (midline_length = 0) {
                centre_line(10,80); //tl
                centre_line(68.3,180); //tr
                centre_line(68.3,180); //mr
                centre_line(8.3,18); //br
              } else {
                centre_line(10,80); //tl
                centre_line(68.3,180); //tr
                centre_line(68.3,180); //ml
                centre_line(98.3,130); //mr
                centre_line(10,80); //bl
                centre_line(8.3,18); //br
        }
      }
    }
  } else {
    if (midline_rotation = 2) {

    } else {

    }
  }

  centre_line(10,80);

  strokeWeight(0);
  fill(0);
  ellipse(10,80,dot_size); //tl
  ellipse(-20,130,dot_size); //ml
  ellipse(10,180,dot_size); //bl
  ellipse(38.3,130,dot_size); //m
  ellipse(68.3,80,dot_size); //tr
  ellipse(98.3,130,dot_size); //mr
  ellipse(68.3,180,dot_size); //br
  pop;
}

function centre_line(x2,y2) {
  stroke(100,100,100);
  line(38.3,130,x2,y2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  // new_letter["quantity"] = map(percent, 0, 100, oldObj["quantity"], newObj["quantity"]);
  // new_letter["rotation"] = map(percent, 0, 100, oldObj["rotation"], newObj["rotation"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
}
