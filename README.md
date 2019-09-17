## PS2 MDDN 342 2019

### Refining the hair

Ive refined the overall hair quite a bit, as well as added in a new fringe. I started by modifying the triangles that form the long strands of hair, as they are now shaped as quads instead. This means the end is pointed, and the bottom curls dont have a flat closed end. 

Ive modified the top of the hair as well. Rather than rely on just the arc that sits at the top of the long strands, theres several circles placed behind the hair altogether. These remain static when the hair is longer, and when the hair is shorter they shrink until completely short. To shift between curls and straight hair the circles shrink in width, as the curl decreases they end up as straight strands of hair. 

As i implimented this new design, i also modified how the long strands transition out. Previously i had them curling over the top of the head, however this looked quite strange as there were these big curls sticking out the top of the head. Now that i have the new top put in however, ive changed this part of the script so that it rapidly shrinks into the head (behind the head) when transitioning to the shorter hair. 

I also removed the duplicate hair, as this idea wasnt really working for me. Instead ive added in some ellipses that sit behind the long strands, as the curliness increases so does their width. This creates a far large shape when the hair is curly, and also a wavy style when the hair is only part curly. 

As the current design for the hair only works when it sits behind the face itself, i've worked to include a fringe to the hair. The fringe is done with rectangles, and the curliness is controlled by how rounded the corners of the rectangle are. When the hair gets completely shorter they shrink upwards untill they are completely removed from the face. 

I'm still unsure about the current design of the fringe, as well as how to transition it out. I dont know if having them at alternating heights looks the best. 