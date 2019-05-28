## Creative Coding 2: Custom Pixel

Ive decided to use my mum as the subject for my project, shes the most meaningful thing to me that i can photograph. 

I'm basing my aesthetic on stained glass windows, and i'd like to create a final output that translates my photos into something resembling a stained glass. 

Ive started experimenting with different ways i can achieve this. The first thing i did was create a spherical grid of the background, masked as black in the mask. This renders out rings that are sliced up, similarly to how stained glass backgrounds are depicted. It was quite challenging to pick the colours for each segment of the rings, as it required using some trigonometry to find the exact pixel center of each segment. 

 I then started experimenting with different ways i could make the subject fractured into different shapes, the way stained glass is cut up into shapes. I scripted it so that it cycled through pixels in areas not masked as background, and then drawing a quad shape of this colour. The quad has randomized points that create varied shapes, without a consistent pattern. 

 I modified the mask to each area, as some parts of the photos will need smaller more detailed fragments and others will be larger. Each tone of greyscale corosponds to a size/distribution of the fragments. 

 I encountered a problem fairly quickly, that the tiles still needed to have a clear and defined outline. Using purely randomized quads meant that the subject was often difficult to interpret visually. I implimented a couple of new functions to try resolve this issue. The first is a function that creates an outline of each masked area, this outline is then put in a 2d array of all the pixels, with true/false applied to whether or not a position is an outline. When the quads randomized varaibles are first calculated, it then runs a check to see if the mask colour at the point of each quad is corrosponding alpha tone of the tiles being drawn. If it isnt, then that means it has gone over the lines of the mask, and its position is pulled to the closest outline pixel. 

 While this resolves the problem somewhat, its incredibly slow to run the program like this. There are still issues of the overall image being too fractured and i'd like to try refine it into a cleaner image. 