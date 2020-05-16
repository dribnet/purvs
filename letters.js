//from (0,0) to (100, 200)

const alphabet = {
  "default": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "A": {
    "sizeLine": 50,
    "sizeCirc": 20,
    "circx1": 15,
    "circy1": 100,
    "circx2": 85,
    "circy2": 100,
    "linex1": 0, //left
    "liney1": 0, //height
    "linex2": 50,
    "liney2": 200, // length R
    "liney3": 200, //length L
  },
  "B": {
    "sizeLine": 100,
    "sizeCirc": 80,
    "circx1": 50,
    "circy1": 100,
    // "circx2": 0,
    // "circy2": 0,
    "linex1": 0, //left
    "liney1": 100, //height
    "linex2": 0,
    "liney2": 100, // length R
    "liney3": 100, //length L
  },
  "C": {
    "sizeLine": 100,
    "sizeCirc": 20,
    "circx1": 80,
    "circy1": 180,
    "circx2": 80,
    "circy2": 20,
    "linex1": 0, //left
    "liney1": 100, //height
    "linex2": 0,
    "liney2": 100, // length R
    "liney3": 100, //length L
  },
  "D": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "E": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "F": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "G": {
    // "sizeLine": 80,
    // "sizeCirc": 160,
    // "circx1": 0,
    // "circy1": 0,
    // "linex1": 20, //left
    // "liney1": 0, //top
    // "linex2": 50,
    // "liney2": 0,
    // "liney3": 0
  },
  "H": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "I": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "J": {
   "sizeLine": 50,
    "sizeCirc": 20,
    "circx1": 50,
    "circy1": 100,
    // "circx2": 0,
    // "circy2": 0,
    "linex1": 50, //left
    "liney1": 200, //height
    "linex2": 50,
    "liney2": 200, // length R
    "liney3": 100, //length L
  },
  "K": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "L": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "M": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "N": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "O": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "P": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "Q": {
    // "sizeLine": 80,
    // "sizeCirc": 160,
    // "circx1": 40,
    // "circy1": 0,
    // "linex1": 0, //left
    // "liney1": -100, //top
    // //"linex2": 100,
    // "liney2": 100,
    // "liney3": 40 
  },
  "R": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "S": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "T": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "U": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "V": {
    "sizeLine": 50,
    "sizeCirc": 20,
    "circx1": 50,
    "circy1": 100,
    // "circx2": 0,
    // "circy2": 0,
    "linex1": 50, //left
    "liney1": 0, //height
    "linex2": 0,
    "liney2": 100, // length R
    "liney3": 100, //length L
  },
  "W": {
   "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "X": {
   "sizeLine": 100,
    "sizeCirc": 50,
    "circx1": 50,
    "circy1": 100,
    // "circx2": 0,
    // "circy2": 0,
    "linex1": 0, //left
    "liney1": 0, //height
    "linex2": 0,
    "liney2": 200, // length R
    "liney3": 200, //length L
  },
  "Y": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "Z": {
    "sizeLine": 100,
    "sizeCirc": 25,
    "circx1": 50,
    "circy1": 100,
    // "circx2": 0,
    // "circy2": 0,
    "linex1": 0, //left
    "liney1": 100, //height
    "linex2": 0, // STAYS 0
    "liney2": 0, // length R
    "liney3": 200, //length L
  },
  "0": {
   "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "1": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "2": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "3": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "4": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "5": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "6": {
   "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "7": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "8": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "9": {
   "size": 40,
    "offsetx": 0,
    "offsety": 0
  }

}