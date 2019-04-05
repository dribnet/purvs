## PS2 MDDN 242 2019

I added the exhibition.html to my index.html and called my font "division" because of the lines.

I got the arcs working with some help from hazel (ty). I changed the opacity so that they are less harsh.

Here are my new parameters for the arcs that now work. I made the width and height constants the same so that I can change the start and stop of the arc, specified in radians. This takes my parameters up to 20.

  let Xarc1 = letterData["arcX1"];
  let Yarc1 = letterData["arcY1"];

  let arcStart = letterData["Astart"];
  let arcStop = letterData["Astop"];

  I added all of the arcs today and I think it looks a lot better. I tried to differentiate the numbers by giving them all little arc hats. This also works because they are different sizes and this wouldn't work with the constant arc width and height.
