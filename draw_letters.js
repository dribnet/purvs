const colorFront1 = "#36d6ac";
const colorFront2 = "#454342";
const colorFront3 = "#f0c85b";


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
  let yval = -50 / 3 * tan(30)
  let xval = 50 / 3

  let cuts1 = [cut1face1, cut2face1, cut3face1]
  let cuts2 = [cut1face2, cut2face2, cut3face2]
  let cuts3 = [cut1face2, cut2face2, cut3face2]

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
    vertex(x - xval, y + yval)
    vertex(x - xval, y - yval)
    vertex(x, y - 2 * yval)
    endShape(CLOSE)

    fill(colorFront2);

    beginShape()
    vertex(x, y)
    vertex(x + xval, y + yval)
    vertex(x + xval, y - yval)
    vertex(x, y - 2 * yval)
    endShape(CLOSE)

    fill(colorFront3);

    beginShape()
    vertex(x, y)
    vertex(x - xval, y + yval)
    vertex(x, y + 2 * yval)
    vertex(x + xval, y + yval)
    endShape(CLOSE)

  }

  function Face1(x, y, letterData) {

    if (cut1face1 < 7 || cut1face1 > 7) {
      if (cut2face1 < 7 || cut2face1 > 7) {
        if (cut3face1 < 7 || cut3face1 > 7) {
          Draw_Face(x - 2 * xval, y - 2 * yval)
        }
      }
    }

    if (cut1face1 < 8 || cut1face1 > 8) {
      if (cut2face1 < 8 || cut2face1 > 8) {
        if (cut3face1 < 8 || cut3face1 > 8) {
          Draw_Face(x - xval, y - 3 * yval)
        }
      }
    }

    if (cut1face1 < 9 || cut1face1 > 9) {
      if (cut2face1 < 9 || cut2face1 > 9) {
        if (cut3face1 < 9 || cut3face1 > 9) {
          if (cut1face2 < 9 || cut1face2 > 9) {
            if (cut2face2 < 9 || cut2face2 > 9) {
              if (cut3face2 < 9 || cut3face2 > 9) {
                Draw_Face(x, y - 4 * yval)
              }
            }
          }
        }
      }
    }

    if (cut1face1 < 4 || cut1face1 > 4) {
      if (cut2face1 < 4 || cut2face1 > 4) {
        if (cut3face1 < 4 || cut3face1 > 4) {
          Draw_Face(x - 2 * xval, y)
        }
      }
    }

    if (cut1face1 < 5 || cut1face1 > 5) {
      if (cut2face1 < 5 || cut2face1 > 5) {
        if (cut3face1 < 5 || cut3face1 > 5) {
          Draw_Face(x - xval, y - yval)
        }
      }
    }

    if (cut1face1 < 6 || cut1face1 > 6) {
      if (cut2face1 < 6 || cut2face1 > 6) {
        if (cut3face1 < 6 || cut3face1 > 6) {
          if (cut1face2 < 6 || cut1face2 > 6) {
            if (cut2face2 < 6 || cut2face2 > 6) {
              if (cut3face2 < 6 || cut3face2 > 6) {
                Draw_Face(x, y - 2 * yval)

              }
            }
          }
        }
      }
    }

    if (cut1face1 < 3 || cut1face1 > 3) {
      if (cut2face1 < 3 || cut2face1 > 3) {
        if (cut3face1 < 3 || cut3face1 > 3) {
          if (cut1face3 < 3 || cut1face3 > 3) {
            if (cut2face3 < 3 || cut2face3 > 3) {
              if (cut3face3 < 3 || cut3face3 > 3) {
                Draw_Face(x - 2 * xval, y + 2 * yval)
              }
            }
          }
        }
      }
    }

    if (cut1face1 < 2 || cut1face1 > 2) {
      if (cut2face1 < 2 || cut2face1 > 2) {
        if (cut3face1 < 2 || cut3face1 > 2) {
          if (cut1face3 < 2 || cut1face3 > 2) {
            if (cut2face3 < 2 || cut2face3 > 2) {
              if (cut3face3 < 2 || cut3face3 > 2) {
                Draw_Face(x - xval, y + yval)
              }
            }
          }
        }
      }
    }

for (var i = 0; i < cuts1.length; i++) {
if (cuts1[i] === !1 || cuts2[i] === !1 || cuts3[i] === !1) {
  Draw_Face(x, y)
}
}

  }

  function Face2(x, y, letterData) {

    if (cut1face2 < 8 || cut1face2 > 8) {
      if (cut2face2 < 8 || cut2face2 > 8) {
        if (cut3face2 < 8 || cut3face2 > 8) {
          Draw_Face(x + 2 * xval, y - 2 * yval)
        }
      }
    }

    if (cut1face2 < 5 || cut1face2 > 5) {
      if (cut2face2 < 5 || cut2face2 > 5) {
        if (cut3face2 < 5 || cut3face2 > 5) {
          Draw_Face(x + xval, y - 3 * yval)
        }
      }
    }

    if (cut1face1 < 9 || cut1face1 > 9) {
      if (cut2face1 < 9 || cut2face1 > 9) {
        if (cut3face1 < 9 || cut3face1 > 9) {
          if (cut1face2 < 9 || cut1face2 > 9) {
            if (cut2face2 < 9 || cut2face2 > 9) {
              if (cut3face2 < 9 || cut3face2 > 9) {
                Draw_Face(x, y - 4 * yval)
              }
            }
          }
        }
      }
    }

    if (cut1face2 < 3 || cut1face2 > 3) {
      if (cut2face2 < 3 || cut2face2 > 3) {
        if (cut3face2 < 3 || cut3face2 > 3) {
          Draw_Face(x + 2 * xval, y)
        }
      }
    }

    if (cut1face2 < 2 || cut1face2 > 2) {
      if (cut2face2 < 2 || cut2face2 > 2) {
        if (cut3face2 < 2 || cut3face2 > 2) {
          Draw_Face(x + xval, y - yval)
        }
      }
    }

    if (cut1face1 < 6 || cut1face1 > 6) {
      if (cut2face1 < 6 || cut2face1 > 6) {
        if (cut3face1 < 6 || cut3face1 > 6) {
          if (cut1face2 < 6 || cut1face2 > 6) {
            if (cut2face2 < 6 || cut2face2 > 6) {
              if (cut3face2 < 6 || cut3face2 > 6) {
                Draw_Face(x, y - 2 * yval)
              }
            }
          }
        }
      }
    }

    if (cut1face2 < 7 || cut1face2 > 7) {
      if (cut2face2 < 7 || cut2face2 > 7) {
        if (cut3face2 < 7 || cut3face2 > 7) {
          if (cut1face3 < 7 || cut1face3 > 7) {
            if (cut2face3 < 7 || cut2face3 > 7) {
              if (cut3face3 < 7 || cut3face3 > 7) {
                Draw_Face(x + 2 * xval, y + 2 * yval)
              }
            }
          }
        }
      }
    }

    if (cut1face2 < 4 || cut1face2 > 4) {
      if (cut2face2 < 4 || cut2face2 > 4) {
        if (cut3face2 < 4 || cut3face2 > 4) {
          if (cut1face3 < 4 || cut1face3 > 4) {
            if (cut2face3 < 4 || cut2face3 > 4) {
              if (cut3face3 < 4 || cut3face3 > 4) {
                Draw_Face(x + xval, y + yval)
              }
            }
          }
        }
      }
    }


for (var i = 0; i < cuts1.length; i++) {
if (cuts1[i] === !1 || cuts2[i] === !1 || cuts3[i] === !1) {
                      Draw_Face(x, y)
                    }
                  }

  }

  function Face3(x, y, letterData) {

    if (cut1face3 < 9 || cut1face3 > 9) {
      if (cut2face3 < 9 || cut2face3 > 9) {
        if (cut3face3 < 9 || cut3face3 > 9) {
          Draw_Face(x, y + 4 * yval)
        }
      }
    }

    if (cut1face3 < 8 || cut1face3 > 8) {
      if (cut2face3 < 8 || cut2face3 > 8) {
        if (cut3face3 < 8 || cut3face3 > 8) {
          Draw_Face(x + xval, y + 3 * yval)
        }
      }
    }

    if (cut1face2 < 7 || cut1face2 > 7) {
      if (cut2face2 < 7 || cut2face2 > 7) {
        if (cut3face2 < 7 || cut3face2 > 7) {
          if (cut1face3 < 7 || cut1face3 > 7) {
            if (cut2face3 < 7 || cut2face3 > 7) {
              if (cut3face3 < 7 || cut3face3 > 7) {
                Draw_Face(x + 2 * xval, y + 2 * yval)
              }
            }
          }
        }
      }
    }

    if (cut1face3 < 6 || cut1face3 > 6) {
      if (cut2face3 < 6 || cut2face3 > 6) {
        if (cut3face3 < 6 || cut3face3 > 6) {
          Draw_Face(x - xval, y + 3 * yval)
        }
      }
    }

    if (cut1face3 < 5 || cut1face3 > 5) {
      if (cut2face3 < 5 || cut2face3 > 5) {
        if (cut3face3 < 5 || cut3face3 > 5) {
          Draw_Face(x, y + 2 * yval)
        }
      }
    }

    if (cut1face2 < 4 || cut1face2 > 4) {
      if (cut2face2 < 4 || cut2face2 > 4) {
        if (cut3face2 < 4 || cut3face2 > 4) {
          if (cut1face3 < 4 || cut1face3 > 4) {
            if (cut2face3 < 4 || cut2face3 > 4) {
              if (cut3face3 < 4 || cut3face3 > 4) {
                Draw_Face(x + xval, y + yval)
              }
            }
          }
        }
      }
    }

    if (cut1face1 < 3 || cut1face1 > 3) {
      if (cut2face1 < 3 || cut2face1 > 3) {
        if (cut3face1 < 3 || cut3face1 > 3) {
          if (cut1face3 < 3 || cut1face3 > 3) {
            if (cut2face3 < 3 || cut2face3 > 3) {
              if (cut3face3 < 3 || cut3face3 > 3) {
                Draw_Face(x - 2 * xval, y + 2 * yval)
              }
            }
          }
        }
      }
    }

    if (cut1face1 < 2 || cut1face1 > 2) {
      if (cut2face1 < 2 || cut2face1 > 2) {
        if (cut3face1 < 2 || cut3face1 > 2) {
          if (cut1face3 < 2 || cut1face3 > 2) {
            if (cut2face3 < 2 || cut2face3 > 2) {
              if (cut3face3 < 2 || cut3face3 > 2) {
                Draw_Face(x - xval, y + yval)
              }
            }
          }
        }
      }
    }

for (var i = 0; i < cuts1.length; i++) {
if (cuts1[i] === !1 || cuts2[i] === !1 || cuts3[i] === !1) {
                      Draw_Face(x, y)
                    }
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

  new_letter["invface1"] = map(percent, 0, 100, oldObj["invface1"], newObj["invface1"]);

  new_letter["cut1face1"] = map(percent, 0, 100, oldObj["cut1face1"], newObj["cut1face1"]);
  new_letter["cut2face1"] = map(percent, 0, 100, oldObj["cut2face1"], newObj["cut2face1"]);
  new_letter["cut3face1"] = map(percent, 0, 100, oldObj["cut3face1"], newObj["cut3face1"]);

  new_letter["invface2"] = map(percent, 0, 100, oldObj["invface2"], newObj["invface2"]);

  new_letter["cut1face2"] = map(percent, 0, 100, oldObj["cut1face2"], newObj["cut1face2"]);
  new_letter["cut2face2"] = map(percent, 0, 100, oldObj["cut2face2"], newObj["cut2face2"]); 
  new_letter["cut3face2"] = map(percent, 0, 100, oldObj["cut3face2"], newObj["cut3face2"]);

  new_letter["invface3"] = map(percent, 0, 100, oldObj["invface3"], newObj["invface3"]);

  new_letter["cut1face3"] = map(percent, 0, 100, oldObj["cut1face3"], newObj["cut1face3"]);
  new_letter["cut2face3"] = map(percent, 0, 100, oldObj["cut2face3"], newObj["cut2face3"]);
  new_letter["cut3face3"] = map(percent, 0, 100, oldObj["cut3face3"], newObj["cut3face3"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
