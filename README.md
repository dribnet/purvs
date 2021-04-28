## MDDN 242 2021 Assignment 2

Final

This is my final version.

My font name is "Arc Lines". All alphabets consist of circles, rectangles and arc lines.

I choose lowercase letters. I hope these alphabets have smooth and curve outlines. It has two part and one part have rectangle with four rounded corner radii, and two arc lines (arc line1 and arc line2), and the other part also have rectangle with filled color and one arc line (arc line3), arc line3 have the same radius with arc line2.

To make a distinction between letters and numbers, every letter consists filled color part and the numbers doesn’t contain the filled part. It’s easy to identify the alphabet.

I designed an emoji face to stands for the default alphabet. One of its eyes is circle and the other one is the filled color circle. I hope the default alphabet is not just a question mark, it can be anything. So I designed an emoji face to be funning.

And I choose the light orange/Tangerine as the background color, and the stroke color and filled color are still in orange. These colors creates a warm, pleasant, comfortable and relaxed feeling and atmosphere.

For looks better, I add if-else function to let arc lines transfer from first one to the next one rotates in clockwise.
Before map from oldObj to newObj, it should be compare the oldObj angle to the newObj angle, if oldObj angle greater than the newObj angle, then newObj angle need to add 360 to make sure rotation in clockwise.

The first word shows the name of my font “Arc Lines”.
Although these alphabets consist of circles, rectangles and arc lines. But all of these letters and numbers have curve outlines, I naming this font be arc lines.

The words that followed are,
“?LiYang?” – (My Name),
“MDDN?242” – (Course Code),
“Project2” – (This project),
“ArcLines” – (Font name again),
“?Orange?”,
“ManyPink”.

The structure of these alphabets is not too hard in this project. There are 20 parameters but most of them didn’t affect the outline of alphabets. For example, the rectangle rounded corner, it has 4 parameters but it works at most one at the same time. I designed this part to make the alphabet shapes not boring, it’s not just a simple circle. For distinguish the letters and numbers, I decided to ignore the filled part. That means I have one less pick to construct the numbers. Therefore, some outlines of number are not perfect, (like number 4), I have to design in three arc lines. In fact, the circle is just an arc line with start angle to end angle from 0 to 360. It’s a small challenge for me to design numbers. But the process is interesting and funny.


Here are my 20 parameters:

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
