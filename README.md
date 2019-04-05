## PS2 MDDN 242 2019

Helen Perkins

Style/Rule Change:
Up until now, my plan was to try and create every letter using up to four small squares inside the large square. I planned that every single one of the small squares would be 30 x 30. Now however thanks to the editor and its ability to help me iterate much quicker then I was before I have realised that I need to adapt and be more flexible with my design allowing the X and Y lengths of the squares to change and be non identicle to each other, in order to help me create a legible version of every letter. 
Up until G (excluding D) I was able to make every letter with 30 x 30 squares, but my inability to create a D or G I am happy with has made me have this revelation about square sizes.
I will still only have six parameters (at this stage as I have oly been using two smaller sqaures so far), so this change really isn't that significant, but the smaller squares will now be sized anywhere from 0 - 90 (reflected in the D of my preview).

Parameters:

  * `sizex` : size of x axis of smaller boxes
  * `sizey` : size of y axis of smaller boxes
  * 'offsetx' : x offset determines x position of smaller squares relative to the large 
  * 'offsety' : y offset determines y position of smaller squares relative to the large 
  * `boxX` : x position of second small square, relative to big square
  * `boxY` : y position of second small square, relative to big square

