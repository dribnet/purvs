## PS2 MDDN 242 2018

Episode 03

Due to some issues i have made a debug code to fix all the proper positions and values of each of the cipher codes that represent each of the following letter

A, B , C , D , E, F, G, H, I, J, K, L, M, N, O, P, Q, R

This is done to further simply the issue of rotating the rectangles to complete the cipher aplhabet that i am trying to accomplish.

i will upload a full cipher guideline code for a reference soon. but for now the current parameters are shown as the following:

	(A TOTAL OF 20 values for each rect/circle)
  * this values goes onto 4 eg pos_x4 for each rect
  * `pos_x1` : x position of the rect
  * `pos_y1` : y position of the rect
  * `width_1` : width of the rect
  * `height_1` : height of the rect

  
  * The value for x and y for the ellipse is fixed, x = 50 and y 135
  * `c_width` : width of the ellipse is stored here
  * `c_height` : height of the ellipse is stored here

the next value to be added into the parameters soon is the rotate value for the remaining cipher letters