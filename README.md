## MDDN 242 2020 Assignment

-EYECANDY-

My final font is based off sweet candies/lollies, with each letter consisting of 2 circles and 3 lines. Each letter consists of 16 parameters.

The 4 parameters for circles per letter:

- circ : The radius of the foreground circle (main font circle base).
- circ2 : The radius of the background circle (shadow of foreground circle).
- circ2X : X position of background circle.
- circ2Y: Y position of background circle.

The 12 parameters for lines per letter:

- lineX : x1 point of 1st line
- lineY : y1 point of 1st line      
- linex2 : x2 point of 1st line
- liney2 : y2 point of 1st line

- lineX1 : x1 point of 2nd line
- lineY1 : y1 point of 2nd line
- lineX2 : x2 point of 2nd line
- lineY2 : y2 point of 2nd line

- lineX3 : x1 point of 3rd line
- lineY3 : y1 point of 3rd line
- lineX4 : x2 point of 3rd line
- lineY4 : y2 point of 3rd line

Process:

The initial idea for the font was the design of the morse code, just something along the lines of using line strokes and circles. But once looking at the outcome of my sketch (ABC morse code font), I lacked motivation to follow through with this concept. From there, I changed my mind but still sticking to the circles and line strokes-- coming up the idea of stricty rounded letters. 

I went down this path, and immediately started coding the whole alphabet in a night, as it only needed to change the positions of the line strokes. I envisioned to make the font geometrically rounded but still give that "candy/lolly" feel, based on the colour palette used.

Initially, only a few letters had 3 lines (for eg: F and 3) and the rest had 2. Not knowing to add the last set of line parameters to every letter, the animation when transitioning from a 1 or 2 line stroke letter to a 3 line stroke letter (for eg, e to f) the extra line would just pop out of nowher instead of smoothly transitioning to the place. 
Once I figured out to have all three line parameters in each letter, this allowed a smooth transition regardless from a  1 or 2 line stroke letter to a 3 line stroke letter.

The last change I made to make the letters stand out more was the just the background colour. The contrast between the green background and pink letters made the font pop more, hence the "eyecandy" font name. This furthered the design aesthetic I was going for

