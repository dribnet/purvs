## MDDN 242 2020 Assignment 2

(Replace this README with information about your alphabet. This is an example.)

7/5 - My initial idea was to use colour theory in some way to represent the letters. I wanted to use contrasting colours to represent the progression of- the more contrasted a square, the further away from the middle of the alphabet (a square that is half blue, half orange is likely to be an a or a z). I then planned on making everything greyscale, as the contrast between black and white would come across better than other colours. However, this idea wasn't  readable (it was really hard to tell the diffrence between A and B, as the change wasn't obvious enough). So I started thinking about other representations of black and white contrast that I really liked, and I remembered the symbols of the alien heptapods from Dennis Villenueve's 'Arrival' (https://lh3.googleusercontent.com/proxy/iSz4_X0quiHhhag2zlcUslPRCD_JbZm6gcQfTdbgFEupQzYUOX8OHLzIQbbt5gZqlzobrdxnScb65xNLuaAlzpuGtS_HipOga9nbUnTCSCc5NSBd5jSo7IkGaXxjSsFrcjt4nEufe94pNlNsmvkoy5AL). Not only do these symbols contrast really well, but also are an amazing, original representation of a language that I can draw inspiration from. 
Going off of this idea, I created a grey rectangle that (like my original b+w idea) has a white fill that decreases height the further along the alphabet a character is. Over this rectangle, I have two black arcs that, when combined, will show the letter. This means drawing letters that consist of two arcs. I'm using two arcs, as there are two heptapods drawing symbols in the movie, and because it's easier to draw a letter with 2 arcs rather than 1. 
From here, I want to make the ends of the arcs less rounded (I really dont like the rounded ends). I also want to develop on the thin/thick line weights shown in the heptapods symbols. My plan with this is to create a full circle with a thin line weight, and then use a thick line weight to draw the arc. When the two thick lineweight arcs are combined, they will form the letter. This link here has my scribbled ideas from when I got this idea: https://www.flickr.com/photos/187301143@N07/49888399701/in/dateposted-public/  

10/5 - I've just tried copying over my code from sketch to draw letters and I'm having some issues, it seems like draw letters isn't getting any data from letters? I don't really know, I'm gonna post on the slack to see if anyone can help. (update- I was calling posx and posy as arguments in the drawletter function, rather than calling just letterData)

13/5 - I've changed the background colour, to be the dark grey/black colour of spaceship room in Arrival. I added the thin circle, and the shapes look so much better and more similar to the heptapods symbols. I might have a look at changing the Y positions and the sizes of the symbols, to make them fit together better. My main concern at this point is the size of the rectangle- if the bounding box's were landscape, it would be fine, but the portrait orientation forces my characters to be really small. I've sketched out what each letter will look like: https://www.flickr.com/photos/187301143@N07/49887880863/in/dateposted-public/ , and I've started working on drawing the letters.

14/5 - I went through and created all of the characters. First, I used the editor to change the arcs -it was way easier to just use the sliders and getting the values from that, rather than using trail and error to see if values I manually put in were right. This left two same sized circles, one left and one right. This looked really nice, but wasn't super readible- the fact that the circles (and arcs) were the same radius and Y position meant that it was kinda hard to visualise them being one character when joined. You had to do the re-sizing and re-positioning in your mind, rather than it being done for you. So I added size and position variables for each circle. I then went through and re sized/positioned the circles, joining them together to create the final character. Now that I'm able to see the actual output of my ideas I'm realizing that my font is somewhat visually similar to the Bauhaus font (http://www.identifont.com/similar?517) , due to the strong use of circles/semi circles in Bauhaus. I like this- I was slightly worried that my font would look horrible, but the fact that it is at least a bit similar to a font like Bauhaus, makes me a bit more confident. Now, my problem is that having the circles not matching in size or position doesn't reflect the aesthetic influence of the Heptapods writing. My plan is to use some animation to start with the seperate circles, and then transition them to be joined together. This would also use another element of the Heptapods writing- the way that it forms isn't like a static invisible/visible method like typing (where the characters suddenly appear), but rather a fluid, gradual creation. I don't actually know yet if we're able to use animation in our alphabet, so I need to double check that before continuing.


The three parameters per letter:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

