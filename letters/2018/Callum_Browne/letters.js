const alphabet = {
  "default": {
	  "lines": [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "A": {
      "lines": [0,0,1,1,1,1,0,0,1,1,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "B": {
      "lines": [0,0,1,1,1,1,1,1,1,1,0,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "C": {
      "lines": [0,0,1,1,0,0,1,1,1,1,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "D": {
      "lines": [0,1,1,1,0,0,0,0,1,1,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "E": {
	  "lines": [0,0,1,1,0,0,1,1,1,1,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "F": {
	  "lines": [0,0,1,1,0,0,0,0,1,1,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "G": {
	  "lines": [0,0,1,0,0,0,0,1,1,1,1,1,0,1],
	  "red": 255, "green" : 0, "blue": 0
  }, 
  "H": {
	  "lines": [0,0,0,0,1,1,0,0,1,1,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "I": {
	  "lines": [0,0,1,1,0,0,1,1,0,0,0,0,1,1],
	  "red": 255, "green" : 0, "blue": 0
  },
  "J": {
	  "lines": [0,0,1,1,0,0,0,1,0,0,0,0,1,1],
	  "red": 255, "green" : 0, "blue": 0
  },
  "K": {
	  "lines": [1,1,0,0,0,0,0,0,1,1,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },  
  "L": {
	  "lines": [0,0,0,0,0,0,1,1,1,1,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "M": {
	  "lines": [0,0,1,1,1,1,0,0,1,1,0,0,1,1],
	  "red": 255, "green" : 0, "blue": 0
  },
  "N": {
	  "lines": [1,0,0,0,1,1,0,0,1,1,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "O": {
	  "lines": [0,0,1,1,1,1,1,1,1,1,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "P": {
	  "lines": [0,0,1,1,1,0,0,0,1,1,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "Q": {
	  "lines": [1,0,1,1,1,1,1,1,1,1,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "R": {
	  "lines": [1,0,1,1,1,0,0,0,1,1,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "S": {
	  "lines": [0,0,1,1,0,1,1,1,0,1,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "T": {
	  "lines": [0,0,1,1,0,0,0,0,0,0,0,0,1,1],
	  "red": 255, "green" : 0, "blue": 0
  },
  "U": {
	  "lines": [0,0,0,0,1,1,1,1,1,1,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "V": {
	  "lines": [0,1,0,0,0,0,0,0,1,1,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "W": {
	  "lines": [0,0,0,0,1,1,1,1,1,1,0,0,1,1],
	  "red": 255, "green" : 0, "blue": 0
  },
  "X": {
	  "lines": [1,1,0,0,0,0,0,0,0,0,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "Y": {
	  "lines": [0,0,0,0,1,1,1,1,0,1,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "Z": {
	  "lines": [0,1,1,1,0,0,1,1,0,0,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "0": {
	  "lines": [0,1,1,1,1,1,1,1,1,1,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "1": {
	  "lines": [0,0,0,0,0,0,0,0,0,0,0,0,1,1],
	  "red": 255, "green" : 0, "blue": 0
  },
  "2": {
	  "lines": [0,0,1,1,1,0,1,1,1,0,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "3": {
	  "lines": [0,0,1,1,1,1,1,1,0,0,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "4": {
	  "lines": [0,0,0,0,0,0,0,0,0,1,1,1,1,1],
	  "red": 255, "green" : 0, "blue": 0
  },
  "5": {
	  "lines": [0,0,1,0,0,1,1,1,0,1,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "6": {
	  "lines": [0,0,0,0,0,1,1,1,1,1,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "7": {
	  "lines": [0,1,1,1,0,0,0,0,0,0,0,0,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "8": {
	  "lines": [0,0,1,1,1,1,1,1,1,1,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "9": {
	  "lines": [0,0,1,1,1,1,1,1,0,1,1,1,0,0],
	  "red": 255, "green" : 0, "blue": 0
  },
  "?": {
	  "lines": [0,0,1,1,1,0,0,0,0,0,0,1,0,1],
	  "red": 255, "green" : 0, "blue": 0
  },
}