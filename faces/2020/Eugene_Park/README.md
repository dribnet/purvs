## 2020 MDDN342 Assignment 2: Randomised Collections

For this project, I chose to program frogs for my collection. There are two types of frogs; the blob frog and sideways frog. Most of the shapes needed were created through curve vertices as I wanted the design to be more flexible and to fit my sketch. Overall, it is a flat coloured, simple design. For the final arrangement, I used my faces as sticker designs.
All in all, I'm satisfied with how my final arrangement turned out.

PARAMETERS:

Blob Frog parameters:
h_thickness (0-10) - increases the width of the head and will also increase b_thickness
b_thickness (0-100) - increases the width of the body
height - increases the height of the whole frog
blob (0-1) - how defined the neck is
e_shape (0/1) - whether it has eyebrows or not
e_height (-0.3-0.7) - position of the eyes vertically on the face
e_size (-0.5-0.5) - how much bigger/smaller the eyes are from the default size
mouth (-1.5-0.5) - the change in position of the middle of the mouth so that is it smiling or frowning
pupil (0/5) - shape of the pupils
colour (0-3) - colour of the frog
belly (0/1) - whether the underbelly is coloured in or not
m_open (0/1) - whether the mouth is open or not

Sideways Frog parameter:
h_thickness(0-10) - increases the width of the head
s_length (0-10) - increase the length of the snout
height (0-10) - increases the overall height
s_height (0-10) - changes the height the snout is pointing at
e_shape (0-1) - changes the shape of the eye and/or the direction the head is facing
e_height (-0.4-0.6) - changes the vertical position from the default
s_width (-0.8-0.2) - how wide/thick the snout is
mouth (-1.5-0.5) - shape of the mouth, whether its smiling or frowning
pupil (0/5) - shape and type of pupils
colour (0,3) - colour of the frog
belly (0/1) - if the underbelly is coloured or not

The continuous variables are: body size/shape, eye size, eye position, mouth shape and colour.
The discrete variables are: expression, eye type, belly colour, pupil type and also colour.

For colour, there is a 2.8/3 chance that the colour will be continuous and will interpolate between three different colour variables. Otherwise the frog will be coloured in a solid 4th colour. For the side frog that is orange and the blob frog will be coloured in brown.

The body size of both frogs and under colouring use refined distributions.
Both frogs have a higher chance to be on the smaller side. The blog frog will mostly be smaller/mediumly wide and mostly short. The side frog has lower focus but will still tend to be on the smaller size.
