## MDDN 242 2020 Assignment 2



## CAMPFIRE
_________________________________________________________________________________

Each letter uses 12 parameters

invface1 // inverts Face 1

cut1face1 // 1 of 3 cuts that can be made per face
cut2face1 // 1 of 3 cuts that can be made per face
cut3face1 // 1 of 3 cuts that can be made per face

invface2 // inverts Face 2

cut1face2 // 1 of 3 cuts that can be made per face
cut2face2 // 1 of 3 cuts that can be made per face
cut3face2 // 1 of 3 cuts that can be made per face

invface3 // inverts Face 3

cut1face2 // 1 of 3 cuts that can be made per face
cut2face3 // 1 of 3 cuts that can be made per face
cut3face3 // 1 of 3 cuts that can be made per face

Using this commit as an experiment as one of my early plans with the animation was to cycle between my 3 colours around the different faces of my cube, effectively changing where the you could imagine that the lightsource would be. I couldn't manage to get it to cycle completely but I did get it to switch once during the animation by tying it into the if statement that shrinks each cube down. While I like the idea of this, it came out really flickery and ultimately I think that it clutters the animation too much, I prefer just using the shrinking animation. One thing I did in this commit however was slow down the mapping of percent when interpolating so that thee switching animation looked less flickery, I will keep this.


![Reference Cube](https://i.imgur.com/jBsV5cI.jpg)

