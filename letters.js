//offset = pink square
//offset2 = green/blue squares
//smallPOS = dark blue square ONE
//smallPOS2 = SECOND dark blue square

const alphabet = {
  "default": {
    "size": 40,
    "offsetx" : 0,
    "offsety" : 0,
    "offsetx2": 0,
    "offsety2": 0,
    "smallXPos": 0,
    "smallYPos" : 0,
    "smallXPos2": 0,
    "smallYPos2" : 0
  },
  "A": {
    "size": 100,
    "offsetx" : 0,
    "offsety" : 80,
    "offsetx2": 0,
    "offsety2": 100,
    "smallXPos": 15,
    "smallYPos" : 130,
    "smallXPos2": 15,
    "smallYPos2" : 130
  },
  "B": {
    "size": 100,
    "offsetx": 0,
    "offsety": 0,
    "offsetx2" : 0,
    "offsety2" : 100,
    "smallXPos": 15,
    "smallYPos" : 20,
    "smallXPos2": 15,
    "smallYPos2" : 115
  },
  "C": {
    "size": 70,
    "offsetx": 0,
    "offsety" : 100,
    "offsetx2" : 30,
    "offsety2" : 115,
    "smallXPos": 60,
    "smallYPos" : 130,
    "smallXPos2": 60,
    "smallYPos2" : 130
  },
  "D": {
    "size": 70,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2" : 0,
    "offsety2" : 115,
    "smallXPos": 0,
    "smallYPos" : 130,
    "smallXPos2": 0,
    "smallYPos2" : 130
  },
  "E": {
    "size": 70,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2" : 15,
    "offsety2" : 115,
    "smallXPos": 60,
    "smallYPos" : 130,
    "smallXPos2": 15,
    "smallYPos2" : -160
  },
  "F": {
    "size": 65.6,
    "offsetx": -0.6,
    "offsety": 100,
    "offsetx2": 34,
    "offsety2": 65,
    "smallXPos": 64,
    "smallYPos": 65
  },
  "G": {
    "size": 62.4,
    "offsetx": 0,
    "offsety": 69,
    "offsetx2": 32.5,
    "offsety2": 100,
    "smallXPos": 14.5,
    "smallYPos": 90
  },
  "H": {
    "size": 72,
    "offsetx": 0,
    "offsety": 50,
    "offsetx2": 14.5,
    "offsety2": 63,
    "smallXPos": 67,
    "smallYPos": 78,
    "smallXPos2": -7.9,
    "smallYPos2": 79
  },
  "I": {
  "size": 72.8,
  "offsetx": 0.6,
  "offsety": 100,
  "offsetx2": 15,
  "offsety2": 30,
  "smallXPos": 31,
  "smallYPos": 65
  },
  "J": {
  "size": 73.6,
  "offsetx": -0.6000000000000014,
  "offsety": 100,
  "offsetx2": -0.5,
  "offsety2": 100,
  "smallXPos": 10,
  "smallYPos": 84
  },
  "K": {
  "size": 68.8,
  "offsetx": 0,
  "offsety": 87,
  "offsetx2": -9.5,
  "offsety2": 100,
  "smallXPos": 55,
  "smallYPos": 85,
  "smallXPos2": 55,
  "smallYPos2": 150
  },
  "L": {
  "size": 76,
  "offsetx": 0,
  "offsety": 87,
  "offsetx2": 31,
  "offsety2": 82
  },
  "M": {
  "size": 54.4,
  "offsetx": 0,
  "offsety": 100,
  "offsetx2": 25,
  "offsety2": 92,
  "smallXPos": 11.4,
  "smallYPos": 180,
  "smallXPos2": 65.5,
  "smallYPos2": 180
  },
  "N": {
  "size": 60,
  "offsetx": 0,
  "offsety": 100,
  "offsetx2": 19,
  "offsety2": 91,
  "smallXPos": 10,
  "smallYPos": 96,
  "smallXPos2": 59.5,
  "smallYPos2": 176
  },
  "O": {
  "size": 60,
  "offsetx": 0,
  "offsety": 50,
  "offsetx2": 20.5,
  "offsety2": 69,
  "smallXPos": 35.499999999999986,
  "smallYPos": 84
  },
  "P": {
  "size": 100,
  "offsetx": 0,
  "offsety": 100,
  "offsetx2": 0,
  "offsety2": 0,
  "smallXPos": 40,
  "smallYPos": 50
  },
  "Q": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "R": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "S": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "T": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "U": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "V": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "W": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "X": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "Y": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "Z": {
    "size": 50,
    "offsetx": 15,
    "offsety": 0
  },
  "0": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "1": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "2": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "3": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "4": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "5": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "6": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "7": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "8": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  },
  "9": {
    "size": 40,
    "offsetx": 0,
    "offsety": 17
  }

}