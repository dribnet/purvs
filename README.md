## Creative Coding 2: Custom Pixel

I have replaced the images I was using with that of gradients, as I want to explore the display of colour through pointilism.

At the momment the images still use the same code as the pervious experiments, but that will change in future commits. 

Updated code to use a mask, that mask being a grayscaled version of the image, with it being posterized so that there are clear changes in brightness. This mask was then taken into the code, where the brightness was mapped to the number of sides foe the polygon, so the brighter the colour the more sphereical it would appear.

