## PS2 MDDN 242 2018
#Bezifont

I will be attempting to make a font with subtle Bezier curves with a few accent shapes. For now the accent shapes will be one circle and one triangle. I may add a morph function to these shapes so they will be able to do both triangle or circle forms.

I am predicting that I will be able to handle the one bezier spline as one variable by loading the values to an array and then passing them to a drawBezier type function. A similar function will handle the morphing of the circle and the triangle, from one state to another.

Other parameters will be similar to the initial example in class as detailed below.

The three parameters per letter are now:
  * `size` : size of the triangle/circle morph shape. 
  * `offsetx` : x offset of the triangle/circle relative to the first one
  * `offsety` : y offset of the othe triangle/circle relative to the first one

If there is time I would also like to add in some easing and fading functions where they would be necessary in the project.

