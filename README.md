## PS2 MDDN 342 2019

### Hair Colour, face and accessories

Ive implimented a new slider, to determine the colour of the hair. The hair colour slider doesnt directly input the colour value, as doing so would mean the hair colour transitions from extreme unnatural tones. Instead I created variables of the different hair colours i wanted, white, blonde, brown, ginger and black. The hair colour slider gives a value between 0 and 100, and according to this the hair colour will lerp through each assigned colour. I really like this as it gives a lot more variation between the randomized faces. 

I have also modified the eyes slightly. I removed some aspects of noise present in the previous design. While the white noise gave it more detail and complexity, it also looked out of place with the rest of the design. I also modified the colours slightly, changing them from the sharp deep blue to a more muted overall tone. With this the eyes still transition from completely basic to over the top, but each different form looks more appropriate against the rest of the design. 

Ive added in a simple face, with a nose and mouth. I don't know if i want to add any variables to these aspects so for the time being they can function as place holders. Ive also reshaped the face, as it was previously a perfect circle. The circle looked quite strange as the rest of the face was beginning to come together, so i combined a circle and a bezier shape to create a more natural structure. 

Ive also begun to add the first of the hair accessories, in the form of two bows. This comes with a new slider, that gives a discrete variable as to how many accessories are present. I designed the bow first outside of the face, and then moved it across the align with the head. To create the second i simply flipped the design with a negative scale. 

One challenge i encountered with this was that i needed the bows position to vary by how long, or how curly the hair was. This wasnt too complicated as the positions only varied slightly. When the hair is curly they sit further out so that they rest on the outside the curls, and when the hair is straight they sit further inwards. When the hair transitions to the shorter length the difference between the position of the curly bow versus the straight one shrinks, and the bow moves upwards to sit on the scalp of the head. 

 