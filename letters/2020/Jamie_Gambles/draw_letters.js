// Declare and apply the 3 colours used in my alphabet
let col3 = "#F39B1F"
let col2 = "#123239"
let col1 = "#D35627"
let colorFront1 = col1;
let colorFront2 = col2;
let colorFront3 = col3;

// Declare the width of 1 face of the overall cube (50 so that the total width is 100 and therefore reaches the sides of the letter template)
let size = "50"

function drawLetter(letterData) {

  // Parameters that determine the 'cuts' (cubes not being drawn) for Face 1
  let cut1face1 = letterData["cut1face1"];
  let cut2face1 = letterData["cut2face1"];
  let cut3face1 = letterData["cut3face1"];

  // Parameter that determines if Face 1 should be inverted (cubes only drawn where a cut has been made)
  let invface1 = letterData["invface1"];

  // Parameters that determine the 'cuts' (cubes not being drawn) for Face 2
  let cut1face2 = letterData["cut1face2"];
  let cut2face2 = letterData["cut2face2"];
  let cut3face2 = letterData["cut3face2"];

  // Parameter that determines if Face 1 should be inverted (cubes only drawn where a cut has been made)
  let invface2 = letterData["invface2"];

  // Parameters that determine the 'cuts' (cubes not being drawn) for Face 3
  let cut1face3 = letterData["cut1face3"];
  let cut2face3 = letterData["cut2face3"];
  let cut3face3 = letterData["cut3face3"];

  // Parameter that determines if Face 1 should be inverted (cubes only drawn where a cut has been made)
  let invface3 = letterData["invface3"];

  // Set angle mode to degrees as I use tan(30) to determine the positions for each vertice in order for the cube to be isometric
  angleMode(DEGREES)

  // Use x as the horizontal centre of the letter template
  let x = 50

  // Use y as the vertical centre of the letter template
  let y = 100

  // Declare width of a singular cube (/ 3 since there is 3 'widths' of an individual cube in a face of the overall cube)(this and xval and ysize and yval are seperate variables so that in the animation when size changes, it only effects the size of the faces, and not the position as well)
  let xsize = size / 3

  // Declare incremental x distance to be used when positioning each cube
  let xval = 50 / 3

  // Declare the height of a singular cube (because the skewed nature of isometric this value has to be greater than the width in order to look propotionate)
  let ysize = -size / 3 * tan(30)

  // Declare incremental y distance to be used when positioning each cube
  let yval = -50 / 3 * tan(30)

  // variable that is used to check when a value in a given array is ever equel to the cut parameter for the given face when drawing each cube
  let check = false;

  // Array of cut parameters for Face 1
  let cuts1 = [cut1face1, cut2face1, cut3face1]

  // Array of cut parameters for Face 2
  let cuts2 = [cut1face2, cut2face2, cut3face2]

  // Array of cut parameters for Face 3
  let cuts3 = [cut1face3, cut2face3, cut3face3]

  // Function that defines an individual 'cube'
  function Draw_Face(x, y, letterData) {

    // Turn off stroke
    noStroke()

    // Set fill of face 1 of the cube
    fill(colorFront1)

    // Draws the front left face (Face 1)
    beginShape()
    vertex(x, y)
    vertex(x - xsize, y + ysize)
    vertex(x - xsize, y - ysize)
    vertex(x, y - 2 * ysize)
    endShape(CLOSE)

    // Set fill of face 2 of the cube
    fill(colorFront2);

    // Draws the front left face (Face 2)
    beginShape()
    vertex(x, y)
    vertex(x + xsize, y + ysize)
    vertex(x + xsize, y - ysize)
    vertex(x, y - 2 * ysize)
    endShape(CLOSE)

    // Set fill of face 3 of the cube
    fill(colorFront3);

    // Draws the front left face (Face 3)
    beginShape()
    vertex(x, y)
    vertex(x - xsize, y + ysize)
    vertex(x, y + 2 * ysize)
    vertex(x + xsize, y + ysize)
    endShape(CLOSE)
  }

  // Checks if Face 1 has been inverted
  if (invface1 == 1) {

    // Checks the cut condition for each cube that makes up Face 1, and draws the cube if the cut condition is met
    if (cut1face1 == 7 || cut2face1 == 7 || cut3face1 == 7) {
      Draw_Face(x - 2 * xval, y - 2 * yval)
    }
    if (cut1face1 == 8 || cut2face1 == 8 || cut3face1 == 8) {
      Draw_Face(x - xval, y - 3 * yval)
    }
    if (cut1face1 == 4 || cut2face1 == 4 || cut3face1 == 4) {
      Draw_Face(x - 2 * xval, y)
    }
    if (cut1face1 == 5 || cut2face1 == 5 || cut3face1 == 5) {
      Draw_Face(x - xval, y - yval)
    }
    if (cut1face1 == 9 || cut2face1 == 9 || cut3face1 == 9) {
      Draw_Face(x, y - 4 * yval)
    }
    if (cut1face1 == 3 || cut2face1 == 3 || cut3face1 == 3) {
      Draw_Face(x - 2 * xval, y + 2 * yval)
    }
    if (cut1face1 == 6 || cut2face1 == 6 || cut3face1 == 6) {
      Draw_Face(x, y - 2 * yval)
    }
    if (cut1face1 == 2 || cut2face1 == 2 || cut3face1 == 2) {
      Draw_Face(x - xval, y + yval)
    }
  }

  // Checks if Face 2 has been inverted
  if (invface2 == 1) {

    // Checks the cut condition for each cube that makes up Face 2, and draws the cube if the cut condition is met
    if (cut1face2 == 8 || cut2face2 == 8 || cut3face2 == 8) {
      Draw_Face(x + 2 * xval, y - 2 * yval)
    }
    if (cut1face2 == 5 || cut2face2 == 5 || cut3face2 == 5) {
      Draw_Face(x + xval, y - 3 * yval)
    }
    if (cut1face2 == 3 || cut2face2 == 3 || cut3face2 == 3) {
      Draw_Face(x + 2 * xval, y)
    }
    if (cut1face2 == 2 || cut2face2 == 2 || cut3face2 == 2) {
      Draw_Face(x + xval, y - yval)
    }
    if (cut1face2 == 9 || cut2face2 == 9 || cut3face2 == 9) {
      Draw_Face(x, y - 4 * yval)
    }
    if (cut1face2 == 7 || cut2face2 == 7 || cut3face2 == 7) {
      Draw_Face(x + 2 * xval, y + 2 * yval)
    }
    if (cut1face2 == 6 || cut2face2 == 6 || cut3face2 == 6) {
      Draw_Face(x, y - 2 * yval)
    }
    if (cut1face2 == 4 || cut2face2 == 4 || cut3face2 == 4) {
      Draw_Face(x + xval, y + yval)
    }
  }

  // Checks if Face 2 has been inverted
  if (invface3 == 1) {

    // Checks the cut condition for each cube that makes up Face 2, and draws the cube if the cut condition is met
    if (cut1face3 == 9 || cut2face3 == 9 || cut3face3 == 9) {
      Draw_Face(x, y + 4 * yval)
    }
    if (cut1face3 == 6 || cut2face3 == 6 || cut3face3 == 6) {
      Draw_Face(x - xval, y + 3 * yval)
    }
    if (cut1face3 == 8 || cut2face3 == 8 || cut3face3 == 8) {
      Draw_Face(x + xval, y + 3 * yval)
    }
    if (cut1face3 == 5 || cut2face3 == 5 || cut3face3 == 5) {
      Draw_Face(x, y + 2 * yval)
    }
    if (cut1face3 == 7 || cut2face3 == 7 || cut3face3 == 7) {
      Draw_Face(x + 2 * xval, y + 2 * yval)
    }
    if (cut1face3 == 3 || cut2face3 == 3 || cut3face3 == 3) {
      Draw_Face(x - 2 * xval, y + 2 * yval)
    }
    if (cut1face3 == 4 || cut2face3 == 4 || cut3face3 == 4) {
      Draw_Face(x + xval, y + yval)
    }
    if (cut1face3 == 2 || cut2face3 == 2 || cut3face3 == 2) {
      Draw_Face(x - xval, y + yval)
    }
  }

  // Determines the locations and draws the cubes that make up Face 1
  function Face1(x, y, letterData) {

    // Resets check variable, if any of the cut parameters for Face 1 = 7, then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 7) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 7 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x - 2 * xval, y - 2 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 1 = 8, then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 8) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 8 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x - xval, y - 3 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 1 or Face 2 = 9 (Check both Face 1 and 2 because cube 9 shares a face between the both), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 9 || cuts2[i] == 9) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 9 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x, y - 4 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 1 = 4, then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 4) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 4 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x - 2 * xval, y)
    }

    // Resets check variable, if any of the cut parameters for Face 1 = 5, then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 5) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 5 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x - xval, y - yval)
    }

    // Resets check variable, if any of the cut parameters for Face 1 or Face 2 = 6 (Check both Face 1 and 2 because cube 6 shares a face between the both), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 6 || cuts2[i] == 6) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 6 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x, y - 2 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 1 or Face 3 = 3 (Check both Face 1 and 3 because cube 3 shares a face between the both), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 3 || cuts3[i] == 3) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 3 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x - 2 * xval, y + 2 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 1 or Face 3 = 2 (Check both Face 1 and 3 because cube 2 shares a face between the both), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 2 || cuts3[i] == 2) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 2 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x - xval, y + yval)
    }

    // Resets check variable, if any of the cut parameters for Face 1, Face 2, or Face 3 = 1 (Check all Faces because cube 1 shares a face between all of them), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 1 || cuts2[i] == 1 || cuts3[i] == 1) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 1 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x, y);
    }
  }

  function Face2(x, y, letterData) {

    // Resets check variable, if any of the cut parameters for Face 2 = 8, then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 8) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 2 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x + 2 * xval, y - 2 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 2 = 5, then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 5) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 5 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x + xval, y - 3 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 2 or Face 1 = 9 (Check both Face 2 and 1 because cube 9 shares a face between the both), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 9 || cuts2[i] == 9) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 9 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x, y - 4 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 2 = 3, then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 3) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 3 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x + 2 * xval, y)
    }

    // Resets check variable, if any of the cut parameters for Face 2 = 2, then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 2) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 2 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x + xval, y - yval)
    }

    // Resets check variable, if any of the cut parameters for Face 2 or Face 1 = 6 (Check both Face 2 and 1 because cube 6 shares a face between the both), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 6 || cuts2[i] == 6) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 6 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x, y - 2 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 2 or Face 3 = 7 (Check both Face 2 and 3 because cube 7 shares a face between the both), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 7 || cuts3[i] == 7) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 7 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x + 2 * xval, y + 2 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 2 or Face 3 = 4 (Check both Face 2 and 3 because cube 4 shares a face between the both), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 4 || cuts3[i] == 4) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 4 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x + xval, y + yval)
    }

    // Resets check variable, if any of the cut parameters for Face 2, Face 1, or Face 3 = 1 (Check all Faces because cube 1 shares a face between all of them), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 1 || cuts2[i] == 1 || cuts3[i] == 1) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 1 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x, y);
    }
  }

  function Face3(x, y, letterData) {

    // Resets check variable, if any of the cut parameters for Face 3 = 9, then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts3[i] == 9) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 9 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x, y + 4 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 3 = 8, then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts3[i] == 8) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 8 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x + xval, y + 3 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 3 or Face 2 = 7 (Check both Face 3 and 2 because cube 7 shares a face between the both), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 7 || cuts3[i] == 7) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 7 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x + 2 * xval, y + 2 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 3 = 6, then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts3[i] == 6) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 6 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x - xval, y + 3 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 3 = 5, then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts3[i] == 5) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 5 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x, y + 2 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 3 or Face 2 = 4 (Check both Face 3 and 2 because cube 4 shares a face between the both), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 4 || cuts3[i] == 4) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 4 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x + xval, y + yval)
    }

    // Resets check variable, if any of the cut parameters for Face 3 or Face 1 = 3 (Check both Face 3 and 1 because cube 3 shares a face between the both), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 3 || cuts3[i] == 3) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 3 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x - 2 * xval, y + 2 * yval)
    }

    // Resets check variable, if any of the cut parameters for Face 3 or Face 1 = 2 (Check both Face 3 and 1 because cube 2 shares a face between the both), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 2 || cuts3[i] == 2) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 2 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x - xval, y + yval)
    }

    // Resets check variable, if any of the cut parameters for Face 3, Face 1, or Face 2 = 1 (Check all Faces because cube 1 shares a face between all of them), then set check to true
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 1 || cuts2[i] == 1 || cuts3[i] == 1) {
        check = true;
      }
    }

    // Only if check remains false (cut parameter is never met) then draw cube 1 (Refer to reference cube in my readme)
    if (check == false) {
      Draw_Face(x, y);
    }
  }

  // Checks whether to invert any of the Faces (not draw)
  if (invface1 == 0) {
    Face1(x, y)
  }
  if (invface2 == 0) {
    Face2(x, y)
  }
  if (invface3 == 0) {
    Face3(x, y)
  }
}

