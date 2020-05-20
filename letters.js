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
    "sizeCirc2": 20,
    "circx1": 15,
    "circy1": 100,
    "circx2": 85,
    "circy2": 100,
    "linex1": 0, //left
    "liney1": 10, //height
    "linex2": 50,
    "liney2": 190, // length R
    "liney3": 190, //length L
  },
  "B": {
    "sizeLine": 100,
    "sizeCirc": 90,
    "sizeCirc2": 90, 
    "circx1": 50,
    "circy1": 145,
    "circx2": 50,
    "circy2": 55,
    "linex1": 0, //left
    "liney1": 100, //height
    "linex2": 0,
    "liney2": 100, // length R
    "liney3": 100, //length L
  },
  "C": {
    "sizeLine": 0,
    "sizeCirc": 20,
    "sizeCirc2": 20,
    "circx1": 90,
    "circy1": 180,
    "circx2": 90,
    "circy2": 20,
    "linex1": 0, //left
    "liney1": 10, //height
    "linex2": 0,
    "liney2": 190, // length R
    "liney3": 20, //length L
  },
  "D": {
    "sizeLine": 0,
    "sizeCirc": 90,
    "sizeCirc2": 90,
    "circx1": 50,
    "circy1": 100,
    "circx2": 50,
    "circy2": 100,
    "linex1": 15, //left
    "liney1": 190, //height
    "linex2": 25,
    "liney2": 10, // length R
    "liney3": 10, //length L

    // "sizeLine": 0,
    // "sizeCirc": 90,
    // "sizeCirc2": 90,
    // "circx1": 50,
    // "circy1": 100,
    // "circx2": 50,
    // "circy2": 100,
    // "linex1": 15, //left
    // "liney1": 150, //height
    // "linex2": 25,
    // "liney2": 50, // length R
    // "liney3": 50, //length L
  },
  "E": { // COME BACK!!!
    "sizeLine": 95,
    "sizeCirc": 20,
    "sizeCirc2": 20,
    "circx1": 10,
    "circy1": 20,
    "circx2": 10,
    "circy2": 180,
    "linex1": 5, //left
    "liney1": 100, //height
    "linex2": 1,
    "liney2": 100, // length R
    "liney3": 100, //length L
  },
  "F": {
    "sizeLine": 0,
    "sizeCirc": 20,
    "sizeCirc2": 20,
    "circx1": 90,
    "circy1": 20,
    "circx2": 50,
    "circy2": 100,
    "linex1": 0, //left
    "liney1": 10, //height
    "linex2": 0,
    "liney2": 190, // length R
    "liney3": 10, //length L
  },
  "G": {
    "sizeLine": 15,
    "sizeCirc": 85,
    "sizeCirc2": 85,
    "circx1": 45,
    "circy1": 100,
    "circx2": 45,
    "circy2": 100,
    "linex1": 83, //left
    "liney1": 100, //height
    "linex2": 65,
    "liney2": 100, // length R
    "liney3": 100, //length L
  },
  "H": {
    "sizeLine": 0,
    "sizeCirc": 20,
    "sizeCirc2": 20,
    "circx1": 50,
    "circy1": 100,
    "circx2": 50,
    "circy2": 100,
    "linex1": 100, //left
    "liney1": 10, //height
    "linex2": 0,
    "liney2": 190, // length R
    "liney3": 190, //length L
  },
  "I": {
    "sizeLine": 0,
    "sizeCirc": 25,
    "sizeCirc2": 25,
    "circx1": 50,
    "circy1": 100,
    "circx2": 50,
    "circy2": 100,
    "linex1": 50, //left
    "liney1": 10, //height
    "linex2": 50,
    "liney2": 190, // length R
    "liney3": 190, //length L
  },
  "J": {
    "sizeLine": 0,
    "sizeCirc": 80,
    "sizeCirc2": 80,
    "circx1": 50,
    "circy1": 150,
    "circx2": 50,
    "circy2": 150,
    "linex1": 70, //left
    "liney1": 10, //height
    "linex2": 80,
    "liney2": 155, // length R
    "liney3": 155, //length L

    // "sizeLine": 0,
    // "sizeCirc": 70,
    // "sizeCirc2": 70,
    // "circx1": 50,
    // "circy1": 155,
    // "circx2": 50,
    // "circy2": 155,
    // "linex1": 65, //left
    // "liney1": 10, //height
    // "linex2": 75,
    // "liney2": 155, // length R
    // "liney3": 155, //length L
  },
  "K": {
    "sizeLine": 0,
    "sizeCirc": 20,
    "sizeCirc2": 20,
    "circx1": 90,
    "circy1": 180,
    "circx2": 90,
    "circy2": 20,
    "linex1": 0, //left
    "liney1": 10, //height
    "linex2": 0,
    "liney2": 190, // length R
    "liney3": 20, //length L
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
    "sizeLine": 0,
    "sizeCirc": 85,
    "sizeCirc2": 85,
    "circx1": 50,
    "circy1": 100,
    "circx2": 50,
    "circy2": 100,
    "linex1": 0, //left
    "liney1": 150, //height
    "linex2": 20,
    "liney2": 50, // length R
    "liney3": 200, //length L
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
    "sizeLine": 0,
    "sizeCirc": 85,
    "sizeCirc2": 20,
    "circx1": 50,
    "circy1": 50,
    "circx2": 90,
    "circy2": 180,
    "linex1": 0, //left
    "liney1": 10, //height
    "linex2": 0,
    "liney2": 190, // length R
    "liney3": 10, //length L
  },
  "S": {
    "sizeLine": 100,
    "sizeCirc": 40,
    "sizeCirc2": 40,
    "circx1": 50,
    "circy1": 120,
    "circx2": 50,
    "circy2": 80,
    "linex1": 0, //left
    "liney1": 100, //height
    "linex2": 0,
    "liney2": 100, // length R
    "liney3": 100, //length L
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
    "sizeCirc2": 20,
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
    "sizeCirc2": 50,
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
    "sizeLine": 50,
    "sizeCirc": 20,
    "sizeCirc2": 20,
    "circx1": 50,
    "circy1": 150,
    // "circx2": 0,
    // "circy2": 0,
    "linex1": 50, //left
    "liney1": 0, //height
    "linex2": 0,
    "liney2": 100, // length R
    "liney3": 100, //length L
  },
  "Z": {
    "sizeLine": 100,
    "sizeCirc": 25,
    "sizeCirc2": 25,
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