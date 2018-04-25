## PS2 MDDN 242 2018
# Bezifont

Due to time constraints I will have to  simplify my project a bit. I decided after this experiment that I would have to simplify things and move away from the bezier points and revisit them on an upcoming project. I however did get the array data loaded properly into the quadraticVertex() function in an efficent manner. After some reading I learned that calling the method via: quadraticVertex.apply(this, array_data) will pass the array into the function in the proper format. So my drawBezier() function can draw a 3 point curve using only 3 prameters.

Moving forward I will be addressing vertex points and addressing each one of them directly so I can get them into the map() function in a more efficent manner. So I will be using x,y constraints of each point in the next iteration of the project.

For this iteration of the project the current parameters are:
  * `vert1_pos` : The first vertex in the bezier curve 
  * `vert2_pos` : the second vertex and control points in the bezier curve 
  * `vert3_pos` : The thrid vertex and control points in the bezier curve 
  * `obj_alpha` : alpha parameter of the current object.

The somewhat working bit of this code is on the character 'C' It passes and draws on top of the original 'C' character as expected with all of the points working. I consider this experiment a half sucess but it simply needs to be taken a little bit further with some custom mapping and drawing functions.

