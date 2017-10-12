//for debugging
var debug = false;

//this object is used to store all possible locations for octagon zones
var octagonZone = {

    //width and height of a octagon zone
    zoneSize: 60,

    //multiplier - used for many calculations related to this object
    multiplier: 0,

    //co-ordinates for each glyph within the octagon zone
    //drawn from the center to the outside - the last twelve co-ordinates can be used to draw the octagon outline
    innerCoordinates: [],

    /*
     * initilizes the octagonZone
     * sets the value of the mulitplier and load values into the innerCoordinates and locations arrays
     */
    init: function() {
        this.multiplier = this.zoneSize /12;
        octagonZone.createInnerCoordinates();
        octagonZone.createLocations();
    },

    /*
     * this function sets the values of the innerCoordinates array
     * once the value for the multiplie is known
     */
    createInnerCoordinates: function(){
        this.innerCoordinates = [
            [+this.multiplier*1, -this.multiplier*1], [+this.multiplier*1, +this.multiplier*1], [-this.multiplier*1, +this.multiplier*1], [-this.multiplier*1, -this.multiplier*1],
            [+this.multiplier*1, -this.multiplier*3], [+this.multiplier*3, -this.multiplier*1], [+this.multiplier*3, +this.multiplier*1], [+this.multiplier*1, +this.multiplier*3],
            [-this.multiplier*1, +this.multiplier*3], [-this.multiplier*3, +this.multiplier*1], [-this.multiplier*3, -this.multiplier*1], [-this.multiplier*1, -this.multiplier*3],
            [+this.multiplier*1, -this.multiplier*5], [+this.multiplier*3, -this.multiplier*3], [+this.multiplier*5, -this.multiplier*1], [+this.multiplier*5, +this.multiplier*1],
            [+this.multiplier*3, +this.multiplier*3], [+this.multiplier*1, +this.multiplier*5], [-this.multiplier*1, +this.multiplier*5], [-this.multiplier*3, +this.multiplier*3],
            [-this.multiplier*5, +this.multiplier*1], [-this.multiplier*5, -this.multiplier*1], [-this.multiplier*3, -this.multiplier*3], [-this.multiplier*1, -this.multiplier*5]
        ];
    },

    //array of all possible zone locations
    locations: [],

    /*
     * this function sets the values of the locations array
     * determining every possible location for a octagon zone
     */
    createLocations: function(){
        //keeping track of performance
        var start = performance.now();
        //calculate the step sizes
        var multiplier = this.zoneSize/12, xStep = this.multiplier*8, yStep = this.multiplier*6;
        //set up initial values required for while loop
        var endPointer = 4, centerX = 512, centerY = 512 + yStep, direction = 'left';

        while(endPointer < 5000){

            for(var zone=1; zone <= endPointer; zone++){

                if(direction == 'left'){
                    centerX -= xStep;
                    centerY -= yStep;
                }
                else if(direction == 'up'){
                    centerX += xStep;
                    centerY -= yStep;
                }
                else if(direction == 'right'){
                    centerX += xStep;
                    centerY += yStep;
                }
                else if(direction == 'down'){
                    centerX -= xStep;
                    centerY += yStep;
                }

                //load the zone into the locations array
                this.locations.push([centerX, centerY]);

                if( (zone % (endPointer/4) ) == 0){
                    direction = octagonZone.changeDirection(direction);
                }

            }

            centerY += (yStep *2);
            endPointer += 8;
        }

        var end = performance.now();
        if(debug){
            console.log('zone locations loaded in ', (end - start).toFixed(4), ' milliseconds');
        }
    },

    /*
     * direction is used to determine how the centerX and centerY values in createLocations function will be mutated
     * @param  {String} currentDirection   - eg left, right
     * @return {String} nextDirection  	   - eg left, right
     */
    changeDirection: function(currentDirection){
        var nextDirection = '';
        switch (currentDirection) {
            case "left":
                nextDirection = "up";
                break;
            case "up":
                nextDirection = "right";
                break;
            case "right":
                nextDirection = "down";
                break;
            case "down":
                nextDirection = "left";
                break;
        }
        return nextDirection;
    },

    /*
     * this function determines what stroke weight should be used
     * then calls the other functions required to draw everything container within this zone
     * @param {Object} p5       - the p5.js object
     * @param {Number} centerX  - center of the x-axis for the current octagon zone
     * @param {Number} centerY  - center of the y-axis for the current octagon zone
     * @param {Number} x1       - left side of a map tile
     * @param {Number} x2		- right side of a map tile
     * @param {Number} y1 		- top side of a map tile
     * @param {Number} y2		- bottom side of a map tile
     * @param {Number} hue      - used to create p5.js color objects
     * @param {Number} zm		- current zoom level on the map
     */
    drawZone: function(p5, centerX, centerY, x1, x2, y1, y2, hue, zm) {
        var zero = p5.map(0, x1, x2, 0, 256);
        var maxWidth = p5.map(this.multiplier*0.2, x1, x2, 0, 256);
        var weight = maxWidth - zero;
        var colour = p5.color(hue, 100, 100);

        var loopLimits = 2;
        if(zm >= 5){
            loopLimits = 0;
        }
        for (var adjuster = -loopLimits; adjuster <= loopLimits; adjuster++) {
            this.drawOutline(p5, centerX, centerY, x1, x2, y1, y2, weight, colour, adjuster);
        }

        this.drawGlyphs(p5, centerX, centerY, x1, x2, y1, y2, weight, hue, zm);
    },

    /*
     * draws the outline that connects the outer points of a octagon zone together
     * @param {Object} p5       - the p5.js object
     * @param {Number} centerX  - center of the x-axis for the current octagon zone
     * @param {Number} centerY  - center of the y-axis for the current octagon zone
     * @param {Number} x1       - left side of a map tile
     * @param {Number} x2		- right side of a map tile
     * @param {Number} y1 		- top side of a map tile
     * @param {Number} y2		- bottom side of a map tile
     * @param {Number} weight	- stroke weight of the shape to be drawn
     * @param {Object} colour   - a p5.js color object - determines the stroke colour
     * @param {Number} adjuster	- can be used to adjust the size of the outline
     */
    drawOutline: function(p5, centerX, centerY, x1, x2, y1, y2, weight, colour, adjuster = 0) {
        var xPos, yPos, cx, cy;

        //adjust the opacity of the colour
        colour._array[3] = 1 - (0.2 * Math.abs(adjuster));

        p5.stroke(colour);
        p5.strokeWeight(weight);

        p5.beginShape();
        for (var pos = 12; pos < octagonZone.innerCoordinates.length; pos++) {
            var xPos = octagonZone.innerCoordinates[pos][0];
            var yPos = octagonZone.innerCoordinates[pos][1];

            if(xPos > 0){
                if(xPos == this.multiplier || xPos == (this.multiplier * 3)){
                    xPos += adjuster/2;
                }
                else {
                    xPos += adjuster;
                }
            }
            else {
                if(xPos == -this.multiplier || xPos == (-this.multiplier * 3)){
                    xPos -= adjuster/2;
                }
                else {
                    xPos -= adjuster;
                }
            }
            if(yPos > 0){
                if(yPos == this.multiplier){
                    yPos += adjuster/2;
                }
                else {
                    yPos += adjuster;
                }
            }
            else {
                if(yPos == -this.multiplier){
                    yPos -= adjuster/2;
                }
                else {
                    yPos -= adjuster;
                }
            }
            cx = p5.map(centerX + xPos, x1, x2, 0, 256);
            cy = p5.map(centerY + yPos, y1, y2, 0, 256);
            p5.vertex(cx, cy);
        }
        p5.endShape(p5.CLOSE);
    },

    //a small collection of numbers based on the lucas series: https://en.wikipedia.org/wiki/Lucas_number
    //used to determine what shapes within each glyph drawn within the drawGlyph functoin
    lucasNumbers: [1,3,4,7,11,18,29,47],

    /*
     * draws each of the glyphs contained within a octagon zone
     * @param {Object} p5       - the p5.js object
     * @param {Number} centerX  - center of the x-axis for the current octagon zone
     * @param {Number} centerY  - center of the y-axis for the current octagon zone
     * @param {Number} x1       - left side of a map tile
     * @param {Number} x2		- right side of a map tile
     * @param {Number} y1 		- top side of a map tile
     * @param {Number} y2		- bottom side of a map tile
     * @param {Number} weight	- stroke weight of the shape to be drawn
     * @param {Number} hue      - used to create p5.js color objects
     * @param {Number} zm		- current zoom level on the map
     */
    drawGlyphs: function(p5, centerX, centerY, x1, x2, y1, y2, weight, hue, zm){
        var glyphWidth = 256 / ((x2-x1)/ (this.multiplier * 1.6)) / 2;
        var innerShapeSize = glyphWidth / 2;

        //work out which colours will be used
        var toHue = hue >= 180 ? hue - 180 : hue + 180;
        var fromColour = p5.color(hue, 100, 100, 1 - (zm/10));
        var toColour = p5.color(toHue, 100, 100, 1 - (zm/10));
        var colour = "", lerpAmount = zm >= 3 ? 1 : 0;

        for (var pos = 0; pos < octagonZone.innerCoordinates.length; pos++) {

            var xPos = octagonZone.innerCoordinates[pos][0];
            var yPos = octagonZone.innerCoordinates[pos][1];

            cx = p5.map(centerX + xPos, x1, x2, 0, 256);
            cy = p5.map(centerY + yPos, y1, y2, 0, 256);

            colour = p5.lerpColor(fromColour, toColour, lerpAmount);
            p5.stroke(colour);
            p5.strokeWeight(weight);
            if(zm < 1){
                p5.ellipse(cx, cy, glyphWidth*2);
            }

            var noiseValue = p5.noise(centerX + xPos , centerY + yPos);
            //reverse and stretch the noiseValue out a bit so there is a higher change a circle will be drawn
            noiseValue = p5.map(noiseValue, 0.8, 0.2, 0.0, 1.0);

            var lucasSum = 0;
            for(var i in this.lucasNumbers){
                lucasSum += this.lucasNumbers[i];
                if(noiseValue <= (lucasSum/100)){
                    var drawn = false;
                    if(zm < 4){
                        if(zm > 0){
                            p5.strokeWeight(weight/2);
                        }
                        polygon(p5, cx, cy, innerShapeSize, this.lucasNumbers[this.lucasNumbers.length - i - 1]);
                        if(zm > 0){
                            polygon(p5, cx, cy, glyphWidth, this.lucasNumbers[this.lucasNumbers.length - i - 1]);
                        }
                    }
                    else {
                        this.drawGlyphPattern(p5, cx, cy, innerShapeSize*1.5, this.lucasNumbers[this.lucasNumbers.length - i - 1], weight, zm);
                        drawn = true;
                    }
                    if(debug){
                        console.log('noiseValue '+noiseValue);
                        console.log('lucasSum '+ (lucasSum/100));
                        console.log('i = ' + i);
                        console.log(this.lucasNumbers[this.lucasNumbers.length - i - 1]);
                    }
                    break;
                }
            }

            if(zm >= 3){
                //change the lerpAmount at certain points of the iteration
                if(pos == 3){
                    lerpAmount = 0.5;
                }
                if(pos >= 11){
                    lerpAmount = 0;
                }
            }
        }
    },

    drawGlyphPattern: function(p5, x, y, shapeSize, numOfSides, weight, zm){
        p5.translate(x, y);
        p5.strokeWeight((12/4) * zm);
        var rotationOptions = [2,3,4,6,8,12,15,18];
        var numOfRotations = zm <= 10 ? rotationOptions[zm-4] : rotationOptions[6];
        for (var i = 0; i < (numOfRotations * 2); i ++) {
            polygon(p5, 0, 20, shapeSize, numOfSides);
            p5.rotate(p5.PI/numOfRotations);
        }
        p5.translate(-x, -y);
    }
}
octagonZone.init();

 /*
 * draws the contents a map tile
 * @param {Object} p5       - the p5.js object
 * @param {Number} x1       - left side of a map tile
 * @param {Number} x2		- right side of a map tile
 * @param {Number} y1 		- top side of a map tile
 * @param {Number} y2		- bottom side of a map tile
 * @param {Number} z		- use this as the noise z offset (can be shifted)
 * @param {Number} zoom		- current zoom level (starts at 0), useful to decide how much detail to draw
 */
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
    //unique key for the tile
    var tileKey = x1 + '-' + x2 + '-' + y1 + '-' + y2;
    p5.background(0);
    p5.colorMode(p5.HSB);
    p5.rectMode(p5.CORNERS);
    p5.noFill();
    if(debug){
        console.log(tileKey);
        drawDebugFrame(p5, x1, x2, y1, y2);
    }
    p5.rectMode(p5.CENTER);

    var hue = 0;
    var colour = p5.color(0, 100, 100);
    var zoneX = 0, zoneY = 0, isVisible = false;
    for (var i = 0, len = octagonZone.locations.length; i < len; i++) {

        zoneX = octagonZone.locations[i][0];
        zoneY = octagonZone.locations[i][1];
        isVisible = isZoneWithinTile(zoneX, zoneY, x1, x2, y1, y2);

        if(isVisible){

            hue = (i % 24) * 15;

            setTimeout(
                function(p5js, cX, cY, leftX, rightX, topY, bottomY, h, zm){
                    return function() { octagonZone.drawZone(p5, cX, cY, leftX, rightX, topY, bottomY, h, zm); };
                }(p5, zoneX, zoneY, x1, x2, y1, y2, hue, zoom) ,
                0
            );

        }

    }
}

