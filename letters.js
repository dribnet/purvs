
//CONSTANTS
const onex = 25;
const oney = 20;
const twox = 95;
const twoy = 20;
const threex = 15;
const threey = 100;
const fourx = 85;
const foury = 100;
const fivex = 5;
const fivey = 180;
const sixx = 75; 
const sixy = 180;

const alphabet = {
  "default": {
    "size": 40,
    "offsetx": 0,
    "offsety": 0
  },

//P1 = 25, 20
//P2 = 95, 20
//P3 = 15, 100
//P4 = 85, 100
//P5 = 5, 180
//P6 = 75, 180



  "A": {

    "p1x": 'null',
    "p1y": 'null',
    "p2x": fourx,
    "p2y": foury,
    "p3x": twox,
    "p3y": twoy,
    "p4x": threex,
    "p4y": threey,
    "p5x": threex,
    "p5y": threey,
    "p6x": fourx,
    "p6y": foury,

  },
  "B": {
    
    "p1x": fourx,
    "p1y": foury,
    "p2x": 'null',
    "p2y": 'null',
    "p3x": fourx,
    "p3y": foury,
    "p4x": fivex,
    "p4y": fivey,
    "p5x": onex,
    "p5y": oney,
    "p6x": 'null',
    "p6y": 'null'

 },
  "C": {
    
    "p1x": threex,
    "p1y": threey,
    "p2x": onex,
    "p2y": oney,
    "p3x": fivex,
    "p3y": fivey,
    "p4x": 'null',
    "p4y": 'null',
    "p5x": sixx,
    "p5y": sixy,
    "p6x": sixx,
    "p6y": sixy

  },
  "D":{
    
    "p1x": fourx,
    "p1y": foury,
    "p2x": 'null',
    "p2y": 'null',
    "p3x": onex,
    "p3y": oney,
    "p4x": sixx,
    "p4y": sixy,
    "p5x": threex,
    "p5y": threey,
    "p6x": fivex,
    "p6y": fivey

  },
  "E":{
    
    "p1x": threex,
    "p1y": threey,
    "p2x": onex,
    "p2y": oney,
    "p3x": fivex,
    "p3y": fivey,
    "p4x": threex,
    "p4y": threey,
    "p5x": fivex,
    "p5y": fivey,
    "p6x": fivex,
    "p6y": fivey

  },
  "F": {
    
    "p1x": threex,
    "p1y": threey,
    "p2x": onex,
    "p2y": oney,
    "p3x": fivex,
    "p3y": fivey,
    "p4x": threex,
    "p4y": threey,
    "p5x": fivex,
    "p5y": fivey,
    "p6x": 'null',
    "p6y": 'null'

  },
  "G": {
    
    "p1x": threex,
    "p1y": threey,
    "p2x": onex,
    "p2y": oney,
    "p3x": fivex,
    "p3y": fivey,
    "p4x": fourx,
    "p4y": foury,
    "p5x": sixx,
    "p5y": sixy,
    "p6x": fourx,
    "p6y": foury

  },
  "H": {
    
    "p1x": threex,
    "p1y": threey,
    "p2x": sixx,
    "p2y": sixy,
    "p3x": fivex,
    "p3y": fivey,
    "p4x": threex,
    "p4y": threey,
    "p5x": fivex,
    "p5y": fivey,
    "p6x": sixx,
    "p6y": sixy
  },
  "I": {
    
    "p1x": threex,
    "p1y": threey,
    "p2x": 'null',
    "p2y": 'null',
    "p3x": fivex,
    "p3y": fivey,
    "p4x": 'null',
    "p4y": 'null',
    "p5x": fivex,
    "p5y": fivey,
    "p6x": 'null',
    "p6y": 'null'
  },
  "J": {
    
    "p1x": 'null',
    "p1y": 'null',
    "p2x": fourx,
    "p2y": foury,
    "p3x": threex,
    "p3y": threey,
    "p4x": fivex,
    "p4y": fivey,
    "p5x": threex,
    "p5y": threey,
    "p6x": 'null',
    "p6y": 'null'
  },
  "K": {
    
    "p1x": threex,
    "p1y": threey,
    "p2x": fivex,
    "p2y": fivey,
    "p3x": fivex,
    "p3y": fivey,
    "p4x": 'null',
    "p4y": 'null',
    "p5x": threex,
    "p5y": threey,
    "p6x": onex,
    "p6y": oney
    
  },
  "L": {
    
    "p1x": threex,
    "p1y": threey,
    "p2x": 'null',
    "p2y": 'null',
    "p3x": fivex,
    "p3y": fivey,
    "p4x": 'null',
    "p4y": 'null',
    "p5x": sixx,
    "p5y": sixy,
    "p6x": sixx,
    "p6y": sixy
  },
  "M": {

    "p1x": sixx,
    "p1y": sixy,
    "p2x": fivex,
    "p2y": fivey,
    "p3x": onex,
    "p3y": oney,
    "p4x": twox,
    "p4y": twoy,
    "p5x": fivex,
    "p5y": fivey,
    "p6x": sixx,
    "p6y": sixy

  },
  "N": {
    
    "p1x": threex,
    "p1y": threey,
    "p2x": fourx,
    "p2y": foury,
    "p3x": fivex,
    "p3y": fivey,
    "p4x": sixx,
    "p4y": sixy,
    "p5x": onex,
    "p5y": oney,
    "p6x": onex,
    "p6y": oney

  },
  "O": {
    
    "p1x": twox,
    "p1y": twoy,
    "p2x": fourx,
    "p2y": foury,
    "p3x": onex,
    "p3y": oney,
    "p4x": sixx,
    "p4y": sixy,
    "p5x": threex,
    "p5y": threey,
    "p6x": fivex,
    "p6y": fivey
  },
  "P": {
    
    "p1x": twox,
    "p1y": twoy,
    "p2x": fourx,
    "p2y": foury,
    "p3x": onex,
    "p3y": oney,
    "p4x": threex,
    "p4y": threey,
    "p5x": threex,
    "p5y": threey,
    "p6x": 'null',
    "p6y": 'null'
  },
  "Q": {

    "p1x": fivex,
    "p1y": fivey,
    "p2x": onex,
    "p2y": oney,
    "p3x": sixx,
    "p3y": sixy,
    "p4x": fourx,
    "p4y": foury,
    "p5x": sixx,
    "p5y": sixy,
    "p6x": twox,
    "p6y": twoy

  },
  "R": {
    
    "p1x": twox,
    "p1y": twoy,
    "p2x": fourx,
    "p2y": foury,
    "p3x": onex,
    "p3y": oney,
    "p4x": threex,
    "p4y": threey,
    "p5x": threex,
    "p5y": threey,
    "p6x": onex,
    "p6y": oney
  },
  "S": {
   
    "p1x": sixx,
    "p1y": sixy,
    "p2x": onex,
    "p2y": oney,
    "p3x": 'null',
    "p3y": 'null',
    "p4x": 'null',
    "p4y": 'null',
    "p5x": sixx,
    "p5y": sixy,
    "p6x": sixx,
    "p6y": sixy
  },
  "T": {
    
    "p1x": 'null',
    "p1y": 'null',
    "p2x": fivex,
    "p2y": fivey,
    "p3x": 'null',
    "p3y": 'null',
    "p4x": threex,
    "p4y": threey,
    "p5x": sixx,
    "p5y": sixy,
    "p6x": sixx,
    "p6y": sixy
  },
  "U": {
    
    "p1x": threex,
    "p1y": threey,
    "p2x": twox,
    "p2y": twoy,
    "p3x": fivex,
    "p3y": fivey,
    "p4x": twox,
    "p4y": twoy,
    "p5x": sixx,
    "p5y": sixy,
    "p6x": fourx,
    "p6y": foury

  },
  "V": {
    
    "p1x": threex,
    "p1y": threey,
    "p2x": twox,
    "p2y": twoy,
    "p3x": fivex,
    "p3y": fivey,
    "p4x": 'null',
    "p4y": 'null',
    "p5x": twox,
    "p5y": twoy,
    "p6x": 'null',
    "p6y": 'null'
  },
  "W": {
    
    "p1x": onex,
    "p1y": oney,
    "p2x": twox,
    "p2y": twoy,
    "p3x": fivex,
    "p3y": fivey,
    "p4x": sixx,
    "p4y": sixy,
    "p5x": twox,
    "p5y": twoy,
    "p6x": onex,
    "p6y": oney

  },
  "X": {
    
    "p1x": sixx,
    "p1y": sixy,
    "p2x": fivex,
    "p2y": fivey,
    "p3x": 'null',
    "p3y": 'null',
    "p4x": 'null',
    "p4y": 'null',
    "p5x": fivex,
    "p5y": fivey,
    "p6x": sixx,
    "p6y": sixy

  },
  "Y":{
    
    "p1x": fourx,
    "p1y": foury,
    "p2x": fourx,
    "p2y": foury,
    "p3x": 'null',
    "p3y": 'null',
    "p4x": sixx,
    "p4y": sixy,
    "p5x": 'null',
    "p5y": 'null',
    "p6x": 'null',
    "p6y": 'null'
    
  },
  "Z": {
    
    "p1x": twox,
    "p1y": twoy,
    "p2x": fivex,
    "p2y": fivey,
    "p3x": 'null',
    "p3y": 'null',
    "p4x": 'null',
    "p4y": 'null',
    "p5x": sixx,
    "p5y": sixy,
    "p6x": sixx,
    "p6y": sixy
  },

  //NUMBERS

  "0": {
    "p1x": twox,
    "p1y": twoy,
    "p2x": fourx,
    "p2y": foury,
    "p3x": twox,
    "p3y": twoy,
    "p4x": sixx,
    "p4y": sixy,
    "p5x": onex,
    "p5y": oney,
    "p6x": fivex,
    "p6y": fivey
  },
  "1": {
    "p1x": 'null',
    "p1y": 'null',
    "p2x": fourx,
    "p2y": foury,
    "p3x": twox,
    "p3y": twoy,
    "p4x": sixx,
    "p4y": sixy,
    "p5x": sixx,
    "p5y": sixy,
    "p6x": sixx,
    "p6y": sixy,
  },
  "2": {
    "p1x": twox,
    "p1y": twoy,
    "p2x": fourx,
    "p2y": foury,
    "p3x": fourx,
    "p3y": foury,
    "p4x": fourx,
    "p4y": foury,
    "p5x": threex,
    "p5y": threey,
    "p6x": fivex,
    "p6y": fivey
  },
  "3": {
    "p1x": twox,
    "p1y": twoy,
    "p2x": fourx,
    "p2y": foury,
    "p3x": fourx,
    "p3y": foury,
    "p4x": sixx,
    "p4y": sixy,
    "p5x": fivex,
    "p5y": fivey,
    "p6x": fivex,
    "p6y": fivey
  },
  "4": {
    "p1x": 'null',
    "p1y": 'null',
    "p2x": fourx,
    "p2y": foury,
    "p3x": twox,
    "p3y": twoy,
    "p4x": threex,
    "p4y": threey,
    "p5x": 'null',
    "p5y": 'null',
    "p6x": fourx,
    "p6y": foury
  },
  "5": {
    "p1x": threex,
    "p1y": threey,
    "p2x": onex,
    "p2y": oney,
    "p3x": fourx,
    "p3y": foury,
    "p4x": sixx,
    "p4y": sixy,
    "p5x": fivex,
    "p5y": fivey,
    "p6x": fivex,
    "p6y": fivey
  },
  "6": {
    "p1x": fivex,
    "p1y": fivey,
    "p2x": onex,
    "p2y": oney,
    "p3x": fourx,
    "p3y": foury,
    "p4x": sixx,
    "p4y": sixy,
    "p5x": fourx,
    "p5y": foury,
    "p6x": fivex,
    "p6y": fivey
  },
  "7": {
    "p1x": twox,
    "p1y": twoy,
    "p2x": fivex,
    "p2y": fivey,
    "p3x": fourx,
    "p3y": foury,
    "p4x": fourx,
    "p4y": foury,
    "p5x": fivex,
    "p5y": fivey,
    "p6x": 'null',
    "p6y": 'null'
  },
  "8": {
    "p1x": fivex,
    "p1y": fivey,
    "p2x": onex,
    "p2y": oney,
    "p3x": twox,
    "p3y": twoy,
    "p4x": threex,
    "p4y": threey,
    "p5x": sixx,
    "p5y": sixy,
    "p6x": twox,
    "p6y": twoy
  },
  "9": {
    "p1x": threex,
    "p1y": threey,
    "p2x": onex,
    "p2y": oney,
    "p3x": twox,
    "p3y": twoy,
    "p4x": threex,
    "p4y": threey,
    "p5x": sixx,
    "p5y": sixy,
    "p6x": twox,
    "p6y": twoy
  },
  //null character
  "?": {
    "p1x": twox,
    "p1y": twoy,
    "p2x": sixx,
    "p2y": sixy,
    "p3x": twox,
    "p3y": twoy,
    "p4x": onex,
    "p4y": oney,
    "p5x": onex,
    "p5y": oney,
    "p6x": fivex,
    "p6y": fivey
  }


}
