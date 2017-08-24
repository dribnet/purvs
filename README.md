## PS2 MDDN 342 2017

~Monster Drawer~

Author : Jack Upton
Github: ElectricPowerHouse

-------Intro-------
This program draws cartoon monster faces on top of photos of faces.
It uses the values from a face-tracker to accurately paste the features correctly into the positions.

My aim when creating this program was to accurately map my monster faces as closely as possible
to my previous program that drew the faces in a grid. I tried to give the same cute, lighthearted
vibe that was conveyed in the old program. This proved challenging as I had to refactor a lot of my code so that
it worked with the face position algorithms.

I managed to transfer over all of the facial features parameters I wanted like mouth type , eye number, nose
type, and mouth type. I also added an additional parameter, horn color, to convey the hair color of the faces.
I tried to allow a good amount of variety so you can customize the faces to a large degree.


------FaceMap--------

I chose to use mostly post-impressionist portraits for my facemap. I chose them because they complimented the
lighthearted, colorful aspects of the monster faces well. I wanted to go for something unique and
beautiful so I tried to choose aesthetically paintings that I found particularly pleasing.
I found that the painted aspect of the portraits helped accentuate the quirky mood of the monster faces.

------Train--------

I tried to have a nice combination of tracking actual facial traits with arbitrary monster features.

I narrowed it down to 2 color schemes, orange for women and blue for men. I chose this because it's
a very obvious distinction, and I couldn't think of a good use for the other 2 color schemes.

Eye number is dependent on which way the person is looking, which is an arbitrary correlation.

Nose and mouth type are supposed to represent the shape of the nose / mouth of the person. This can
become a little tricky when the monster features are so cartoonish, but you can see the correct one
most of the time.

The horns represent the hair of the person. The size of the horn is their hair length,
and the color tracks to their hair color. I thought this was a nice unique way to abstract out the
feature but also make sense when you viewed it.

------Facial features Key-------

Color: Blue - Man, Orange - Girl.

EyeNum: Looking straight - 2 eyes, Looking left - 4 eyes, looking right - 6 eyes.

Nose type: Should look like their nose.

Mouth type: Open mouth: Surprised mouth. Closed mouth: Triangle mouth. Smiling: Tooth mouth.

Horn Type: Long hair: Type 1. Medium hair: Type 2. Short hair: Type 3.

Horn color: Correlates with lightness of hair.

---------------------------------
