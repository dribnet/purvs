## PS1 MDDN 342 2017

This README explains the three different paramaterized faces for part2. 
I have created my grid of random faces. Considering the number of different variables I have within each object, the task could have been horrific, luckily all I had to do was change it within my slider values object and a couple of times in my main sketch.

With my composition again I wanted to play with contrast. There was always meant to be contrast in the faces I was going with, the rag doll face. Contrast between cute and creepy, black and red etc. The rag dolls leant themselves to a slightly chaotic composition, and I added more variables with tilt and hair length, but I still wasn't getting the contrast I wanted. So I had a play with my cartoon faces and discovered that the occassional rank of staunch, orderly cartoons, all staring in the same direction, is the perfect contrast to my higgldy-piggldy ragdolls, and brings out the contrast and controlled chaos I was looking for. Picking out the pinks from the ragdols for the background of the cartoons, along with the black that was already there, helps keep the transition smooth, I still need to make it a little less jarring though 

PATTERN FACE (face 3)
I have the masking working fairly nicely now. I have created basic face and hair cutouts, but not the patterns they will be cut out from. Intend to add eyes. I intend to add hair of variable length.
I have further modified my masking function so that it will cut out any given basic shape out of almost any given patterned background.
It is a little rough, but I have created a function for masking basic shapes. Here it is in a basic version before I start doing other things to it. I had seen a couple of people mention online that masking could be achieved using the array of pixels in the image. I used the documentation for pixels, guessed a few things, and figured it out. It is a little temperamental, but on the whole it works

I was going to use patterns and colours to create the basic shapes of the face, and I was going to achieve this with masking. I am going to need to ask for help with this though as I  can't get the masking working

RAG DOLL FACE (face 1)
I have, for now at least, completed the rag doll face, except for selecting a background colour. I have chosen to add a smooth bezier smile option for the normal doll, to contrast against the sharp lines and unsettling stitches of the creepy doll.
The sliders are interdependant. Many features are effected by more than one slider, and most sliders control more than one feature.
Dimenstions and dynamic movement have been considered too, for example, when the smile (creepy or normal) becomes deeper, it also stretches wider, when this happens it also moves down the face, so that the mouth is  spaced evenly above and below the original midpoint. 
Wherever possible the coding is  not static, for example any number of stitches would be possible in the mouth, because their coordinates are not hard coded, rather they are mapped from the width and height of the final mouth, and put into place with translation.

Because I have used such a lot of code, with a lot of variations, I have not only used functions, but objects as well. Because my faces are so  different, it isn't really feasable for them to use the same code without so many variables it becomes silly. So it is fine for them to be in different objects. It means that each one is tidy and self contained. It is easier to find what I am looking for, and to improve my technique as I  go one if I get a clean slate for each face. I have of course borrowed from one of my objects for another, and tweaked it to suit. 
I also created an object to hold the sliders, this reduces the amount of code considerably. I have also realised that it may make randomisation a lot easier too in some cases. Each face now gets passed the sliders object, it has one function which takes arguments for: which slider, the minimum value to be mapped to, the max value to be mapped to, whether the answer should be rounded down to an integer. 

In terms of design I wanted a range of customusation, within both the creepy and normal versions. At this stage I have chosen not to have the creepy and normal versions overlap and borrow elements from each other, but I think this should happen in the future. This design is all about contrast. From red bows against black hair, to an angelic doll that turns into a hollow eyed demon-doll.



CARTOON FACE
I have almost completed the cartoon face, although I still want to change the background, and I may see things I want to change when I come back to it later.
The cartoon face, in contrast to my rag doll, is a simple line drawing. I designed it this way for a totally different style, and something clean and fun. The shapes are simple, but the faces they make are expressive, and line weight is an interesting substitute for colour. The code gets complex in places, because of the number of options and combinations. I have tried to shorten it as much as possible using  functions, but there comes a point when there isn't much you can do about it.


