## Creative Coding 2: Custom Pixel

01/06/20 - Grid Techniques
The images above are photos of the new years festival in Wellington 2020 processed with a lightly modified version of the p5.js Pointillism example.

In this experiment I try a uniform gridding technique using the same masks as my (previous) 'theme' readme. I followed along with pheobe's gridding tutorial and this was my result. I found the outputs quite satifying to look at because the squares and circles were all in line with each other. I especially like the duck output because there is two different shades of grey. The light gray in front creates the illusion of water and because I decided to draw my mask in a wave form it really works with the image. I will try to add this look into my other images. In order to do this I may have to incoporate so photo manipulation.


In my next experiment I will try a more irregular grid layout. I will do this by inputting a crasshatch texture or maybe some stars.

My pixel design consists of:
Masked:
let pointSize = 5;
if (mask[0] > 128) {
rect(x,y,tileWidth,tileHeight); //tile lines

Unmasked:
else{
ellipse(x,y,x_step,y_step); //the circles






