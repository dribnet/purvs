## Creative Coding 2: Custom Pixel

03/06/20 - Grid & Colour

In this experiment I was trying a combination of the grid and colour technique and this was the result of the two. I couldn't get the colour stroke to work with my images, this may have been because I was forcing a grid layout rather than displaying different shapes. I was still able to create different stroke weights in my grid which created this 3D look to my pixel images.

My pixel design consists of:
Masked:
let pointSize = 5;
if (mask[0] > 128) {
rect(x,y,tileWidth,tileHeight); //tile lines

Unmasked:
else{
line(x, y, x + pointSize, y); // horizonal lines
if(pix[1] > pix[0]) {
strokeWeight(8); //thicker stroke if pix is larger than pix0
} else {
stroke(pix);
strokeWeight(1); //otherwise stroke weight is 1





