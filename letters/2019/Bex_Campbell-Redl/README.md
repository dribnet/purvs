##глупость

For the alphabet, from the get go I wanted to use triangles as the foundation for building the letters. I began by playing around with the sketch function to see how much I could build with only two triangles. After building a few letters in the sketch and the alphabet with relative ease I decided to try making the **cyrillic** (russian specifically) alphabet instead just to up the challenge level a bit. 

While playing with this Idea and thinking about parameters I realised that because I was using triangles there was very little chance that I would be able to keep my parameters particularly low because each triangle has 3 vertecies .In order to at least mitigate how many parameters I would have the cutouts are shifted mini clones of the larger triangles. 

As far as color schemes go, once I had mapped out the alphabet I realised that the letters had a very soviet propaganda poster feel to them so I decided to use a soviet approved color scheme.

As far as interpolation goes that is where ended up breaking the code a lot and having to try different solutions. Because I ended up having to create exceptions to draw the characters with accents or strange shapes(Ё,Ж,Й,Н,Ф,Ц,Ш,Щ,Ы,Ъ) it made the interpolation section much more difficult. 

When I removed the if statments and replaced it with another parameter and a switch statement the interpolation became jerky and the transitions broke. I couldn't add any more parameters becasue 18 is already a lot and editing the opacity lends itself to the same problem as adding a variable and changing the scale. 

In the end the best solution was also the simplest. In the interpolation section I just added two if statments for 10 and 80 percent.

#### My parameters

Total 18 parameters

- *x1,y1* the first vertex of the darker triangle
- *x2,y2* the second vertex of the darker triangle
- *x3,y3* the third vertex of the darker triangle

- *t1s* the scale of the darker triangle's shadow/cutout
- *t1sx* the x translation of the first shadow/cutout
- *t1sy* the y translation of the first shadow/cutout

- *x4,x4* the first vertex of the lighter triangle
- *x5,y5* the second vertex of the lighter triangle
- *x6,y6* the third vertex of the lighter triangle

- *t2s* the scale of the lighter triangle's shadow/cutout
- *t2sx* the x translation of the second shadow/cutout
- *t2sy* the y translation of the second shadow/cutout



#### Typeface Name:

I named my alphabet глупость because it translates to foolishness and quite frankly using the cyrillic alphabet instead of the latin one was an act of foolishness that I ended up having to follow through on. I added russian.png to my files for comparison purposes. 
