## MDDN 242 2020 Assignment 2

It's taken me a few days but I've finally got my basic letter position perfected in letters.js and draw_letters.js. I had to reduce the size of the rainbow and rays quite a bit so they fit within the frame but I'm still happy with how they look. 

You can see in my most-recent commit inside the alphabet.html section that the rays were all over the place so It took a couple days to nail fixing this problem. Originally I was just playing around with the values inside the line() code hoping this would move them into position and make them smaller, while also trying to mess around with my rotate function. I ended up finally fixing this issue by keeping both x values at 0 inside the line code, and changing the arcs that are the rainbow to 0,0 as well instead of positioning them according to posx and posy. Then I just added a translate above the arcs to posx and posy, this made sure that the lines and arcs would be at the same meeting point! 

A second problem I came across while trying to do get the rainbow and rays in the correct position was in letters.js was that when I was changing the values for a single letter it would affect all the others by default, and move everything around not just the one letter I was fiddling with. I finally managed to fix this by putting and push & pop inside my draw_letters.js so I could manipulate just one letter at a time.  

I'm happy with my progress, although it's taken me a couple of days to get everything settled in my draw_letters.js & letters.js I learnt a lot along the way and I'm just glad everything is looking good at the moment. 
My next step is to start developing each letter so they're all different instead of being identical! I'm realy looking forward to this part.


 


