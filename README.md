## Creative Coding 2: Custom Pixel

-1/6- 3rd Commit
I implemented my previous grid mask into the 'stroke only' code so that the random shape background only draws the stroke with no fill and then the grid is drawn ontop in the mask. I quite like how this turned out and I will iterate onthis for my final I think.

-1/6- 2nd Commit
I wanted to try somthing different and saw someone else who was using shpes with a stroke but no fill so I took some precendence from that and implemented it into my own code. The algorithm still draws random shapes across the image but now the fill of the shapes is almost nearly greyscale (10% saturation) and the stroke of the shapes is in full color. The masked areas are jsut drawn in full color (filled). I'm not sure if I will use this for my final design but will play with it more before the hand-in.

-1/6-
I have changed the algorithm a little so that now the random background shapes are desaturated and the grid drawn over top is normal, full color. I think that this makes the grid pop a lot more and you don't lose to much contedxt tcause the background still ahs a bit of color so you can work ou tthe scene. I still need to work out the pictures I'm using but will propbably just tsay with the theme of photos from around Wellington.
I tried out the smartmask on myimages but wasn't happywith how the masks' turned out so am not using them. The first image it picked out the wall that the person is standing on as a 'bench' but because the wall is mostly the same color and grey it didn't look good with the way taht my code distorts the images. With the second image, the smartmask picked out a lot of the people in the midground, but they are too small so they didn't really show up in the final image. With the third image it did not detect anything to mask.

-29/5-
I am using three images taken from around Wellington. I still need to work on a cohesive theme across the images.
I played around with the grid that is drawn in the masked areas. I increased the size of the squaress a little and tried out over-saturating, de-saturating and having greyscale squares. The first two images above I used de-saturation (to 35%), the third image is at full color/saturation as that looked best with this image.
I am pretty happy with how my code distorts the images so I wil just work on finding/taking some photos with a theme in mind fro the final product.

-25/5-
I have found a couple of photos that I have taken from around Wellington, my third image is still the rainbow gradient to test out different ideas easier.
My algorithm still draws ellipses, squares and triangles. They get smaller over time and the shape depends on the lightness value of the point in the image. 
I have now implemented a mask in which a greyscale grid is drawn in the masked areas, it took me a long time to workout how to draw both a grid and a random pattern but I got it to work inthe end.
I will now work on tweeking different parameters to finalise my design.

-22/5- 2nd Commit
I am still using the same images as i haven't found final images to use yet, although I have changed the third image from the black and white gradient to a ranbow gradient so I could test my sketch easier and see different effects my code had.
The algorithm draws ellipses, squares and triangles. The shape that is drawn depends on the value of the colour from each point that is picked, so ellipses are a third of the colour space, squares the next third and triangles the last third. The shapes also still shrink over time which I think makes a nice layered affect where you can sometimes see bigger shapes that haven't been covered. The shapes also have a random rotation value to add some visual differences and prevent a grid-like appearance 
I have tried out a masking effect where the masked area draws in greyscale, I have used a simple circle in the middle of the canvas for all the images to test it out. I like the effect and will play around with maybe just desaturating the colours or inverting them next.

-18/5-
Im not sure what sort of theme I want to go with for the images yet, as placeholders to play around with I used a render from a previous project, a picture from a game that i happened to have on my USB and the same Te Aro campus photo as before. 
I removed the mask on my first two images, I want to play around with colour and try have over or under saturation in the masked area. 
For the algorithim I have the ellipses draw and get smaller over time, they start out quite large then draw smaller and smaller which slowly adds in extra detail to the image and creates a nice layered effect. the ellipses also have a range when they draw so that they pick a random size between two values (which get smaller over time).
