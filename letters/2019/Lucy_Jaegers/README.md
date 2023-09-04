## PS2 MDDN 242 2019

The core idea behind my alphabet was to create a binary grid of lines, that could be turned off or on for each letter, similarly to a digital clock. My main goal was to create an alphabet that was as legible as possible. 

My initial concept of this is shown in my sketch, however as i continued developing it i realized it would be extremely challenging to accurately convey each letter clearly by only using straight lines. Instead i tweaked the script so instead of a true/false, each letter has a number. 0/1 still functions as a true or false as to whether the line appears or not, however if the value goes higher or lower than that then the line is drawn as a curve instead. 

To create letters such as M and W i decided i would need to rotate the letter completely, as i didnt want to add four or five more lines just for those letters. I added a horizontal variable, that determines the rotation of the overall shape, this also worked well for drawing V as i was able to partially rotate it instead. 

When i first started looking at the interactions of my letters i realized i would need to find a work around to make them transition smoothly. Beacuse they are exact numbers, and dont correlate to positions, there was no way to smoothly transition between one line and another. To counter this i added an alpha value to each lines colouring, this alpha value would lerp in and out as the line was being transitioned in or out. This made the overall transitions significantly cleaner. 

I ended up needing to add two more variables later on, as i had chosen to do the lower case alphabet. I found issues because certain letters would be too large and others too small such as a being drawn with the whole grid and therefore appearing as tall as the letter d. As well as this certain letters would need to sit lower than others (such as g, p, q). I added in an offset and a scale, these worked perfectly and allowed me to scale and move each letter accordingly so they didnt look out of place when put into words. 

Once i had finished the base of my alphabet, i moved all the draw letter code into a seperate function. From this i was able to redraw the same letter several times while shifting the scale and translation slightly. I changed all the stroke colours into a function parameter, so i could vary the colour each time the function called. By calling it three times, (one larger one at the bottom, a normal one in the middle and a small one on top) and varying their colours accordingly i was able to create an imitation 3D visual look instead of just plain lines. 

Overall im very happy with my final alphabet, I wanted my alphabet to be as clean and readable as possible and i feel i achieved that. 

The parameters are:

* `Line1` :  Whether this line is visable and/or curved

* `Line2` : Whether this line is visable and/or curved

* `Line3` : Whether this line is visable and/or curved

* `Line4` : Whether this line is visable and/or curved

* `Line5` : Whether this line is visable and/or curved

* `Line6` : Whether this line is visable and/or curved

* `Line7` : Whether this line is visable and/or curved

* `Horizontal` : True or false, if true the entire grid is rotated 90 degrees sideways.

* `Scale` : The vertical height of the letter

* `Offset` : The y position offset

