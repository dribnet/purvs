## PS2 MDDN 242 2019

I've been experimenting with some unique transitions, one idea was to have the colours change while sifting letters. Ive played around with the interaction code and managed to achieve this, however i found that they were changing colours even when they werent the letters changing (in the exhibition section). 

Previously i did add some modifications to the code to better enable the transitions. Because the lines are mostly true/false they dont move, so there was no easy way to blend their positions into each other. To resolve this i added an alpha value to each of the lines being drawn, if the lines are in a state of transition then their alpha value fades them in or out respectively. 

The current parameters are:

* `Line1` :  Whether this line is visable and/or curved

* `Line2` : Whether this line is visable and/or curved

* `Line3` : Whether this line is visable and/or curved

* `Line4` : Whether this line is visable and/or curved

* `Line5` : Whether this line is visable and/or curved

* `Line6` : Whether this line is visable and/or curved

* `Line7` : Whether this line is visable and/or curved

* `Horizontal` : True or false, if true the entire grid is rotated 90 degrees sideways.

* `Scale` : The vertical height of the letter

* `Offset` : The y position offset

