const PI = 3.14159;
const HALF_PI = PI/2;
const TWO_PI = PI*2;

const alphabet = {
  "default": {
    "triX1" : 40,
    "triY1" : 125,
    "triX2" : 40,
    "triY2" : 125,
    "triX3" : 41,
    "triY3" : 126,
    "rectX" : 30,
    "rectY" : 55,
    "rectW" : 25,
    "rectH" : 70,
    "arcX" : 43,
    "arcY" : 142,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 20,
    "arcH" : 20
    },

  "A": {
    "triX1" : 50,
    "triY1" : 52,
    "triX2" : 5,
    "triY2" : 110,
    "triX3" : 95,
    "triY3" : 110,
    "rectX" : 20,
    "rectY" : 92,
    "rectW" : 58,
    "rectH" : 55,
    "arcX" : 50,
    "arcY" : 53,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 1,
    "arcH" : 1
    },

  "B": {
    "triX1" : 22,
    "triY1" : 92,
    "triX2" : 22,
    "triY2" : 93,
    "triX3" : 23,
    "triY3" : 92,
    "rectX" : 22,
    "rectY" : 92,
    "rectW" : 55,
    "rectH" : 55,
    "arcX" : 22,
    "arcY" : 87,
    "arcS" : PI+HALF_PI,
    "arcE" : HALF_PI,
    "arcW" : 80,
    "arcH" : 70
    },

  "C": {
    "triX1" : 60,
    "triY1" : 52,
    "triX2" : 60,
    "triY2" : 52,
    "triX3" : 61,
    "triY3" : 53,
    "rectX" : 60,
    "rectY" : 52,
    "rectW" : 25,
    "rectH" : 95,
    "arcX" : 60,
    "arcY" : 100,
    "arcS" : HALF_PI,
    "arcE" : PI+HALF_PI,
    "arcW" : 80,
    "arcH" : 80
  },

  "D": {
    "triX1" : 17,
    "triY1" : 52,
    "triX2" : 17,
    "triY2" : 53,
    "triX3" : 18,
    "triY3" : 52,
    "rectX" : 17,
    "rectY" : 52,
    "rectW" : 25,
    "rectH" : 95,
    "arcX" : 42,
    "arcY" : 100,
    "arcS" : PI+HALF_PI,
    "arcE" : HALF_PI,
    "arcW" : 80,
    "arcH" : 80
  },

  "E": {
    "triX1" : 17,
    "triY1" : 100,
    "triX2" : 80,
    "triY2" : 85,
    "triX3" : 80,
    "triY3" : 115,
    "rectX" : 20,
    "rectY" : 99,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 65,
    "arcY" : 100,
    "arcS" : HALF_PI,
    "arcE" : PI+HALF_PI,
    "arcW" : 95,
    "arcH" : 95
  },

  "F": {
    "triX1" : 35,
    "triY1" : 100,
    "triX2" : 35,
    "triY2" : 125,
    "triX3" : 80,
    "triY3" : 125,
    "rectX" : 15,
    "rectY" : 88,
    "rectW" : 20,
    "rectH" : 59,
    "arcX" : 50,
    "arcY" : 88,
    "arcS" : PI,
    "arcE" : TWO_PI,
    "arcW" : 70,
    "arcH" : 70
  },

  "G": {
    "triX1" : 72,
    "triY1" : 100,
    "triX2" : 73,
    "triY2" : 100,
    "triX3" : 72,
    "triY3" : 101,
    "rectX" : 72,
    "rectY" : 100,
    "rectW" : 25,
    "rectH" : 47,
    "arcX" : 50,
    "arcY" : 100,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 95,
    "arcH" : 95
  },

  "H": {
    "triX1" : 15,
    "triY1" : 52,
    "triX2" : 15,
    "triY2" : 148,
    "triX3" : 75,
    "triY3" : 100,
    "rectX" : 60,
    "rectY" : 52,
    "rectW" : 30,
    "rectH" : 95,
    "arcX" : 75,
    "arcY" : 100,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 1,
    "arcH" : 1
  },

  "I": {
    "triX1" : 64,
    "triY1" : 79,
    "triX2" : 65,
    "triY2" : 80,
    "triX3" : 64,
    "triY3" : 79,
    "rectX" : 35,
    "rectY" : 79,
    "rectW" : 30,
    "rectH" : 68,
    "arcX" : 50,
    "arcY" : 67,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 30,
    "arcH" : 30
  },

  "J": {
    "triX1" : 60,
    "triY1" : 111,
    "triX2" : 61,
    "triY2" : 112,
    "triX3" : 60,
    "triY3" : 111,
    "rectX" : 60,
    "rectY" : 52,
    "rectW" : 25,
    "rectH" : 60,
    "arcX" : 50,
    "arcY" : 112,
    "arcS" : TWO_PI,
    "arcE" : PI,
    "arcW" : 70,
    "arcH" : 70
  },

  "K": {
    "triX1" : 8,
    "triY1" : 52,
    "triX2" : 88,
    "triY2" : 52,
    "triX3" : 8,
    "triY3" : 147,
    "rectX" : 85,
    "rectY" : 52,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 50,
    "arcY" : 147,
    "arcS" : PI,
    "arcE" : TWO_PI,
    "arcW" : 85,
    "arcH" : 85
  },

  "L": {
    "triX1" : 8,
    "triY1" : 146,
    "triX2" : 9,
    "triY2" : 147,
    "triX3" : 8,
    "triY3" : 147,
    "rectX" : 7,
    "rectY" : 52,
    "rectW" : 25,
    "rectH" : 95,
    "arcX" : 50,
    "arcY" : 147,
    "arcS" : PI,
    "arcE" : TWO_PI,
    "arcW" : 85,
    "arcH" : 65
  },

  "M": {
    "triX1" : 5,
    "triY1" : 52,
    "triX2" : 5,
    "triY2" : 147,
    "triX3" : 90,
    "triY3" : 147,
    "rectX" : 88,
    "rectY" : 146,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 95,
    "arcY" : 100,
    "arcS" : HALF_PI,
    "arcE" : PI+HALF_PI,
    "arcW" : 95,
    "arcH" : 95
  },

  "N": {
    "triX1" : 0,
    "triY1" : 146,
    "triX2" : 1,
    "triY2" : 147,
    "triX3" : 1,
    "triY3" : 146,
    "rectX" : 70,
    "rectY" : 52,
    "rectW" : 30,
    "rectH" : 95,
    "arcX" : 0,
    "arcY" : 147,
    "arcS" : PI+HALF_PI,
    "arcE" : TWO_PI,
    "arcW" : 150,
    "arcH" : 188
  },

  "O": {
    "triX1" : 36,
    "triY1" : 86,
    "triX2" : 37,
    "triY2" : 86,
    "triX3" : 36,
    "triY3" : 87,
    "rectX" : 36,
    "rectY" : 86,
    "rectW" : 30,
    "rectH" : 30,
    "arcX" : 50,
    "arcY" : 100,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 95,
    "arcH" : 95
  },

  "P": {
    "triX1" : 15,
    "triY1" : 80,
    "triX2" : 15,
    "triY2" : 145,
    "triX3" : 50,
    "triY3" : 145,
    "rectX" : 15,
    "rectY" : 82,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 50,
    "arcY" : 88,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 70,
    "arcH" : 70
  },

  "Q": {
    "triX1" : 50,
    "triY1" : 102,
    "triX2" : 50,
    "triY2" : 147,
    "triX3" : 90,
    "triY3" : 147,
    "rectX" : 50,
    "rectY" : 103,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 50,
    "arcY" : 98,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 90,
    "arcH" : 90
  },

  "R": {
    "triX1" : 25,
    "triY1" : 100,
    "triX2" : 25,
    "triY2" : 147,
    "triX3" : 75,
    "triY3" : 147,
    "rectX" : 25,
    "rectY" : 101,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 25,
    "arcY" : 88,
    "arcS" : PI+HALF_PI,
    "arcE" : HALF_PI,
    "arcW" : 75,
    "arcH" : 70
  },

  "S": {
    "triX1" : 18,
    "triY1" : 90,
    "triX2" : 50,
    "triY2" : 52,
    "triX3" : 50,
    "triY3" : 120,
    "rectX" : 49,
    "rectY" : 118,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 50,
    "arcY" : 115,
    "arcS" : PI+HALF_PI,
    "arcE" : HALF_PI,
    "arcW" : 70,
    "arcH" : 65
  },

  "T": {
    "triX1" : 36,
    "triY1" : 147,
    "triX2" : 64,
    "triY2" : 147,
    "triX3" : 50,
    "triY3" : 52,
    "rectX" : 10,
    "rectY" : 52,
    "rectW" : 80,
    "rectH" : 30,
    "arcX" : 50,
    "arcY" : 53,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 1,
    "arcH" : 1
  },

  "U": {
    "triX1" : 23,
    "triY1" : 52,
    "triX2" : 78,
    "triY2" : 52,
    "triX3" : 50,
    "triY3" : 100,
    "rectX" : 50,
    "rectY" : 98,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 50,
    "arcY" : 100,
    "arcS" : TWO_PI,
    "arcE" : PI,
    "arcW" : 95,
    "arcH" : 95
  },

  "V": {
    "triX1" : 0,
    "triY1" : 82,
    "triX2" : 100,
    "triY2" : 82,
    "triX3" : 50,
    "triY3" : 147,
    "rectX" : 0,
    "rectY" : 52,
    "rectW" : 100,
    "rectH" : 30,
    "arcX" : 50,
    "arcY" : 82,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 1,
    "arcH" : 1
  },

  "W": {
    "triX1" : 50,
    "triY1" : 52,
    "triX2" : 30,
    "triY2" : 147,
    "triX3" : 70,
    "triY3" : 147,
    "rectX" : 50,
    "rectY" : 57,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 50,
    "arcY" : 100,
    "arcS" : 0 - HALF_PI/2, 
    "arcE": PI + HALF_PI/2,
    "arcW" : 95,
    "arcH" : 95
  },

  "X": {
    "triX1" : 12,
    "triY1" : 147,
    "triX2" : 88,
    "triY2" : 147,
    "triX3" : 50,
    "triY3" : 96,
    "rectX" : 50,
    "rectY" : 97,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 50,
    "arcY" : 55,
    "arcS" : TWO_PI,
    "arcE" : PI,
    "arcW" : 75,
    "arcH" : 80
  },

  "Y": {
    "triX1" : 5,
    "triY1" : 52,
    "triX2" : 95,
    "triY2" : 52,
    "triX3" : 50,
    "triY3" : 100,
    "rectX" : 37,
    "rectY" : 52,
    "rectW" : 25,
    "rectH" : 95,
    "arcX" : 50,
    "arcY" : 100,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 1,
    "arcH" : 1
  },

  "Z": {
    "triX1" : 97,
    "triY1" : 52,
    "triX2" : 2,
    "triY2" : 147,
    "triX3" : 97,
    "triY3" : 147,
    "rectX" : 6,
    "rectY" : 52,
    "rectW" : 90,
    "rectH" : 35,
    "arcX" : 84,
    "arcY" : 53,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 1,
    "arcH" : 1
  },

  "0": {
    "triX1" : 50,
    "triY1" : 100,
    "triX2" : 50,
    "triY2" : 100,
    "triX3" : 51,
    "triY3" : 101,
    "rectX" : 50,
    "rectY" : 100,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 50,
    "arcY" : 100,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 60,
    "arcH" : 95
  },

  "1": {
    "triX1" : 50,
    "triY1" : 52,
    "triX2" : 20,
    "triY2" : 80,
    "triX3" : 50,
    "triY3" : 80,
    "rectX" : 50,
    "rectY" : 52,
    "rectW" : 25,
    "rectH" : 95,
    "arcX" : 72,
    "arcY" : 56,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 1,
    "arcH" : 1
  },

  "2": {
    "triX1" : 20,
    "triY1" : 122,
    "triX2" : 21,
    "triY2" : 123,
    "triX3" : 20,
    "triY3" : 122,
    "rectX" : 20,
    "rectY" : 122,
    "rectW" : 55,
    "rectH" : 25,
    "arcX" : 20,
    "arcY" : 88,
    "arcS" : PI+HALF_PI,
    "arcE" : HALF_PI,
    "arcW" : 80,
    "arcH" : 70
  },

  "3": {
    "triX1" : 40,
    "triY1" : 52,
    "triX2" : 77,
    "triY2" : 52,
    "triX3" : 77,
    "triY3" : 98,
    "rectX" : 76,
    "rectY" : 52,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 78,
    "arcY" : 97,
    "arcS" : HALF_PI, 
    "arcE": PI,
    "arcW" : 100,
    "arcH" : 100
  },

  "4": {
    "triX1" : 60,
    "triY1" : 52,
    "triX2" : 60,
    "triY2" : 52,
    "triX3" : 61,
    "triY3" : 53,
    "rectX" : 60,
    "rectY" : 52,
    "rectW" : 25,
    "rectH" : 95,
    "arcX" : 60,
    "arcY" : 110,
    "arcS" : PI,
    "arcE" : PI+HALF_PI,
    "arcW" : 90,
    "arcH" : 95
  },

  "5": {
    "triX1" : 30,
    "triY1" : 52,
    "triX2" : 30,
    "triY2" : 52,
    "triX3" : 31,
    "triY3" : 53,
    "rectX" : 30,
    "rectY" : 52,
    "rectW" : 40,
    "rectH" : 25,
    "arcX" : 30,
    "arcY" : 112,
    "arcS" : PI+HALF_PI,
    "arcE" : HALF_PI,
    "arcW" : 80,
    "arcH" : 70
  },

  "6": {
    "triX1" : 20,
    "triY1" : 52,
    "triX2" : 20,
    "triY2" : 118,
    "triX3" : 48,
    "triY3" : 52,
    "rectX" : 20,
    "rectY" : 52,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 50,
    "arcY" : 117,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 60,
    "arcH" : 60
  },

  "7": {
    "triX1" : 80,
    "triY1" : 52,
    "triX2" : 40,
    "triY2" : 145,
    "triX3" : 80,
    "triY3" : 145,
    "rectX" : 30,
    "rectY" : 52,
    "rectW" : 50,
    "rectH" : 25,
    "arcX" : 20,
    "arcY" : 52,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 1,
    "arcH" : 1
   },

  "8": {
    "triX1" : 74,
    "triY1" : 52,
    "triX2" : 74,
    "triY2" : 52,
    "triX3" : 75,
    "triY3" : 53,
    "rectX" : 25,
    "rectY" : 52,
    "rectW" : 50,
    "rectH" : 50,
    "arcX" : 50,
    "arcY" : 96,
    "arcS" : (HALF_PI/4)*2, 
    "arcE" : PI - (HALF_PI/4)*2,
    "arcW" : 100,
    "arcH" : 100
   },

  "9": {
    "triX1" : 83,
    "triY1" : 80,
    "triX2" : 45,
    "triY2" : 145,
    "triX3" : 83,
    "triY3" : 145,
    "rectX" : 82,
    "rectY" : 81,
    "rectW" : 1,
    "rectH" : 1,
    "arcX" : 50,
    "arcY" : 85,
    "arcS" : 0,
    "arcE" : TWO_PI,
    "arcW" : 65,
    "arcH" : 65
   },

   "?": {
    "triX1" : 40,
    "triY1" : 125,
    "triX2" : 40,
    "triY2" : 125,
    "triX3" : 41,
    "triY3" : 126,
    "rectX" : 40,
    "rectY" : 125,
    "rectW" : 20,
    "rectH" : 20,
    "arcX" : 45,
    "arcY" : 83,
    "arcS" : PI+HALF_PI - HALF_PI/2, 
    "arcE": PI - HALF_PI,
    "arcW" : 60,
    "arcH" : 60
   }

}
