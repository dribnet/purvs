//for debugging
var debug = false;

//this object is used to store all possible locations for hexagon zones
var hexagonZone = {

	//width and height of a hexagon zone
	zoneSize: 90,
	
	//co-ordinates for each glyph within the hexagon zone
	//drawn from the center to the outside - the last twelve co-ordinates can be used to draw the hexagon outline
	innerCoordinates: [],
	
	
	
	
	
	createInnerCoordinates: function(){
		var multiplier = this.zoneSize /12;
		this.innerCoordinates = [
			[+multiplier*1, -multiplier*1], [+multiplier*1, +multiplier*1], [-multiplier*1, +multiplier*1], [-multiplier*1, -multiplier*1],
			[+multiplier*1, -multiplier*3], [+multiplier*3, -multiplier*1], [+multiplier*3, +multiplier*1], [+multiplier*1, +multiplier*3],
			[-multiplier*1, +multiplier*3], [-multiplier*3, +multiplier*1], [-multiplier*3, -multiplier*1], [-multiplier*1, -multiplier*3],
			[+multiplier*1, -multiplier*5], [+multiplier*3, -multiplier*3], [+multiplier*5, -multiplier*1], [+multiplier*5, +multiplier*1],
			[+multiplier*3, +multiplier*3], [+multiplier*1, +multiplier*5], [-multiplier*1, +multiplier*5], [-multiplier*3, +multiplier*3],
			[-multiplier*5, +multiplier*1], [-multiplier*5, -multiplier*1], [-multiplier*3, -multiplier*3], [-multiplier*1, -multiplier*5]
		];
	},
	
	//array of all possible zone locations 
	locations: [],
	
	createLocations: function(){
		//keeping track of performance
		var start = performance.now();
		//set up initial values required for while loop
		var endPointer = 4, centerX = 512, centerY = 602, direction = 'left';
		//calculate the step sizes
		var multiplier = this.zoneSize/12, xStep = multiplier*8, yStep = multiplier*6;
		
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
					direction = hexagonZone.changeDirection(direction);
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
	}
}

//load values into the hexagonZone arrays
hexagonZone.createInnerCoordinates();
hexagonZone.createLocations();

//global vars
var line_width = 2, noiseScale=1;
var lucasNumbers = [1,3,4,7,11,18,29,47];


