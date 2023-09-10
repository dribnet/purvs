## PS2 MDDN 342 2017


Problem Set 2 - Final version and readMe.

Starting from part 2 of the project, I wanted to continue using the Zamasu style face from ‘Dragon Ball Super’. A brief description of style of the character and face, is that it is an anime type face, with lots of rigid lines, and the type of race Zamasu is, has a lot of bright and vibrant colours as skin tones.

I added the colours and shades in first, then began adjusting the features to become more rigid. The landmark data for my style of face provided a bit too much information on the normal facial features, but not enough information on other features such as the ears. With most of the features I ended up just removing some unnecessary points, and exaggerating their positions (because a lot of anime characters have exaggerated features). However the ears provided a bigger challenge. This is because with no ear ending landmarks, they would always appear flat. It was solved by finding the calculations between the highest chin point, and the eye point closest to that chin point, and using that value for the ear length. 

The hair was also quite the issue, as I spent of a lot of time wondering which landmark value it would be best to map to. I ended up going with the left and right eyebrows, as they were the closest to where the hair would go and simply did a lot of scaling with hard values. I did not want to create the rest of the head, as I wanted to focus on just the face.

Moving on to part 3, it was difficult to think of values I could map to sliders. From the previous project, I would change the positions of all the basic features, but in this case it would only make it more difficult to recognise a specific face from. I decided to go with basic colours and shading with different skin tones, the hair and the eyes. Along with a discrete earring value which determines if the face has earrings or not. Additionally the hair pieces will give an indication as to how much hair the person has, and if it falls on their face/ is flat. To give the colours an additional layer of detail to help differentiate the faces, I gave both ends of the colours meanings. The more bright green the face is, the more masculine the face is, while the more bright pink the face is, the more feminine it is. These were just broad generalisations to help guide the guessing a little more. 

Part 4 and 5 involved the training and guessing. This was a bit hard as I feel my previous adjustable values may not have been detailed enough. I felt many of the values were similar while going through the training process. However when I got a few friends to experiment they were guessing more faces correct than I thought they would, and all picked up on the colour indication of gender.

To further improve this project I think I would like to have a lot more slider values, so there can be a lot more uniqueness to each face. This includes rare values such as hats, as I noticed a few faces had hats on them but all I could do to show that was hiding all the hair.


Aesthetically I am happy I managed to pull off the clean and rigid look, with simple colours and slight exaggerations of features. I initially thought it would look very ridiculous or out of place with real face landmarks.
