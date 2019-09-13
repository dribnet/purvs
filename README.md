## PS2 MDDN 342 2019


----------------------------------------------------------------------------------
FINAL READ ME 
- For this project I drew two types of skulls Human and Ram, different types of horns, changing eye colour, drawing the symbols of Babalon and Thelma aswell as some width changingparamters to add more variety to the skulls. I went with a darker/occultist theme using symbolism of the Thelema. I got my inspiration by looking through my old sketch books I have at home.

To create the shapes i used Curve vertexes to make all of the shapes custom  so there would be alot more detail and a better overall look as default shapes were far too restricting for what I wanted. This turned out to be very time consuming,
Because of how time consuming this method became there were alot of variables that I had thought of using that I no longer had time to implement. 

For my arrangement to show off the skulls i drew them in a cirlce around a large ram skull. I drew a red pentegram on the background to fit the aesthetic. And set the different circles to draw each type of skull seperately,	Rotating all of the faces so they are looking towards the center point to further the occultist imagery and theme. 


My variables
- The type of skull, Human or Ram. 
- Horns, there were 3 base horns and 3 sets of horns giving 6 total.
- The width of the cheekbones applys to the cheekbones of the human skull and the nose of the Ram.
- The width applies to the human skull width. 
- The human skull has a chance to not generate horns.
- Eye colour changes between a dark grey and dark red.
- Jaw on Human skull opens and closes 
- There are 2 symbols with a chance of no symbol, symbol 1 or symbol 2 being drawn on the dorehead of the skull

----------------------------------------------------------------------------------

#sept 11 
 - Horns are completed filled to blend to the background and show shape from the detailing lines that i drew, i changed the colours slightly so the faces look nicer. Arranged the majority of the arrangement just a couple of details to deal with like rotating so they all face the center skull and somehow need to stop them drawing all variations at once. 
----------------------------------------------------------------------------------

#sept 10 
- Horn detailings are finished, need to complete arrangement and move horn positioning for the human skull.
----------------------------------------------------------------------------------
#9th sept 
- I have made a pattern to fill the horn outlines out of curves and curvevertexs
this makes the horns look like they have more shape instead of just 2D
----------------------------------------------------------------------------------
#5th sept 
- Turned Horn outlines into their own functions and create number generation to choose which horns to draw for each face
-------------------------------------------------------------------------------------

#4th sept
- I have made 3 types of horns that are able to be fitted to the ram skull and human skull, although it is only the outline. I need to fill them and try to create a pattern/texture that will be able to show the direction the horns point. I also need to convert the horns from drawface3 to their own functions which can be called when numbers are assigned. 
-------------------------------------------------------------------------------------

#3rd sept
- I have drawn the base of the ram skull, i need to make the horns. I will make 3 different types of horns that will fit the ram skull and the uman skulls. all rams will have horns but only some human skulls will. I also need to make some eyes for the human skulls. I would like some of the skulls to have eyes and some not to. Just like the horns. Im thinking of adding in some shading/colouring effects and maybe some more detailing lines to create a more complex image based around my theme.  
-------------------------------------------------------------------------------------

Fixed up some of the proportions on the basic skull, tidied up some code

--------------------------------------------------------------------------------------
#update 
Redone the draw face to be more complete and better scale/looking nicer.
I used a sketch and photoshop to map the correct scale still need to do alot of polishing up on the human skull outline. will need to draw teeth to make the skull look right.

-------------------------------------------------------------------------------------
#plan

Human and Ram skulls

Ram Skulls {
	vectors and curves:
	vectors for face shape
	curves for horns
	bone details would be annoying
}
Human skulls{
	vectors to create shape.
	vectors for bone details
	bone details would be hard
}
randomise{
	number of eyes{
					1 - 6?
					face size will need to scale to fit eyes
					}
	size of horns{
					length or curl maybe both
					need to be an algorithm
				}
	colour{
			white, grey, black
			skin instead of bone then - white, grey, brown, black 
			}		
	width/length of face
} 
simplify{
	dont draw teeth
	top half of skull/face only e.g no jaw
	outlines and fill colours
}
if eyes >2 length = x 

variables:
	- vector points for scaling height and width
	- colour values
	- number of eyes
	function variables:
		- eyes call as required
		- horns call types of horns/scale

bone effects could be created by strokeWidth. 

make functions for the eyes. can randomise colours
make functions for types of horns which can scale for face size.

draw stock face functions so sizes can be scaled/made thinner or wider. longer/shorter.
ram skull and human skull as own functions. 
