## PS2 MDDN 342 2017

I started continuing onwards from project 1. I already used Objects to instantiate and move my faces from project 1 so this was fairly easy. By far the hardest part was adding depth to the previously flat image that was there before. I ended up using the eyes and facial proportions and scaling other features like the ears using this data. This allowed me to have the ears and mouth placed in the right place at the right angle.

Most of the transition from project 1 to 2 involved creating a generic map formulae and passing the values through that. 

map(x,-63,63,(positions.top_lip[0][0]*0.5) + (positions.chin[3][0]*0.5),(positions.top_lip[7][0]*0.5) + (positions.chin[13][0]*0.5))
map(y,20,128,positions.nose_bridge[2][1],(positions.chin[8][1]*0.5)+(positions.chin[9][1]*0.5))

With these i could scale everything reliably, however there was a lot of recursion, prehaps in future creating a function would be a good way to cut down on code repetition.
    