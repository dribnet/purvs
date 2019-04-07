## PS2 MDDN 242 2019

Helen Perkins

I have now (hopefully) sussed all of the parameters I need, at 12 exactly. At this stage I have increased the number of smaller boxes from two to four because with any less I will not be able to create some of the more complex letters (like x). A problem I was facing however, was that if I had four smaller squares and they each had an x and y length and an x and y position that could all be unique and different to one another then I was going to be signifcantly over 12 parameters.
For me in this project it is really important that I stick to 12 parameters or less, so I had to redesign a little to think of a way to overcome this issue. I have (or hopefully have!) which is seen in this commit. I now have four smaller squares, and they can each have independant x and y positions. All four squares also have the ability to resize heir x and y lengths. However, two of the squares will always have the same x and y length as each other, and the other two will also always have the same x and y length as each other. Both of these pairs however can have different x and y lengths to each other, which I believe will give me the control and adaptability I need to complete the whole alphabet.

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




 


