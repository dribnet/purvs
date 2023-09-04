const alphabet = {

  "default": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },
  "A": {
    // 1triangle
    "tx1":0,
    "ty1": -100,
    "tx2": 50,
    "ty2":0,
    "tx3": -50,
    "ty3": 0,

  // 2rect
    "rx1":30,
    "ry1": 50,
    "rw1":30,
    "rh1":80,

    "rx2":-30,
    "ry2":50,
    "rw2":30,
    "rh2":80,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":100,
    "ah1":100,
    "angle1":180,
    "angle2":0,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":55,
    "ah2":70,
    "angle3":180,
    "angle4":0,
  },
  "B": {
    // 1triangle
    "tx1":-5,
    "ty1": -80,
    "tx2": 55,
    "ty2":-40,
    "tx3": -5,
    "ty3": 0,

  // 2rect
    "rx1":-35,
    "ry1": -40,
    "rw1":25,
    "rh1":90,

    "rx2":-35,
    "ry2":50,
    "rw2":25,
    "rh2":90,

    // 1arch
    "ax1":-5,
    "ay1":35,
    "aw1":120,
    "ah1":120,
    "angle1":270,
    "angle2":90,

    // 2arch
    "ax2":-5,
    "ay2":35,
    "aw2":100,
    "ah2":80,
    "angle3":270,
    "angle4":90,
  },
  "C": {
    // 1triangle
    "tx1":47,
    "ty1": -80,
    "tx2": 47,
    "ty2":80,
    "tx3": -50,
    "ty3": 0,

    // 2rect
      "rx1":0,
      "ry1":0,
      "rw1":0,
      "rh1":0,

      "rx2":0,
      "ry2":0,
      "rw2":0,
      "rh2":0,

    // 1arch
    "ax1":38,
    "ay1":0,
    "aw1":190,
    "ah1":167,
    "angle1":90,
    "angle2":270,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,

  },
  "D": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

    // 2rect
      "rx1":-30,
      "ry1": -40,
      "rw1":35,
      "rh1":85,

      "rx2":-30,
      "ry2":40,
      "rw2":35,
      "rh2":85,

    // O1arch
    "ax1":-33,
    "ay1":0,
    "aw1":170,
    "ah1":167,
    "angle1":270,
    "angle2":90,

    // 2arch
    "ax2":-33,
    "ay2":0,
    "aw2":100,
    "ah2":107,
    "angle3":270,
    "angle4":90,
  },
  "E": {
    // 1triangle
    "tx1":-33,
    "ty1": -20,
    "tx2": 40,
    "ty2":0,
    "tx3": -33,
    "ty3": 30,

  // 2rect
    "rx1":0,
    "ry1":70,
    "rw1":90,
    "rh1":25,

    "rx2":0,
    "ry2":-70,
    "rw2":90,
    "rh2":25,

    // 1arch
    "ax1":-25,
    "ay1":0,
    "aw1":55,
    "ah1":155,
    "angle1":90,
    "angle2":270,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  },
  "F": {
    // 1triangle
    "tx1":-33,
    "ty1": -20,
    "tx2": 40,
    "ty2":0,
    "tx3": -33,
    "ty3": 30,

  // 2rect
    "rx1":0,
    "ry1": -70,
    "rw1":90,
    "rh1":25,

    "rx2":0,
    "ry2":0,
    "rw2":0,
    "rh2":0,

    // 1arch
    "ax1":-25,
    "ay1":0,
    "aw1":55,
    "ah1":155,
    "angle1":90,
    "angle2":270,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  },
  "G": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

    // 2rect
      "rx1":15,
      "ry1":5,
      "rw1":70,
      "rh1":30,

      "rx2":35,
      "ry2":50,
      "rw2":30,
      "rh2":60,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":100,
    "ah1":160,
    "angle1":90,
    "angle2":270,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":60,
    "ah2":100,
    "angle3":90,
    "angle4":270,
  },
  "H": {
    // 1triangle
    "tx1":0,
    "ty1":-28,
    "tx2":45,
    "ty2":0,
    "tx3": -45,
    "ty3": 0,

  // 2rect
    "rx1":30,
    "ry1":0,
    "rw1":30,
    "rh1":160,

    "rx2":-30,
    "ry2":0,
    "rw2":30,
    "rh2":160,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":0,
    "ah1":0,
    "angle1":0,
    "angle2":0,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  },
  "I": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

  // 2rect
    "rx1":0,
    "ry1":-43,
    "rw1":50,
    "rh1":90,

    "rx2":0,
    "ry2":43,
    "rw2":50,
    "rh2":90,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":0,
    "ah1":0,
    "angle1":0,
    "angle2":0,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  },
  "J": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

  // 2rect
  "rx1":20,
  "ry1":-47,
  "rw1":45,
  "rh1":70,

  "rx2":20,
  "ry2":23,
  "rw2":45,
  "rh2":70,

    // 1arch
    "ax1":3,
    "ay1":50,
    "aw1":80,
    "ah1":80,
    "angle1":0,
    "angle2":180,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  },
  "K": {
    // 1triangle
    "tx1":-5,
    "ty1": 85,
    "tx2": 50,
    "ty2":85,
    "tx3": -5,
    "ty3": 0,

  // 2rect
    "rx1":-35,
    "ry1": -40,
    "rw1":25,
    "rh1":90,

    "rx2":-35,
    "ry2":45,
    "rw2":25,
    "rh2":80,

    // 1arch
    "ax1":20,
    "ay1":-42,
    "aw1":60,
    "ah1":60,
    "angle1":0,
    "angle2":360,

    // 2arch
    "ax2":20,
    "ay2":-42,
    "aw2":40,
    "ah2":40,
    "angle3":0,
    "angle4":360,
  },
  "L": {
    // 1triangle
    "tx1":-33,
    "ty1": 63,
    "tx2": 47,
    "ty2":63,
    "tx3": -33,
    "ty3": 0,

  // 2rect
    "rx1":-35,
    "ry1":0,
    "rw1":25,
    "rh1":170,

    "rx2":0,
    "ry2":75,
    "rw2":95,
    "rh2":25,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":0,
    "ah1":0,
    "angle1":0,
    "angle2":0,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  },
  "M": {
    // 1triangle
    "tx1":0,
    "ty1":80,
    "tx2":35,
    "ty2":-80,
    "tx3": -35,
    "ty3": -80,

  // 2rect
    "rx1":30,
    "ry1":0,
    "rw1":30,
    "rh1":160,

    "rx2":-30,
    "ry2":0,
    "rw2":30,
    "rh2":160,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":0,
    "ah1":0,
    "angle1":0,
    "angle2":0,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  },
  "N": {
    // 1triangle
    "tx1":-15,
    "ty1":80,
    "tx2":45,
    "ty2":80,
    "tx3": -15,
    "ty3": -80,

  // 2rect
    "rx1":30,
    "ry1":0,
    "rw1":30,
    "rh1":160,

    "rx2":-30,
    "ry2":0,
    "rw2":30,
    "rh2":160,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":0,
    "ah1":0,
    "angle1":0,
    "angle2":0,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  },
  "O": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

    // 2rect
      "rx1":0,
      "ry1":0,
      "rw1":0,
      "rh1":0,

      "rx2":0,
      "ry2":0,
      "rw2":0,
      "rh2":0,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":100,
    "ah1":160,
    "angle1":0,
    "angle2":360,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":60,
    "ah2":160,
    "angle3":0,
    "angle4":360,
  },
  "P": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

    // 2rect
      "rx1":-25,
      "ry1":0,
      "rw1":40,
      "rh1":170,

      "rx2":-25,
      "ry2":0,
      "rw2":20,
      "rh2":170,

      // 1arch
      "ax1":5,
      "ay1":-40,
      "aw1":80,
      "ah1":80,
      "angle1":0,
      "angle2":360,

      // 2arch
      "ax2":-5,
      "ay2":-40,
      "aw2":60,
      "ah2":60,
      "angle3":270,
      "angle4":90,
  },
  "Q": {
    // 1triangle
    "tx1":50,
    "ty1":-5,
    "tx2":50,
    "ty2":80,
    "tx3": -15,
    "ty3": -5,

    // 2rect
      "rx1":0,
      "ry1":0,
      "rw1":0,
      "rh1":0,

      "rx2":0,
      "ry2":0,
      "rw2":0,
      "rh2":0,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":100,
    "ah1":160,
    "angle1":55,
    "angle2":360,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":60,
    "ah2":100,
    "angle3":55,
    "angle4":360,
  },
  "R": {
    // 1triangle
    "tx1":-20,
    "ty1":80,
    "tx2":45,
    "ty2":80,
    "tx3": -20,
    "ty3": -80,

    // 2rect
      "rx1":-20,
      "ry1":0,
      "rw1":40,
      "rh1":160,

      "rx2":-20,
      "ry2":0,
      "rw2":40,
      "rh2":85,

    // 1arch
    "ax1":-33,
    "ay1":-30,
    "aw1":170,
    "ah1":100,
    "angle1":270,
    "angle2":90,
  },
  "S": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

    // 2rect
      "rx1":0,
      "ry1":0,
      "rw1":0,
      "rh1":0,

      "rx2":0,
      "ry2":0,
      "rw2":0,
      "rh2":0,

    // 1arch
    "ax1":5,
    "ay1":-30,
    "aw1":110,
    "ah1":110,
    "angle1":90,
    "angle2":270,

    // 2arch
    "ax2":-5,
    "ay2":30,
    "aw2":110,
    "ah2":100,
    "angle3":270,
    "angle4":90,
  },
  "T": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

    // 2rect
      "rx1":0,
      "ry1":-65,
      "rw1":90,
      "rh1":35,

      "rx2":0,
      "ry2":10,
      "rw2":35,
      "rh2":150,

      // 1arch
      "ax1":0,
      "ay1":0,
      "aw1":0,
      "ah1":0,
      "angle1":0,
      "angle2":0,

      // 2arch
      "ax2":0,
      "ay2":0,
      "aw2":0,
      "ah2":0,
      "angle3":0,
      "angle4":0,
  },
  "U": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

    // 2rect
      "rx1":30,
      "ry1":-15,
      "rw1":35,
      "rh1":120,

      "rx2":-30,
      "ry2":-15,
      "rw2":35,
      "rh2":120,

      // 1arch
      "ax1":0,
      "ay1":25,
      "aw1":96,
      "ah1":120,
      "angle1":0,
      "angle2":900,

      // 2arch
      "ax2":0,
      "ay2":25,
      "aw2":65,
      "ah2":80,
      "angle3":0,
      "angle4":900,
  },
  "V": {
    // 1triangle
    "tx1":0,
    "ty1":85,
    "tx2":35,
    "ty2":-80,
    "tx3": -35,
    "ty3": -80,

  // 2rect
    "rx1":0,
    "ry1":0,
    "rw1":0,
    "rh1":0,

    "rx2":0,
    "ry2":0,
    "rw2":0,
    "rh2":0,

    // 1arch
    "ax1":0,
    "ay1":-65,
    "aw1":90,
    "ah1":300,
    "angle1":0,
    "angle2":900,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  },
  "W": {
    // 1triangle
    "tx1":0,
    "ty1":-80,
    "tx2":35,
    "ty2":80,
    "tx3":-35,
    "ty3": 80,

  // 2rect
    "rx1":30,
    "ry1":0,
    "rw1":30,
    "rh1":160,

    "rx2":-30,
    "ry2":0,
    "rw2":30,
    "rh2":160,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":0,
    "ah1":0,
    "angle1":0,
    "angle2":0,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  },
  "X": {
    // 1triangle
    "tx1":0,
    "ty1":80,
    "tx2":35,
    "ty2":-80,
    "tx3":-35,
    "ty3":-80,

  // 2rect
    "rx1":0,
    "ry1":0,
    "rw1":0,
    "rh1":0,

    "rx2":0,
    "ry2":0,
    "rw2":0,
    "rh2":0,

    // 1arch
    "ax1":0,
    "ay1":80,
    "aw1":90,
    "ah1":200,
    "angle1":180,
    "angle2":0,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":50,
    "ah2":50,
    "angle3":0,
    "angle4":360,
  },
  "Y": {
    // 1triangle
    "tx1":0,
    "ty1":80,
    "tx2":35,
    "ty2":-80,
    "tx3":-35,
    "ty3":-80,

  // 2rect
    "rx1":0,
    "ry1":40,
    "rw1":50,
    "rh1":90,

    "rx2":0,
    "ry2":37,
    "rw2":35,
    "rh2":80,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":0,
    "ah1":0,
    "angle1":0,
    "angle2":0,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  },
  "Z": {
    // 1triangle
    "tx1":-15,
    "ty1":45,
    "tx2":45,
    "ty2":45,
    "tx3":45,
    "ty3":-80,

  // 2rect
    "rx1":0,
    "ry1":65,
    "rw1":90,
    "rh1":40,

    "rx2":0,
    "ry2":-65,
    "rw2":90,
    "rh2":30,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":0,
    "ah1":0,
    "angle1":0,
    "angle2":0,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  },
  "0": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

    // 2rect
      "rx1":0,
      "ry1":0,
      "rw1":0,
      "rh1":0,

      "rx2":0,
      "ry2":0,
      "rw2":0,
      "rh2":0,

    // 1arch
    "ax1":0,
    "ay1":0,
    "aw1":100,
    "ah1":160,
    "angle1":0,
    "angle2":360,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":60,
    "ah2":100,
    "angle3":0,
    "angle4":360,
  },
  "1": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

    // 2rect
      "rx1":0,
      "ry1":0,
      "rw1":45,
      "rh1":170,

      "rx2":0,
      "ry2":0,
      "rw2":25,
      "rh2":120,

      // 1arch
      "ax1":0,
      "ay1":0,
      "aw1":0,
      "ah1":0,
      "angle1":0,
      "angle2":0,

      // 2arch
      "ax2":0,
      "ay2":0,
      "aw2":0,
      "ah2":0,
      "angle3":0,
      "angle4":0,
  },
  "2": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

    // 2rect
      "rx1":0,
      "ry1":68,
      "rw1":70,
      "rh1":37,

      "rx2":0,
      "ry2":68,
      "rw2":70,
      "rh2":20,

    // 1arch
    "ax1":-35,
    "ay1":0,
    "aw1":145,
    "ah1":170,
    "angle1":270,
    "angle2":90,

    // 2arch
    "ax2":-35,
    "ay2":0,
    "aw2":90,
    "ah2":100,
    "angle3":270,
    "angle4":90,
  },
  "3": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

    // 2rect
      "rx1":0,
      "ry1":0,
      "rw1":0,
      "rh1":0,

      "rx2":0,
      "ry2":0,
      "rw2":0,
      "rh2":0,

    // 1arch
    "ax1":-20,
    "ay1":-40,
    "aw1":110,
    "ah1":85,
    "angle1":270,
    "angle2":90,

    // 2arch
    "ax2":-20,
    "ay2":40,
    "aw2":120,
    "ah2":85,
    "angle3":270,
    "angle4":90,
  },
  "4": {
    // 1triangle
    "tx1":-50,
    "ty1":-20,
    "tx2":36,
    "ty2":-20,
    "tx3":36,
    "ty3":-80,

    // 2rect
      "rx1":23,
      "ry1":15,
      "rw1":25,
      "rh1":120,

      "rx2":0,
      "ry2":15,
      "rw2":25,
      "rh2":120,

      // 1arch
      "ax1":0,
      "ay1":0,
      "aw1":0,
      "ah1":0,
      "angle1":0,
      "angle2":0,

      // 2arch
      "ax2":0,
      "ay2":0,
      "aw2":0,
      "ah2":0,
      "angle3":0,
      "angle4":0,
  },
  "5": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

  // 2rect
    "rx1":-10,
    "ry1": -20,
    "rw1":25,
    "rh1":120,

    "rx2":0,
    "ry2":-40,
    "rw2":50,
    "rh2":25,

    // 1arch
    "ax1":0,
    "ay1":45,
    "aw1":87,
    "ah1":87,
    "angle1":0,
    "angle2":360,

    // 2arch
    "ax2":0,
    "ay2":45,
    "aw2":50,
    "ah2":50,
    "angle3":0,
    "angle4":360,
  },
  "6": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

  // 2rect
    "rx1":-10,
    "ry1": -20,
    "rw1":25,
    "rh1":120,

    "rx2":0,
    "ry2":0,
    "rw2":0,
    "rh2":0,

    // 1arch
    "ax1":0,
    "ay1":45,
    "aw1":87,
    "ah1":87,
    "angle1":0,
    "angle2":360,

    // 2arch
    "ax2":0,
    "ay2":45,
    "aw2":50,
    "ah2":50,
    "angle3":0,
    "angle4":360,
  },
  "7": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

    // 2rect
      "rx1":0,
      "ry1":-65,
      "rw1":90,
      "rh1":35,

      "rx2":28,
      "ry2":10,
      "rw2":35,
      "rh2":150,

      // 1arch
      "ax1":0,
      "ay1":0,
      "aw1":0,
      "ah1":0,
      "angle1":0,
      "angle2":0,

      // 2arch
      "ax2":0,
      "ay2":0,
      "aw2":0,
      "ah2":0,
      "angle3":0,
      "angle4":0,
  },
  "8": {
    // 1triangle
    "tx1":0,
    "ty1":0,
    "tx2":0,
    "ty2":0,
    "tx3":0,
    "ty3":0,

  // 2rect
    "rx1":0,
    "ry1":-37,
    "rw1":45,
    "rh1":45,

    "rx2":0,
    "ry2":-37,
    "rw2":30,
    "rh2":30,

    // 1arch
    "ax1":0,
    "ay1":-39,
    "aw1":83,
    "ah1":88,
    "angle1":0,
    "angle2":360,

    // 2arch
    "ax2":0,
    "ay2":39,
    "aw2":87,
    "ah2":95,
    "angle3":0,
    "angle4":360,
  },
  "9": {
    // 1triangle
    "tx1":-30,
    "ty1":86,
    "tx2":23,
    "ty2":86,
    "tx3":23,
    "ty3":-60,

  // 2rect
    "rx1":0,
    "ry1":-37,
    "rw1":45,
    "rh1":45,

    "rx2":0,
    "ry2":-37,
    "rw2":30,
    "rh2":30,

    // 1arch
    "ax1":0,
    "ay1":-39,
    "aw1":83,
    "ah1":88,
    "angle1":0,
    "angle2":360,

    // 2arch
    "ax2":0,
    "ay2":0,
    "aw2":0,
    "ah2":0,
    "angle3":0,
    "angle4":0,
  }

}
