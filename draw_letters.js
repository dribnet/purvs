//let col1 = "#36d6ac"
//let col2 = "#454342"
//let col3 = "#f0c85b"

let col3 = "#F39B1F"
let col2 = "#123239"
let col1 = "#D35627"

let colorFront1 = col1;
let colorFront2 = col2;
let colorFront3 = col3;

let size = "50"

function drawLetter(letterData) {

  let cut1face1 = letterData["cut1face1"];
  let cut2face1 = letterData["cut2face1"];
  let cut3face1 = letterData["cut3face1"];

  let invface1 = letterData["invface1"];

  let cut1face2 = letterData["cut1face2"];
  let cut2face2 = letterData["cut2face2"];
  let cut3face2 = letterData["cut3face2"];

  let invface2 = letterData["invface2"];

  let cut1face3 = letterData["cut1face3"];
  let cut2face3 = letterData["cut2face3"];
  let cut3face3 = letterData["cut3face3"];

  let invface3 = letterData["invface3"];

  angleMode(DEGREES)

  let x = 50
  let y = 100

  let xsize = size / 3
  let ysize = -size / 3 * tan(30)
  let yval = -50 / 3 * tan(30)
  let xval = 50 / 3

  let check = false;

  let cuts1 = [cut1face1, cut2face1, cut3face1]
  let cuts2 = [cut1face2, cut2face2, cut3face2]
  let cuts3 = [cut1face3, cut2face3, cut3face3]

  if (invface1 == 1) {

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
  if (invface2 == 1) {
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
  if (invface3 == 1) {
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

  function Draw_Face(x, y, letterData) {

    noStroke()

    fill(colorFront1)

    beginShape()
    vertex(x, y)
    vertex(x - xsize, y + ysize)
    vertex(x - xsize, y - ysize)
    vertex(x, y - 2 * ysize)
    endShape(CLOSE)

    fill(colorFront2);

    beginShape()
    vertex(x, y)
    vertex(x + xsize, y + ysize)
    vertex(x + xsize, y - ysize)
    vertex(x, y - 2 * ysize)
    endShape(CLOSE)

    fill(colorFront3);

    beginShape()
    vertex(x, y)
    vertex(x - xsize, y + ysize)
    vertex(x, y + 2 * ysize)
    vertex(x + xsize, y + ysize)
    endShape(CLOSE)

  }

  function Face1(x, y, letterData) {

    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 7) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x - 2 * xval, y - 2 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 8) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x - xval, y - 3 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 9 || cuts2[i] == 9) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x, y - 4 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 4) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x - 2 * xval, y)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 5) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x - xval, y - yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 6 || cuts2[i] == 6) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x, y - 2 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 3 || cuts3[i] == 3) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x - 2 * xval, y + 2 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 2 || cuts3[i] == 2) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x - xval, y + yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 1 || cuts2[i] == 1 || cuts3[i] == 1) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x, y);
    }
  }

  function Face2(x, y, letterData) {

    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 8) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x + 2 * xval, y - 2 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 5) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x + xval, y - 3 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 9 || cuts2[i] == 9) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x, y - 4 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 3) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x + 2 * xval, y)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 2) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x + xval, y - yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 6 || cuts2[i] == 6) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x, y - 2 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 7 || cuts3[i] == 7) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x + 2 * xval, y + 2 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 4 || cuts3[i] == 4) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x + xval, y + yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 1 || cuts2[i] == 1 || cuts3[i] == 1) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x, y);
    }
  }

  function Face3(x, y, letterData) {

    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts3[i] == 9) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x, y + 4 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts3[i] == 8) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x + xval, y + 3 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 7 || cuts3[i] == 7) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x + 2 * xval, y + 2 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts3[i] == 6) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x - xval, y + 3 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts3[i] == 5) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x, y + 2 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts2[i] == 4 || cuts3[i] == 4) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x + xval, y + yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 3 || cuts3[i] == 3) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x - 2 * xval, y + 2 * yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 2 || cuts3[i] == 2) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x - xval, y + yval)
    }
    check = false;
    for (var i = 0; i < cuts1.length; i++) {
      if (cuts1[i] == 1 || cuts2[i] == 1 || cuts3[i] == 1) {
        check = true;
      }
    }
    if (check == false) {
      Draw_Face(x, y);
    }
  }
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

  new_letter["cut1face1"] = map(percent, 0, 100, oldObj["cut1face1"], newObj["cut1face1"]);
  new_letter["cut2face1"] = map(percent, 0, 100, oldObj["cut2face1"], newObj["cut2face1"]);
  new_letter["cut3face1"] = map(percent, 0, 100, oldObj["cut3face1"], newObj["cut3face1"]);

  new_letter["invface2"] = newObj["invface2"];

  new_letter["cut1face2"] = map(percent, 0, 100, oldObj["cut1face2"], newObj["cut1face2"]);
  new_letter["cut2face2"] = map(percent, 0, 100, oldObj["cut2face2"], newObj["cut2face2"]);
  new_letter["cut3face2"] = map(percent, 0, 100, oldObj["cut3face2"], newObj["cut3face2"]);

  new_letter["invface3"] = newObj["invface3"];

  new_letter["cut1face3"] = map(percent, 0, 100, oldObj["cut1face3"], newObj["cut1face3"]);
  new_letter["cut2face3"] = map(percent, 0, 100, oldObj["cut2face3"], newObj["cut2face3"]);
  new_letter["cut3face3"] = map(percent, 0, 100, oldObj["cut3face3"], newObj["cut3face3"]);
}
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
  if (percent == 100) {
  } else {
  if (percent < 20 && percent > 0) {
size = size - .5
  } else if (percent < 100 && percent > 80) {
    size = size + .5

  }
  }

  if ((percent <99) && (colorFront1 = col1)) {
    colorFront1 = col2
    colorFront2 = col1
}

if ((percent > 99) && (colorFront2 = col1)) {
    colorFront1 = col1
    colorFront2 = col2
}

  return new_letter;
}

var swapWords = [
  "CAMPFIRE",
  "TORTOISE",
  "CAFFIENE",
  "JUNCTION",
  "NEGATIVE",
  "DIVISION",


]
