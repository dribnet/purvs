## Creative Coding 2: Custom Pixel

Followed a few of the tutorials and started to experiment with the code. I really like the idea of the output images being black and white, and then shape of the pixels portraying the light and dark areas of the photo. I implemented a rough version of this by following the grid tutorial, and then setting the width of one of the rectangles to the red value of a singular pixel, and then scaling it appropriately, this results in pixels that contain high red values having a wider shape and therefore being more prominent, and then the colours that have low red values which are mostly shadows and the darker background colour, being very thin. i then put this against a white background as it reminded me of the google chrome dinosaur game. One of the things that I want to expand with with this idea, is having the lines of pixels be continuous, so the shape of each pixel should lerp to the size of the one above and below it. I also like the idea of having the lines position move in relation to colour, and converge on the darker areas, hopefully for my final I will be able to find a way to represent the photo well enough with only black pixels on a white background or something like that.