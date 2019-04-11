// setting 'PI'
const PI = 3.14159;
const HALF_PI = PI/2;
const QUARTER_PI = PI/4;
const TWO_PI = PI*2;

// setting up my alphabet parameters
const alphabet = {
  "default": {
    "posx" : 50,
    "posy" : 100,
	"pos2x" : 50,
    "pos2y" : 100,
	"pos3x" : 50,
	"pos3y" : 100,
	"pos4y" : 50,
	"pos4y" : 100,
    "arcS": 0, 
    "arcE": TWO_PI,
    "arc2S" : 0,
    "arc2E" : 0,
	"recA" : 0,
	"recB" : 50,
	"triX2": 0,
	"triY2": 0,
	"triY2A" : 0,
	"triX2A" : 0,
    "triY2B" : 0,
	"triX2B" : 0
	
  },
  "A": {
    "posx" : 10,
    "posy" : 100,
    "pos2x" : 10,
    "pos2y" : 100,
	"pos3x" : 40,
    "pos3y" : 140,
	"pos4x" : 50,
    "pos4y" : 100,
	"arcS": 0, 
    "arcE": 0,
    "arc2S": PI - HALF_PI - HALF_PI/2+PI+0.2, 
    "arc2E": PI + HALF_PI/2+PI+0.2, 
    //"triX1" : 0,
	//"triX1A" : -30,
    //"triX1B" : 30,
    //"triY1" : 8,
	//"triY1A" : 50,
    //"triY1B" : 50,
	"triX2": 0,
	"triY2" : -50,
    "triY2A" : 50,
	"triX2A" : -70,
	"triY2B" : 50,
	"triX2B" : 70
	
  },
  "B": {
    "posx" : 0,
    "posy" : 50,
    "pos2x" : 50,
    "pos2y" : 100,
	"pos3x" : 50,
    "pos3y" : 100, 
	"pos4x" : 50,
    "pos4y" : 80,
    "recA" : 40,
	"recB" : 100,
    "arcS": PI + HALF_PI+1.5, 
    "arcE": TWO_PI + HALF_PI,
    "arc2S" : 0,
    "arc2E" : TWO_PI,
    //"triX1" : 0,
	//"triX2": 0,
    //"triX1A" : -30,
    //"triX1B" : 30,
    //"triY1" : 8,
	//"triY2" : -50,
    //"triY1A" : 50,
    //"triY1B" : 50,
    //"triY2A" : 50,
	//"triX2A" : -70,
	//"triY2B" : 50,
	//"triX2B" : 70
	
  },
  
   "C": {
    "posx" : 50,
    "posy" : 100,
    "pos2x" : 50,
    "pos2y" : 100,
	"pos3x" : 50,
    "pos3y" : 100,
    "arcS": PI - HALF_PI - HALF_PI/2, 
    "arcE": TWO_PI-QUARTER_PI,
	"arc2S" : PI - HALF_PI - HALF_PI/2 +HALF_PI+QUARTER_PI,
    "arc2E" : TWO_PI-QUARTER_PI,
	"triX2": 0,
	"triY2" : -40,
    "triY2A" : -20,
	"triX2A" : -10,
	"triY2B" : 20,
	"triX2B" : 50
   },
   
   "D": {
    "posx" : 0,
    "posy" : 50,
    "pos2x" : 0,
    "pos2y" : 50,
	"pos3x" : 30,
    "pos3y" : 100, 
	"pos4x" : 35,
    "pos4y" : 110,
    "recA" : 20,
	"recB" : 100,
    "arc2S": PI + HALF_PI+HALF_PI, 
    "arc2E": TWO_PI + HALF_PI,
    "arcS": PI + HALF_PI, 
    "arcE": TWO_PI + HALF_PI,
    //"triX1" : 0,
	//"triX2": 0,
    //"triX1A" : -30,
    //"triX1B" : 30,
    //"triY1" : 8,
	//"triY2" : -50,
    //"triY1A" : 50,
    //"triY1B" : 50,
    //"triY2A" : 50,
	//"triX2A" : -70,
	//"triY2B" : 50,
	//"triX2B" : 70
	
  },
  
  "E": {
    "posx" : 0,
    "posy" : 50,
    "pos2x" : 50,
    "pos2y" : 50,
	"pos3x" : 90,
    "pos3y" : 125, 
    "recA" : 80,
	"recB" : 100,
    "arc2S": HALF_PI, 
    "arc2E": PI,
	"triX2": 30,
	"triY2" : -30,
    "triY2A" : 30,
	"triX2A" : -30,
	"triY2B" : 30,
	"triX2B" : 60
	
  },

     "F": {
    "posx" : 0,
    "posy" : 50,
    "pos3x" : 10,
    "pos3y" : 110, 
    "pos4x" : 80,
    "pos4y" : 25,
    "recA" : 20,
    "recB" : 100,
    "triX2": -70,
    "triY2" : 25,
    "triY2A" : 95,
    "triX2A" : -70,
    "triY2B" : 25,
    "triX2B" : 0,
    "arc2S": PI + HALF_PI+HALF_PI, 
    "arc2E": TWO_PI + HALF_PI
    
  },

 "G": {
    "posx" : 20,
    "posy" : 100,
    "pos3x" : 30,
    "pos3y" : 100, 
    "pos4x" : 100,
    "pos4y" : 25,
    "recA" : 50,
    "recB" : 50,
    "triX2": -20,
    "triY2" : 75,
    "triY2A" : 75,
    "triX2A" : -70,
    "triY2B" : 125,
    "triX2B" : -20,
    "arcS": HALF_PI, 
    "arcE": PI + HALF_PI,
    
  },

     "H": {
    "posx" : -10,
    "posy" : 50,
    "pos2x" : 40,
    "pos2y" : 100,
    "pos3x" : 50,
    "pos3y" : 70, 
    "recA" : 100,
    "recB" : 100,
    "arc2S": 0, 
    "arc2E": PI,
    "triX2": 0,
    "triY2" : -60,
    "triY2A" : 50,
    "triX2A" : -70,
    "triY2B" : 50,
    "triX2B" : 70
    //"triX1" : 0,
    //"triX2": 0,
    //"triX1A" : -30,
    //"triX1B" : 30,
    //"triY1" : 8,
    //"triY2" : -50,
    //"triY1A" : 50,
    //"triY1B" : 50,
    //"triY2A" : 50,
    //"triX2A" : -70,
    //"triY2B" : 50,
    //"triX2B" : 70
    
  },


    "I": {
    "posx" : 30,
    "posy" : 110,
    //"pos2x" : 0,
    //"pos2y" : 50,
    "pos3x" : 60,
    "pos3y" : 100, 
    "pos4x" : 35,
    "pos4y" : 110,
    "recA" : 40,
    "recB" : 40,
    "arc2S": 0, 
    "arc2E": TWO_PI,
    //"triX1" : 0,
    //"triX2": 0,
    //"triX1A" : -30,
    //"triX1B" : 30,
    //"triY1" : 8,
    //"triY2" : -50,
    //"triY1A" : 50,
    //"triY1B" : 50,
    //"triY2A" : 50,
    //"triX2A" : -70,
    //"triY2B" : 50,
    //"triX2B" : 70
    
  },

  "J": {
    "posx" : 30,
    "posy" : 50,
    "pos3x" : 30,
    "pos3y" : 100, 
    "pos4x" : 100,
    "pos4y" : -25,
    "recA" : 40,
    "recB" : 50,
    "arcS": 0, 
    "arcE": PI,
    "triX2": -20,
    "triY2" : 75,
    "triY2A" : 75,
    "triX2A" : -60,
    "triY2B" : 125,
    "triX2B" : -60,
    
  },


    "K": {
    "posx" : -10,
    "posy" : 50,
    "pos3x" : 20,
    "pos3y" : 50,
    "pos4x" : 50,
    "pos4y" : 100,
    "arcS": 0, 
    "arcE": 0,
    "arcS": PI - HALF_PI - HALF_PI/2+PI+HALF_PI+QUARTER_PI, 
    "arcE": PI + HALF_PI/2+PI+QUARTER_PI, 
    "recA": 30,
    "recB": 100,
    "triX2": -30,
    "triY2" : 0,
    "triY2A" : 50,
    "triX2A" : -30,
    "triY2B" : 50,
    "triX2B" : 30
    
  },

  "L": {
    "posx" : -20,
    "posy" : 50,
    "pos3x" : 50,
    "pos3y" : 170, 
    "pos4x" : 50,
    "pos4y" : -25,
    "recA" : 40,
    "recB" : 100,
    "arc2S": PI, 
    "arc2E": TWO_PI,
    "triX2": -20,
    "triY2" : 75,
    "triY2A" : 75,
    "triX2A" : -60,
    "triY2B" : 125,
    "triX2B" : -60,
    
  },


   "M": {
    "posx" : 10,
    "posy" : 100,
    "pos2x" : -10,
    "pos2y" : 70,
    "pos3x" : 0,
    "pos3y" : 140,
    "pos4x" : 50,
    "pos4y" : 100,
    "arcS": 0, 
    "arcE": 0,
    "arc2S": 0, 
    "arc2E": PI, 
    //"triX1" : 0,
    //"triX1A" : -30,
    //"triX1B" : 30,
    //"triY1" : 8,
    //"triY1A" : 50,
    //"triY1B" : 50,
    "triX2": 0,
    "triY2" : -50,
    "triY2A" : 50,
    "triX2A" : -60,
    "triY2B" : 50,
    "triX2B" : 60 
  },

  "N": {
    "posx" : 60,
    "posy" : 50,
    "pos3x" : 20,
    "pos3y" : 50,
    "pos4x" : 50,
    "pos4y" : 100,
    "arcS": 0, 
    "arcE": 0,
    "recA": 40,
    "recB": 100,
    "triX2": -30,
    "triY2" : -50,
    "triY2A" : 50,
    "triX2A" : -30,
    "triY2B" : 50,
    "triX2B" : 60
    
  },


 "O": {
    "posx" : 20,
    "posy" : 100,
    "pos3x" : 50,
    "pos3y" : 100, 
    "pos4x" : 100,
    "pos4y" : 25,
    "arcS": 0, 
    "arcE": TWO_PI,
    "arc2S": 0, 
    "arc2E": PI

  },


       "P": {
    "posx" : 0,
    "posy" : 50,
    //"pos2x" : 0,
    //"pos2y" : 50,
    "pos3x" : 30,
    "pos3y" : 100, 
    "pos4x" : 35,
    "pos4y" : 110,
    "recA" : 20,
    "recB" : 100,
    "arc2S": PI + HALF_PI, 
    "arc2E": TWO_PI + HALF_PI,
    "triX2": 10,
    "triY2" : -30,
    "triY2A" : -40,
    "triX2A" : -5,
    "triY2B" : -20,
    "triX2B" : -5
    //"triX1" : 0,
    //"triX2": 0,
    //"triX1A" : -30,
    //"triX1B" : 30,
    //"triY1" : 8,
    //"triY2" : -50,
    //"triY1A" : 50,
    //"triY1B" : 50,
    //"triY2A" : 50,
    //"triX2A" : -70,
    //"triY2B" : 50,
    //"triX2B" : 70
  },

  "Q": {
    "posx" : 60,
    "posy" : 110,
    "pos3x" : 50,
    "pos3y" : 100, 
    "pos4x" : 100,
    "pos4y" : 25,
    "arcS": 0, 
    "arcE": TWO_PI,
    "arc2S": HALF_PI, 
    "arc2E": PI,
    "recA" : 30,
    "recB" : 40,
    "triX2": -10,
    "triY2" : 85,
    "triY2A" : 85,
    "triX2A" : -50,
    "triY2B" : 125,
    "triX2B" : -10,


  },

   "R": {
    "posx" : 0,
    "posy" : 50,
    "pos3x" : 50,
    "pos3y" : 100, 
    "pos4x" : 70,
    "pos4y" : 100,
    "recA" : 40,
    "recB" : 100,
    "arc2S": PI + HALF_PI, 
    "arc2E": TWO_PI + HALF_PI,
   "triX2": -30,
    "triY2" : 10,
    "triY2A" : 50,
    "triX2A" : -30,
    "triY2B" : 50,
    "triX2B" : 20
    
  },


  "S": {
    "posx" : 0,
    "posy" : 50,
    "pos3x" : 50,
    "pos3y" : 100, 
    "pos4x" : 70,
    "pos4y" : 10,
    "arc2S": PI - HALF_PI/2-HALF_PI, 
    "arc2E": TWO_PI - HALF_PI/2-HALF_PI,
    "arcS": PI + HALF_PI+QUARTER_PI, 
    "arcE": TWO_PI + HALF_PI+QUARTER_PI,
    "triX2": 50,
    "triY2" : 30,
    "triY2A" : 48,
    "triX2A" : -42,
    "triY2B" : 90,
    "triX2B" : 0
  },

    "T": {
    "posx" : -10,
    "posy" : 50,
    "pos3x" : 70,
    "pos3y" : 100, 
    "pos4x" : 50,
    "pos4y" : 0,
    "triX2": 0,
    "triY2" : 150,
    "triY2A" : 80,
    "triX2A" : -30,
    "triY2B" : 80,
    "triX2B" : 30,
    "recA" : 100,
    "recB" : 30
  },


  
  "U": {
    "posx" : -30,
    "posy" : 50,
    "pos3x" : 30,
    "pos3y" : 100, 
    "pos4x" : 40,
    "pos4y" : -25,
    "recA" : 100,
    "recB" : 50,
    "arcS": 0, 
    "arcE": PI,
    "arc2S": PI + HALF_PI+HALF_PI, 
    "arc2E": TWO_PI + HALF_PI,
    "triX2": -10,
    "triY2" : 75,
    "triY2A" : 75,
    "triX2A" : -60,
    "triY2B" : 125,
    "triX2B" : -60,
    
  },

      "V": {
    "posx" : -10,
    "posy" : 50,
    "pos3x" : 50,
    "pos3y" : 70, 
    "pos4x" : 50,
    "pos4y" : 0,
    "arc2S": 0, 
    "arc2E": PI,
    "triX2": 0,
    "triY2" : 150,
    "triY2A" : 50,
    "triX2A" : -50,
    "triY2B" : 50,
    "triX2B" : 50,
  },

        "W": {
    "posx" : -10,
    "posy" : 50,
    "pos3x" : 50,
    "pos3y" : 100, 
    "pos4x" : 50,
    "pos4y" : 0,
    "arcS": 0 - HALF_PI/2, 
    "arcE": PI + HALF_PI/2,
    "triX2": 0,
    "triY2" : 50,
    "triY2A" : 130,
    "triX2A" : -40,
    "triY2B" : 130,
    "triX2B" : 40
  },

     "X": {
    "posx" : 10,
    "posy" : 50,
    "pos2x" : 20,
    "pos2y" : 100, 
    "pos3x" : 30,
    "pos3y" : 50,
    "recA" : 20,
    "recB" : 100,
    "arcS": 0, 
    "arcE": PI,
    "triX2": 0,
    "triY2" : -50,
    "triY2A" : 50,
    "triX2A" : -70,
    "triY2B" : 50,
    "triX2B" : 70
  },

        "Y": {
    "posx" : 25,
    "posy" : 50, 
    "pos3x" : 50,
    "pos3y" : 70, 
    "pos4x" : 50,
    "pos4y" : 0,
    "recA" : 30,
    "recB" : 100,
    "arc2S": 0, 
    "arc2E": PI,
    "triX2": 0,
    "triY2" : 100,
    "triY2A" : 50,
    "triX2A" : -50,
    "triY2B" : 50,
    "triX2B" : 50
  },

   "Z": {
    "posx" : -25,
    "posy" : 65,
    "pos2x" : 50,
    "pos2y" : 100,
    "pos3x" : 45,
    "pos3y" : 115,
    "arcS": PI - HALF_PI - HALF_PI/2+HALF_PI, 
    "arcE": TWO_PI-QUARTER_PI,
    "arc2S" : PI - HALF_PI - HALF_PI/2 +PI+QUARTER_PI,
    "arc2E" : TWO_PI-QUARTER_PI,
    "recA" : 60,
    "recB" : 30,
    "triX2": 0,
    "triY2" : -40,
    "triY2A" : 50,
    "triX2A" : -80,
    "triY2B" : 50,
    "triX2B" : 80
   },




   
}
