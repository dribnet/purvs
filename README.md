## PS2 MDDN 242 2019

UPDATES: I changed up the colours and played around with trying to make it look like a neon sign. I also removed the dots that arent used in making up the letter and am wondering if I even need them in the font. I also moved the top and middle dot points to make the font slant a little to the right.

Added Interpolate function and it works but because my parameters are booleans eg(1 or 0 depending on true or false) it doesn't work in the same way that it would with shapes so maybe I will try making parameters that arent booleans to see it work differently.

This is an updated version of my first experiment. I don't know if I want this to be my final concept as its very simple but I used it to get to know what I need to be doing in this assignment. 
Each letter has six fixed dots which can have lines between them to make different letters. I made nine (added two for diagonal lines) parameters, that function like booleans (1 for true, 0 for false), to tell decide whether a letter needs a line between two of the dots. The drawLetter function then runs if statements to test whether each parameter is true and then draws a line between the points if it is true.

The parameters are:

p1p2: Between top left and top right
p3p4: Between mid left and mid right
p5p6: Between bottom left and bottom right
p1p3: Between top left and mid left
p2p4: Between top right and mid right
p3p6: Between mid left and bottom left
p4p6: Between mid right and bottom right

p1p6: Between top left and bottom right
p2p5: Between top right and bottom left

I think this font looks pretty cool but its super basic so I'd quite like to push myself a bit more so I am going to play around with a font made out of shapes like my second experiment. 

