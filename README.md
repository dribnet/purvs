## MDDN 242 2021 Assignment 2

Interaction

This is a visual interpolation and animated transition between letters.

And thank for Phoebe’s help and I solved the interaction problem, it needs to return the new_letter.

And for Bex’s suggestion, some of interpolation between letters has minor tweaks. For looks better, I add if-else function to let arc lines transfer from first one to the next one rotates in clockwise.

Before map from oldObj to newObj, it should be compare the oldObj angle to the newObj angle, if oldObj angle greater than the newObj angle, then newObj angle need to add 360 to make sure rotation in clockwise.

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
