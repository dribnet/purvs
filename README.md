## PS2 MDDN 242 FINAL PROJECT 2 2019

My original concept for my font was inspired by the Project One clocks we had just completed. I was inspired by the idea of creating a for that looked like a digital clock. I liked the idea of the letters being very angular and being created by joining lines from six constant points.  Originally, I achieved this by using six fixed points and seven parameters (each representing a line between two of the points) which acted as Booleans which I assigned either 1 - true (i.e. there is a line between these points) or 0 – false (i.e. there is no line between these two points.) I then used if statements to draws depending on whether the parameter in letterData was true or false. 

I managed to create each letter in this way, but my original design was very simple and unoriginal. I decided I wanted my fonts aesthetic to be inspired by neon signs as that is what the shapes reminded me of. I worked on this through the colour and slant of the font as well as drawing a thinner, darker line on top of a thicker one to create a ‘glow’ effect.  I struggled a little bit on some letters, such as M and W to make clear shapes out of the six points, but these ended up being some of my favourite letter designs. When I added the interpolation I realised that the parameters I was using were not effective to show the changes between the characters and show the interaction. I changed my parameters to 12 parameters that are the x and y points that each fixed point should draw a line to. This allows for a smoother interpolation which showed the changes between each letter. 

I then realised that the movement and shapes of my letters reminded me of constellations and shooting stars so I made the fixed points into star shapes. I tried to do them individually but I found it easier in the end to draw one star and use transformation matrices rather than changing each vertex of the shape individually. I then changed the stars to move with the lines rather than remain fixed points as I thought this looked cooler in the interpolation and played into the shooting star idea a bit more. My final touches were finding a colour palette that reflected the neon idea and looked striking and then I re shaped a couple of the letters to have a more obvious style among the letters. I decided to call my font stardust as the aesthetic and colour of my final font reminded me of band logos and of David Bowie’s iconography.

Points:
Point 1 - top left
Point 2 - top right
Point 3 - middle left
Point 4 - middle right
Point 5 - bottom left
Point 6 - bottom right

My final 8 parameters are:
	"p1x": end of line x value from point 1,
    "p1y": end of line y value from point 1,
    "p2x": end of line x value from point 2,
    "p2y": end of line y value from point 2,
    "p3x": end of line x value from point 3,
    "p3y": end of line y value from point 3,
    "p4x": end of line x value from point 4,
    "p4y": end of line y value from point 4,
    "p5x": end of line x value from point 5,
    "p5y": end of line y value from point 5,
    "p6x": end of line x value from point 6,
    "p6y": end of line y value from point 6,