## Creative Coding 2: Custom Pixel

Craig Springett | 300441513

---

Current render takes a little while to complete!

| Date		 | Update Information											  |
|:----------:|----------------------------------------------------------------|
| 09/06/2020 | My design strategy has slightly changed. As I am basing my images off of Vincent van Gogh, I knew I wanted to emulate his brush strokes in some way. This meant to me that each pixel, or failing that, area, needed to have some form of movement to it. This meant my mask needed to be a little more detailed than just solid colours, so I looked at the "Oil Painting" filter in Photoshop and thought if I desaturated the original image, that could still be used as a mask, and the 'brightness' can be used to dictate the rotation of the custom pixel. Playing with mapping and referencing Van Gogh's work, I decided that the brighter the spot, the closer to 90° the line should be, additionally the pixel itself is a line that is shorter and slightly fatter the darker it is, and thinner and longer the brighter it is (according to the mask). In order to make just one line rotate and not compound on each other, I had to use push/pop with a translate, replacing the origin of the canvas with the pixel location, and drawing the line at the new origin. One issue I am currently having is that due to the way the recusrion	is functioning, there are a lot of errors in the console due to the color() function and my modification of it at each 'level'.							  |
| 08/06/2020 | Today I started modifying the code to actually create my custom pixel. I have an idea to try using recursion to create it, but will need to set aside more time to investigate that. I have also attempted to create a more detailed mask of input3, and upped the vibrancy as I felt it was lacking some colour. Updated purview_helper as well to hopefully fix that issue.	  |
| 03/06/2020 | I had an idea to use my photos that are based off Vincent van Gogh paintings, especially if I'm able to create a painter-ly effect with my custom pixel. Spent today formatting the photos and creating the 3-tone masks for them each as each image has a fore/middle/background. Have yet to touch the code but will be doing that over the next few days.						  |
| 27/05/2020 | First tests with Project 3. I knew that I just wanted to try working with a screenshot I took in Elite: Dangerous a few weeks ago of a sun. I also figured, I could just desaturate and slightly modify the levels to make it an appropriate mask, and the end result turns out pretty okay. At this time I haven't looked into anything else too much.								   |

The images above are photos of Wellington CBD algorithmically processed with a lightly modified version of the [p5.js Pointillism example](https://p5js.org/examples/image-pointillism.html). The masks for each photo highlight various objects. Replace this text with your own which explains the source of your photos, masking, and applied algorithm.