/*
 * This is the funciton to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	var tileKey = x1 + '-' + x2 + '-' + y1 + '-' + y2;
	console.log(tileKey);
    p5.background(0);
    p5.colorMode(p5.HSB);
    p5.rectMode(p5.CORNERS);
    p5.noFill();
    if(debug){
        drawDebugFrame(p5, x1, x2, y1, y2);
    }
    p5.rectMode(p5.CENTER);

    var c_p00 = p5.map(0, x1, x2, 0, 256);
    var c_plwidth = p5.map(line_width, x1, x2, 0, 256);
    var weight = c_plwidth - c_p00;
	
	var hue = 0;
	var colour = p5.color(0, 100, 100);
	var zoneX = 0, zoneY = 0, isVisible = false;
	for (var i = 0, len = hexagonZone.locations.length; i < len; i++) {
		zoneX = hexagonZone.locations[i][0];
		zoneY = hexagonZone.locations[i][1];
		isVisible = isZoneWithinTile(zoneX, zoneY, x1, x2, y1, y2);
		if(isVisible){
			hue = (i % 24) * 15;
			colour = p5.color(hue, 100, 100);
			setTimeout(
				function(p5js, cX, cY, leftX, rightX, topY, bottomY, sW, c){
					return function() { drawHexagonZone(p5, cX, cY, leftX, rightX, topY, bottomY, sW, c); };
				}(p5, zoneX, zoneY, x1, x2, y1, y2, weight, colour) ,
				0
			);
		}
	}
}

function isZoneWithinTile(zoneX, zoneY, x1, x2, y1, y2){
	if((zoneX + 90) <= x1){
		return false;
	}
	if((zoneX - 90) >= x2){
		return false;
	}
	if((zoneY + 90) <= y1){
		return false;
	}
	if((zoneY - 90) >= y2){
		return false;
	}
	return true;
}

//this function draws every that is contained within a single hexagon zone
function drawHexagonZone(p5, centerX, centerY, x1, x2, y1, y2, weight, colour) {
	for (var adjuster = -2; adjuster <= 2; adjuster++) {
		drawHexOutline(p5, centerX, centerY, x1, x2, y1, y2, weight, colour, adjuster * 2);
	}
	colour._array[3] = 0.4;
	p5.stroke(colour);
	drawHexGlyphs(p5, centerX, centerY, x1, x2, y1, y2, weight);
}

//draws the lines that connects the hexagons together
function drawHexOutline(p5, centerX, centerY, x1, x2, y1, y2, weight, colour, adjuster) {
    var xPos, yPos, cx, cy;
    //adjust the opacity of the colour
    colour._array[3] = 1 - (0.2 * Math.abs(adjuster));

    p5.stroke(colour);
    p5.strokeWeight(weight);
    p5.beginShape();
    for (var pos = 12; pos < hexagonZone.innerCoordinates.length; pos++) {
        var xPos = hexagonZone.innerCoordinates[pos][0];
        var yPos = hexagonZone.innerCoordinates[pos][1];
        if(xPos > 30){
            xPos = xPos + (adjuster * 2);
        }
        else if(xPos > 0){
            xPos = xPos + adjuster;
        }
        else if(xPos > -30){
            xPos = xPos - adjuster;
        }
        else {
            xPos = xPos - (adjuster * 2);
        }
        if(yPos > 45){
            yPos = yPos + (adjuster * 2);
        }
        else if(yPos > 0){
            yPos = yPos + adjuster;
        }
        else if(yPos > -60){
            yPos = yPos - adjuster;
        }
        else {
            yPos = yPos - (adjuster * 2);
        }
        cx = p5.map(centerX + xPos, x1, x2, 0, 256);
        cy = p5.map(centerY + yPos, y1, y2, 0, 256);
        p5.vertex(cx, cy);
    }
    p5.endShape(p5.CLOSE);

}

function drawHexGlyphs(p5, centerX, centerY, x1, x2, y1, y2, weight){
    var glyphWidth = 256 / ((x2-x1)/24);
    var innerShapeSize = glyphWidth / 4;
    p5.strokeWeight(weight);
    for (var pos = 0; pos < hexagonZone.innerCoordinates.length; pos++) {
        var xPos = hexagonZone.innerCoordinates[pos][0];
        var yPos = hexagonZone.innerCoordinates[pos][1];
        cx = p5.map(centerX + xPos, x1, x2, 0, 256);
        cy = p5.map(centerY + yPos, y1, y2, 0, 256);
        p5.ellipse(cx, cy, glyphWidth);

        var noiseValue = p5.noise(centerX + xPos , centerY + yPos);
		var lucasSum = 0;
		for(var i in lucasNumbers){
			lucasSum+=lucasNumbers[i];
			if(noiseValue < (lucasSum/100)){
				if(debug){
					console.log('noiseValue '+noiseValue);
					console.log('lucasSum '+ (lucasSum/100));
					console.log(lucasNumbers[lucasNumbers.length - i]);
				}
				polygon(p5, cx, cy, innerShapeSize, lucasNumbers[lucasNumbers.length - i]);
				break;
			}
		}
    }
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



//
/*
 * function to draw a red rectangle to show how big the frame used on blocks.org is
 * @param {Object} p5       - the p5.js object 
 * @param {Number} x1       
 * @param {Number} x2
 * @param {Number} y1 
 * @param {Number} y2
 */
function drawDebugFrame(p5, x1, x2, y1, y2){
    var cx = p5.map(512-960/2, x1, x2, 0, 256);
    var cy = p5.map(512-720/2, y1, y2, 0, 256);
    var cx2 = p5.map(512+960/2, x1, x2, 0, 256);
    var cy2 = p5.map(512+720/2, y1, y2, 0, 256);
    p5.stroke(0, 100, 100);
    p5.rect(cx, cy, cx2, cy2);
}
