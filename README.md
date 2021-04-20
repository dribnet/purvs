## MDDN 242 2021 Assignment 2

Finished setting up all alphabets.

For letters consists main body and filled part, let numbers are distinguished from the letters, it doesn't contain the filled part. only consists of arc lines and circles.

The letters consists of rectangles, arc lines and circles, it is also have a filled orange color part.

I designed a emoji face to stands for the default alphabet. One of its eyes is circle and the other one is the filled color circle.

And I change the background color, the Line color and the Box color to made these colors go well together.

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
