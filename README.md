## MDDN 242 2021 Assignment 2

DEBUGGING INTERPOLATION
This block of my project exists to show my process of debugging my work. In my "Flippy Interpolation" commit you will see in the interaction and exhibition space that the interpolation between letters sees the triangles flip flop, mirror and cross over with each other. This is because I was simply using the parameter points to draw the letterforms rather than plotting each coordinate relative to an overarching rule.
To solve this issue, I created separate functions in the draw_letters.js file, where I added three separate ellipses to each triangles points. You'll see that the red dot on the red triangle stays on the top left of each letterform, the blue dot on the same triangle stays to the right side, and the green dot stays to the bottom of the letterform. This same concept applies to the black triangle too.
This approach helped me to switch between the alphabet and interaction ports to make sure the interpolation doesn't have any triangles awkwardly flip and mirror on themselves. It was a pretty successful endeavor into polishing my animation interpolation and I thought it would be worth showcasing how I worked around this.
For the sake of this commit I have changed the interpolation maps to the vanilla version which was provided when this project was first handed out.
I hope you enjoy. Christopher.