## Creative Coding 2: Custom Pixel

Final version
When I review the process of this project, I finally realise I have done lots of things in this project.

Concept: arrangement of pixels
I keep exploring the relationship between pixels and the images. I attempt to arrange the pixels in a different way to show a literately new situation from the same image.

Theme:  The situation behind the images
That's I want to show the same image convey different information by the image processing.

Process:
Firstly, I tried to learn the processing, which is very potent in image processing. The only problem is it's hard to transfer to P5js.
And I got the location of each pixel, then, I can arrange them by myself. I did heaps of experiments to create the texture, track the trail of pixels, use the noise() function to make more changes.
In the meantime, I chose some particular spot to get the shots. Most of them are the 3d sculptures. If the viewers see them in 2D, it's hard to estimate the possibilities of the original situation. 
Afterwards, I employed the WEBGL in P5js to create the 3d pixels. Then, I also learn something about the algorithm and isometric projection.

My story
I choose a consistent style for all my images to tell the story not only in front of images but also behind the images. The 3 dimension space give me a chance to build a connection between the image and the real world.

The smart mask
I only use the smart mask for one of my images. The problem is my objects are hard to recognize by the system. Also, some of them are two kinds of masks for a particular area.

The merit
I suppose I almost fulfil my intention, I create a 3D image world to show another sense of real world rather than a 2D reflection. Furthermore, I embrace some details and employ the perspective() and camera() function to get a different feeling more than the normal image.

The demerit
I think when I move further, I find it's hard to draw 3D supershape in p5js, I can't use the endShape() in WEBGL mode. I can use it in Processing to get more details in 3D shape. So in this case, I almost use primary shapes.

Varible list
angle; basic varible of rotation angle
w; the width of shapes
ma; The magic angle of isometric perjection
maxD; the furthest distence of each pixel shape
x; x axis coordinate
y; y axis coordinate
h; general height, but define it in different condition
g; the varible to control the length of shape
offset; the offset between the 3D shapes
pix; get the colour of pixels
mask; the mask image


<!-- image 3 and refine image 2
I select the image 3 is the ball on the ground which is opposite to the image 2.  Originally, I just want to move the camera up and down to see the ball rise up from the ground. But when I have done this, I found more things I could do. I was going to add more details to my images, including the texure, changing the angle, viewpoint and so on. -->

<!-- image 2 progress
with all the help from my teacher and TAs, I gain a deeper understanding of the perspective and I employed the camera() function to explore more possibilities. Then, I have found the better angle to show.

For next step, I will bring my own version to image 1 and also finsh my image 3. -->
<!-- work on my style
Finally, I built a consistent style of series. I took this sort of shots from the different spots. When I employ my concept to these photos, I can show a specific sense of dimension. The viewers could feel something come out, fade away, pass by.

There is sort of challenges at this stage:
1. background texture( have to learn how to create 3d texture, like 3d supershapes or noise.
2. When I transfer my code to the class system, something always has been changed. I have to work it out the rule of it.
3. viewpoint control
4. how to calculate the angle of rotation on X, Y, Z axis.
 -->
<!-- smart mask
My story setting and smart mask
It's an amazing system to make a mask of a wide range of objects. Also, I finally select my series of images. To ensure express my consistent style explicitly, I choose the image from the different angles to view the object, upward view, vertical view, side view to make sure the 3d visual effect stand out.

For next step, I will refine the details of the shapes and adjust the perspective to fulfil my intention. -->


<!-- progress

I was inspired by the work form processing. The initial idea is if I transfer the whole thing to the Z axis and I may find a specific angle to give a sense of 3d to viewers.
I referenced Isometric projection, An isometric view of an object can be obtained by choosing the viewing direction such that the angles between the projections of the x, y, and z-axes are all the same. It points out the mathematics method how to calculate the rotation angle.

I push my experiment from 2d to 3d, that's the key point of my plan. I adjust the height of the part of mask. I have done some research about how to control the camera viewpoint ortho(). I am still working on this part though.
 -->


<!-- The start

I spent about two weeks to explore the field of image processing both in p5js and processing. After I gained deeper understanding of it, I was going to think about custom pixels.

The first step is how to locate each pixel in the image. Definitely, there is a way offered in the example file. I also have learned another way to locate the pixel in image.

Then, I roughly create different shapes for the pixels to take a glance of the visual effect.

By the way, I was thinking of the animation effect for this project. I am betting that would be cool. surely, in this case, I have tried sorts of methods to figure it out.
 -->
<!-- The images above are photos of Wellington CBD algorithmically processed with a lightly modified version of the [p5.js Pointillism example](https://p5js.org/examples/image-pointillism.html). The masks for each photo highlight various objects. Replace this text with your own which explains the source of your photos, masking, and applied algorithm.
 -->