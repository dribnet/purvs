## PS2 MDDN 242 2019

Updated my code so that the interpolation interaction works and made that the index.

My concept for my font has changed a little from my original idea. After playing around with the parameters and different shape objects for the connecting dots I found that I really liked how the starts looked and instead of making a neon kind of font I thought it would be cool to incorporate the idea of constellations into my font as the lines connecting the star points remind me of constellations. I have changed some of my letters to make them more angular and interesting but still have some polishing to do for the appearance and interaction. 


I changed my parameters from boolean to parameters that allow for the interpolation to work more effectively. The style still needs some work because it is very basic and I need to work out how to remove the unused dots. I currently have 12 parameters per letter which denote the x and y coordinates that each point will go to.

In the drawing function I have line(start Point x, start Poing y, end point x parameter, end point y parameter) for each of the six points. I took inspiration from the example we were shown of the machine created in real life where the bars that connected the points changed angles to create the different lectures. I still need to do the numbers and the null character. 

My parameters are 

p1x, p1y, p2x, p2y, p3x, pxy, p4x, p4y, p5x, p5y, p6x, p6y