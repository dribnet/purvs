const PI = 3.14159;
const HALF_PI = PI/2;
const TWO_PI = PI*2;

const alphabet = {
  "default": {
    "posx" : 50,
    "posy" : 100,
    "arcS": PI, 
    "arcE": TWO_PI,
    "movetriX1" : 0,
    "triX1toX2" : -50,
    "triX1toX3" : 50,
    "movetriY1" : -25,
    "triY1toY2" : 75,
    "triY1toY3" : 75
  },
  "A": {
    "posx" : 50,
    "posy" : 100,
    "arcS": PI, 
    "arcE": TWO_PI,
    "movetriX1" : 0,
    "triX1toX2" : -50,
    "triX1toX3" : 50,
    "movetriY1" : -25,
    "triY1toY2" : 75,
    "triY1toY3" : 75
  },
  "B": {
    "posx" : 25,
    "posy" : 100,
    "arcS": HALF_PI + PI, 
    "arcE": 0,
    "movetriX1" : 0,
    "triX1toX2" : 0,
    "triX1toX3" : 50,
    "movetriY1" : 0,
    "triY1toY2" : 50,
    "triY1toY3" : 25
  },
  "C": {
    "posx" : 75,
    "posy" : 100,
    "arcS": HALF_PI, 
    "arcE": PI + HALF_PI,
    "movetriX1" : 0,
    "triX1toX2" : -25,
    "triX1toX3" : 0,
    "movetriY1" : -25,
    "triY1toY2" : 25,
    "triY1toY3" : 50
  },
  "D": {
    "posx" : 25,
    "posy" : 100,
    "arcS": PI + HALF_PI, 
    "arcE": HALF_PI,
    "movetriX1" : 0,
    "triX1toX2" : 25,
    "triX1toX3" : 0,
    "movetriY1" : -25,
    "triY1toY2" : 25,
    "triY1toY3" : 50
  },
  "E": {
    "posx" : 50,
    "posy" : 100,
    "arcS": PI, 
    "arcE": TWO_PI,
    "movetriX1" : -50,
    "triX1toX2" : 0,
    "triX1toX3" : 100,
    "movetriY1" : 0,
    "triY1toY2" : 50,
    "triY1toY3" : 50
  },
  "F": {
    "posx" : 25,
    "posy" : 100,
    "arcS": 0, 
    "arcE": HALF_PI,
    "movetriX1" : 0,
    "triX1toX2" : 0,
    "triX1toX3" : 50,
    "movetriY1" : -50,
    "triY1toY2" : 50,
    "triY1toY3" : 0
  },
  "G": {
    "posx" : 50,
    "posy" : 100,
    "arcS": HALF_PI, 
    "arcE": PI + HALF_PI,
    "movetriX1" : 0,
    "triX1toX2" : 0,
    "triX1toX3" : 50,
    "movetriY1" : 0,
    "triY1toY2" : 50,
    "triY1toY3" : 0
  },
  "H": {
    "posx" : 0,
    "posy" : 100,
    "arcS": PI + HALF_PI, 
    "arcE": HALF_PI,
    "movetriX1" : 100,
    "triX1toX2" : -50,
    "triX1toX3" : 0,
    "movetriY1" : -50,
    "triY1toY2" : 50,
    "triY1toY3" : 100
  },
  "I": {
    "posx" : 50,
    "posy" : 100,
    "arcS": PI + HALF_PI - HALF_PI/4, 
    "arcE": TWO_PI - (HALF_PI/4)*3,
    "movetriX1" : 0,
    "triX1toX2" : -25,
    "triX1toX3" : 25,
    "movetriY1" : 0,
    "triY1toY2" : 50,
    "triY1toY3" : 50
  },
  "J": {
    "posx" : 50,
    "posy" : 100,
    "arcS": TWO_PI, 
    "arcE": PI,
    "movetriX1" : 50,
    "triX1toX2" : -100,
    "triX1toX3" : 0,
    "movetriY1" : -50,
    "triY1toY2" : 0,
    "triY1toY3" : 50
  },
  "K": {
    "posx" : 50,
    "posy" : 100,
    "arcS": PI + HALF_PI/2,
    "arcE": TWO_PI - HALF_PI/2,
    "movetriX1" : -35,
    "triX1toX2" : 0,
    "triX1toX3" : 75,
    "movetriY1" : -35,
    "triY1toY2" : 75,
    "triY1toY3" : 75
  },
  "L": {
    "posx" : 50,
    "posy" : 150,
    "arcS": PI, 
    "arcE": TWO_PI,
    "movetriX1" : -50,
    "triX1toX2" : 0,
    "triX1toX3" : 50,
    "movetriY1" : -100,
    "triY1toY2" : 100,
    "triY1toY3" : 100
  },
  "M": {
    "posx" : 50,
    "posy" : 100,
    "arcS": TWO_PI - HALF_PI/2,
    "arcE": TWO_PI + PI - HALF_PI/2,
    "movetriX1" : -50,
    "triX1toX2" : 0,
    "triX1toX3" : 100,
    "movetriY1" : -50,
    "triY1toY2" : 100,
    "triY1toY3" : 100
  }
}