#VINTAGE?: PS2 MDDN 242 2018

Thomas Hartley

#Introduction
Inspiration and Reasoning

The alphabet and typography used is inspired directly from 'Gothic sans-serif' and my own personal preference in minimilist line art and the 'OCD' astethic (https://en.wikipedia.org/wiki/Technical_lettering and http://ednotebook.hostgator.co.in/basics-of-engineering-drawing).
This type font to me is very pleasing, easy to understand, simple to use, and is a allusion to old style type writter font. 

#System and the Stroke

The system (for the most part) works by generating the distance between two points and iterates through each between the two pointspoint in order to form the shape. The astethic is created by 'gapping' between a few veticies based on the other defined variables. 

#Stroke Design

Aside the frame being defined, the design features and flaws are built entirely on the ration of spacing and the consitant use of at least one side of each frame being used (left maximum, right maximum, top maximum, and bottom maximum [these are not variables but descritptors]).

#Design Process

A few things that are defined for various reasons:
-The gap and stroke width and line width  - both gap and line width are defined by the stroke width in order to cause the least amount of conflict regarding each individual line clashing.
-Color Scheme - Based on old typewriter script and black and white vintage films as well as a minimalist palette. 
-Color Variation - The varrying color in each stroke (1 to 3) was initally meant to represent the order in which the strokes are made. This was also to simulate a "running out of ink" subtle effect.
-The third line on majority of the shapes recides up or slides behind the other strokes in order to prevent confusion regarding the order of the effect itself. 

#Possibilities

A few ideas fell through due to timing, however a few concepts that could be implemented would be an animation for the drawing function itself, a random width and scale that would not conflict with other frames and objects, and a full ascii keyboard of characters that could be drawn. 

Another pssibility would be to find a varition to the current ration on the number scheme as well as some of the more akward forming letters, such as 'G'.

#Functions and Variables (Via System)

Name | Location | Purpose

(The # represents the variation in numbers as per each variable value 1-3 and 1-6)
Stroke#_x# | letterData | Defines the x value of the for each point for each stroke.
Stroke#_y# | letterData | Defines the y value of the for each point for each stroke.

cX | draw_letters | The map for each X value in each line.
cY | draw_letters | The map for each Y value in each line.
gap | draw_letters | This is responsible for determining the size and consistency of the spacing between each vertice.

drawLetter() | draw_letters | Draws each letter based on its Letter Data.
x# | drawLetter() | defines the x value based on letterData.
y# | drawLetter() | defines the y value based on letterData.

drawin() | draw_Letters | From the arguments, maps each value of the line based on absolute value of distance and draws the vertice based on gap and the restrictive size.

interpolate_letter() | draw_letters | Defines the new letter data based on the old letter and new letter in order to preform a smooth animation of a transition.