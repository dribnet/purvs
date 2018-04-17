## PS2 MDDN 242 2018

The alphabet created here uses a series of dots in order to spell out the letters and numbers. Some of the letters have the same shape as others, which could make it somewhat hard to read, however I believe when the letters are formed into a word, it should be legible. The idea reminds me quite a bit of braille, which I am tempted to make another version of this to create a braille maker.

The 11 parameters per letter are simply whether or not the dot appears via a hide/show variable.
The var hide has a size for the ellipse set to 0, where the show is set to 20.
Below is an example of the parameters for the letter A.
	
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

This design has allowed for extremely simple code, where originally, I would have had to use a series of arrays in order to draw what I wanted. This code, since it is so simple, doesn't really have many functions being used, and allows for easy conversion into just about any shape wanted.