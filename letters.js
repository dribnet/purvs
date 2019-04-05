const PI = 3.14159;
const HALF_PI = PI/2;
const TWO_PI = PI*2;

const alphabet = {
  "default": {
  "size": 100,
  "offsetx": 50,
  "offsety": 0,
  "arcS": TWO_PI-PI/3, 
  "arcE": HALF_PI+PI/6,
  "arcS2": HALF_PI-PI/6, 
  "arcE2": TWO_PI-HALF_PI-PI/6, 
  },
  "A": {
     "size": 100,
  "offsetx": 50,
  "offsety": 0,
  "arcS": TWO_PI-PI/3, 
  "arcE": HALF_PI+PI/6,
  "arcS2": HALF_PI-PI/6, 
  "arcE2": TWO_PI-HALF_PI-PI/6, 
  },
  "B": {
    "size": 100,
  "offsetx": 0,
  "offsety": 0,
  "arcS": -HALF_PI, 
  "arcE": HALF_PI,
  "arcS2": -HALF_PI+PI/3, 
  "arcE2": HALF_PI-PI/3, 
  },
  "C": {
    "size": 100,
  "offsetx": 50,
  "offsety": 25,
  "arcS": HALF_PI, 
  "arcE": -HALF_PI,
  },
  "D": {
    "size": 100,
  "offsetx": -50,
  "offsety": 0,
  "arcS2": -HALF_PI, 
  "arcE2": HALF_PI, 
  },
  "E": {
    "size": 50,
  "offsetx": 0,
  "offsety": -10,
  "arcS": HALF_PI, 
  "arcE": -HALF_PI,
  "arcS2": 0, 
  "arcE2": PI,
  },
  "F": {
    "size": 100,
  "offsetx": 50,
  "offsety": -50,
  "arcS": -HALF_PI, 
  "arcE": HALF_PI, 
  "arcS2": 0, 
  "arcE2": PI, 
  }

}