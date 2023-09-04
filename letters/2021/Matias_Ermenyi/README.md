## MDDN 242 2021 Assignment 2

Final ReadMe:

Overview:

I had a few ideas leading into this assignment of what I wanted to do. Initially I wanted to create a completely geometrical alphabet, one that played around with rectangles, ellipses and triangles to build each letter. After a lot of trials and errors and looking at the "A,B,C" sketch, I really disliked the results and decided to move on and re-think of a fresher  and better idea. 
The only thing that I kept from the original sketch was the colour, the light blue that I used for drawing some parts of the letters. I started playing around with styles and I was sort of settling for an idea which was initially having more rounded edges on a rect () and then cutting out areas of that rectangle to make the letters. I soon realised that a few people had similar ideas to that, therefore, I decided to re-think my concept. After a while I finally decided on my final design idea, the idea that I ended with, to me looked exactly to how I wanted it, it was still geometrical and still legible.
This concept did come with some challenges. The first issue was that I made each letter into its very own function, and then called each letter function that I made in the draw Letter function. This worked in the beginning but when it came to the interpolation it did not work, as the letters wouldn’t interpolate between each other instead they would just jump from letter to letter which I didn’t like. The initial intention was more of a linear interpolation between each letter form. I had to re do my letters, luckily when I designed my letters, I sketched them all out and knew exactly how many parameters I needed for each one, therefore, the re jigging process wasn’t a terribly complicated task to do. After that was done it was time to make the letters look a little bit nicer. first, I changed the background colour scheme and kept it with nice blues that played well with each other and then I added fake 3D which really made everything look a whole lot better.
I ran into a second challenge with my interpolation, as I wanted a slight throbbing interpolation between the letters, in which the letter would shrink to its origin do the interpolation to the new letter and then grow to the new letter. This actually was tougher than I thought it would be. Initially I thought I could easily just map a scale value from 0-1 and map that through the percentage of 0-100, but that lead to an issue of scaling from the top left of the screen and each time a letter was typed it would re scale all the letters after it. The method I used to fix all these problems, was actually a relatively simple fix. All I needed was a place in the percentage when I wanted the letters to switch and then shrink all the lines to the origin of the letter and then grow those lines out of the origin into the new letter form.

 Overall, I really like how my alphabet turned out and with the fake 3D aspect to it, it makes it look a whole lot cleaner, plus the whole design of my alphabet is cohesive and looks exactly how I envisioned it to be. For me the interpolation is the standout of the alphabet as it looks clean and smooth and flows really well through the stream of words that I chose.






23rd March:
today I played around with creating ideas for the letters A,B and C for my alphabet. I am leaning towards a abstract concept but my mind is still open to other ideas, more research and inspiration research is something that i'll do before next class.

25th March:
ive had a fresh look at my idea and ive began to realise i really hate it, the only thing i like about it is the colour but depending on the style of font that i will go for the colour may change.

29th  March:
finally decided on a fot style that i like, its simple, but i like it and i think its just abstract enough to be legible but also nice to look at

29th March:
i have issues with commiting my work on to github it doesnt seem to be working properly

30th March:
we managed to fix the problems with the drawing of the alphabet and now i can carry on with the alphabet

30th March:
finished the basic alphabet

1st April:
i have come to the realisation that i have to re do my font as the interpolation does not work so i have to change everything up :(

i managed to fix and re jig my alphabet but the interpolation is not acting right 

interpolation is working well now, now it is time to make the alphabet more exciting and intriguing to look at

some level of fake 3d was added

added words that i thought showed my alphabet in a cool way

