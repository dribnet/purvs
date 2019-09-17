## PS2 MDDN 342 2019

### Scripting Hair

So far i've begun work on the parameterized hair. The hair is the most complicated part of my idea to script, as i want to have sliders for both how curly it is and how long it is. This means i need the two to be dependent on each other, as the style of the curls will need to change according to the length. 

So far ive used a combination of arcs, lines and vertexes to create the hair. An arc is used for the top of the hair, and the part that sits on top of the scalp. When the hair length is increased lines extend from the base of this arc to form a triangle. At the base of this triangle a circle is drawn, this was done by drawing a shape with verticies drawn in a circle. As the slider for how curly the hair is increases, the circle grows from the bottom of the hair strands. 

Ive been having some difficulty with designing the shortest versions of the hair, as the long triangle lines and curved ends dont work for when the hair comes right up to the scalp. 

For now ive scripted in a curl that follows the arc, while the arc slowly closes up as the hair gets shorter. 

I also added in some parameters to the hair function i wrote, so i could duplicate the hair overall and add a second layer of it behind the first. This gives it slightly more depth and a more solid shape.