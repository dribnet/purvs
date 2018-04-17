const color = {
    "light": "rgb(153, 255, 255)", 
    "dark": "rgb(51, 216, 255)",
    "trans": "rgba(0,0,0,0)",
    "white": "white"
}

const alphabet = {
	    "default": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["white"],
      "strokeDown":    color["white"]
	},
	    "A": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["trans"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["trans"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
	},
	    "B": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["trans"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
	},
        "C": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
	},
        "D": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["trans"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": 0 ,
      "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "E": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["trans"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": 30 ,
      "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "F": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["trans"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": 0 ,
      "quadVerticle": 30 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "G": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
	  "quadHorozontal": -10 ,
	  "quadVerticle": 10 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "H": {
	  "topFill":       color["trans"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["trans"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": 0 ,
      "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "I": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["trans"] ,
	  "SquareFill":    color["trans"] ,
      "quadHorozontal": 0 ,
      "quadVerticle": 0 ,
      "strokeUp":      color["white"],
      "strokeDown":    color["white"]
    },
        "J": {
	  "topFill":       color["trans"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["trans"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": 0 ,
      "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "K": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["trans"] ,
      "quadHorozontal": -30 ,
      "quadVerticle": 30 ,
      "strokeUp":      color["dark"],
      "strokeDown":    color["dark"]
    },
        "L": {
	  "topFill":       color["trans"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": 0 ,
      "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "M": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["trans"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": 0 ,
      "quadVerticle": 30 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "N": {
	  "topFill":       color["trans"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["trans"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["dark"],
      "strokeDown":    color["trans"]
    },
        "O": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": 0 ,
      "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "P": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": 30 ,
      "quadVerticle": 30 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "Q": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["trans"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": -30 ,
      "quadVerticle": 30 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "R": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["trans"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": 0 ,
      "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "S": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["trans"] ,
	  "SquareFill":    color["white"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["dark"],
      "strokeDown":    color["trans"]
    },
        "T": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["trans"] ,
	  "leftFill":      color["trans"] ,
	  "SquareFill":    color["dark"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 30 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "U": {
	  "topFill":       color["trans"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "V": {
	  "topFill":       color["trans"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["trans"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "W": {
	  "topFill":       color["trans"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": 0 ,
      "quadVerticle": -30 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "X": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["trans"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["white"],
      "strokeDown":    color["white"]
    },
        "Y": {
	  "topFill":       color["trans"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["trans"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["white"]
    },
        "Z": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["trans"] ,
	  "SquareFill":    color["white"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["dark"]
    },
        "0": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["dark"]
    },    
        "1": {
	  "topFill":       color["trans"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["trans"] ,
	  "leftFill":      color["trans"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": 0 ,
      "quadVerticle": 30 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },    
        "2": {
	  "topFill":       color["trans"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["white"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["dark"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["white"]
    },
        "3": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
      "quadHorozontal": -30 ,
      "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "4": {
	  "topFill":       color["trans"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["trans"] ,
	  "SquareFill":    color["dark"] ,
	  "quadHorozontal": 30 ,
	  "quadVerticle": 45 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },   
        "5": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["trans"] ,
	  "SquareFill":    color["trans"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["dark"],
      "strokeDown":    color["trans"]
    },
        "6": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
	  "quadHorozontal": 30 ,
	  "quadVerticle": -30 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "7": {
	  "topFill":       color["trans"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["dark"] ,
	  "quadHorozontal": 0 ,
	  "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["white"]
    },   
        "8": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["trans"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["trans"] ,
	  "SquareFill":    color["trans"] ,
      "quadHorozontal": 0 ,
      "quadVerticle": 0 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    },
        "9": {
	  "topFill":       color["dark"] ,
	  "rightFill":     color["dark"] ,
	  "bottomFill":    color["dark"] ,
	  "leftFill":      color["dark"] ,
	  "SquareFill":    color["white"] ,
	  "quadHorozontal": -30 ,
	  "quadVerticle": 30 ,
      "strokeUp":      color["trans"],
      "strokeDown":    color["trans"]
    }   

}