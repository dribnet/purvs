## Creative Coding 2: Custom Pixel
Forgot to update the readme + thumbnail in last commit.

Iteration:

I have retaken my photos so that they have better quality, since before my photos were from a camera with underwater housing but the quality of the image was quite bad. My current photos are taken with a DSLR. From my previous photos I liked the ones that had interesting colours. I found that best worked with the perlin noise algorithm and complimented the flowing lines. My photos are taken infront of the water front I was trying to focus more on the colours in the image to do that I was trying to get photos of the ocean where something is reflecting onto it to have a change in colours. 

I have been experimenting mainly with different masks and the strokeweight parameters of the mask function. Initially I started with a mask that looked like perlin noise because I wanted the line weights to blend but then I read how the code works and tested with a mask that consisted of white circles on a black background to make these perlin noise spheres. My last mask which is used in all three of my images. I used the same image each time for this experiment to show the differences in parameters. Each image was rendered for 

For the first image I had the strokeweight be 0.3 on the white part of the mask so it comes out more and 0.1 on the black so it is hardly visible(opaque). This created an effect to where lines would come through but wouldn't blend too well so the mask is quite visible. 

For the second image I had increased the variables from 0.3 to 0.5 and 0.1 to 0.3. This had a similar effect but had more of a blend between. So the mask had created a 'highlight' in the colours and brung out an opaque brightness in the image where the lines in the mask is. 

For the third image I had increased the variables from 0.5 to 1 and 0.3 to 0.5 this created an effect where the mask lines were more visible and the colours are more saturated.

Each image in the iteration sequence was rendered for longer than the previous creating more density as the image is rendered generatively.



