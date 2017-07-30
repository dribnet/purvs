## PS1 MDDN 342 2017

This README explains the three different paramaterized faces for part2. 

SCALING
The scaling slider is deliberately not smooth and centred, because it is designed to combat the effects of size changes between my windows PC and the lab macs

LAG
Because of the nature of the masking required for face 3, it takes several seconds for that face to load. To get a smooth slider experience on the other two faces please use the dropdown menu to veiw them individualy. I have found, on windows at least, that Chrome is the fastest for loading and adjusting the third face

VARIABLES SUMMARY: FACE 1 (RAG DOLL)
Scale: adjusts the size the generated image is drawn at
slider 1 (discrete): 
			sets creepy or not creepy
			IF FACE CREEPY
			eye-type
			IF FACE NORMAL
			skin tone
			
slider 2 (continuos): 
			eye height
			proportional bow size, from large and square to small and rectangular, with both width and height changing
slider 3:
			IF FACE NORMAL (continuous):
			opacity of red cheeck circles
			width of mouth
			IF FACE CREEPY (discrete):
			number of stitches in mouth
			(continuous):
			width of mouth
slider 4(continuous):
			eye size
			IF FACE CREEPY
			skin tone
slider 5(continuous):
			smile amount
			additional mouth width
			mouth height (to suit smile)


VARIABLE SUMMARY: FACE 2 (CARTOON)
Scale: adjusts the size the generated image is drawn at
slider 1 (discrete): 
	line weight
	(continuous):
	eye height
	distance between eyes
	nose rotation
	mouth height
slider 2 (continuous)
	mouth angle
	nose tweak, depending on nose shape (ie if round nose adjusts size, if bulb nose, flattens the tip)
slider 3 (discrete)
	head shape
	eye shape
	(each eye shape is displayed once per head shape, to make use of the limited number of sliders)
slider 4 (discrete)
	mouth shape
slider 5
	nose shape

VARIABLE SUMMARY: FACE 3 (patterned face)
Scale: adjusts the size the generated image is drawn at
slider 1 (discrete): 
	changes the random seed which affects: hair line colour, and the positions of lines and flowers
slider 2 (discrete):
	face colour
	flower colour
	eye colour
	(continuous):
	number of lines in the hair
slider 3 (discrete):
	hair colour
slider 4 (continuous):
	number of flowers
slider 5 (discrete):
	straight lines or curved lines in the hair

CODING STRUCTURE
Because I have used such a lot of code, with a lot of variations, I have not only used functions, but objects as well. Because my faces are so  different, it isn't really feasable for them to use the same code without so many variables it becomes silly. So it is fine for them to be in different objects. It means that each one is tidy and self contained. It is easier to find what I am looking for, and to improve my technique as I  go one if I get a clean slate for each face. I have of course borrowed code from each of my objects for other objects, and tweaked it to suit. 
I also created an object to hold the sliders, this reduces the amount of code considerably. I have also realised that it may make randomisation a lot easier too in some cases. Each face now gets passed the sliders object, it has one function which takes arguments for: which slider, the minimum value to be mapped to, the max value to be mapped to, whether the answer should be rounded down to an integer. 


RAG DOLL FACE
This design is all about contrast, be it creepy vs cute, or red vs black. I have decided, for now at least, to keep the creepy and cute faces seperate, meaning no face is partially creepy. 

The sliders are interdependant. Some features are effected by more than one slider, and most sliders control more than one feature.
Dimenstions and dynamic movement have been considered too, for example, when the smile (creepy or normal) becomes deeper, it also stretches wider, when this happens it also moves down the face, so that the mouth is  spaced evenly above and below the original midpoint. 
Wherever possible the coding is  not static, for example any number of stitches would be possible in the mouth, because their coordinates are not hard coded, rather they are mapped from the width and height of the final mouth, and put into place with translation.


CARTOON FACE
Here I wanted to create a simple, fun design with a lot of choice in the variables. I went with a cartoon style, weeding out the need for complex colours, and stripping it back to clean lines. 
My intention has always been to demonstrate three vastly different drawing styles in this stage, and the cartoon face contrasts nicely with the detailed control of the rag-doll and the vibrant randomness of the pattern face. 
The drawing process involves creating a CartoonFace object which passes a graphics object back to the main sketch. A large number of else if statements dominate this sketch, they are devided into functions based on the facial feature they control. These if statements then draw specifics versions of features, either by calling other functions, or simply doing it themselves, depending on the amount of code required.


I have almost completed the cartoon face, although I still want to change the background, and I may see things I want to change when I come back to it later.
The cartoon face, in contrast to my rag doll, is a simple line drawing. I designed it this way for a totally different style, and something clean and fun. The shapes are simple, but the faces they make are expressive, and line weight is an interesting substitute for colour. The code gets complex in places, because of the number of options and combinations. I have tried to shorten it as much as possible using  functions, but there comes a point when there isn't much you can do about it.


PATTERNED FACE
With this face I wanted to experiment with pattern, and the basic representation of a face. I chose to have very few features, to counteract the busy patterns. Because I wanted the patterns and abstraction to be the focus of this design, that is what the sliders control, rather than things like face shape. 
For the hair I played with representing the abstract essence of hair:  colours and lines. 
For the skin I wanted to play with the  idea of the saying "flowers bloomed on her cheecks". This manifests as an abstraction of tattoos and full-face-freckles, both in the form of flowers.
In terms of code, this face had the most difficult single elements. 
To get the precise shapes as cutouts of pattern, rather than single block colours, involved masking. I saw a couple of people mention that masking by manually adjusting an array of pixels was possible, and I worked out how to do it using the p5.js documentation for pixels, and an example of manually colouring pixels. 
What happens is that I fill a graphics object with black. Then I draw the shape I want my pattern to be in red. On a serperate graphics object I draw the pattern I want. I pass both of these to a function I have created, which does the masking. This function takes the black and red canvas and checks each pixel. If the pixel is red, it sets its alpha value so that it is clear. I take the resulting black outline and draw it on top of the pattern graphics object. Then I check all the pixels of the pattern object, if they are black I set them to clear. 
I am very pleased with the result. I chose to focus on colour as well here, the same drawing can be an artistic representation of a human, a complete abstraction, or a visualisation of an alien, based simply on the colours selected. I have also kept the number of colours displayed at any one time limited, instead adjusting hue to give definition and variety.
Although I love it, I did not choose this face as my final because I didn't have it finished in time. Even if I had, it would be impractical, for each face it takes 4 complete iterations through the pixels, which is just too slow for a large number of them.

