## PS2 MDDN 242 2019
When experimenting with the interaction, I wanted to create a movement where the triangles move into the next letter in the same transition each time.
I experimented with having the triangles go back to a certain point before then ending in the placement for the character.
However I did not think this was very exciting and was a bit boring.
I then started to try work with rotations where both triangles rotate then ending in the required spot for the character. This was looking really cool but then hit a roadblock where the character was ending up in a weird angle once the rotation was finished….
I got some help from Tom to work this out and was just a matter of myself overcomplicating the code.
I took out some code that was repeating itself and worked out that I did not necessarily need to address the rotation in letters.js as well.

I experimented with different points that the rotation could start and am happy with the points 
(50,100) for first triangle
(20,30) for second triangle