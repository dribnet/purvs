const alphabet = {
  "default": {
      "first": 1,
      "second": 1,
      "third": 1,
      "fourth": 1,
      "fifth": 1,
      "offset": 0
  },
  "A": {
      "first": 0,
      "second": 1,
      "third": -1,
      "fourth": -1,
      "fifth": -1,
      "offset": 3
  },
  "B": {
      "first": 1,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "fifth": -1,
      "offset": 1
  },
  "C": {
      "first": 1,
      "second": 0,
      "third": 1,
      "fourth": 0,
      "fifth": -1,
      "offset": 1
  },
  "D": {
      "first": 1,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "fifth": -1,
      "offset": 2
  },
  "E": {
      "first": 0,
      "second": -1,
      "third": -1,
      "fourth": -1,
      "fifth": -1,
      "offset": 4
  },
  "F": {
      "first": 0,
      "second": 0,
      "third": 1,
      "fourth": 0,
      "fifth": -1,
      "offset": 1
  },
  "G": {
      "first": 1,
      "second": 1,
      "third": 0,
      "fourth": -1,
      "fifth": -1,
      "offset": 2
  },
  "H": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "fifth": -1,
      "offset": 1
  },
  "I": {
      "first": 0,
      "second": 0,
      "third": -1,
      "fourth": -1,
      "fifth": -1,
      "offset": 3
  },
  "J": {
      "first": 0,
      "second": 1,
      "third": 1,
      "fourth": 1,
      "fifth": -1,
      "offset": 1
  },
  "K": {
      "first": 1,
      "second": 0,
      "third": 1,
      "fourth": -1,
      "fifth": -1,
      "offset": 2
  },
  "L": {
      "first": 0,
      "second": 1,
      "third": 0,
      "fourth": 0,
      "fifth": -1,
      "offset": 1
  },
  "M": {
      "first": 1,
      "second": 1,
      "third": -1,
      "fourth": -1,
      "fifth": -1,
      "offset": 3
  },
  "N": {
      "first": 1,
      "second": 0,
      "third": -1,
      "fourth": -1,
      "fifth": -1,
      "offset": 3
  },
  "0": {
      "first": 1,
      "second": 1,
      "third": 1,
      "fourth": -1,
      "fifth": -1,
      "offset": 2
  },
  "P": {
      "first": 0,
      "second": 1,
      "third": 1,
      "fourth": 0,
      "fifth": -1,
      "offset": 1
  },
  "Q": {
      "first": 1,
      "second": 1,
      "third": 0,
      "fourth": 1,
      "fifth": -1,
      "offset": 1
  },
  "R": {
      "first": 0,
      "second": 1,
      "third": 0,
      "fourth": -1,
      "fifth": -1,
      "offset": 2
  },
  "S": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": -1,
      "fifth": -1,
      "offset": 2
  },
  "T": {
      "first": 1,
      "second": -1,
      "third": -1,
      "fourth": -1,
      "fifth": -1,
      "offset": 4
  },
  "U": {
      "first": 0,
      "second": 0,
      "third": 1,
      "fourth": -1,
      "fifth": -1,
      "offset": 2
  },
  "V": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 1,
      "fifth": -1,
      "offset": 1
  },
  "W": {
      "first": 0,
      "second": 1,
      "third": 1,
      "fourth": -1,
      "fifth": -1,
      "offset": 2
  },
  "X": {
      "first": 1,
      "second": 0,
      "third": 0,
      "fourth": 1,
      "fifth": -1,
      "offset": 1
  },
  "Y": {
      "first": 1,
      "second": 0,
      "third": 1,
      "fourth": 1,
      "fifth": -1,
      "offset": 1
  },
  "Z": {
      "first": 1,
      "second": 1,
      "third": 0,
      "fourth": 0,
      "fifth": -1,
      "offset": 1
  },
  "1": {
      "first": 1,
      "second": 1,
      "third": 1,
      "fourth": 1,
      "fifth": 1,
      "offset": 0
  },
  "2": {
      "first": 0,
      "second": 1,
      "third": 1,
      "fourth": 1,
      "fifth": 1,
      "offset": 0
  },
  "3": {
      "first": 0,
      "second": 0,
      "third": 1,
      "fourth": 1,
      "fifth": 1,
      "offset": 0
  },
  "4": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 1,
      "fifth": 1,
      "offset": 0
  },
  "5": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "fifth": 1,
      "offset": 0
  },
  "6": {
      "first": 0,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "fifth": 0,
      "offset": 0
  },
  "7": {
      "first": 1,
      "second": 0,
      "third": 0,
      "fourth": 0,
      "fifth": 0,
      "offset": 0
  },
  "8": {
      "first": 1,
      "second": 1,
      "third": 0,
      "fourth": 0,
      "fifth": 0,
      "offset": 0
  },
  "9": {
      "first": 1,
      "second": 1,
      "third": 1,
      "fourth": 0,
      "fifth": 0,
      "offset": 0
  },
  "0": {
      "first": 1,
      "second": 1,
      "third": 1,
      "fourth": 1,
      "fifth": 0,
      "offset": 0
  },
}