## PS2 MDDN 242 2018

Since my previous version, I developed my design further by adding in some extra parameters. Initially, I didn't have these parameters and had my letters all centered around the ring shape but when I had the whole alphabet displayed at once I realised it looked a bit messy. All of my letters are now the same height, so some have ended up a bit more harder to read than I initially planned but I do like the abstract look I have created.

My 12 parameters are now:
    "arc Start": The start angle for the arc in degrees
    "arc End": The end angle for the arc in degrees
    "arc X": The x pos of the centre position of the circle
    "arc Y": The y pos of the centre position of the circle
    "length1(2)": The length of the line
    "tilt1(2)": The rotation angle of the line in degrees
    "position X1(2)": The x position of the first set of coordinates of the line
    "position Y1(2)": The y position of the first set of coordinates of the line



Originally I had both the lines underneath the ring but I thought having one line on top looked better as it has a bit more depth. I also changed my colour scheme so the ring shape is the focus of each letter.

I used the basic interpolate function as a base for starting my animation. I then changed it so that the lines wouldn't move or tilt if they have a length of 0 in the old or new letter. I also decided to make the ring become a full circle before switching to the new arc angles. When the animation is half complete, the ring will be a brighter colour and fades in/out of that colour during the rest of the animation.