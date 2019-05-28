## Creative Coding 2: Custom Pixel


#### Theme - Stop and smell the roses
My theme is about enjoying life. This images are a series of smiling people. Left image is me after I'd gone hiking along the top of a hill in a thunderstorm at midnight. The middle is an image of my friend when he was in New Zealand on holiday standing in front a waterfall, and the third is my parents on their 26th year of an unbelievably happy marriage. The idea is to play off of the phrase, 'stop and smell the roses' to remind people to do just that.

This theme is, in my opinion, pretty shallow. It might be a better idea to think more deeply ont he issue, e.g. *why* people don't stop and smell the roses. But I think I might find a system that's cooler and find a theme around that. I'm considering some sort of a polygonal field. 

#### Technical
How it works is a modified version of the base pointillism example except where the mask is above 50, draw a big petal graphic that's been tinted a certain colour. The colour of both the graphic and the pixel fades based on the alpha value between the colour of the pixel and rose red. The actual petal graphic is a desaturated image with a transparent background. This has some cool potential applications, where now I can choose an arbitrary series of graphics and use them to build my image, but the current iteration is a bit lack luster.  