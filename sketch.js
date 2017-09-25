//Global
var inMapMode = true;
var col1, col2, col3, col4;
var curRandomSeed;

//Wallpaper
var wallpaperPoints = [];
var glyphSize = 26;

//Map
var cellRadius = 20;
var cellCountY, cellCountX;
var cell_yOff = sinOf(60) * cellRadius;
var cell_width = cellRadius * 2;
var cell_height = cell_yOff * 2;

var cells = []; //2D array holding all cells in grid
var noiseAmp = focusedRandom(0.0025, 0.01, 2);
var lands = [];
function setup() {
    createCanvas(960, 500);
    angleMode(DEGREES);
    rectMode(CENTER);

    col1 = color('#fffcbc');
    col2 = color('#66a0ff');
    col3 = color('white');
    col4 = color('#ff6d74');

    cellCountX = Math.ceil((width / cell_width) * 1.5) + 6;
    cellCountY = Math.ceil(height / cell_height) * 1 + 6;

    curRandomSeed = int(focusedRandom(0, 100));

    console.log("landmass smoothness = " + map(noiseAmp, 0.0025, 0.0175, 1, 0));
    console.log("Grid: " + [cellCountX, cellCountY]);

    load_cells();
    load_lands();

    //wallpaperPoints = radialArrange(width / 2, height / 2, 4, 45, 1.066);
}



function draw() {
    resetFocusedRandom(curRandomSeed);
    noiseSeed(int(focusedRandom(0, 100)));
    background(col1);
    stroke(col2);
    fill(col2);
    stroke(col3);
    strokeWeight(3);

    if (inMapMode == true) {
        translate(-3 * cell_width, -3 * cell_height);
        for (var i = cells.length - 1; i >= 0; i--) {
            for (var o = cells[i].length - 1; o >= 0; o--) {
                cells[i][o].draw();
            }
        }
    	outlineMass(lands[0]);
    }
    if (inMapMode == false) {
        for (var i = wallpaperPoints.length - 1; i >= 0; i--) {
            if (i % 4 == 0) {
                Boat(wallpaperPoints[i][0], wallpaperPoints[i][1], glyphSize, col2, col3, col4);
            } else if (i % 4 == 2) {
                Wheel(wallpaperPoints[i][0], wallpaperPoints[i][1], glyphSize, col2, col4);
            } else {
                Anchor(wallpaperPoints[i][0], wallpaperPoints[i][1], glyphSize * 0.75, col2)
            }
        }
    }
}

//___________< LANDSCAPE FUNCTIONS >_________\\


var Cell = function(xpos, ypos, xindex, yindex) {
    this.state = "not_set";

    this.x = xpos;
    this.y = ypos;
    this.index = [xindex, yindex];
    this.value = noise(xpos * noiseAmp, ypos * noiseAmp);
    this.color = color('green');
    this.isOnEdge = false;
    this.isAssimilated = false;
    this.points = polygon_points(this.x,this.y,cellRadius,6);
    if (this.index[0] < 2 || this.index[1] < 2 || this.index[0] > cellCountX - 2 || this.index[1] > cellCountY - 2) {
        this.isOnEdge = true;
    }

    this.draw = function() {
        push();
        textSize(16);
        fill(this.color);
        strokeWeight(cellRadius / 20);
        polygon(this.x, this.y, cellRadius, 6);
        noStroke();
        fill('white');
        //text(this.index,this.x-15,this.y+10);
        pop();
    }

    this.colorCalc = function() {
        if (this.state == "water") {
            this.color = lerpColor(col2, col1, map(this.value, 0, 0.6, 0, 0.4));

        }
        if (this.state == "land") {
            this.color = lerpColor(col2, col4, map(this.value, 0.6, 1, 0.5, 0.75));
        }
    }

    this.stateCalc = function() {
        if (this.value < 0.6) {
            this.state = "water";
        } else {
            this.state = "land";
        }
    }

    this.getNeighbors = function() { // find the cell indexes of each of the six adjacent tiles
        var ix = this.index[0];
        var iy = this.index[1];

        var topY = 0;
        var botY = 1;

        if (ix % 2 == 0) {
            //relative y index of left&right neighbors 
            //change depending on whether original y index is even or odd
            topY = -1;
            botY = 0;
        }
        var ret = [];
        var hold = [
            //relative indices for neighbors
            //hold[0] is the neighbor above, the indexes move clockwise from there
            [ix, iy - 1],
            [ix + 1, iy + topY],
            [ix + 1, iy + botY],
            [ix, iy + 1],
            [ix - 1, iy + botY],
            [ix - 1, iy + topY]

        ];
        for (var i = 0; i < hold.length; i++) {
            ret[i] = cells[hold[i][0]][hold[i][1]];
        }
        this.neighbors = ret;
        return ret;
    }
    this.enemies = function(){
    	var ret = [];
        for (var i = 0; i < this.neighbors.length; i++) {
            if (this.neighbors[i].state != this.state) {
                ret.push(i);
            }
        }
        return ret;
    }
    this.friends = function() {
    	var ret = [];
        for (var i = 0; i < this.neighbors.length; i++) {
            if (this.neighbors[i].state == this.state) {
                ret.push(i);
            }
        }
        return ret;
    }

    this.outerPoints = function(){ //return points on cell borders
    	var outer_angles = this.enemies();
    	var lastpoint;
    	var ret=[];
    	for(var i= 0;i<outer_angles.length;i++){
    		var p = findNewPoint([this.x,this.y],(outer_angles[i]*60)-60,cellRadius);
    		var p2 = findNewPoint([this.x,this.y],((outer_angles[i]-1)*60)-60,cellRadius);
    		
    		if(p2!=ret[i-1]){
    			ret.push(p2);
    		}

    		ret.push(p);
    		
    	}
    return ret;
    }
    this.creep = function() {
        var hold = [this];
        var ret = [];

        for (var i = 0; i < hold.length; i++) {
            var c = hold[i];
            c.getNeighbors();
            if (c.isOnEdge ==false && c.state == this.state && c.isAssimilated != true) {
                for (var o = 0; o < c.neighbors.length; o++) {
                    hold.push(c.neighbors[o]);
                }
                c.isAssimilated = true;
                ret.push(c);
            } else {
                c.isAssimilated = true;
            }
        }

        return ret;
    }

    this.refresh = function() {
        this.value = noise(this.x * noiseAmp, this.y * noiseAmp);
        this.stateCalc();
        this.colorCalc();
        if (this.isOnEdge != true) {
            //this.getNeighbors();
        }
    }

    this.colorCalc();
    this.stateCalc();
    this.refresh();
}

