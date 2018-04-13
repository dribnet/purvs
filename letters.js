var show = 20;
var hide = 0;

const alphabet = {
  "default": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "A": {
      "dot1": hide,
      "dot2": show,
      "dot3": hide,
      "dot4": show,
      "dot5": show,
      "dot6": show,
      "dot7": show,
      "dot8": hide,
      "dot9": show,

      "dotm1": hide,
      "dotm2": hide
  },
  "B": {
      "dot1": show,
      "dot2": hide,
      "dot3": hide,
      "dot4": show,
      "dot5": hide,
      "dot6": hide,
      "dot7": show,
      "dot8": hide,
      "dot9": hide,

      "dotm1": show,
      "dotm2": show
  },
  "C": {
      "dot1": hide,
      "dot2": show,
      "dot3": show,
      "dot4": show,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": show,
      "dot9": show,

      "dotm1": hide,
      "dotm2": hide
  },
  "D": {
      "dot1": show,
      "dot2": hide,
      "dot3": hide,
      "dot4": show,
      "dot5": hide,
      "dot6": show,
      "dot7": show,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "E": {
      "dot1": show,
      "dot2": show,
      "dot3": hide,
      "dot4": show,
      "dot5": show,
      "dot6": hide,
      "dot7": show,
      "dot8": show,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "F": {
      "dot1": show,
      "dot2": show,
      "dot3": hide,
      "dot4": show,
      "dot5": show,
      "dot6": hide,
      "dot7": show,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "G": {
      "dot1": hide,
      "dot2": show,
      "dot3": show,
      "dot4": show,
      "dot5": show,
      "dot6": show,
      "dot7": hide,
      "dot8": show,
      "dot9": show,

      "dotm1": hide,
      "dotm2": hide
  },
  "H": {
      "dot1": show,
      "dot2": hide,
      "dot3": show,
      "dot4": show,
      "dot5": show,
      "dot6": show,
      "dot7": show,
      "dot8": hide,
      "dot9": show,

      "dotm1": hide,
      "dotm2": hide
  },
  "I": {
      "dot1": show,
      "dot2": show,
      "dot3": show,
      "dot4": hide,
      "dot5": show,
      "dot6": hide,
      "dot7": show,
      "dot8": show,
      "dot9": show,

      "dotm1": hide,
      "dotm2": hide
  },
  "J": {
      "dot1": show,
      "dot2": show,
      "dot3": show,
      "dot4": hide,
      "dot5": show,
      "dot6": hide,
      "dot7": show,
      "dot8": show,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "K": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "L": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "M": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "N": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "O": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "P": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "Q": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "R": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "S": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "T": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "U": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },
  "V": {
      "dot1": hide,
      "dot2": hide,
      "dot3": hide,
      "dot4": hide,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": hide,
      "dot9": hide,

      "dotm1": hide,
      "dotm2": hide
  },


}