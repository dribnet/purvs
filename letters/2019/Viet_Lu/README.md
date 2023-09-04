## PS2 MDDN 242 2019


The inspiration of my alphabet came from I Ching, an old type of chinese alphabet, and also the concept of IBM's logo.  

Characters in my alphabet are basically created by a series of horizontal lines linning up in column. 5 lines for most of the letters and 9 lines for b,d,h,k,l and numbers. I divided those lines into 3 section: uppers lines (1-4), lower lines (5-9) and sub-lines (10-14)

offsetx1 - offsetx4 = start position of the line 1 to line 4
offsety1 - offsety4 =  length of the line 1 to line 4

offsetx5 - offsetx9 = start position of the line 5 to line 9
offsety5 - offsety9 =  length of the line 5 to line 9

offsetx10 - offsetx14 = start position of the line 10 to line 14
offsety10 - offsety14 =  length of the line 10 to line 14

First line will start from the very top of the box and going down respectively, except sub-lines 10 to 14, which have the same values with offset 5 to offset 9.

posx and posy to indicate position of the letter in the rectangle and each line is seperated by const lineSpacing = 15.


