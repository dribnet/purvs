          
# PS2 MDDN 242 2019
## Concept
My concept is to have two cosinus curves wich can be manipulated in the height, width, length, offset and the rotationangle. I mainly chose to work with cosinus curves as I wanted to have an technical challange while designing the letters. 

### thats how my cosinus curve is made.

```
for(var i = -Blength; i < length; i++) {
    var x1 = (i * widthX);
    var y1 = (cos(i * radians(2)) * heightY);
    var x = x1 * cos(rotation) - y1 * sin(rotation) + offsetX +50;
    var y = (y1 * cos(rotation) + x1 * sin(rotation)) +heightY + offsetY;
    vertex(x, y);
}
```

## Letters
Each letter is composed out of two cosinus curves wich are always connected to each other.
## Numbers
I tried that the numbers are drawn incomplet but that you still could recognize them. 

## Parameters
### The parameters for the first curve:
- **heightY** defines the height of the curve
- **widthX** defines the width of the curve
- **length** defines the length of the cosinus curve in one direction
- **Blength** defines the length of the cosinus curve in to the other direction
- **offsetX** is there to move the curve along the X-Axis
- **offsetY** is there to move the curve along the Y-Axis
- **rotation_angle** rotates the curve 

### Parameters for the second curve wich have the same meanings as the one from the first curve.
- **heightY1** defines the height of the second curve
- **widthX1** defines the width of the second curve
- **length1** defines the length of the second cosinus curve in one direction
- **Blength** defines the length of the second cosinus curve in to the other direction
- **offsetX1** is there to move the second curve along the X-Axis
- **offsetY1** offstetY is there to move the second curve along the Y-Axis
- **otation_angle1** rotates the second curve

## Problems
My problem during the process was that I couldn't get the editor.html working probably beause I use an for loop to creat the wave wich I think caused the problem because I only got one straigth line.