## PS2 MDDN 242 2019

Helen Perkins

I have finished a rough cut of letters A - z. I have now also applied the interpolation/interaction code to see how my letters transition. So far its looking really good which is great. I think a large part of why the transition appears smooth is because rather then have say an A with 2 boxes turning into an X with four - and two of these boxes needing to be deleted to do this - I instead have made sure that for every single letter there is still four boxes even if it appears like there is less. Sometimes one box is just hiding behind another rather then dispaearing. This seems to have worked well, as rather a disjointing transtion as two or more boxes disapear they are instead hidden and intergrated into the new letter during the transition.

New parameters:

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




 


