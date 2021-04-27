## MDDN 242 2021 Assignment 2

Alphabet

All alphabets consist of two parts, one part have rectangle with four rounded corner radii, and two arc lines (arc line1 and arc line2), and the other part also have rectangle with filled color and one arc line (arc line3), arc line3 have the same radius with arc line2.

Both arc lines and rectangles can be circles. So all alphabets are made up of circles, arc lines and rectangles. 

To make a distinction between letters and numbers, every letter consists filled color part and the numbers doesn’t contain the filled part. It’s easy to identify the alphabet.

I designed an emoji face to stands for the default alphabet. One of its eyes is circle and the other one is the filled color circle.

And I also change the background color, the Line color and the Box color to made these colors go well together.



The 20 parameters per letter:

  * `MainPosX` : x offset of the main body position
  * `MainPosY` : y offset of the main body position
  * `MainRadiusA` : radius of the Main body first rectangle with rounded corners
  * `MainRadiusB` : radius of the Main body first arc line 
  * `MainRadiusC` : radius of the Main body second arc line 
  * `RoundCorRadA` : main body first rectangle with top-left rounded corner radii
  * `RoundCorRadB` : main body first rectangle with top-right rounded corner radii
  * `RoundCorRadC` : main body first rectangle with bottom-right rounded corner radii
  * `RoundCorRadD` : main body first rectangle with bottom-left rounded corner radii
  * `PartPosX` : x offset of the second circle relative to the main one
  * `PartPosY` : y offset of the second circle relative to the main one
  * `PartRadiusD` : width of the second rectangle relative to the main one
  * `PartRadiusE` : height of the second rectangle relative to the main one
  * `PartCorRad` : rounded corners radii of the second rectangle relative to the main one
  * `StartA` : angle to start the arc1
  * `EndA` : angle to stop the arc1
  * `StartB` : angle to start the arc2
  * `EndB` : angle to stop the arc2
  * `StartC` : angle to start the arc3
  * `EndC` : angle to stop the arc3