/*
 * determines if a zone exists within the current tile
 * if it can't be seen within the current tile then there is no need to draw it
 * @param {Number} centerX  - center of the x-axis for the current octagon zone
 * @param {Number} centerY  - center of the y-axis for the current octagon zone
 * @param {Number} x1       - left side of a map tile
 * @param {Number} x2		- right side of a map tile
 * @param {Number} y1 		- top side of a map tile
 * @param {Number} y2		- bottom side of a map tile
 */
function isZoneWithinTile(centerX, centerY, x1, x2, y1, y2){
    var zoneEdge = octagonZone.zoneSize / 2;
    if((centerX + zoneEdge) <= x1){
        return false;
    }
    if((centerX - zoneEdge) >= x2){
        return false;
    }
    if((centerY + zoneEdge) <= y1){
        return false;
    }
    if((centerY - zoneEdge) >= y2){
        return false;
    }
    return true;
}

/*
 * function to draw a polygon shape
 * adapted from: https://p5js.org/examples/form-regular-polygon.html
 * @param {Object} p5       - the p5.js object
 * @param {Number} x        - x-coordinate of the polygon
 * @param {Number} y      	- y-coordinate of the polygon
 * @param {Number} radius   - radius of the polygon
 * @param {Number} npoints  - number of sides the polygon has
 */
