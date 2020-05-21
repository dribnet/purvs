## MDDN 242 2020 Assignment 2


CAMPFIRE
_________________________________________________________________________________

Each letter uses 12 parameters

invface1 // inverts Face 1

cut1face1 // 1 of 3 cuts that can be made per face
cut2face1 // 1 of 3 cuts that can be made per face
cut3face1 // 1 of 3 cuts that can be made per face

invface2 // inverts Face 2

cut1face2 // 1 of 3 cuts that can be made per face
cut2face2 // 1 of 3 cuts that can be made per face
cut3face2 // 1 of 3 cuts that can be made per face

invface3 // inverts Face 3

cut1face2 // 1 of 3 cuts that can be made per face
cut2face3 // 1 of 3 cuts that can be made per face
cut3face3 // 1 of 3 cuts that can be made per face

Design Process / Readme Summary
My challenge to myself with this problem set was creating an entirely 3D / Isometric alphabet. On top of this I also wanted my letters to be bound by the same perimeter 'cube' to make my alphabet very cohesive, given that we can't edit the kerning of each letter. I was inspired to go for this style of alphabet due to the limit on the amount of parameters that we can use, my thought process was that if I take a very systematic and structured approach literally and visually, then I should be able to streamline my code a lot in order to use less parameters.
When I drew my original sketch in illustrator (below), I was using it as a rough guide and didn't expect to be able to recreate it so closely as I didn't fully understand what being limited to 12 parameters would mean for how we could code. Because I had quite a rigid plan in place for my alphabet, a lot of my early commits don't show clear progression on each letter, because I knew what I could and couldn’t do based on the first couple of letters. 
My initial attempts were with a 2x2 cube, where the plan was that each letter would be created using the faces of the 2x2 grid, and not full 3d cubes. This is why my sketch looks quite different to my final alphabet. After I worked a bit on that I realised that I was limiting myself a bit, and if I wanted to create it in full 3d, then a 2x2 grid wouldn’t be large enough.
I moved onto a 3x3 like in my illustrator sketch and worked using custom shapes and contours. Because in a 3x3 cube, each face is made up of 9 smaller cubes, I would need 27 parameters to draw each face, double that if I needed x and y coordinates. I chose to draw the cube as a constant, and then use my parameters to cut away at the shape using contours. After I made a cut, I needed faces inside the hole to show that it is 3d, so I drew 'caps' based off the position of each contour. This ended being a big problem as it led lots of hierarchy issues, where however I structured my code, there would always be some of the interior 'caps' overlapping with exterior faces ruining the 3d effect. On top of this if I made a contour that reached the edge of the custom shape, then I would be left with an awkward shape around the edge of a cut-out. on top of this also, since I was manually drawing each face, my code was getting long and extremely finicky. One positive to this approach however was that the interpolation between each letter looked fantastic, as the cut outs would interpolate correctly.
After talking to a few tutors however I decided to rewrite all the work I had done with a different method. My plan this time was to use my parameters essentially as an 'on/off switch' by assigning all 27 cubes that make up the overall cube a value, and then not drawing that cube if one of the parameters is equal to the number it is assigned. This process worked so much better than before, was faster to code, and fixed all the hierarchy issues that I was having earlier, and I could do it all with just 12 variables. However, because I was using switches the interpolation between each letter not what I had before. However, I also played around with this further, and managed to create an effect that scales down each cube while the interpolation is occurring, without using up another parameter, as I didn’t have size as one of my existing ones. I then remapped the interpolation so that it only occurred during the time that the cubes had been scaled down, and also changed it so that my inverse parameters would occur straight away, so that you could still see the interpolation for the letters that switch from and inverse face to a non-inverse face. This effect looks fantastic, and I love that it shows the viewer exactly how each letter is constructed, as you can see in between the gaps of each cube.
I named my font CAMPFIRE mostly due to how each letter looks together and its legibility, but also due to the colour scheme that I ended up using. The other words are a mix of relating to my design like FRACTION, or just because I like the way it looks like TORTOISE.
If given more time I think my plan would be to try and further condense down my code. Especially all the logic gating that is needed to determine whether to draw one of the cubes or not. I’m thinking that I could probably use a nested for loop, that loops all of the logic gate code for a single face, put all of the face numbers correctly ordered into an array and feed them in using the loop.
Other than code structure, I’m very happy with the final output of my alphabet, and its interpolation, and I don’t think there is anything else that I would change.


https://i.imgur.com/bbycwfj.png
![Initial Illustrator plan](https://i.imgur.com/bbycwfj.png)
![Reference Cube](https://i.imgur.com/jBsV5cI.jpg)