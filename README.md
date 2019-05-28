## Creative Coding 2: Custom Pixel


#### Theme
My theme for enjoying and appreciating life. This images are a series of smiling people. Left image is me after I'd gone hiking along the top of a hill in a thunderstorm at midnight, and I love storms so it was a wonderful experience. The middle is an image of my friend when he was here on holdiay, and we were standing in front a waterfall, and the third is my parents on their 26th year of unbelievably happy marriage. The petals are a play on stop to smell the roses.

#### Technical
How it works is a modified version of the base pointillism example except where the mask is above 50, draw a big petal graphic that's been tinted a certain colour. The colour fades based on the alpha value between the colour of the pixel and cyan. The actual petal graphic is an image that's randomly chosen from a range of white images with a transparent backgrounds. This has some cool potential applications, where now I can choose an arbitrary series of graphics and use them to build my image, but the current iteration is a bit lack luster.  