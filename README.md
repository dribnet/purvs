## Creative Coding 2: Custom Pixel

Final:
Theme:
My theme was reflection. The way I maximised my theme was by using the reflection of light off wet roads.
To show this theme more effectively from the original smartmasks i used which only selected traffic lights and car headlights etc. I customized the masks in photoshop to include the source of the lights and the reflection of the lights. (I dont have time to document the changes properly).
Images:
The images I used where my own photos which I took on taranaki street and on courtenay place.
Design:
For my final I played around with BLUR filters and blending and chose to go with the blending option as the BLUR didnt have the intended effect. My masked areas draw triangles instead of hexagons in a grid pattern. This causes an ugly graphic effect initially making the highlighted spots look incomplete so I added a transparent tile to the back of the triangles using RGB alpha based on the getpix values. I found that the darker colours in the masked areas looked good witht he gaps inbetween the triangles where the lighter colours did not so I set the tile drawing to be based on the lightness of the colours which was worked out as (R + G + B)/3 to get the value.
By adding a blend effect to the hexagons in the background I succesfully managed to wash part of the colour out of the background to not overpower the masked areas which I wanted to be the main focus of the final images. All of these elements add together to create a nice glitchy looking display of light reflection displaying my theme constantly, in a visualy pleasing way.