function polygon(p5, x, y, radius, npoints) {
    if(npoints > 1){
        var angle = p5.TWO_PI / npoints;
        p5.angleMode(p5.RADIANS);
        p5.beginShape();
        for (var a = p5.TWO_PI/(npoints*2); a < p5.TWO_PI + p5.TWO_PI/(npoints*2); a += angle) {
        var sx = x + p5.cos(a) * radius;
        var sy = y + p5.sin(a) * radius;
        p5.vertex(sx, sy);
        }
        p5.endShape(p5.CLOSE);
    }
    else {
        p5.ellipse(x, y, radius * 2);
    }
}

/*
 * function to draw a red rectangle to show how big the frame used on blocks.org is
 * @param {Object} p5       - the p5.js object
 * @param {Number} x1       - left side of a map tile
 * @param {Number} x2		- right side of a map tile
 * @param {Number} y1 		- top side of a map tile
 * @param {Number} y2		- bottom side of a map tile
 */
function drawDebugFrame(p5, x1, x2, y1, y2){
    var cx = p5.map(512-960/2, x1, x2, 0, 256);
    var cy = p5.map(512-720/2, y1, y2, 0, 256);
    var cx2 = p5.map(512+960/2, x1, x2, 0, 256);
    var cy2 = p5.map(512+720/2, y1, y2, 0, 256);
    p5.stroke(0, 100, 100);
    p5.rect(cx, cy, cx2, cy2);
}
