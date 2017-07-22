## PS1 MDDN 342 2017

This README explains the three different paramaterized faces for part2. 
A little update, trying to map the slider to the number of stictches in the mouth, tricky paramaters, not there yet

Sliders 1 and 4 are operational, but 4 only does something if the slider is right of center.
At this stage I have been refining what works and how to do this cleanly, without confusing myself. For example at first I was going to do the eyes using x and y coordinates, but then that got really tricky when I wanted to draw the x shapes, so I backtracked and used translation, which meant I could also put the x drawing in a function, which means it is only written out once. I was also going to change values with a multipliable scaler, like in the example, but then I realised that with my sliders I have basicaly built my own scaling machine and all I need to do is plug in any two values, be they size, position, or anything, and the slider does the scaling directly. 
For my second face I want to play with the idea of abstraction and art. What if the flowers blooming on her cheecks were actual flowers, and what if there were real stars in her eyes?

I don't know yet what I am going to do for the third face.
