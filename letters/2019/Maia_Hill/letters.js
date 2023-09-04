/*the 10 variables that define each letter are:
*
  primary_size : diameter of the primary and fourth rectangles
  secondary_size : diameter of the second and third rectangles
  prim_offsetx : x offset of the primary rectangle relative to the first one
  prim_offsety : y offset of the primary rectangle relative to the first one
  sec_offsetx : x offset of the secondary rectangle relative to the first one
  sec_offsety : y offset of the secondary rectangle relative to the first one
  third_offsetx : x offset of the third rectangle relative to the first one
  third_offsety : y offset of the third rectangle relative to the first one
  fourth_offsetx : x offset of the fourth rectangle relative to the first one
  fourth_offsety : y offset of the fourth rectangle relative to the first one
*
*/


const alphabet = {
  "default": {
    "primary_size": 15,
    "secondary_size": 15,
    "prim_offsetx": 10,
    "prim_offsety": 35,
    "sec_offsetx": 45,
    "sec_offsety": 35
  },
  "A": {
    "primary_size": 15,
    "secondary_size": 30,
    "prim_offsetx": 27.5,
    "prim_offsety": 22.5,
    "sec_offsetx": 20,
    "sec_offsety": 50
  },
  "B": {
    "primary_size": 30,
    "secondary_size": 15,
    "prim_offsetx": 25,
    "prim_offsety": 25,
    "sec_offsetx": 0,
    "sec_offsety": -15
  },
  "C": {
    "primary_size": 45,
    "secondary_size": 0,
    "prim_offsetx": 25,
    "prim_offsety": 17.5
  },
  "D": {
    "primary_size": 30,
    "secondary_size": 15,
    "prim_offsetx": 12.5,
    "prim_offsety": 25,
    "sec_offsetx": 55,
    "sec_offsety": -15
  },
  "E": {
    "primary_size": 20,
    "secondary_size": 20,
    "prim_offsetx": 50,
    "prim_offsety": 15,
    "sec_offsetx": 50,
    "sec_offsety": 45
  },
  "F": {
    "primary_size": 20,
    "secondary_size": 30,
    "prim_offsetx": 50,
    "prim_offsety": 15,
    "sec_offsetx": 40,
    "sec_offsety": 50
  },
  "G": {
    "primary_size": 12.5,
    "secondary_size": 25,
    "prim_offsetx": 15,
    "prim_offsety": 15,
    "sec_offsetx": 0,
    "sec_offsety": 45
  },
  "H": {
    "primary_size": 20,
    "secondary_size": 20,
    "prim_offsetx": 25,
    "prim_offsety": 0,
    "sec_offsetx": 25,
    "sec_offsety": 60
  },
  "I": {
    "primary_size": 20,
    "secondary_size": 20,
    "prim_offsetx": 0,
    "prim_offsety": 30,
    "sec_offsetx": 50,
    "sec_offsety": 30
  },
  "J": {
    "primary_size": 15,
    "secondary_size": 40,
    "prim_offsetx": 55,
    "prim_offsety": -25,
    "sec_offsetx": 0,
    "sec_offsety": 0
  },
  "K": {
    "primary_size": 15,
    "secondary_size": 15,
    "prim_offsetx": 30,
    "prim_offsety": 0,
    "sec_offsetx": 25,
    "sec_offsety": 65,
    "third_offsetx": 55,
    "third_offsety": 30
  },
  "L": {
    "primary_size": 40,
    "secondary_size": 0,
    "prim_offsetx": 30,
    "prim_offsety": 0
  },
  "M": {
    "primary_size": 10,
    "secondary_size": 10,
    "prim_offsetx": 47.5,
    "prim_offsety": 70,
    "sec_offsetx": 12.5,
    "sec_offsety": 70
  },
  "N": {
    "primary_size": 40,
    "secondary_size": 10,
    "prim_offsetx": 15,
    "prim_offsety": 40,
    "sec_offsetx": 0,
    "sec_offsety": -10
  },
  "O": {
    "primary_size": 25,
    "secondary_size": 0,
    "prim_offsetx": 22.5,
    "prim_offsety": 27.5
  },
  "P": {
    "primary_size": 10,
    "secondary_size": 35,
    "prim_offsetx": 45,
    "prim_offsety": 15,
    "sec_offsetx": 35,
    "sec_offsety": 45
  },
  "Q": {
    "primary_size": 30,
    "secondary_size": 10,
    "prim_offsetx": 20,
    "prim_offsety": 25,
    "sec_offsetx": 45,
    "sec_offsety": 80
  },
  "R": {
    "primary_size": 40,
    "secondary_size": 10,
    "prim_offsetx": 30,
    "prim_offsety": 40,
    "sec_offsetx": 0,
    "sec_offsety": -10
  },
  "S": {
    "primary_size": 20,
    "secondary_size": 20,
    "prim_offsetx": 50,
    "prim_offsety": 15,
    "sec_offsetx": 0,
    "sec_offsety": 47.5
  },
  "T": {
    "primary_size": 25,
    "secondary_size": 25,
    "prim_offsetx": 55,
    "prim_offsety": 55,
    "sec_offsetx": -10,
    "sec_offsety": 55
  },
  "U": {
    "primary_size": 40,
    "secondary_size": 10,
    "prim_offsetx": 15,
    "prim_offsety": 0,
    "sec_offsetx": 60,
    "sec_offsety": 80
  },
  "V": {
    "primary_size": 30,
    "secondary_size": 0,
    "prim_offsetx": 20,
    "prim_offsety": 0
  },
  "W": {
    "primary_size": 15,
    "secondary_size": 10,
    "prim_offsetx": 27.5,
    "prim_offsety": 65,
    "sec_offsetx": 10,
    "sec_offsety": 0,
    "third_offsetx": 50,
    "third_offsety": 0
  },
  "X": {
    "primary_size": 15,
    "secondary_size": 15,
    "prim_offsetx": 27.5,
    "prim_offsety": 0,
    "sec_offsetx": 55,
    "sec_offsety": 32.5,
    "third_offsetx": 0,
    "third_offsety": 32.5,
    "fourth_offsetx": 27.5,
    "fourth_offsety": 65
  },
  "Y": {
    "primary_size": 20,
    "secondary_size": 25,
    "prim_offsetx": 25,
    "prim_offsety": 0,
    "sec_offsetx": -10,
    "sec_offsety": 55,
    "third_offsetx": 55,
    "third_offsety": 55
  },
  "Z": {
    "primary_size": 20,
    "secondary_size": 20,
    "prim_offsetx": 0,
    "prim_offsety": 15,
    "sec_offsetx": 50,
    "sec_offsety": 47.5
  },
  "0": {
    "primary_size": 40,
    "secondary_size": 0,
    "prim_offsetx": 15,
    "prim_offsety": 20
  },
  "1": {
    "primary_size": 35,
    "secondary_size": 0,
    "prim_offsetx": 0,
    "prim_offsety": 45,
  },
  "2": {
    "primary_size": 30,
    "secondary_size": 20,
    "prim_offsetx": 0,
    "prim_offsety": 15,
    "sec_offsetx": 50,
    "sec_offsety": 47.5
  },
  "3": {
    "primary_size": 20,
    "secondary_size": 20,
    "prim_offsetx": 0,
    "prim_offsety": 15,
    "sec_offsetx": 0,
    "sec_offsety": 45
  },
  "4": {
    "primary_size": 35,
    "secondary_size": 12.5,
    "prim_offsetx": 35,
    "prim_offsety": 0,
    "sec_offsetx": 0,
    "sec_offsety": 67.5,
    "third_offsetx": 57.5,
    "third_offsety": 67.5
  },
  "5": {
    "primary_size": 20,
    "secondary_size": 30,
    "prim_offsetx": 50,
    "prim_offsety": 15,
    "sec_offsetx": 0,
    "sec_offsety": 40
  },
  "6": {
    "primary_size": 12.5,
    "secondary_size": 30,
    "prim_offsetx": 40,
    "prim_offsety": 55,
    "sec_offsetx": 40,
    "sec_offsety": 15
  },
  "7": {
   "primary_size": 40,
    "secondary_size": 10,
    "prim_offsetx": 0,
    "prim_offsety": 40,
    "sec_offsetx": 80,
    "sec_offsety": 40
  },
  "8": {
    "primary_size": 15,
    "secondary_size": 15,
    "prim_offsetx": 27.5,
    "prim_offsety": 15,
    "sec_offsetx": 27.5,
    "sec_offsety": 52.5
  },
  "9": {
    "primary_size": 35,
    "secondary_size": 10,
    "prim_offsetx": 0,
    "prim_offsety": 45,
    "sec_offsetx": 15,
    "sec_offsety": 15
  },
  "?": {
    "primary_size": 15,
    "secondary_size": 35,
    "prim_offsetx": 50,
    "prim_offsety": 90,
    "sec_offsetx": 0,
    "sec_offsety": 45,
  }
}
