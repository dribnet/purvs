## Creative Coding 2: Custom Pixel

Today I have been touching up and finalising my code. I realised my layers weren't working as expected so I looked back over the layers example from class and fixed them so they use different variables in each for loop so they are actually separate. I changed the conditions for the colour manipulation as I like the original colour of the red in the third photo so I wanted it to exclude that red from the manipulation, then I could also increase the red value in the others to further enhance the colour. There are still a few places on the third photo that are being picked up but overall I prefer this to what it was before.

I also changed how I was drawing the graphic parts of the mask into a more structured grid now that my layers are working properly. I kept the size variation to make it look hand drawn but the grid follows the shapes a lot better so it looks more like line drawings over top of the rest of the image. I noticed that it was taking a long time to load and was drawing a lot of circles so I wanted to reduce the number of times it was drawing. Since this section was outside the main for loop I couldn't change how many times it was drawing so I made an if statement to stop it from drawing after the second render counter and it did the trick. I was working on this with the other parts commented out and when I put it all together was going very slowly and the transparent circles were drawing on top of the graphics so I changed the render counter if statement to make it draw the graphics in the last two renders so now it renders fast and then has a pause and then the graphics appear on top of the background which is much better. I also had to clean up the masks a bit as there was a lot of grey between the black and white parts of the mask that was being picked up when drawing the graphics so now there is a lot less of it so it is less noticable.
