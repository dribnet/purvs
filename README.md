## PS2 MDDN 242 2019

Helen Perkins

FINAL READ ME:

In this project my aim was to have 12 or less parameters. We had the option of going over this limit but I felt I would get the most out of the project by doing my best to stay within the constraints. I have managed to make my entire alphabet and numerical system with 12 parameters and I am satisfied with this. For this alphabet I stuck with my original sketch idea because I really liked the idea of trying to build an alphabet out of boxes and 'cutting holes. 

My Cubefont is made up of One large square (which is identical in every letter/number no matter what) with four smaller squares sitting on top of this large square to form the shape of the letter. Even when it looks like there is only one small square such as with the 'o' there is infact still four they are simply overlapped. I did this because it makes the animation of the interpolation really interesting to watch as you see all the squares re emerge and shuffle around to form a new letter, rather then just appear out of nowhere.

Over the project I trialed different ways of achieving my cubefont, such as keeping every letter as the same sized large square with different coloured smaller squares ontop to identify which square is which letter (seen in earlier commits) however over time I realised that my alphabet would be a lot more legible if I merged the smaller squares with the background, through colour, so it looked like square holes had been cut out of each letter. I am glad I did this as I think it has made my font much easier to understand, and I feel legibility should win out over asthetics in this case.

 In terms of colour, I played around with a few different ideas but in the end settled on a reduced version of my original palette - a blue, and pink - because I feel these colours help to capture the playful feel I am aiming for with my font. For the interpolation animation, I have kept the transition between letters slow, as because all of my letters are made of smaller boxes moving around the large box, the animation is pleasing to the eye, as you see all the little boxes re-shuffle to form another letter. This also demonstrates to the user that the letters are not actually formed by cutting holes out of the big square but it is simply a colour trick.


Parameters:

  * `sizeB1x` : size of x length of two of the smaller boxes
  * `sizeB1y` : size of y length of two of the smaller boxes
  * 'sizeB2x' : size of x length of other two of the smaller boxes
  * 'sizeB2y' : size of y length of other two of the smaller boxes
  * `posB1x` : x position of first small square
  * `posB1y` : y position of first small square
  * 'posB2x' : x position of the second small square
  * 'posB2y' : y position of the second small square
  * `posB3x` : x position of the third small square
  * `posB3y` : y position of the third small square
  * 'posB4x' : x position of the fourth small square
  * 'posB4y' : y position of the fourth small square




 


