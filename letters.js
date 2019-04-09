//setting PI, HALF_PI and QUARTER_PI as constants
const PI = 3.14159;
const HALF_PI = PI/2;
const QUARTER_PI = PI/4;

//---------------------------------------------------------------------------------------------

const alphabet = {
  "default": {
//yshift - where the line begins on the y axis
  //0 = middle/ midline of bounding box
  "offsetX1": 0,
  "offsetX2": 0,
  "offsetX3": 0,
  "offsetX4": 0,

//length - the length of the line
  //100 = bottom of bounding box
  "offsetY1": 20,
  "offsetY2": 40,
  "offsetY3": 20,
  "offsetY4": 40,

//arc positions - filled with blue colour
  "arcX1": 50,
  "arcY1": 90,
  "Astart": 0+.2,
  "Astop": PI-.2
  },

  "A": {
  //yshift    
  "offsetX1": 30,
  "offsetX2": 15,
  "offsetX3": 10,
  "offsetX4": 0,
 
  //length
  "offsetY1": 45,
  "offsetY2": 70,
  "offsetY3": 70,
  "offsetY4": 100,

//quad positions - filled with background colour
  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

//arc positions
  "arcX1": 50,
  "arcY1": 150,
  "Astart": HALF_PI-0.5,
  "Astop": -HALF_PI+0.5
  },

  "B": {
  //yshift    
  "offsetX1": -100,
  "offsetX2": 15,
  "offsetX3": 0,
  "offsetX4": 30,
 
  //length
  "offsetY1": 200,
  "offsetY2": 70,
  "offsetY3": 90,
  "offsetY4": 40,

  //quad x positions
  "quadX1": 30,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 30,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 50,
  "arcY1": 150,
  "Astart": -HALF_PI-0.5,
  "Astop": HALF_PI+0.5
  },  

  "C": {
  //yshift    
  "offsetX1": 30,
  "offsetX2": 0,
  "offsetX3": 0,
  "offsetX4": 20,
 
  //length
  "offsetY1": 40,
  "offsetY2": 100,
  "offsetY3": 100,
  "offsetY4": 60,

  //quad x positions
  "quadX1": 50,
  "quadX2": 100,
  "quadX3": 50,
  "quadX4": 30,

  //quad y positions
  "quadY1": 120,
  "quadY2": 145,
  "quadY3": 190,
  "quadY4": 150,

  //arc positions
  "arcX1": 50,
  "arcY1": 150,
  "Astart": QUARTER_PI+1,
  "Astop": PI+1.4
  },

  "D": {
  //yshift
  "offsetX1": 30,
  "offsetX2": 0,
  "offsetX3": 10,
  "offsetX4": -100,
 
  //length
  "offsetY1": 40,
  "offsetY2": 90,
  "offsetY3": 75,
  "offsetY4": 200,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 50,
  "arcY1": 150,
  "Astart": HALF_PI-0.5,
  "Astop": -HALF_PI+0.5
  },

  "E": {
  //yshift    
  "offsetX1": 30,
  "offsetX2": 0,
  "offsetX3": 0,
  "offsetX4": 20,
 
  //length
  "offsetY1": 40,
  "offsetY2": 100,
  "offsetY3": 100,
  "offsetY4": 65,

  //quad x positions
  "quadX1": 130,
  "quadX2": 60,
  "quadX3": 30,
  "quadX4": 30,

  //quad y positions
  "quadY1": 150,
  "quadY2": 180,
  "quadY3": 185,
  "quadY4": 150,

  //arc positions
  "arcX1": 50,
  "arcY1": 135,
  "Astart": PI,
  "Astop": 0
  },

  "F": {
  //yshift
  "offsetX1": -10,
  "offsetX2": -80,
  "offsetX3": -100,
  "offsetX4": -80,
 
  //length
  "offsetY1": 30,
  "offsetY2": 185,
  "offsetY3": 120,
  "offsetY4": 100,

  //quad x positions
  "quadX1": 100,
  "quadX2": 100,
  "quadX3": 50,
  "quadX4": 50,

  //quad y positions
  "quadY1": 40,
  "quadY2": 90,
  "quadY3": 90,
  "quadY4": 40,

  //arc positions
  "arcX1": 60,
  "arcY1": 38,
  "Astart": PI+0.3,
  "Astop": -QUARTER_PI+0.5
  },

  "G": {
  //yshift
  "offsetX1": 10,
  "offsetX2": 0,
  "offsetX3": 10,
  "offsetX4": 0,
 
  //length
  "offsetY1": 140,
  "offsetY2": 160,
  "offsetY3": 160,
  "offsetY4": 180,

  //quad x positions
  "quadX1": 70,
  "quadX2": 70,
  "quadX3": 10,
  "quadX4": 10,

  //quad y positions
  "quadY1": 180,
  "quadY2": 260,
  "quadY3": 220,
  "quadY4": 160,

  //arc positions
  "arcX1": 50,
  "arcY1": 135,
  "Astart": HALF_PI-0.5,
  "Astop": -HALF_PI+0.5
  },

  "H": {
  //yshift
  "offsetX1": -100,
  "offsetX2": 10,
  "offsetX3": 0,
  "offsetX4": 10,
 
  //length
  "offsetY1": 200,
  "offsetY2": 30,
  "offsetY3": 30,
  "offsetY4": 90,

  //quad x positions
  "quadX1": 30,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 30,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 60,
  "arcY1": 138,
  "Astart": PI+.4,
  "Astop": -.4
  },

  "I": {
  //yshift
  "offsetX3": 0,
 
  //length
  "offsetY3": 100,

  //quad x positions
  "quadX1": 70,
  "quadX2": 70,
  "quadX3": 10,
  "quadX4": 10,

  //quad y positions
  "quadY1": 110,
  "quadY2": 130,
  "quadY3": 130,
  "quadY4": 110,

  //arc positions
  "arcX1": 80,
  "arcY1": 165,
  "Astart": QUARTER_PI+1.3,
  "Astop": PI+1.1
  },

  "J": {
  //yshift
  "offsetX1": 120,
  "offsetX2": 140,
  "offsetX3": 150,
  "offsetX4": 0,
 
  //length
  "offsetY1": 30,
  "offsetY2": 30,
  "offsetY3": 30,
  "offsetY4": 170,

  //quad x positions
  "quadX1": 90,
  "quadX2": 90,
  "quadX3": 10,
  "quadX4": 10,

  //quad y positions
  "quadY1": 110,
  "quadY2": 130,
  "quadY3": 130,
  "quadY4": 110,
 
  //arc positions
  "arcX1": 60,
  "arcY1": 240,
  "Astart": 0+1.2,
  "Astop": PI+.5
  },

  "K": {
  //yshift
  "offsetX1": -100,
  "offsetX2": 20,
  "offsetX3": 0,
  "offsetX4": 20,
 
  //length
  "offsetY1": 200,
  "offsetY2": 60,
  "offsetY3": 90,
  "offsetY4": 80,

  //quad x positions
  "quadX1": 90,
  "quadX2": 90,
  "quadX3": 22,
  "quadX4": 22,

  //quad y positions
  "quadY1": 190,
  "quadY2": 140,
  "quadY3": 160,
  "quadY4": 160,

  //arc positions
  "arcX1": 60,
  "arcY1": 138,
  "Astart": PI,
  "Astop": 0
  },

  "L": {
  //yshift
  "offsetX3": -100,
 
  //length
  "offsetY3": 200,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 80,
  "arcY1": 100,
  "Astart": QUARTER_PI+1.3,
  "Astop": PI+1.1
  },

  "M": {
  //yshift
  "offsetX1": 0,
  "offsetX2": 10,
  "offsetX3": 10,
  "offsetX4": 0,
 
  //length
  "offsetY1": 100,
  "offsetY2": 30,
  "offsetY3": 30,
  "offsetY4": 100,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 50,
  "arcY1": 100,
  "Astart": 0+.2,
  "Astop": PI-.2
  },  

  "N": {
  //yshift
  "offsetX1": 0,
  "offsetX2": 10,
  "offsetX3": 20,
  "offsetX4": 30,
 
  //length
  "offsetY1": 100,
  "offsetY2": 30,
  "offsetY3": 30,
  "offsetY4": 70,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 60,
  "arcY1": 110,
  "Astart": 0+.6,
  "Astop": PI+.3
  },    

  "O": {
  //yshift
  "offsetX1": 20,
  "offsetX2": 0,
  "offsetX3": 0,
  "offsetX4": 20,
 
  //length
  "offsetY1": 60,
  "offsetY2": 100,
  "offsetY3": 100,
  "offsetY4": 60,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 50,
  "arcY1": 150,
  "Astart": -PI*2,
  "Astop": PI*2
  },  

  "P": {
  //yshift
  "offsetX1": 0,
  "offsetX2": 0,
  "offsetX3": 10,
  "offsetX4": 20,
 
  //length
  "offsetY1": 180,
  "offsetY2": 100,
  "offsetY3": 80,
  "offsetY4": 60,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 50,
  "arcY1": 150,
  "Astart": -HALF_PI-0.5,
  "Astop": HALF_PI+0.5
  },  

  "Q": {
  //yshift
  "offsetX1": 20,
  "offsetX2": 10,
  "offsetX3": 0,
  "offsetX4": 150,
 
  //length
  "offsetY1": 60,
  "offsetY2": 90,
  "offsetY3": 180,
  "offsetY4": 20,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 30,
  "arcY1": 150,
  "Astart": HALF_PI-0.5,
  "Astop": -HALF_PI+0.5
  },      

  "R": {
  //yshift
  "offsetX1": 0,
  "offsetX2": 20,
  "offsetX3": 0,
  "offsetX4": 10,
 
  //length
  "offsetY1": 100,
  "offsetY2": 20,
  "offsetY3": 20,
  "offsetY4": 20,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 60,
  "arcY1": 140,
  "Astart": 0+3,
  "Astop": PI+2.8
  },     

  "S": {
  //yshift
  "offsetX1": 60,
  "offsetX2": 80,
  "offsetX3": 0,
  "offsetX4": 10,
 
  //length
  "offsetY1": 20,
  "offsetY2": 20,
  "offsetY3": 100,
  "offsetY4": 20,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 50,
  "arcY1": 165,
  "Astart": 0+1.2,
  "Astop": PI+.4
  },     

  "T": {
  //yshift
  "offsetX1": 0,
  "offsetX2": 0,
  "offsetX3": -100,
  "offsetX4": 0,
 
  //length
  "offsetY1": 20,
  "offsetY2": 20,
  "offsetY3": 200,
  "offsetY4": 20,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 50,
  "arcY1": 135,
  "Astart": PI+.3,
  "Astop": 0-.3
  },    

  "U": {
  //yshift
  "offsetX1": 0,
  "offsetX2": 70,
  "offsetX3": 60,
  "offsetX4": 0,
 
  //length
  "offsetY1": 80,
  "offsetY2": 25,
  "offsetY3": 20,
  "offsetY4": 100,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 40,
  "arcY1": 150,
  "Astart": 0-.2,
  "Astop": PI-1
  },   

  "V": {
  //yshift
  "offsetX1": 0,
  "offsetX2": 40,
  "offsetX3": 80,
  "offsetX4": 0,
 
  //length
  "offsetY1": 30,
  "offsetY2": 30,
  "offsetY3": 20,
  "offsetY4": 60,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 58,
  "arcY1": 145,
  "Astart": 0+1.4,
  "Astop": PI+.8
  },

  "W": {
  //yshift
  "offsetX1": 0,
  "offsetX2": 40,
  "offsetX3": 40,
  "offsetX4": 0,
 
  //length
  "offsetY1": 100,
  "offsetY2": 30,
  "offsetY3": 30,
  "offsetY4": 100,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 50,
  "arcY1": 180,
  "Astart": PI+.2,
  "Astop": 0-.2
  },  

  "X": {
  //yshift
  "offsetX1": 0,
  "offsetX2": 20,
  "offsetX3": 20,
  "offsetX4": 0,
 
  //length
  "offsetY1": 100,
  "offsetY2": 60,
  "offsetY3": 60,
  "offsetY4": 100,

  //quad x positions
  "quadX1": 90,
  "quadX2": 90,
  "quadX3": 10,
  "quadX4": 10,

  //quad y positions
  "quadY1": 110,
  "quadY2": 190,
  "quadY3": 110,
  "quadY4": 190,

  //arc positions
  "arcX1": 15,
  "arcY1": 140,
  "Astart": PI+1.3,
  "Astop": 0+.4
  },     

  "Y": {
  //yshift
  "offsetX1": 0,
  "offsetX2": 60,
  "offsetX3": 80,
  "offsetX4": 0,
 
  //length
  "offsetY1": 150,
  "offsetY2": 100,
  "offsetY3": 100,
  "offsetY4": 180,

  //quad x positions
  "quadX1": 70,
  "quadX2": 70,
  "quadX3": 10,
  "quadX4": 10,

  //quad y positions
  "quadY1": 260,
  "quadY2": 205,
  "quadY3": 175,
  "quadY4": 230,

  //arc positions
  "arcX1": 50,
  "arcY1": 235,
  "Astart": 0+.8,
  "Astop": PI+.1
  },   

  "Z": {
  //yshift
  "offsetX1": 0,
  "offsetX2": 0,
  "offsetX3": 0,
  "offsetX4": 80,
 
  //length
  "offsetY1": 100,
  "offsetY2": 80,
  "offsetY3": 60,
  "offsetY4": 20,

  //quad x positions
  "quadX1": 50,
  "quadX2": 50,
  "quadX3": 10,
  "quadX4": 10,

  //quad y positions
  "quadY1": 145,
  "quadY2": 120,
  "quadY3": 120,
  "quadY4": 185,

  //arc positions
  "arcX1": 30,
  "arcY1": 140,
  "Astart": 0-.2,
  "Astop": PI-1.2
  }, 

  //numbers

  "0": {
  //yshift
  "offsetX1": -60,
  "offsetX2": -100,
  "offsetX3": -100,
  "offsetX4": -60,
 
  //length
  "offsetY1": 120,
  "offsetY2": 200,
  "offsetY3": 200,
  "offsetY4": 120,

  //quad x positions
  "quadX1": 0,
  "quadX2": 20,
  "quadX3": 20,
  "quadX4": 0,

  //quad y positions
  "quadY1": 30,
  "quadY2": 30,
  "quadY3": 10,
  "quadY4": 10,

  //arc positions
  "arcX1": 50,
  "arcY1": 40,
  "Astart": PI+0.3,
  "Astop": -QUARTER_PI+0.5
  },  

  "1": {
  //yshift
  "offsetX1": -60,
  "offsetX2": -80,
  "offsetX3": -100,
  "offsetX4": 80,
 
  //length
  "offsetY1": 160,
  "offsetY2": 180,
  "offsetY3": 200,
  "offsetY4": 20,

  //quad x positions
  "quadX1": 50,
  "quadX2": 50,
  "quadX3": 10,
  "quadX4": 10,

  //quad y positions
  "quadY1": 180,
  "quadY2": 40,
  "quadY3": 80,
  "quadY4": 180,

  //arc positions
  "arcX1": 60,
  "arcY1": 40,
  "Astart": PI+0.3,
  "Astop": -QUARTER_PI+0.5
  },    

  "2": {
  //yshift
  "offsetX1": -80,
  "offsetX2": -100,
  "offsetX3": -80,
  "offsetX4": 80,
 
  //length
  "offsetY1": 180,
  "offsetY2": 160,
  "offsetY3": 120,
  "offsetY4": 20,

  //quad x positions
  "quadX1": 50,
  "quadX2": 50,
  "quadX3": 10,
  "quadX4": 10,

  //quad y positions
  "quadY1": 100,
  "quadY2": 20,
  "quadY3": 50,
  "quadY4": 160,

  //arc positions
  "arcX1": 40,
  "arcY1": 40,
  "Astart": PI+0.3,
  "Astop": -QUARTER_PI+0.5  
  },   

  "3": {
  //yshift
  "offsetX1": -80,
  "offsetX2": -100,
  "offsetX3": -85,
  "offsetX4": -60,
 
  //length
  "offsetY1": 160,
  "offsetY2": 200,
  "offsetY3": 170,
  "offsetY4": 120,

  //quad x positions
  "quadX1": 80,
  "quadX2": -30,
  "quadX3": 80,
  "quadX4": -30,

  //quad y positions
  "quadY1": 170,
  "quadY2": 30,
  "quadY3": 30,
  "quadY4": 170,

  //arc positions
  "arcX1": 40,
  "arcY1": 40,
  "Astart": PI+0.3,
  "Astop": -QUARTER_PI+0.5  
  },   

  "4": {
  //yshift
  "offsetX1": -100,
  "offsetX2": 50,
  "offsetX3": 0,
  "offsetX4": 50,
 
  //length
  "offsetY1": 170,
  "offsetY2": 20,
  "offsetY3": 100,
  "offsetY4": 20,

  //quad x positions
  "quadX1": 30,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 30,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 20,
  "arcY1": 40,
  "Astart": PI+0.3,
  "Astop": -QUARTER_PI+0.5
  }, 

  "5": {
  //yshift
  "offsetX1": -100,
  "offsetX2": -100,
  "offsetX3": -100,
  "offsetX4": -100,
 
  //length
  "offsetY1": 190,
  "offsetY2": 200,
  "offsetY3": 185,
  "offsetY4": 160,

  //quad x positions
  "quadX1": 100,
  "quadX2": 100,
  "quadX3": 30,
  "quadX4": 30,

  //quad y positions
  "quadY1": 130,
  "quadY2": 20,
  "quadY3": 20,
  "quadY4": 115,

  //arc positions
  "arcX1": 60,
  "arcY1": 40,
  "Astart": PI+0.3,
  "Astop": -QUARTER_PI+0.5
  },   

  "6": {
  //yshift
  "offsetX1": -40,
  "offsetX2": -70,
  "offsetX3": -90,
  "offsetX4": -100,
 
  //length
  "offsetY1": 100,
  "offsetY2": 150,
  "offsetY3": 190,
  "offsetY4": 180,

  //quad x positions
  "quadX1": 100,
  "quadX2": 100,
  "quadX3": 30,
  "quadX4": 30,

  //quad y positions
  "quadY1": 150,
  "quadY2": 10,
  "quadY3": 60,
  "quadY4": 120,

  //arc positions
  "arcX1": 50,
  "arcY1": 40,
  "Astart": PI+0.3,
  "Astop": -QUARTER_PI+0.5  
  }, 

  "7": {
  //yshift
  "offsetX1": -100,
  "offsetX2": -100,
  "offsetX3": -100,
  "offsetX4": -100,
 
  //length
  "offsetY1": 20,
  "offsetY2": 20,
  "offsetY3": 20,
  "offsetY4": 200,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 70,
  "quadY2": 70,
  "quadY3": 50,
  "quadY4": 50,

  //arc positions
  "arcX1": 40,
  "arcY1": 40,
  "Astart": PI+0.3,
  "Astop": -QUARTER_PI+0.5
  }, 

  "8": {
  //yshift
  "offsetX1": -80,
  "offsetX2": -100,
  "offsetX3": -100,
  "offsetX4": -80,
 
  //length
  "offsetY1": 160,
  "offsetY2": 200,
  "offsetY3": 200,
  "offsetY4": 160,

  //quad x positions
  "quadX1": 90,
  "quadX2": 90,
  "quadX3": 10,
  "quadX4": 10,

  //quad y positions
  "quadY1": 60,
  "quadY2": 140,
  "quadY3": 60,
  "quadY4": 140,

  //arc positions
  "arcX1": 50,
  "arcY1": 40,
  "Astart": PI+0.3,
  "Astop": -QUARTER_PI+0.5
  }, 

  "9": {
  //yshift
  "offsetX1": -80,
  "offsetX2": -100,
  "offsetX3": -90,
  "offsetX4": -100,
 
  //length
  "offsetY1": 60,
  "offsetY2": 100,
  "offsetY3": 70,
  "offsetY4": 200,

  //quad x positions
  "quadX1": 20,
  "quadX2": 50,
  "quadX3": 50,
  "quadX4": 20,

  //quad y positions
  "quadY1": 120,
  "quadY2": 120,
  "quadY3": 100,
  "quadY4": 100,

  //arc positions
  "arcX1": 40,
  "arcY1": 40,
  "Astart": PI+0.3,
  "Astop": -QUARTER_PI+0.5
  },          
}