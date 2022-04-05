## MDDN 242 2022 Assignment 2

Part 2: Design the Alphabet
31/3
So I've changed from my initial idea quite a lot. I'm a lot happier with this design and overall I think it's just more interesting to look at. In this design the location/centre point & the size of the arc are set as constants. There is only one parameter involved with this shape which will effect the stoping point/angle of the arc.

The two lines move and stretch the most. At this stage most of the letters have them being either horizontal or vertical. There are a few design using diagonals, but I think within the next week I may potentially change this if I do the optional Part 2b: Editor, so theres not an excessive amount of sliders etc. There are currently four parameters involving the two lines; these are just the basic x,y, start & stop point coordinates. Moving forward I think I'd like to simplify the parameters a bit or like tie them to a couple different variables so your not having to map & plan each individual coordinate set.

I also added in a nice golden yellow colour just to add a bit of flavour to the colour palette, though nothing's set in stone. Moving forward I want to finalise the individual designs that I mentioned earlier & start refining the parameters.

There are currently nine parameters per letter:
* `arcStopAngle` : this is the 'stop' angle that the arc will stop at
* `Line1_X_startcoord` : x coordinate of the starting line point
* `Line1_Y_startcoord` : y coordinate of the starting line point
* `Line1_X_stopcoord` : x coordinate of the stopping line point
* `Line1_Y_stopcoord` : y coordinate of the stopping line point

* `Line2_X_startcoord` : x coordinate of the starting line point
* `Line2_Y_startcoord` : y coordinate of the starting line point
* `Line2_X_stopcoord` : x coordinate of the stopping line point
* `Line2_Y_stopcoord` : y coordinate of the stopping line point
