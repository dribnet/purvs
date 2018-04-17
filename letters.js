/* 
 * The layout of my variables and how they interact with the letterforms:
 *
  1 triangle(xMain, yMain, tri1X, tri1Ya, tri1X, tri1Yb);
  2 triangle(xMain, yMain, xQuad, tri2Ya, xQuad, tri2Yb);
  3 triangle(xMain, yMain, xQuad, tri3Ya, xQuad, tri3Yb);

  rotate - is there just the letter structure requires the xQuad variable
  to relate to the y axis rather than the x. however it simply rotates the
  letterforms so that they can use the settings all ready in place.
 *
 *
 */

const alphabet = {
  "default": {
    // "xMain": 50,
    // "yMain": 100,
    // "xQuad": 100,
    // "tri1X": 0,
    // "tri1Ya": 0,
    // "tri1Yb": 200,
    // "tri2Ya": 0, 
    // "tri2Yb": 75,
    // "tri3Ya": 125,
    // "tri3Yb": 200,
    // "rotate": 0
  },
  "A": {
    "xMain": 0,
    "yMain": -50,
    "xQuad": 200,
    "tri1X": 150,
    "tri1Ya": -12.5,
    "tri1Yb": -87.5,
    "tri2Ya": 0,
    "tri2Yb": -30,
    "tri3Ya": -70,
    "tri3Yb": -100,
    "rotate": 90
  },
  "B": {
    "xMain": 0,
    "yMain": 100,
    "xQuad": 100,
    "tri1X": 75,
    "tri1Ya": 55,
    "tri1Yb": 140,
    "tri2Ya": 0,
    "tri2Yb": 80,
    "tri3Ya": 100,
    "tri3Yb": 200,
    "rotate": 0
  },
  "C": {
    "xMain": 0,
    "yMain": 100,
    "xQuad": 100,
    "tri1X": 75,
    "tri1Ya": 25,
    "tri1Yb": 175,
    "tri2Ya": 0,
    "tri2Yb": 50,
    "tri3Ya": 120,
    "tri3Yb": 200,
    "rotate": 0
  },
  "D": {
    "xMain": 100,
    "yMain": 100,
    "xQuad": 0,
    "tri1X": 25,
    "tri1Ya": 25,
    "tri1Yb": 175,
    "tri2Ya": 0,
    "tri2Yb": 40,
    "tri3Ya": 160,
    "tri3Yb": 200,
    "rotate": 0
  },
  "E": {
    "xMain": 0,
    "yMain": 100,
    "xQuad": 85,
    "tri1X": 100,
    "tri1Ya": 30,
    "tri1Yb": 170,
    "tri2Ya": 0,
    "tri2Yb": 80,
    "tri3Ya": 120,
    "tri3Yb": 200,
    "rotate": 0
  },
  "F": {
    "xMain": 0,
    "yMain": 50,
    "xQuad": 100,
    "tri1X": 50,
    "tri1Ya": 0,
    "tri1Yb": 200,
    "tri2Ya": 0,
    "tri2Yb": 45,
    "tri3Ya": 55,
    "tri3Yb": 100,
    "rotate": 0
  },
  "G": {
    "xMain": 200,
    "yMain": -50,
    "xQuad": 125,
    "tri1X": 0,
    "tri1Ya": 0,
    "tri1Yb": -100,
    "tri2Ya": 0,
    "tri2Yb": -50,
    "tri3Ya": -70,
    "tri3Yb": -100,
    "rotate": 90
  },
  "H": {
    "xMain": 50,
    "yMain": 100,
    "xQuad": 100,
    "tri1X": 0,
    "tri1Ya": 0,
    "tri1Yb": 200,
    "tri2Ya": 0,
    "tri2Yb": 200,
    "tri3Ya": 75,
    "tri3Yb": 125,
    "rotate": 0
  },
  "I": {
    "xMain": 40,
    "yMain": -50,
    "xQuad": 200,
    "tri1X": 0,
    "tri1Ya": -35,
    "tri1Yb": -65,
    "tri2Ya": -25,
    "tri2Yb": -60,
    "tri3Ya": -40,
    "tri3Yb": -75,
    "rotate": 90
  },
  "J": {
    "xMain": 200,
    "yMain": -20,
    "xQuad": 0,
    "tri1X": 140,
    "tri1Ya": -15,
    "tri1Yb": -100,
    "tri2Ya": 0,
    "tri2Yb": -30,
    "tri3Ya": -15,
    "tri3Yb": -45,
    "rotate": 90
  },
  "K": {
    "xMain": 0,
    "yMain": 100,
    "xQuad": 100,
    "tri1X": 35,
    "tri1Ya": 0,
    "tri1Yb": 200,
    "tri2Ya": 0,
    "tri2Yb": 75,
    "tri3Ya": 110,
    "tri3Yb": 200,
    "rotate": 0
  },
  "L": {
    "xMain": 150,
    "yMain": 0,
    "xQuad": 200,
    "tri1X": 0,
    "tri1Ya": 0,
    "tri1Yb": -30,
    "tri2Ya": -15,
    "tri2Yb": -70,
    "tri3Ya": 0,
    "tri3Yb": -100,
    "rotate": 90
  },
  "M": {
    "xMain": 0,
    "yMain": -50,
    "xQuad": 200,
    "tri1X": 200,
    "tri1Ya": -15,
    "tri1Yb": -85,
    "tri2Ya": 0,
    "tri2Yb": -40,
    "tri3Ya": -60,
    "tri3Yb": -100,
    "rotate": 90
  },
  "S": {
    "xMain": 50,
    "yMain": -20,
    "xQuad": 200,
    "tri1X": 0,
    "tri1Ya": 0,
    "tri1Yb": -100,
    "tri2Ya": 0,
    "tri2Yb": -70,
    "tri3Ya": -30,
    "tri3Yb": -100,
    "rotate": 90
  },


  "X": {
    "xMain": 100,
    "yMain": -50,
    "xQuad": 200,
    "tri1X": 0,
    "tri1Ya": 0,
    "tri1Yb": -100,
    "tri2Ya": 0,
    "tri2Yb": -70,
    "tri3Ya": -30,
    "tri3Yb": -100,
    "rotate": 90
  },
  "Y": {
    "xMain": 70,
    "yMain": -50,
    "xQuad": 0,
    "tri1X": 200,
    "tri1Ya": -25,
    "tri1Yb": -75,
    "tri2Ya": 0,
    "tri2Yb": -70,
    "tri3Ya": -30,
    "tri3Yb": -100,
    "rotate": 90
  },
  "?": {
    "xMain": 175,
    "yMain": -50,
    "xQuad": 0,
    "tri1X": 200,
    "tri1Ya": -35,
    "tri1Yb": -65,
    "tri2Ya": -0,
    "tri2Yb": -100,
    "tri3Ya": -0,
    "tri3Yb": -30,
    "rotate": 90
  },
  "!": {
    "xMain": 175,
    "yMain": -50,
    "xQuad": 0,
    "tri1X": 200,
    "tri1Ya": -35,
    "tri1Yb": -65,
    "tri2Ya": -25,
    "tri2Yb": -60,
    "tri3Ya": -40,
    "tri3Yb": -75,
    "rotate": 90
  },
  ".": {
    "xMain": 175,
    "yMain": -50,
    "xQuad": 175,
    "tri1X": 200,
    "tri1Ya": -35,
    "tri1Yb": -65,
    "tri2Ya": -50,
    "tri2Yb": -50,
    "tri3Ya": -50,
    "tri3Yb": -50,
    "rotate": 90
  }
}