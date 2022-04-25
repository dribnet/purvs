const alphabet = {
  "default": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "A": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 1, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 0,
  },
  "B": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 1, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 1, tile15: 1,
  },
  "C": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 0,
    tile8: 1, tile9: 0, tile10: 0,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "D": {
    tile1: 1,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 0, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 1, tile15: 1,
  },
  "E": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 0,
    tile8: 1, tile9: 1, tile10: 0,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "F": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 0,
    tile8: 1, tile9: 1, tile10: 0,
    tile11: 1, tile12: 0, tile13: 0,
    tile14: 0, tile15: 0,
  },
  "G": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 0,
    tile8: 1, tile9: 0, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "H": {
    tile1: 0,
    tile2: 1, tile3: 0, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 1, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 0,
  },
  "I": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 0, tile6: 1, tile7: 0,
    tile8: 0, tile9: 1, tile10: 0,
    tile11: 1, tile12: 1, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "J": {
    tile1: 0,
    tile2: 0, tile3: 0, tile4: 1,
    tile5: 0, tile6: 0, tile7: 1,
    tile8: 0, tile9: 0, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "K": {
    tile1: 0,
    tile2: 1, tile3: 0, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 1, tile10: 0,
    tile11: 1, tile12: 1, tile13: 1,
    tile14: 0, tile15: 0,
  },
  "L": {
    tile1: 0,
    tile2: 1, tile3: 0, tile4: 0,
    tile5: 1, tile6: 0, tile7: 0,
    tile8: 1, tile9: 0, tile10: 0,
    tile11: 1, tile12: 1, tile13: 1,
    tile14: 0, tile15: 0,
  },
  "M": {
    tile1: 0,
    tile2: 1, tile3: 0, tile4: 1,
    tile5: 1, tile6: 1, tile7: 1,
    tile8: 1, tile9: 0, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 0,
  },
  "N": {
    tile1: 0,
    tile2: 1, tile3: 0, tile4: 0,
    tile5: 1, tile6: 1, tile7: 1,
    tile8: 1, tile9: 0, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 0,
  },
  "O": {
    tile1: 0,
    tile2: 0, tile3: 0, tile4: 0,
    tile5: 1, tile6: 1, tile7: 1,
    tile8: 1, tile9: 0, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "P": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 1, tile10: 0,
    tile11: 1, tile12: 0, tile13: 0,
    tile14: 0, tile15: 0,
  },
  "Q": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 0, tile10: 1,
    tile11: 0, tile12: 1, tile13: 1,
    tile14: 0, tile15: 0,
  },
  "R": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 1, tile10: 0,
    tile11: 1, tile12: 1, tile13: 1,
    tile14: 0, tile15: 0,
  },
  "S": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 0,
    tile8: 0, tile9: 1, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "T": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 0, tile6: 1, tile7: 0,
    tile8: 0, tile9: 1, tile10: 0,
    tile11: 0, tile12: 1, tile13: 0,
    tile14: 0, tile15: 1,
  },
  "U": {
    tile1: 0,
    tile2: 1, tile3: 0, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 0, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "V": {
    tile1: 0,
    tile2: 1, tile3: 0, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 0, tile10: 1,
    tile11: 0, tile12: 1, tile13: 0,
    tile14: 0, tile15: 1,
  },
  "W": {
    tile1: 0,
    tile2: 1, tile3: 0, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 0, tile10: 1,
    tile11: 1, tile12: 1, tile13: 1,
    tile14: 0, tile15: 0,
  },
  "X": {
    tile1: 0,
    tile2: 1, tile3: 0, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 0, tile9: 1, tile10: 0,
    tile11: 1, tile12: 1, tile13: 1,
    tile14: 0, tile15: 0,
  },
  "Y": {
    tile1: 0,
    tile2: 1, tile3: 0, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 0, tile9: 1, tile10: 0,
    tile11: 0, tile12: 1, tile13: 0,
    tile14: 0, tile15: 1,
  },
  "Z": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 0, tile6: 0, tile7: 1,
    tile8: 1, tile9: 1, tile10: 0,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "0": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 0, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "1": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 0,
    tile5: 0, tile6: 1, tile7: 0,
    tile8: 0, tile9: 1, tile10: 0,
    tile11: 0, tile12: 1, tile13: 0,
    tile14: 0, tile15: 1,
  },
  "2": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 0, tile6: 0, tile7: 1,
    tile8: 1, tile9: 1, tile10: 0,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "3": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 0, tile6: 0, tile7: 1,
    tile8: 0, tile9: 1, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "4": {
    tile1: 0,
    tile2: 1, tile3: 0, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 0, tile9: 1, tile10: 1,
    tile11: 0, tile12: 0, tile13: 1,
    tile14: 0, tile15: 0,
  },
  "5": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 0,
    tile8: 0, tile9: 1, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "6": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 0,
    tile8: 1, tile9: 1, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "7": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 0, tile6: 0, tile7: 1,
    tile8: 0, tile9: 0, tile10: 1,
    tile11: 0, tile12: 0, tile13: 1,
    tile14: 0, tile15: 0
  },
  "8": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 1, tile9: 1, tile10: 1,
    tile11: 1, tile12: 0, tile13: 1,
    tile14: 0, tile15: 1,
  },
  "9": {
    tile1: 0,
    tile2: 1, tile3: 1, tile4: 1,
    tile5: 1, tile6: 0, tile7: 1,
    tile8: 0, tile9: 1, tile10: 1,
    tile11: 0, tile12: 0, tile13: 1,
    tile14: 0, tile15: 0,
  }

}