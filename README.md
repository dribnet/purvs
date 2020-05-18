19/05/20
Animation

I added the animation maps to my alphabet today. Because all of my variables are just x and y coordinates, the stright maps work really well in my opinion. Some changes look really cool, for example D to G and O to P. I will have to play around with it but I don't think there is much improvement to be made. My only issue would be with the ones that have to move 200px go  quite fast, whereas ones like O to P go quite slow because they dont move quite as far. 

An issue that I had was that I had no given some of my characters all of the parameters. The ones that only had one point, I only gave pointoneX and pointoneY to save time, but this resulted in janky animation. I went back and added the rest of the parameters but had them the same values as the first two. This way there is no extra lines, but the animation works smoothly.

I really like the way the default letter 'unfolds' into all the other letters. it is  compressed with no overlapping lines, like folded paper. The way it unfolds looks neat. 

Parameters:
  "pointoneX" - first vertex X
  "pointoneY": - first vertex Y
  "pointtwoX": - second vertex X
  "pointtwoY": - second vertex Y
  "pointthreeX": - third vertex X
  "pointthreeY": - third vertex Y



