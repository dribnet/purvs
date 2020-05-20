## MDDN 242 2020 Assignment 2
FINISHING MY ALPHABET & CHANGING PARAMETERS

I managed to do a lot today. Like I said in my last read me, I wanted to remove some variables. I ended up taking out the (rectHeight) and (rectWidth) since I tended to use the same width for each letter, I replaced them two parameters with two new ones (rectX2,rectY2) a new rectangle to so I could create some new designs that looked better and more complete. I also decided to take out the (arcHeight) and (arcWidth) since I kept it the same throughout my letters, I replaced these two with (arcSize) which allowed me to get smaller circles in my design such as the letter B, P and I.  I now have 14 variables that are being used for good use, I use each shape in all my letters so that it looks nice in interaction and is a balanced colour within each letter. Since changing these parameters I had to go in and change the interpolation and editor. I have now finished my alphabet and numbers which I'm happy with. I decided to let my numbers go over the x-height and be bigger than the letters so that numbers had better form and looked cleaner. 

The thirteen parameters per letter:
  * `rectX` : x location of the rectangle
  * `rectY` : y location of the rectangle
  * `rectX2` : x location of the second rectangle
  * `rectY2` : y location of the second rectangle
  * `arcSize` : overall size of arcs 
  * `arcX` : x location of the first arc
  * `arcY` : y location of the first arc
  * `arcS` : angle to start the first arc
  * `arcE` : angle to end the first arc
  * `arcX` : x location of the second arc
  * `arcY` : y location of the second arc
  * `arcS` : angle to start the second arc
  * `arcE` : angle to end the second arc


