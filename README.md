## Artificial Painting

My original idea was to use a mask that consists of a great deal of noise rather than large block images in order to "randomize" where different brush strokes show up. This would create a somewhat realistic looking paint-like effect. The original idea with the noisy mask didn't quite work however. So, in this current version, I've set up another way to somewhat randomize the placement of the brush strokes by using a variable "t" that counts up each frame to a max value of 7, where each value paints a different type of brush stroke, before reverting it's value back to 1.

I've created a "mask" type set of images in order to include layering of the paint so that I can have different levels of detail, however this is not quite working with this code at the moment, as the various for loops and if statements that I'm using don't work properly due to the way I've set up the code. I need to find a way past this, but I figured I'd do a push to github, as I've done a fair amount work between commits, but haven't been doing enough commits to show this.