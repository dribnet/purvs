## MDDN 242 2020 Assignment 2

Concept:
This alphabet is made out of two transparent arcs, which create the approximate form of english letters where they overlap. The goal is to make a full, somewhat readable alphabet from only two arcs. The bluish arc sits to the left and top, and the red to the right and bottom, in that order of priority. As it stands, this totals 10 parameters per letter.

====================================================================================

Animation fix, more tweaks.

Restructured code to fix buggy animation that causes arcs to pop in and out when their start and end angles crossed over. Code now draws the arc from 0 and then rotates it afterwards, circumventing the issue. As such, the start1 and start2 values are now redundant (all are equal to 0), which I may clean up later given time.
