## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

 1/03
 today i finally figured out how github works! took me a while to figure it out but i'm all on top of it now (hopefully).


2/03
I replace the defualt images of the clock sketch with my own. i decided to make my clock graffiti themed, with cans(clock hands) spraying paint as they move. The colours with change as the hours do.

3/03
I finally figured out how to push origin. It involved me having to regenerate my token and get a new access key.

I also recreated a maeda clock which was number 4. It consisted of creating a piece of text to mock the time in white and having that as the centre piece. I copyied that, coloured it blue and ordered it so it was behind the white piece. Afterwards, I simply just had to move it 5 spaces to the right and five spaces up, and then rinse and repeat while changing the colours

8/03

today i created my sketch in code. While it does not look like much, It is a mere skeleton and will provide me with a guidline of where to go next. It might completely change, who knows. My next step will be to either create my spray cans in code or have them as an image, and figure out the code for a colour changing option. I will also have to figure out how to get the "hands" to rotate and decide how to get them to slowly expand with each minute / hour

9/03
I've put a lot of code in today. Iv'e tried to find a colour changing code that interacts with time, but it doesnt seem to work. I've tried to also Implement two images using that code from the first year course on the ,music visualizer. But it doesn't work, can't figure out why. Hopefully i'll figure it out by the rest of the week

15/03
I implemented a colour array today. I've made it so that the minute and hour circles change through a set of 28 colours depending on the time. Next step is to implement my clock hands and to get them to move depending on the minutes/ hour

17/03
Today i figure out how to import images into my clock code. I then coded these images so that they could be used as clock hands. This code used the function of translate, rotate, map, push, pop, imageMode, image. I sued a map to code the clock hand but it needs touching up. I also hand to change the sizes of the clock hands multiple times in order for them to line up with the circles.


22/03
I'm now trying to figure out how i can make the paint trail follow the can hands. I've got the colour sorted and the thickness. The only thing I can't  seem to crack is how to get the trail to start and end at the hour of twelve

22/03
Messaged phoebe and she solved my problem! There was more precision needed with one of my maps and a specific rotation number was needed too. With this code figure out, the main clock function i wanted to acheive has been solved.
All i need to do now is work on my alarm and drips of the hour signs.

23/03
Added an alarm function which has a series of WAKE UP texts across the screen, in bright red. slightly scary but effective. I changed the font to 'impact'. I added a brick pattern in the background which gave it a better design feel, and it works with the theme of graffiti too. I also added dripping paint on each of the numbered hour circles. The paint drips with the obj.millis function. I also added a seconds count in the top left corner. This also drips with paint. All i need to do now is fix the purview.json.


24/03

Added some more thing to my alarm function. Before, my alarm function was a series of WAKE UP texts across the screen, in bright red. slightly scary but effective. I changed the font to 'impact'. It now has a white stroke around each of the WAKE UP!!! texts. It also features a slightly transparent circle in the centre which expands using obj.millis.

24/03

For this project, I wanted to create a clock which showed my love for graffiti and street art. I am extremely happy with how my design has turned out, and I think that i have well surpassed what I wanted to do in terms of my sketch. I believe that it outdoes it by miles. Originally, I wasn't going to include background, but i believed that the clock needed something more and it wasn't complete without it. I also decided to include a seconds timer that has a good bit of size in order to take up more space. It provides something else for the viewer to look at other than the main clock. Something that i think is quite effective is the paint drips. The drips use obj.millis to control how fast they fall. I think it is very effective having a constant dynamic with my clock. Makes it a bit more interesting, and the drips work with my theme.