function load_cells() { //declutter function to populate 'cells' array
    for (var x = 0; x < cellCountX; x++) {
        cells[x] = [];
        cells[x + 1] = [];

        for (var y = 0; y < cellCountY; y++) {
            cells[x][y] = new Cell(x * cellRadius * 1.5, y * cell_height, x, y);
            cells[x + 1][y] = new Cell((x + 1) * cellRadius * 1.5, y * cell_height + cell_yOff, x + 1, y);
        }
        x++;
    }
}

function load_lands() {
    for (var i = cells.length - 1; i >= 0; i--) {
        for (var o = cells[i].length - 1; o >= 0; o--) {
            var c = cells[i][o];
            if (c.isOnEdge == false) {
                c.getNeighbors();
                if(c.isAssimilated ==false){
                	if(c.state == "land"){
            	lands.push(c.creep());}
 	           }
            }
        }
    }
}

function outlineMass(arr){
	for(var i= 0 ; i<arr.length; i++){
		r = arr[i].outerPoints();
	//	console.log(r);
		for(var o = 0 ; o< r.length;o++){
			push();
			ellipse(r[o][0],r[o][1],10,10);
			pop();
		}
	}	
}

//___________< SECONDARY P5 FUNCTIONS >_________\\
function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    } else if (key == ' ') {
        inMapMode = !inMapMode;
    }
}


function mousePressed() {
    changeRandomSeed();
    //noiseSeed(random(0,100));
    load_lands();
    for (var i = cells.length - 1; i >= 0; i--) {
        for (var o = cells[i].length - 1; o >= 0; o--) {
            cells[i][o].refresh();
        }
    }
}


//___________< WALLPAPER FUNCTIONS >_________\\
function radialArrange(x, y, seed, stepSeed, spin) {
    var steps = (width + height / 4) / stepSeed;
    var hold = [];
    var angle;
    var points_in_ring = seed;
    for (var step = 1; step < +steps; step++) {
        points_in_ring = step * seed;
        var current_radius = step * stepSeed - (stepSeed / PI / 2);
        for (var g = 1; g <= points_in_ring; g++) {
            angle = (360 / points_in_ring) * g;
            angle += step * (360 / seed / spin);
            hold.push(findNewPoint([x, y], angle, current_radius));
        }
    }
    return hold;
}

