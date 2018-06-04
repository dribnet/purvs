## Creative Coding 2: Custom Pixel

Final:

For me the ocean is more than just a body of water. For me when I look out into the ocean I am reminded of the popular beach of my home town that I always visit every summer, Kaiteriteri. A beach of golden sand, walking trails, hidden fishing spots and hard to find car parks. The memories of spending time with family and friends at Kaiteriteri whether it be to swim, eat some food or just for the sake of getting out of the house. 

I guess for me the ocean is something to look at when I want to reflect on the good memories of my home town and the ocean seems to be the way for me to understand the confusing concept of the Ta-Va theory, the ta-va theory looks at the connections between time and space.

My interpretation of the Ta-Va theory is that the ocean is a way of connecting my home to myself, even though there is a disconnection between our locations the thing that does connect us is the memories I am reminded of when looking at it. 

Photography wise: 
I mainly looked towards capturing the interesting colours of the ocean as it can many different colours through how deep it is or if something is reflecting onto it. Wanting to capture the reflections in the water is like a representation of how I reflect on my home town when I see the ocean. For my final outputs I chose images that had a physical object in the images just so there was something for the eyes to rest on, in a way the physical object is a representation of me as the physical object reflects onto the ocean surface. My final outputs are photographs of different docks around the waterfront, I chose the docks as it is the location of arrival and departure across from the ocean but it also allowed me to get some nice objects reflecting onto the ocean.

Algorithm:
Over summer I had made an image processing script that applied the perlin noise flow field algorithm to images. The aesthetic of the algorithm seemed fitting for my initial narrative "Ocean" which was the starting point for my narrative which I have since then developed over the project into my current narrative. For this project I mainly focused on the narrative and image output as I had already had code made. The algorithm generates lines that are then controlled and moved by a flow field simulation which in turn creates these wispy lines. The output of the algorithm looks like that memory bowl from Harry Potter(http://harrypotter.wikia.com/wiki/Pensieve). But initially the undulating curves of the algorithm reminded me of the ocean. Either way I feel like the algorithm that I have applied is fitting towards my narrative.

Technical:
Since the code was written over summer I vaguely remember what the code does but have tried to comment it as well. When the program starts it generates 5000 particles(lines) at a random location.
Each particle gets assigned a colour value based on the colour value location of the input image. The particles move based on a physics engine and the direction that they move are based on a flow field simulation that is controlled by perlin noise. Over a period of time the particles will build up creating a 3D effect through colour alpha. For my final output I used masks to control the strokeweight of the particles. If part of the image was inside the mask it would have a thicker strokeweight ranging from 0.5 - 2 in my iterations and if it was outside the mask it would have a thinner strokeweight ranging from 0.1 - 0.9 in my iterations for the images in my final output. By doing this if a part of the image is rendered with a thicker strokeweight it becomes more defined and has a focus because it has less wispy perlin noise lines. If a part of the image is rendered outside the mask with the thinner strokeweight it is quite opaque and wispy and is rendered with more of a perlin noise aesthetic. 

One thing that I would like to improve on if continuing this project would be to make the image rendering less generative and more controlled. Possibly through the use of the HSL data. I thought masks would give me enough control but when generating things randomly on the screen then controlled by a physics simulation based on perlin noise some of the images that I rendered had really nice aspects that couldn’t be replicated because as said before the image is generative. Another thing would be to look at different algorithms, one that I wanted to look at was the delaunay tessellation but I wasn’t sure how i’d fit it into my narrative of the ocean so I didn’t bother. 
