## PS2 MDDN 342 2017

For the PS2, I inherit the style of Chinese mask, its features are dramatic dark eye rims, various curves, white jaw, red lips and strong colors and strokes.

Therefore, for the eyebrows part, I use positions.eyebrows [0], [4] and a point above eyebrows as my anchor points to create curvier eyebrows by using bezierVertex (), for the curve points, I just slightly increase or decrease the value of anchor points, after I finish the shape of left face, then choose the symmetric points to do the same thing, finally, I use slider to control the height of eyebrows.

For the eye rims part, I use positions.chin [0] [1], eyebrow [4], nose_bridge[0] as the anchor points, and use black to highlight the eyes, then use slider to control the width of eyes and eye rims.

For the nose part, I use nose_bridge [0] [3] to be the anchor point of line (), use nose_tip [1] [3] to be the anchor points of ellipse.

For the tattoo part, the curves consist of positions.chin [2] [3] [4] and nose_bridge [2] to simulate people's wrinkles.

For the beard part, I use positions.top_lip [3] and chin [7] to create an arc shape, the shape can be beard or shadow of face to highlight jaw and mouth, so the slider can control the height of beard to make different feelings.

For the jaw part, I also use positions.top_lip [3] and chin [7] to create an arc shape, but overlap the beard.

For the mouth part, I use vertex to connect each point of positions.mouth, and then connect top_lips and bottom_lips to create a shape between top lip and bottom lip.

Finally, for the skin color, I mainly choose the obvious color in an image as skin color, then choose the similar skin color from people's face.