## PS2 MDDN 242 2018

I have made a massive change to what I was orignally going towards in terms of design. Instead of drawing lines based on a dot coordinate system, I have decided to remove the lines and abstract the letters using just the dots alone to create the outline of the letters. This makes it somewhat difficult to read at times when they're all sitting next to each other, but I believe when they are by themselves, then they will be much easier to read.

The 11 parameters per letter are now simply whether or not the dot appears via a hide/show variable.
The var hide has a size for the ellipse set to 0, where the show is set to 10.
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
