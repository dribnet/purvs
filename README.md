## MDDN 242 2020 Assignment 2

there are 12 parameters as of now

invface1 // inverts the face so that solid blocks are now gaps, and gaps are now solid

cut1face1 // 1 of 3 cuts that can be made per face
cut2face1
cut3face1

invface2

cut1face2
cut2face2
cut3face2

invface3

cut1face2
cut2face3
cut3face3


ReadMe

rewrote all of the logic gating I had made with repeated to if statements to now use a forloop that checks each parameter for the cutting variable by looping through an array, and outputting true if one was found, which is then used in another if statement that actually draws the face. This process was mostly to compress down my code as even though my process was fairly simple the way I had gone about it made it lengthy. Another process I went through was recolouring, I liked what I had before but it was too bright and contrasty for my taste. The colours I am now using I chose because stylistically it looks as though each face of the cube/cubes could be the same material, just under different lighting, while still being different enough so show the difference between each side of the cube, and to show exactly where the light would be coming from. Another process I did was starting the animation. Originally I thought that I would need to create another parameter in order to create the scaling down effect I wanted per face, but in the end it just took me declaring size, and then making conditional changes to it under the interpolation function based on the percent map. Another thing I did in this process was change the interpolation between letters to only be whilst all of the cubes have scaled down. This made the process look a lot smoother and methodical which I really like. I also slightly changed a few of my letters based on my original illustrator sketch, while I thought they were okay I thought they were a bit boring. Because I was working with with 'switches' in my design I didnt really use the interaction view as it doesnt output correctly. I also started trying to find words to use for my swap words, one of the words I am 90% on is tortoise, I think this word looks fantastic with my letterform, and I originally thought of it because I thought that the lines across the darker face of my letterform reminded me of a turtle/tortoise shell. Also because the colours I am using are fairly similar now to a tortoise-shell cat. this might end up being the name. for the other words im not sure if I will follow an exact theme, I want to stray away from words like geometry or something super relevant to my design because its too cliche, I'd rather have something more interesting and for a specific reason.

to help me get the on off switches done correctly heres a cube I draw in illustrator which represents the number value for each face. Each face needed to have numbers 1-9, and each face of a single square needed to be the same number. This was the neatest way of organising everything that I could figure out

should be useful in working through my code

![yee](https://i.imgur.com/oVm7yCP.jpg)