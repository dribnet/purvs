## PS2 MDDN 342 2019

### Refined distribution, fringe fix, face redo and eye colour

Ive modified the code for the fringe again. I wasnt happy with how the straight fringe sat, as i felt it was too short on the forehead. I played around with some of the variables, so the overall shape is much larger when the hair is flat. This was also necessary because i rearranged the face slightly, so that the eyes, nose and mouth were sitting in more realistic positions. 

I redesigned the face as well, changing some minor things such as the mouth and nose. With this ive also added a new slider in for make up. This is quite a subtle change, but it adds blush to the cheeks which i quite like. 

Ive also added a slider for the eye colour, to give more variation between random faces. To do this i had to modify the colour style for the eyes, as the eye has multiple tones in it. Using hsb was much easier as i could just lighten or darken the colour. 

Ive also added in more accessories, this time flowers. They are relatively simple and adjusting the code so that they moved alongside the curliness/length of the hair wasnt too hard as i had already done it for the bows. 

Ive also now implimented some weighted distribution to the arrangement code. I did struggle a little bit however, as i wanted the mean to be in multiple places for several parameters. I wanted the code to focus on certain parts, not one single part. Such as with the eyes, i wanted to the code to focus more towards each quarter of the number, 0, 25, 50 and 100. To do this i nested the forced random function in itself and multiplied the result. This gave me exactly what i wanted, and the distribution drifted towards the specific values. 

I did the same thing with the hair, drifting the values towards the highest and lowest possible. Im quite happy with it as it is, however i might tweak some of the values of each focus until im happy. 