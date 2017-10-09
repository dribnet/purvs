## Rainbow Spiral Map

### Infinite Zoomable Sketch

I have now implemented the top level of my design which closely resembles the top level of my sketch. However I decided to take the design in a slightly different direction.  I am still using the same concept to determine how each zone of the pattern is drawn but have changed how the colour of a zone is determined and the order in which each zone is drawn.  

In the previous assignment the pattern was created by repeating a 3x3 grid of octagon zones, each using a different colour. The pattern now begins with a zone located to the left of the center point (512, 512).  All following zones are positioned based on the location of the preceding zone.   

The colour for each zone is based the HSB colour spectrum using 24 different hues. The modulo operation is used to determine the hue value for each zone. The result is the creation of a gigantic diamond shape with a repeating rainbow pattern which spirals from the initial zone to the outer edges.  