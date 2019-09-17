## PS2 MDDN 342 2019

### Refining the fringe and adding eyes

I modified the fringe script again, this time changing how it lines up on the forehead as well as the shape of each individual part. Previously the fringe was created with rectangles, that had curved edges by how curly the hair was. While this was easier to manipulate it meant that the fringe was never quite completely round. I redid it so that each segment of the fringe was created with a shape of bezier verticies. The shape of these verticies become more rounded as the hair gets curlier.  This means when the hair is completely curly, they are completely round. This did make it slightly harder to transition the fringe out, as i couldn't just shrink it down as i had done previously. When shrinking it down the same way, the bezier verticies inverted on themselves and created strange shapes. However by adding some slightly scaling to the x and y of the shrink i was able to achieve what i wanted to. 


I also didnt like the alternating heights of the previous design, so now the shapes sit in a slight arc shape over the forehead. I found that when the fringe was straighter however, the arc shape looked quite strange. To fix this i modified the code so that the curlier the fringe was, the less of an arc it would form. 

Ive also now implimented the eyes for the face. This added in a new slider, one that changes how much detail the eyes have. I first designed the eyes from scratch, without any slider input. I based the design of the final detailed eyes of anime eyes, as i wanted them to be over the top and highly contrived. 

In order to make the eyes respond to the slider, i needed to parameterize the overall function. I started by going through each individual element of the eye, and deciding when it should be drawn in. Each aspect is staggered so that the eye transitions from just the black pupil, to the overall detailed design. Most of this was done by scaling, with each staggered segment having its own scale that corrosponds to how far along the slider is. 

While im happy with the design of the eyes, im not sure how cohesive they are with the rest of the face. They are significantly more detailed in colour than the hair, which creates quite a stark contrast between the two. A solution to this would be adding more detailed colouring to the hair, however due to the complexity of the hair function this would be extremely difficult to do. 