function interpolate_letter(percent, oldObj, newObj) {

  let new_letter = {};

  // While percent is less than 20 (the time it takes for each cube to have decreased in size), keep each letter in their old state, otherwse let it interpolate
  if (percent < 20) {
    new_letter["invface1"] = oldObj["invface1"]
    new_letter["cut1face1"] = oldObj["cut1face1"]
    new_letter["cut2face1"] = oldObj["cut2face1"]
    new_letter["cut3face1"] = oldObj["cut3face1"]
    new_letter["invface2"] = oldObj["invface2"]
    new_letter["cut1face2"] = oldObj["cut1face2"]
    new_letter["cut2face2"] = oldObj["cut2face2"]
    new_letter["cut3face2"] = oldObj["cut3face2"]
    new_letter["invface3"] = oldObj["invface3"]
    new_letter["cut1face3"] = oldObj["cut1face3"]
    new_letter["cut2face3"] = oldObj["cut2face3"]
    new_letter["cut3face3"] = oldObj["cut3face3"]
  } else {
    new_letter["invface1"] = newObj["invface1"];

    new_letter["cut1face1"] = map(percent*10, 0, 1, oldObj["cut1face1"], newObj["cut1face1"]);
    new_letter["cut2face1"] = map(percent*10, 0, 1, oldObj["cut2face1"], newObj["cut2face1"]);
    new_letter["cut3face1"] = map(percent*10, 0, 1, oldObj["cut3face1"], newObj["cut3face1"]);

    new_letter["invface2"] = newObj["invface2"];

    new_letter["cut1face2"] = map(percent*10, 0, 1, oldObj["cut1face2"], newObj["cut1face2"]);
    new_letter["cut2face2"] = map(percent*10, 0, 1, oldObj["cut2face2"], newObj["cut2face2"]);
    new_letter["cut3face2"] = map(percent*10, 0, 1, oldObj["cut3face2"], newObj["cut3face2"]);

    new_letter["invface3"] = newObj["invface3"];

    new_letter["cut1face3"] = map(percent*10, 0, 1, oldObj["cut1face3"], newObj["cut1face3"]);
    new_letter["cut2face3"] = map(percent*10, 0, 1, oldObj["cut2face3"], newObj["cut2face3"]);
    new_letter["cut3face3"] = map(percent*10, 0, 1, oldObj["cut3face3"], newObj["cut3face3"]);
  }

  // Once percent reaches 80 (just before each cube starts to increase in size), change each letter to their new state
  if (percent > 80) {
    new_letter["invface1"] = newObj["invface1"]

    new_letter["cut1face1"] = newObj["cut1face1"]
    new_letter["cut2face1"] = newObj["cut2face1"]
    new_letter["cut3face1"] = newObj["cut3face1"]
    new_letter["invface2"] = newObj["invface2"]
    new_letter["cut1face2"] = newObj["cut1face2"]
    new_letter["cut2face2"] = newObj["cut2face2"]
    new_letter["cut3face2"] = newObj["cut3face2"]
    new_letter["invface3"] = newObj["invface3"]
    new_letter["cut1face3"] = newObj["cut1face3"]
    new_letter["cut2face3"] = newObj["cut2face3"]
    new_letter["cut3face3"] = newObj["cut3face3"]
  }

  // While percent is greater than 0, and less than 20, decrease the size of each cube. While percent is greater than 80 and less than 100, increase each cube back to its original size
  if (percent == 100) {} else {
    if (percent < 20 && percent > 0) {
      size = size - .5
    } else if (percent < 100 && percent > 80) {
      size = size + .5
    }
  }
  return new_letter;
}

var swapWords = [
  "CAMPFIRE",
  "TORTOISE",
  "CAFFIENE",
  "FRACTION",
  "MATCHBOX",
  "TENACITY",
]
