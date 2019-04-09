## PS2 MDDN 242 2019

For the alphabet, from the get go I wanted to use triangles as the foundation for building the letters. I began by playing around with the sketch function to see how much I could build with only two triangles. After building a few letters in the sketch and the alphabet with relative ease I decided to try making the **cyrillic** (russian specifically) alphabet instead just to up the challenge level a bit. 

While playing with this Idea and thinking about parameters I realised that because I was using triangles there was very little chance that I would be able to keep my parameters particularly low because each triangle has 3 vertecies .In order to at least mitigate how many parameters I would have the cutouts are shifted mini clones of the larger triangles. 

#### My parameters:

- *px2,py2* the second vertex of the darker triangle
- *px3,py3* the third vertex of the darker triangle

- *t1s* the scale of the darker triangle's shadow/cutout
- *t1sx* the x translation of the first shadow/cutout
- *t1sy* the y translation of the first shadow/cutout

- *px4,px4* the first vertex of the lighter triangle
- *px5,py5* the second vertex of the lighter triangle
- *px6,py6* the third vertex of the lighter triangle

- *t2s* the scale of the lighter triangle's shadow/cutout
- *t2sx* the x translation of the second shadow/cutout
- *t2sy* the y translation of the second shadow/cutout

As far as color schemes go, once I had mapped out the alphabet I realised that the letters had a very soviet propaganda poster feel to them so I decided to use a soviet approved color scheme.

The next step was to remove the if statement hellscape i had created, I did this by adding 1 more parameter (*sorry*) but it got rid of about 200 lines of redundant code