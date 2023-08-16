## PS2 MDDN 342 2019

FINAL README

This is my final randomised collection. Overall I am happy with how this has progressed from my original idea as at the start I was really struggling to find an idea that I wanted to do. I wanted to keep a simple cartoonish style so I could focus on getting used to the code and making it function well. My final handin includes three different face types with slightly different facial parameters for each. I chose to keep the three types as I wanted each bear type to be distinct. I did experiment with putting all the different facial features onto one 'face' but I like it better when the colouring and overall look is distinctive to the type of bear. The three face types are supposed to loosely represent a bear, Face one: panda, Face two: brown bear and face three: a polar bear. I chose this arrangement as I tried a bunch of different grid options but overall wasn't happy with them so I wanted to show them on little bodies. I also added ten faces on the sides to show the different combinations of facial features as I wasn't sure from the brief if their was a minimum number of faces required for the final hand in and it also filled the negative space nicely.

My parameters for each face are:

Face One(Panda):

Size / Scale of the face (Continuous)
Ear style (Discrete)
Cheeks/blush (Discrete)
Mouth/ Smile curve (Continuous)
Eye patch size (Continous)
Face Two(Brown Bear):

Size/ Scale of the face(Continous)
Ear Style (Discrete)
Eye Patch Style (Discrete)
Mouth Outer size (Continous)
Mouth/ Smile curve (Continous)
Face Three(Polar Bear):

Size / Scale of the face (Continuous)
Ear style (Discrete)
Mouth/ Smile curve (Continuous)
Mouth Outer size (Continous)
Eye Patch Style (Discrete)

It took a bit of trial and error to make all the variables slightly different looking between faces and to work correctly and fit inside the bounding box but hopefully everything is right now. I also used focus and weighted selection to favour different variables:

Face 1:
On face one(panda) I focused the scale to a larger average size (85%) with a stronger focus to draw atttention as I think it is my favourite face and I want the detail to be clear especially as it is central in my final arrangement. I focused the smile towards the lower end of the curve value as I wanted them to be more smiley overall. I also made it more likely for the bears to have red blush as I like the colour agains the otherwise more natural colours. I left the ears alone as I want that to be more random as I quite like all the different options for this face.

Face 2:
I made this face more likeley to have ear style one (spikey fur in the middle) as I like it the best and I also made the average mouth size in the middle but I didn't make the focus too high as I still wanted to allow for different sizes. I also made the average scale slightly smaller than face1 at 60%.

Face 3:
This face has the smallest scale average at 60% as with Face 2 so as to keep focus on the central face 1. I focused the ears towards an average between style 1 and two as they were my favourites but I didnt make the focus too intense as I wanted the other style to occur and found that it didnt really with any higher focus. I also averaged the mouth towards an average size but without crazy high focus.