function Boat(x, y, siz, c1, c2, c3) {
    push();
    translate(x, y);
    strokeWeight(siz * 0.1);
    fill(c1);
    sailCol = focusedRandom(0, 1)
    arc(0, 0.3 * siz, 0.70 * siz, 0.3 * siz, 0, 180, CHORD);
    line(0, siz * 0.25, 0, -siz * 0.4);
    stroke(c1);
    fill(c2);
    strokeWeight(siz * 0.0025);
    if (sailCol > 9.995) {
        push();
        fill(c3);
        triangle(-0.1 * siz, -0.45 * siz, -0.4 * siz, 0.1 * siz, -0.1 * siz, 0.1 * siz);
        triangle(0.1 * siz, -0.45 * siz, 0.4 * siz, 0.1 * siz, 0.1 * siz, 0.1 * siz);
        pop();
    } else if (sailCol < 0.15) {
        push();
        fill(c3);
        triangle(-0.1 * siz, -0.4 * siz, -0.4 * siz, 0.1 * siz, -0.1 * siz, 0.1 * siz);
        pop();
        triangle(0.1 * siz, -0.4 * siz, 0.4 * siz, 0.1 * siz, 0.1 * siz, 0.1 * siz);
    } else if (sailCol < 0.3) {
        push();
        triangle(-0.1 * siz, -0.4 * siz, -0.4 * siz, 0.1 * siz, -0.1 * siz, 0.1 * siz);
        fill(c3);
        triangle(0.1 * siz, -0.4 * siz, 0.4 * siz, 0.1 * siz, 0.1 * siz, 0.1 * siz);
        pop();
    } else {
        triangle(-0.1 * siz, -0.4 * siz, -0.4 * siz, 0.1 * siz, -0.1 * siz, 0.1 * siz);
        triangle(0.1 * siz, -0.4 * siz, 0.4 * siz, 0.1 * siz, 0.1 * siz, 0.1 * siz);
    }
    pop();
}

function Wheel(x, y, siz, c1, c2) {
    var segments = 7;
    push();
    noFill();
    strokeWeight(siz * 0.06);
    translate(x, y);
    stroke(c1);
    var ringCol = focusedRandom(0, 1);
    push()
    if (ringCol < 0.25) {
        stroke(c2);
    }
    ellipse(0, 0, siz * 0.85, siz * 0.85);
    pop();
    push();
    if (ringCol > 0.75) {
        stroke(c2);
    }
    ellipse(0, 0, siz * 0.5, siz * 0.5);
    pop();
    push();
    if (0.45 < ringCol < 0.55) {
        stroke(c2);
    }
    ellipse(0, 0, siz * 0.5, siz * 0.5);
    pop();
    strokeWeight(siz * 0.075);
    var offset = focusedRandom(0, 360 / segments);
    for (var i = 0; i < segments; i++) {
        var p = findNewPoint([0, 0], (360 / segments) * i + offset, siz / 2);
        strokeWeight(siz * 0.058);
        line(0, 0, p[0], p[1]);
    }
    pop();
}

function Anchor(x, y, siz, c1) {
    push();
    strokeWeight((siz + siz / 2) * 0.07);
    translate(x, y);
    noFill();
    line(0, -siz * 0.3, 0, 0.49 * siz);
    ellipse(0, -siz * 0.45, (siz + siz / 2) * 0.2, (siz + siz / 2) * 0.2);
    noFill();
    beginShape();
    curveVertex(0, -siz * 0.5);
    curveVertex(-siz * 0.4, siz * 0.1);
    curveVertex(0, siz * 0.5);
    curveVertex(siz * 0.4, siz * 0.1);
    curveVertex(0, -siz * 0.5);
    endShape();
    pop();
}


//___________< GEOMETRY FUNCTIONS >_________\\
function distanceBetween(p1, p2) {
    var a = p1[0] - p2[0];
    var b = p1[1] - p2[1];
    var c = Math.abs(Math.sqrt(a * a + b * b));
    return c;
}

function findNewPoint(point, angle, distance) {
    angle %= 360;
    var result = [];
    result[0] = Math.round(Math.cos(angle * Math.PI / 180) * distance + point[0]);
    result[1] = Math.round(Math.sin(angle * Math.PI / 180) * distance + point[1]);
    return result;
}

function sinOf(degrees) {
    return Math.sin(degrees * Math.PI / 180);
}

function drawGroup(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i].draw();
    }
}

function vert(point) {
    vertex(point[0], point[1]);
}

function angleBetween(p1, p2) {
    var c;
    c = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) * 180 / Math.PI;
    return c;
}

function polygon(x, y, radius, npoints) {
    var angle = 360 / npoints;
    beginShape();
    for (var a = 0; a < 360; a += angle) {
        var p = findNewPoint([x, y], a, radius);
        vertex(p[0], p[1]);
    }
    endShape(CLOSE);
}

function polygon_points(x, y, radius, npoints) {
    var angle = 360 / npoints;
    var ret = [];
    for (var a = 0; a < 360; a += angle) {
        var p = findNewPoint([x, y], a, radius);
        ret.push(p);
    }
    return ret;
}
//___________< MISC & DEBUG FUNCTIONS >_________\\

function changeRandomSeed() {
    curRandomSeed = curRandomSeed + 1;
    lastSwapTime = millis();
}

function debugCircumfrences() {
    for (var i = debugCircumfrences.length - 1; i >= 0; i--) {
        push();
        stroke(col4);
        noFill();
        ellipse(width / 2, height / 2, debugCircumfrences[i], debugCircumfrences[i]);
        pop();
    }
}

function debugPoint(point, size) {
    ellipse(point[0], point[1], size, size);
}

function debugShowPoints(arr, siz) {
    push();
    noStroke();
    for (var i = arr.length - 1; i >= 0; i--) {
        ellipse(arr[i][0], arr[i][1],siz,siz);
    }
    pop();
}