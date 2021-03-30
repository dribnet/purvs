const alphabet = {
  "default": {
   "start": 0,
   "end": 50,
  "start2": 60,
   "end2": 50
   
  },
  "A": {
   "startA": 30,
   "endA": 0,
  "start2A": 100,
   "end2A": 200,
  "start3A": 60,
    "end3A": 100,
  "start4A": 30,
   "end4A": 100,
   "start5A": 30,
    "end5A": 100

  },
  "B": {
  "startB": 50,
   "endB": 0,
  "start2B": 100,
    "end2B": 50,
  "start3B": 50,
    "end3B": 100,
  "start4B": 100,
    "end4B": 150,
  "start5B": 50,
    "end5B": 200
  },
  "C": {
  "startC": 100,
    "endC": 0,
  "start2C": 0,
    "end2C": 100,
  "start3C": 0,
    "end3C": 100,
  "start4C": 100,
    "end4C": 200,
     "start5C": 0,
    "end5C": 0
  },
  "D": {
  "startD": 0,
    "endD": 0,
  "start2D": 100,
    "end2D": 100,
  "start3D": 100,
    "end3D": 100,
  "start4D": 0,
    "end4D": 200,
     "start5D": 0,
    "end5D": 0
  },
  "E": {
  "startE": 100,
    "endE": 0,
  "start2E": 0,
    "end2E": 0,
  "start3E": 0,
    "end3E": 100,
  "start4E": 100,
    "end4E": 100,
  "start5E": 0,
    "end5E": 200,
  "start6E": 100,
    "end6E": 200
  },
  "F": {
  "startF": 100,
    "endF": 0,
  "start2F": 0,
    "end2F": 0,
  "start3F": 25,
    "end3F": 25,
  "start4F": 25,
    "end4F": 200,
  "start5F": 50,
    "end5F": 50,
  "start6F": 100,
    "end6F": 50
  },
  "G": {
  "startG": 50,
    "endG": 0,
  "start2G": 0,
    "end2G": 100,
  "start3G": 50,
    "end3G": 200,
  "start4G": 100,
    "end4G": 100,
     "start5G": 50,
    "end5G": 100
  },
  "H": {
  "startH": 100,
    "endH": 0,
  "start2H": 100,
    "end2H": 200,
  "start3H": 100,
    "end3H": 100,
  "start4H": 50,
    "end4H": 100
  },
  "I": {
  "startI": 50,
    "endI": 0,
  "start2I": 50,
    "end2I": 195,
  "start3I": 20,
    "end3I": 200,
  "start4I": 80,
    "end4I": 200
  },
  "J": {
  "startJ": 100,
    "endJ": 0,
  "start2J": 100,
    "end2J": 120,
  "start3J": 45,
    "end3J": 200,
  "start4J": 0,
    "end4J": 120
  },
  "K": {
  "startK": 100,
    "endK": 0,
  "start2K": 0,
    "end2K": 200,
  "start3K": 100,
    "end3K": 200,
  "start4K": 40,
    "end4K": 125,
  "start5K": 0,
    "end5K": 0,
  "start6K": 0,
    "end6K": 100
  },
  "L": {
  "startL": 0,
    "endL": 0,
  "start2L": 0,
    "end2L": 200,
  "start3L": 75,
    "end3L": 200
  },
  "M": {
  "startM": 0,
    "endM": 0,
  "start2M": 50,
    "end2M": 100,
  "start3M": 100,
    "end3M": 0,
  "start4M": 100,
    "end4M": 200
  },

  "N": {
  "startN": 0,
    "endN": 0,
  "start2N": 100,
    "end2N": 200,
  "start3N": 100,
    "end3N": 0
  },
  "O": {
  "startO": 0,
    "endO": 100,
  "start2O": 50,
    "end2O": 0,
  "start3O": 100,
    "end3O": 100,
  "start4O": 50,
    "end4O": 200
  },
  "P": {
  "startP": 50,
    "endP": 0,
  "start2P": 100,
    "end2P": 50,
  "start3P": 50,
    "end3P": 100,
  "start4P": 50,
    "end4P": 200
  },
  "Q": {
  "startQ": 100,
    "endQ": 0,
  "start2Q": 0,
    "end2Q": 150,
  "start3Q": 65,
    "end3Q": 150,
  "start4Q": 75,
    "end4Q": 100,
     "start5Q": 100,
    "end5Q": 175
  },
  "R": {
  "startR": 0,
    "endR": 0,
  "start2R": 100,
    "end2R": 50,
  "start3R": 0,
    "end3R": 100,
  "start4R": 100,
    "end4R": 200
  },
  "S": {
  "startS": 100,
    "endS": 0,
  "start2S": 0,
    "end2S": 80,
  "start3S": 100,
    "end3S": 80,
  "start4S": 0,
    "end4S": 120,
  "start5S": 100,
    "end5S": 120,
  "start6S": 0,
    "end6S": 200
  },
  "T": {
  "startT": 50,
    "endT": 200,
  "start2T": 50,
    "end2T": 0,
  "start3T": 100,
    "end3T": 0
  },
  "U": {
  "startU": 0,
    "endU": 0,
  "start2U": 0,
    "end2U": 120,
  "start3U": 45,
    "end3U": 200,
  "start4U": 100,
    "end4U": 120
  },
  "V": {
  "startV": 0,
    "endV": 0,
  "start2V": 50,
    "end2V": 200,
  "start3V": 100,
    "end3V": 0,
  },
  "W": {
  "startW": 40,
    "endW": 0,
  "start2W": 75,
    "end2W": 200,
  "start3W": 100,
    "end3W": 0,
  "start4W": 55,
    "end4W": 100,
     "start5W": 25,
    "end5W": 200
  },
  "X": {
  "startX": 0,
    "endX": 0,
  "start2X": 100,
    "end2X": 200,
  "start3X": 100,
    "end3X": 0,
  "start4X": 50,
    "end4X": 100
  },
  "Y": {
  "startY": 100,
    "endY": 0,
  "start2Y": 0,
    "end2Y": 200,
  "start3Y": 0,
    "end3Y": 0,
  "start4Y": 50,
    "end4Y": 100
  },
  "Z": {
  "startZ": 0,
    "endZ": 0,
  "start2Z": 100,
    "end2Z": 0,
  "start3Z": 50,
    "end3Z": 100,
  "start4Z": 0,
    "end4Z": 200,
     "start5Z": 100,
    "end5Z": 200
  }
}