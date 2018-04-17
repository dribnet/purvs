##Technical Lettering of someone from OCD Alphabet: PS2 MDDN 242 2018

## Thomas Hartley

##Introduction
Inspiration and Reasoning

The alphabet and typography used is inspired directly from 'Gothic sans-serif' which is used by enginners and formed from simple strokes consisting of horizontal and vertical lines from left to right and top to bottom (https://en.wikipedia.org/wiki/Technical_lettering and http://ednotebook.hostgator.co.in/basics-of-engineering-drawing). The main use is for diagrams and detailed plans to prevent confusion if someone were to reread or look over the same documents. In middle school, I was taught the simplicity of this type of writing and I was very fond of it. I have OCD and so patterns of edges and lines are very prodominant to me. Specifically the ratio of each 'stroke' of each letter and the shape of each stroke. 

##Typography

#System

Each letter is formed of a finite number of strokes with alternate x and y offsets, curvatures, as well as varrying angles. This means that defining each letter form with a few parameters and drawing the length, depth, ratio, etc from the variables given and then finally drawing the letter from the strokes and variables. The system itself takes a few parameters and then calculates out the details, which means that given the little amount of information, the rest needed can be derived from what is given.

The system itself pushes or adds each vertex or point to the letterform (shaping) array which is gathered from the parameters given. This is then used to draw the x and y of each point and line. Furthermore, each Stroke (aStroke) has its own class or type with its own defined functions and variables. These functions are responsible for their own calculations and their own defining functions in order to show that each stroke is unique and is not conflicted with the math or variables for each other stroke type. As the letter system passes each variable, the new 

#Stroke

The Stroke 

#Stroke Design

Aside the frame being defined, the design features and flaws are built entirely on the ration of spacing and the 
#Functions and Variables (Via System)

Name | Location | Purpose

canvasWidth | Initial Variable | Defines the Canvas Width.
canvasHeight | Initial Variable | Defines the Canvas Height.

fW (Frame Width)| Initial Vairable | Defines the current frame width.
fH (Frame Height) | Initial Variable | Defines the current frame height.
fX (Frame X) | Initial Variable | Defines the current X position of the frame.
fY (Frame Y) | Initial Varialbe | Defines the current Y poition of the frame.

letter [] | Intiial Array | Constains all the 'strokes' used for each and every letter used thus far.
LetterData | Constant Values | Contains the data of values for each letter form.

colorBack | Initial Variable | The constant color of the Background.
colorStroke | Initial Vairaible | The constant color of the stroke of the shape and letter.

(Within setup the angle mode is change to degrees as its easier to preform the math.)

aStroke () | Function and Type | Takes the x, y, angle, and curve parameters and holds its own variables and function as it constructs and completes each stroke and each strokes values. 

x | aStroke Variable | Derived from parameter, is the current x of the shape.
y | aStroke Variable | Derived from parameter, is the current y of the shape.
angle | aStroke Variable | Derived from parameter, is the angle offset of the stroke and provideds theta for the rotation and calculation.
curve | aStroke Variable | Derived from parameter and is responsible for determining the size and type of curve of each letter form.
length | aStroke Variable | This is calculated to produce the length of the stroke and then is used to map out the required X and Y for each vertex.
rA | aStroke Variable | This is the ratio of the angle and opposing side of the triangle to the length of the hypotenuse (length).
shaping [] | aStroke Varaible | This is the array of the X and Y position for each vertex in the stroke shape. 
gap | aStroke Variable | Boolean variable used to create the visual gap between the seperate horizontal lines within each stroke. 
gap2 | aStroke Variable | This is also used to create the visual gap in the stroke by waiting a defined amount of processed verticies before drawing the next horizontal line. 