## Creative Coding 2: Custom Pixel


#### The Loneliest Generation
I've decided to take a dramatic turn with my project. My original idea had a naive message of "Hey, we should be more happy". I'm shifting that message to "We aren't happy. Here's why". My aim is to provoke people into thinking more deeply about how technology is shifting our social lives fundamentally. What was once social is now parasocial, where we interact socially by *looking at* each others lives instead of engaging in them.

In the past four weeks, 650,000 New Zealanders have felt lonely. Of those people, the largest group were aged between aged 15-24. That number has risen 70% in just two years.

The pictures I've taken are meant to show how technology is contributing to us being in our own personal sea of isolation. The effect on top of them now composes the image out of a sea of polygons. The reason for this is two-fold: first, so to represent the network-like connections in our digital world. And second, to represent how our lives have become more and more digital (as triangles are how 3d models are stored digitally).  
 
#### Technical
How it works, is it generates a perfect grid of points on the screen. It then offsets each point in a random direction by a random amount. It then goes through each point and draws two triangles, filling out a square between itself, the point next to it, the point below it, and the point next to the point below it. The colour used for each triangle is sampled from the average position of its three points. Currently the mask isn't used, but I'm hoping to remedy that.