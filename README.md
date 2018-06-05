## Creative Coding 2: Little Happiness

For the project 3 of the MDDN 242, I wanted to focus on the positive emotion so that I chose the Little Happiness as my theme. I hope I could express the small and little happiness in the daily life through my artworks. These little happinesses often happen in our life but are easy to get ignored by us. 

During the project, I observed my life and took photos when I felt these little happiness. Later, I selected three of the photos as the images I would work on later. They are the hot drink and scarf in cold days, the discount banner in the shop and the last cupcake on sell in my favourite flavor.

I did not use the Smart-mask tool provided on the blackboard because some objects like scarf and cup-cake are not in the smart masking list. Also, my objects in the photos are simple for me to mask in softwares like Photoshop.

When I designed the different pixels for two different parts, marked and un-marked part, I firstly thought about the geometrical and organic shapes. For the background pixels, because I use them to represent the sadness and frustration, I designed diamond shapes for them, which symbolise the ruthless and rational reality. On the contrary, I designed the organic flower shapes for the pixels of the little happiness on the foreground. Flowers represent delight and hope, which is match to the theme of happiness.

Likewise, I used the cold blue tone at the back and the warm red tone at the front. The red colour on the final artwork comes from my images, however, the blue tone is made by the code. I coded a "colour filter" by using the "convertRgbToHsluv" function. This function will read the colour information from the image and translate it into HSL data. I used the Lightness information and use "fillHsluv()" function to control the render colour. I set the H in 228 and S in 40 so that all of the diamonds would in a blue shader but keep the L from the original images.

In the process of coding the pixels, I solved many problems, from balacing the gaps and the sizes of the pixcels to shifting between low/hight resolution renderer. When I set the gaps and sizes, I wanted to emphasis the foreground pixels but also keep the background images visible, so that I must carefully balance the elementSpace for the background pixels to let the diamonds overlapped but still some tiny gaps existed. The overlapping diamonds will make up the background image, and the gaps would make the whole background a little bit "vacant". Also, because I set the random function for the size of flower, I need to design two sets of random ranges for both low and high resolution render. 

When the first time I rendered the high resolution artwork, the program did not render the image in high resolution. In the end I found that because I put my if() statement out of any function so it would not be called when the program running. I solved the problem by putting the if() statement into the setup function. 

Through the project and the final artworks, I learned not only how to design and code, but also how to live positively. I wish I could express and represent this theme to the audience watching my work as well. Moreover, if I could refine the project further, I may re-code the flower pixels to make it more like the real flowers with different kinds, sizes and colours overlapping one to another. 

Special thanks to my lecturer and tutors. They helped me to work through the whole project and stood out when I had the problems and difficulties. 