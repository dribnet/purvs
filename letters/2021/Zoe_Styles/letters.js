//offset = pink square
//offset2 = green/blue squares
//smallPOS = dark blue square ONE
//smallPOS2 = SECOND dark blue square

const alphabet = {
  "default": {
    "size": 80,
    "offsetx" : 0,
    "offsety" : 100,
    "offsetx2": 10,
    "offsety2": 120,
    "smallXPos": 0,
    "smallYPos" : 140,
    "smallXPos2": 50,
    "smallYPos2" : 140

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
    "size": 70,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2" : 15,
    "offsety2" : 100,
    "smallXPos": 30,
    "smallYPos" : 100,
    "smallXPos2": 30,
    "smallYPos2" : 155

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
    "size": 65,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2" : 15,
    "offsety2" : 115,
    "smallXPos": 70,
    "smallYPos" : 105,
    "smallXPos2": 70,
    "smallYPos2" : 160
  },
  "F": {
    "size": 65.6,
    "offsetx": -0.6,
    "offsety": 100,
    "offsetx2": 34,
    "offsety2": 65,
    "smallXPos": 66,
    "smallYPos": 65,
    "smallXPos2": 66,
    "smallYPos2": 65
  },
  "G": {
    "size": 62.4,
    "offsetx": 0,
    "offsety": 70,
    "offsetx2": 32.5,
    "offsety2": 100,
    "smallXPos": 14.5,
    "smallYPos": 90,
    "smallXPos2": 14.5,
    "smallYPos2": 90
  },
  "H": {
    "size": 72,
    "offsetx": 0,
    "offsety": 70,
    "offsetx2": 14.5,
    "offsety2": 63,
    "smallXPos": 30,
    "smallYPos": 60,
    "smallXPos2": 30,
    "smallYPos2": 130
  },
  "I": {
    "size": 72.8,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2": 15,
    "offsety2": 60,
    "smallXPos": 31,
    "smallYPos": 65,
    "smallXPos2": 31,
    "smallYPos2": 65
  },
  "J": {
    "size": 73.6,
    "offsetx": -0.6000000000000014,
    "offsety": 100,
    "offsetx2": -0.5,
    "offsety2": 100,
    "smallXPos": 10,
    "smallYPos": 84,
    "smallXPos2": 10,
    "smallYPos2": 110
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
    "offsety2": 82,
    "smallXPos": 62,
    "smallYPos": 80,
    "smallXPos2": 62,
    "smallYPos2": 95
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
    "offsety": 70,
    "offsetx2": 20.5,
    "offsety2": 90,
    "smallXPos": 35,
    "smallYPos": 105,
    "smallXPos2": 35,
    "smallYPos2": 105
  },
  "P": {
    "size": 100,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2": 0,
    "offsety2": 70,
    "smallXPos": 20,
    "smallYPos": 80,
    "smallXPos2": 40,
    "smallYPos2": 80
  },
  "Q": {
    "size": 55.2,
    "offsetx": 0,
    "offsety": 50,
    "offsetx2": 52.000000000000014,
    "offsety2": 100,
    "smallXPos": 84,
    "smallYPos": 133,
    "smallXPos2": 52,
    "smallYPos2": 100
  },
  "R": {
    "size": 76.8,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2": 23.5,
    "offsety2": 129,
    "smallXPos": 55,
    "smallYPos": 162,
    "smallXPos2": 40,
    "smallYPos2": 140
  },
  "S": {
    "size": 80,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2": 20,
    "offsety2": 50,
    "smallXPos": 50,
    "smallYPos": 60,
    "smallXPos2": 0,
    "smallYPos2": 140
  },
  "T": {
    "size": 71.2,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2": 15,
    "offsety2": 100,
    "smallXPos": 59.5,
    "smallYPos": 160,
    "smallXPos2": -2,
    "smallYPos2": 160
  },
  "U": {
    "size": 75.19999999999999,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2": 13,
    "offsety2": 88.5,
    "smallXPos": 29.5,
    "smallYPos": 86,
    "smallXPos2": 29.5,
    "smallYPos2": 130
  },
  "V": {
    "size": 56,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2": 22,
    "offsety2": 124.5,
    "smallXPos": 79,
    "smallYPos": 176,
    "smallXPos2": -6.5,
    "smallYPos2": 176
  },
  "W": {
    "size": 62.400000000000006,
    "offsetx": 0,
    "offsety": 60,
    "offsetx2": 20.5,
    "offsety2": 60,
    "smallXPos": 8.5,
    "smallYPos": 114,
    "smallXPos2": 61,
    "smallYPos2": 114
  },
  "X": {
    "size": 80,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2": 25,
    "offsety2": 60,
    "smallXPos": -10,
    "smallYPos": 118,
    "smallXPos2": 58,
    "smallYPos2": 150
  },
  "Y": {
    "size": 80,
    "offsetx": 0,
    "offsety": 100,
    "offsetx2": 8.5,
    "offsety2": 123,
    "smallXPos": -3.5,
    "smallYPos": 100,
    "smallXPos2": 56.5,
    "smallYPos2": 100
  },
  "Z": {
    "size": 73.6,
    "offsetx": 0,
    "offsety": 72,
    "offsetx2": 11.499999999999993,
    "offsety2": 122.99999999999999,
    "smallXPos": -3.5,
    "smallYPos": 110.00000000000001,
    "smallXPos2": 70,
    "smallYPos2": 158
  },
  "0": {
    "size": 92,
    "offsetx": 0,
    "offsety": 50,
    "offsetx2": 4,
    "offsety2": 63,
    "smallXPos": 7,
    "smallYPos": 90,
    "smallXPos2": 31,
    "smallYPos2": 90
  },
  "1": {
    "size": 69.6,
    "offsetx": 0,
    "offsety": 71,
    "offsetx2": 0,
    "offsety2": 63,
    "smallXPos": 0,
    "smallYPos": 94,
    "smallXPos2": 18,
    "smallYPos2": 94
  },
  "2": {
    "size": 65.6,
    "offsetx": 0,
    "offsety": 71,
    "offsetx2": 0,
    "offsety2": 45,
    "smallXPos": 0,
    "smallYPos": 110,
    "smallXPos2": 70,
    "smallYPos2": 130
  },
  "3": {
    "size": 75.19999999999999,
    "offsetx": -0.6000000000000014,
    "offsety": 56.99999999999999,
    "offsetx2": 11.499999999999993,
    "offsety2": 69,
    "smallXPos": -3.5,
    "smallYPos": 60,
    "smallXPos2": -3.5,
    "smallYPos2": 110.00000000000001
  },
  "4": {
    "size": 64.80000000000001,
    "offsetx": -0.6000000000000014,
    "offsety": 56.99999999999999,
    "offsetx2": 40,
    "offsety2": 69,
    "smallXPos": 13,
    "smallYPos": 66,
    "smallXPos2": 37,
    "smallYPos2": 140
  },
  "5": {
    "size": 64.80000000000001,
    "offsetx": -0.6000000000000014,
    "offsety": 56.99999999999999,
    "offsetx2": 45,
    "offsety2": 103.49999999999999,
    "smallXPos": 68,
    "smallYPos": 63,
    "smallXPos2": -5,
    "smallYPos2": 113.99999999999999
  },
  "6": {
    "size": 70,
    "offsetx": -0.6000000000000014,
    "offsety": 56.99999999999999,
    "offsetx2": 35,
    "offsety2": 75,
    "smallXPos": 51,
    "smallYPos": 90,
    "smallXPos2": 11,
    "smallYPos2": 50
  },
  "7": {
    "size": 72,
    "offsetx": -0.6000000000000014,
    "offsety": 56.99999999999999,
    "offsetx2": 14.5,
    "offsety2": 81,
    "smallXPos": -1,
    "smallYPos": 122,
    "smallXPos2": -1,
    "smallYPos2": 92
  },
  "8": {
    "size": 57.599999999999994,
    "offsetx": -0.6000000000000014,
    "offsety": 56.99999999999999,
    "offsetx2": 20.5,
    "offsety2": 81,
    "smallXPos": 35.499999999999986,
    "smallYPos": 122,
    "smallXPos2": 35.499999999999986,
    "smallYPos2": 70
  },
  "9": {
    "size": 65.6,
    "offsetx": -0.6000000000000014,
    "offsety": 56.99999999999999,
    "offsetx2": 41.5,
    "offsety2": 97.5,
    "smallXPos": 14.5,
    "smallYPos": 98,
    "smallXPos2": 14.5,
    "smallYPos2": 70
  }

}