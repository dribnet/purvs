const alphabet = {
  "default": {
      "first": 1,
      "second": 1,
      "third": 1,
      "fourth": 1,
      "fifth": 1,
      "offset": 0,
      "length": 40,
      "alpha": 255
  },
  "A": {
      "first": 0,
      "second": 1,
      "third": -1,
      "fourth": -1,
      "fifth": -1,
      "offset": 3,
      "length": 40,
      "alpha": 255
  },
  "B": {
      "first": 1,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "fifth": -1,
      "offset": 1,
      "length": 40,
      "alpha": 255
  },
  "C": {
      "first": 1,
      "second": 0,
      "third": 1,
      "fourth": 0,
      "fifth": -1,
      "offset": 1,
      "length": 40,
      "alpha": 255
  },
  "D": {
      "first": 1,
      "second": 0,
      "third": 0,
      "fourth": -1,
      "fifth": -1,
      "offset": 2,
      "length": 40,
      "alpha": 255
  },
  "E": {
      "first": 0,
      "second": -1,
      "third": -1,
      "fourth": -1,
      "fifth": -1,
      "offset": 4,
      "length": 40,
      "alpha": 255
  },
  "F": {
      "first": 0,
      "second": 0,
      "third": 1,
      "fourth": 0,
      "fifth": -1,
      "offset": 1,
      "length": 40,
      "alpha": 255
  },
  "G": {
      "first": 1,
      "second": 1,
      "third": 0,
      "fourth": -1,
      "fifth": -1,
      "offset": 2,
      "length": 40,
      "alpha": 255
  },
  "H": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "fifth": -1,
      "offset": 1,
      "length": 40,
      "alpha": 255
  },
  "I": {
      "first": 0,
      "second": 0,
      "third": -1,
      "fourth": -1,
      "fifth": -1,
      "offset": 3,
      "length": 40,
      "alpha": 255
  },
  "J": {
      "first": 0,
      "second": 1,
      "third": 1,
      "fourth": 1,
      "fifth": -1,
      "offset": 1,
      "length": 40,
      "alpha": 255
  },
  "K": {
      "first": 1,
      "second": 0,
      "third": 1,
      "fourth": -1,
      "fifth": -1,
      "offset": 2,
      "length": 40,
      "alpha": 255
  },
  "L": {
      "first": 0,
      "second": 1,
      "third": 0,
      "fourth": 0,
      "fifth": -1,
      "offset": 1,
      "length": 40,
      "alpha": 255
  },
  "M": {
      "first": 1,
      "second": 1,
      "third": -1,
      "fourth": -1,
      "fifth": -1,
      "offset": 3,
      "length": 40,
      "alpha": 255
  },
  "N": {
      "first": 1,
      "second": 0,
      "third": -1,
      "fourth": -1,
      "fifth": -1,
      "offset": 3,
      "length": 40,
      "alpha": 255
  },
  "O": {
      "first": 1,
      "second": 1,
      "third": 1,
      "fourth": -1,
      "fifth": -1,
      "offset": 2,
      "length": 40,
      "alpha": 255
  },
  "P": {
      "first": 0,
      "second": 1,
      "third": 1,
      "fourth": 0,
      "fifth": -1,
      "offset": 1,
      "length": 40,
      "alpha": 255
  },
  "Q": {
      "first": 1,
      "second": 1,
      "third": 0,
      "fourth": 1,
      "fifth": -1,
      "offset": 1,
      "length": 40,
      "alpha": 255
  },
  "R": {
      "first": 0,
      "second": 1,
      "third": 0,
      "fourth": -1,
      "fifth": -1,
      "offset": 2,
      "length": 40,
      "alpha": 255
  },
  "S": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": -1,
      "fifth": -1,
      "offset": 2,
      "length": 40,
      "alpha": 255
  },
  "T": {
      "first": 1,
      "second": -1,
      "third": -1,
      "fourth": -1,
      "fifth": -1,
      "offset": 4,
      "length": 40,
      "alpha": 255
  },
  "U": {
      "first": 0,
      "second": 0,
      "third": 1,
      "fourth": -1,
      "fifth": -1,
      "offset": 2,
      "length": 40,
      "alpha": 255
  },
  "V": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 1,
      "fifth": -1,
      "offset": 1,
      "length": 40,
      "alpha": 255
  },
  "W": {
      "first": 0,
      "second": 1,
      "third": 1,
      "fourth": -1,
      "fifth": -1,
      "offset": 2,
      "length": 40,
      "alpha": 255
  },
  "X": {
      "first": 1,
      "second": 0,
      "third": 0,
      "fourth": 1,
      "fifth": -1,
      "offset": 1,
      "length": 40,
      "alpha": 255
  },
  "Y": {
      "first": 1,
      "second": 0,
      "third": 1,
      "fourth": 1,
      "fifth": -1,
      "offset": 1,
      "length": 40,
      "alpha": 255
  },
  "Z": {
      "first": 1,
      "second": 1,
      "third": 0,
      "fourth": 0,
      "fifth": -1,
      "offset": 1,
      "length": 40,
      "alpha": 255
  },
  "1": {
      "first": 1,
      "second": 1,
      "third": 1,
      "fourth": 1,
      "fifth": 1,
      "offset": 0,
      "length": 40,
      "alpha": 255
  },
  "2": {
      "first": 0,
      "second": 1,
      "third": 1,
      "fourth": 1,
      "fifth": 1,
      "offset": 0,
      "length": 40,
      "alpha": 255
  },
  "3": {
      "first": 0,
      "second": 0,
      "third": 1,
      "fourth": 1,
      "fifth": 1,
      "offset": 0,
      "length": 40,
      "alpha": 255
  },
  "4": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 1,
      "fifth": 1,
      "offset": 0,
      "length": 40,
      "alpha": 255
  },
  "5": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "fifth": 1,
      "offset": 0,
      "length": 40,
      "alpha": 255
  },
  "6": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "fifth": 0,
      "offset": 0,
      "length": 40,
      "alpha": 255
  },
  "7": {
      "first": 1,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "fifth": 0,
      "offset": 0,
      "length": 40,
      "alpha": 255
  },
  "8": {
      "first": 1,
      "second": 1,
      "third": 0,
      "fourth": 0,
      "fifth": 0,
      "offset": 0,
      "length": 40,
      "alpha": 255
  },
  "9": {
      "first": 1,
      "second": 1,
      "third": 1,
      "fourth": 0,
      "fifth": 0,
      "offset": 0,
      "length": 40,
      "alpha": 255
  },
  "0": {
      "first": 1,
      "second": 1,
      "third": 1,
      "fourth": 1,
      "fifth": 0,
      "offset": 0,
      "length": 40,
      "alpha": 255
  },
}