//Global
var inMapMode = true;
var col1, col2, col3, col4,grassCol,sandCol,shallowsCol,waveCol,cliffsCol,cliffsLineCol,superShallowCol,beachBorderCol,mountainCol;
var curRandomSeed;

//Wallpaper
var wallpaperPoints = [];
var glyphSize = 26;

//Map
var cellRadius = 10;
var cellCountY, cellCountX;
var cell_yOff = sinOf(60) * cellRadius;
var cell_width = cellRadius * 2;
var cell_height = cell_yOff * 2;

var cells = []; //2D array holding all cells in grid
var seatexturePoints = [];
var noiseAmp = focusedRandom(0.005, 0.01, 2);
var waves = [];
var isFirstLoop = false;


function setup() {
    createCanvas(960, 500);
    angleMode(DEGREES);
    rectMode(CENTER);
    noiseSeed(int(focusedRandom(0, 100)));

    col1 = color('#fffcbc');
    col2 = color('#66a0ff');
    col3 = color('white');
    col4 = color('#ff6d74');
    grassCol = color('#bcd6a9');
    waterCol = color("#6d93a8");
    sandCol = color('#fffad6');
    waveCol = color('#8bbbd6');
    cliffsBorderCol = color("#a5a393");
    cliffsCol = color("#d1ccc4");
    beachCol = color('#fffae2'); 
    shallowBorderCol = color("#b1e5f9");
    shallowCol = color("#b6dbd9");
    superShallowCol = color("#d7f1f7");
    beachBorderCol = color("#ffee8e");
    mountainCol = color("#a5a393");
    landBeachBorderCol = color("#dde5bc");
    cellCountX = Math.ceil((width / cell_width) * 1.5) + 7;
    cellCountY = Math.ceil(height / cell_height) * 1 + 7;

    curRandomSeed = int(focusedRandom(0, 100));
    noiseSeed(curRandomSeed);
    cells = load_cells();

    console.log("landmass smoothness = " + map(noiseAmp, 0.005, 0.01, 0, 1));
    console.log("Grid: " + [cellCountX, cellCountY]);
    waves = load_waves();
    wallpaperPoints = radialArrange(width / 2, height / 2, 4, 45, 1.066);
    //  seatexturePoints = radialArrange(focusedRandom(width*0.25,width*0.75), focusedRandom(height*-0.75,height*0.75), 2, 8, 1.077);
    isFirstLoop = true;
}



function draw() {

    resetFocusedRandom(curRandomSeed);
    noiseSeed(curRandomSeed);
    background(0);
    stroke(col3);
    fill(col2);
    stroke(col3);
    strokeWeight(1.5);

    if (inMapMode == true) {
        if(isFirstLoop == true){
        mousePressed();
        }

        translate(-3 * cell_width, -3 * cell_height);
  
        drawCellType("water");
        stroke(col2);
        draw_waves();

        drawCellType("shallows");
        drawCellType("land");
        drawCellType("beach");

        drawAllFeatures();

        stroke(shallowBorderCol);
        drawOutline("water","shallows",);
        stroke(cliffsBorderCol);    
        drawOutline("land","water");
        stroke(beachBorderCol);
       // drawOutline("beach","shallows");
        drawOutline("beach","water");
      //  drawOutline("land","beach");

        stroke(landBeachBorderCol);
        //drawOutline("land","shallows");
        isFirstLoop = false;

    }

    if (inMapMode == false) {
        push();
        stroke(col2);
        background(beachCol);
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
    pop();
}

//___________< LANDSCAPE FUNCTIONS >_________\\

function load_cells() { //create array of cell objects
    var hold = [];
    for (var x = 0; x < cellCountX; x++) {
        hold[x] = [];
        hold[x + 1] = [];

        for (var y = 0; y < cellCountY; y++) {
            hold[x][y] = new Cell(x * cellRadius * 1.5, y * cell_height, x, y);
            hold[x + 1][y] = new Cell((x + 1) * cellRadius * 1.5, y * cell_height + cell_yOff, x + 1, y);
        }
        x++;
    }
    return hold;
}

function load_waves(){
    console.log("loading waves");
    var hold = [];
    var y  = -height*0.2;
    var x  = -width*0.2;
    var yOff;
    var loops = 0;
    while( y < height*1.2){
        while(x < width*1.2){
         var w = new Wave(x,y);
         w.calc();
         hold.push(w);
         x+=cellRadius*w.value*10;
         x+=cellRadius*3.5;

        }
     y+=cell_height*1.2 ; 
     x=-width*0.2;
     if(loops%2 == 0){
        x+=cell_width*3;
     }
     loops++;
    }       
    return hold;
}

function draw_waves(){
    for(var i = 0; i < waves.length;i++){
        if(waves[i].value < 0.31 && waves[i].value>0.1){
        waves[i].draw();}
    }
}
function waveCalc() {
        for(var i = 0; i < waves.length;i++){
        waves[i].calc();
    }
}
function drawCellType(type) {
    for (var i = cells.length - 3; i >= 3; i--) {
        for (var o = cells[i].length - 3; o >= 3; o--) {
            if (cells[i][o].state == type) {
                cells[i][o].draw();
            }
        }
    }
}
function drawAllFeatures(){
        for (var i = cells.length - 3; i >= 3; i--) {
        for (var o = cells[i].length - 3; o >= 3; o--) {
                cells[i][o].drawFeatures();
            
        }
    }
}

function drawOutline(target, enemy) {

    for (var i = cells.length - 3; i >= 3; i--) {
        for (var o = cells[i].length - 3; o >= 3; o--) {    
            if (cells[i][o].state == target) {
                cells[i][o].outline(enemy);

            }   
        }
    }
}



function cellAtPos(x,y){ //return cell given a position

}
//___________<P5 FUNCTIONS >_________\\
function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    } else if (key == ' ') {
        inMapMode = !inMapMode;
    }
}


function mousePressed() {
    changeRandomSeed();
    if(inMapMode == true ){
    for (var i = cells.length - 1; i >= 0; i--) {
        for (var o = cells[i].length - 1; o >= 0; o--) {
            cells[i][o].refresh();
        }
    }
    waves = [];
   waves = load_waves();
    waveCalc();
    console.log("refreshed!");
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


function vert(point) {
    vertex(point[0], point[1]);
}

function angleBetween(p1, p2) {
    var c;
    c = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) * 180 / Math.PI;
    return c;
}
function midpoint(p1,p2){
    return [(p1[0]+p2[0])/2,(p1[1]+p2[1])/2];
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
function average(n1,n2){
    return(n1+n2)/2;
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
        ellipse(arr[i][0], arr[i][1], siz, siz);
    }
    pop();
}

var Cell = function(xpos, ypos, xindex, yindex) {
    this.state = "not_set";

    this.x = xpos;
    this.y = ypos;
    this.index = [xindex, yindex];
    this.value = noise(xpos * noiseAmp, ypos * noiseAmp);
    this.color = color('green');

    this.isOnEdge = false;
    this.isAssimilated = false;
    this.isMountain = false;
    this.isBeach = false;

    this.points = polygon_points(this.x, this.y, cellRadius, 6);
    if (this.index[0] < 2 || this.index[1] < 2 || this.index[0] > cellCountX - 2 || this.index[1] > cellCountY - 2) {
        //     this.isOnEdge = true;
    }

    this.draw = function() {
        push();
        textSize(16);
        fill(this.color);
        strokeWeight(1);
        stroke(this.color);
        polygon(this.x, this.y, cellRadius, 6);
        noStroke();
        fill('white');
        //text(this.index,this.x-15,this.y+10);
        pop();

    }

    this.drawFeatures = function(){
        if(this.isMountain == true){
            push();
            stroke(mountainCol);
            fill(this.color);
            translate(this.x+cellRadius/6, this.y);
            triangle(0,-2*cellRadius/3,-cellRadius/3,0,cellRadius/3,0);
            translate(-cellRadius/3,cellRadius/3);
            triangle(0,-2*cellRadius/3,-cellRadius/3,0,cellRadius/3,0);
            pop();
        }
    }

    this.colorCalc = function() { //constructor + refresh function. determines this.color based on state & value 
        if (this.state == "water") {
            this.color = lerpColor(waterCol, color(col3), map(this.value, 0, 0.6, 0.5, 0.7));
            console.log(this);

        }
        if (this.state == "shallows") {
            this.color = lerpColor(waterCol, superShallowCol, map(this.value, 0.5, 0.545, 0.7, 0.8));
        }
        
        if (this.state == "land") {
            this.color = lerpColor(grassCol,color(240), map(this.value, 0.6, 0.8, 0.3, 0.7));

        }
            if(this.state == "beach"){
                this.color = lerpColor(beachCol, grassCol, map(this.value, 0.54, 0.61, 0.2, 0.6));
            }
            if (this.isMountain == true){
                this.color = lerpColor(grassCol,color(240), map(this.value, 0.6, 0.8, 0.6, 0.8));

            }
    }

    this.stateCalc = function() { // setup + refresh function. Categorises cells based on noise value
        //TODO: define states as array of objects holding upper bound of Value, and corresponding state
        if (this.value < 0.54) {
            this.state = "water";
            if (this.value > 0.501) {
                this.state = "shallows";
            }
        } else {

            this.state = "land";

             if (0.54 <this.value && this.value < 0.565) {
                this.state = "beach";

            }
            if (this.value > 0.785  ) {
                this.isMountain = true;
            }

            // if(isFirstLoop == false && this.friends("water").length > 0){
            //     this.state = "cliff";
            // }
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
            if (cells[hold[i][0]][hold[i][1]] != undefined) {

                ret[i] = cells[hold[i][0]][hold[i][1]];
            } else {
                ret[i] = this;
            }

        }
        this.neighbors = ret;
        return ret;
    }
    this.enemies = function() { //neighboring cells with different state
        var ret = [];
        if (!this.neighbors) {
            this.getNeighbors();
        }
        for (var i = 0; i < this.neighbors.length; i++) {
            if (this.neighbors[i].state != this.state) {
                ret.push(i);
            }
        }
        return ret;
    }

    this.friends = function(borderState) { //neighboring cells with specific state
        var ret = [];
        if (!this.neighbors) {
            this.getNeighbors();
        }

        for (var i = 0; i < this.neighbors.length; i++) {
            if (this.neighbors[i].state == borderState) {
                ret.push(i);
            }
        }
        return ret;
    }

    this.outerPoints = function() { //return points on cell borders
        var outer_angles = this.enemies();
        var lastpoint;
        var ret = [];
        for (var i = 0; i < outer_angles.length; i++) {
            var p = findNewPoint([this.x, this.y], (outer_angles[i] * 60) - 60, cellRadius);
            var p2 = findNewPoint([this.x, this.y], ((outer_angles[i] - 1) * 60) - 60, cellRadius);

            if (p2 != ret[i - 1]) {
                ret.push(p2);
            }
            ret.push(p);
        }
        return ret;
    }

    this.outline = function(borderState) { //draw a line on borders with different cell types 
        var outer_angles = this.friends(borderState);
        for (var i = 0; i < outer_angles.length; i++) {
            var p = findNewPoint([this.x, this.y], (outer_angles[i] * 60) - 60, cellRadius);
            var p2 = findNewPoint([this.x, this.y], ((outer_angles[i] - 1) * 60) - 60, cellRadius);
            push();
            strokeWeight(cellRadius/8);
            line(p[0], p[1], p2[0], p2[1]);
            pop();
        }
    
    }

    this.creep = function() { //return array of references to all cells in this cell's cluster 
        var hold = [this];
        var ret = [];

        for (var i = 0; i < hold.length; i++) {
            var c = hold[i];
            c.getNeighbors();
            if (c.isOnEdge == false && c.state == this.state && c.isAssimilated != true) {
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

    this.refresh = function() { // called whenever a grid is refreshed. recalculates cell values to accommodate new noise map
        this.isMountain = false;
        this.isAssimilated = false;
        this.isBeach = false;
        this.value = noise(this.x * noiseAmp, this.y * noiseAmp);
        this.stateCalc();
        this.colorCalc();

    }
}

var Wave = function(x,y) {
    this.x = x;
    this.y = y;
    this.value = noise(this.x * noiseAmp, this.y * noiseAmp);
    this.w = (1/this.value)*cellRadius*0.5; // Width of entire wave
    this.resolution = 24;
    this.xspacing = this.w / this.resolution; // Distance between each horizontal location

    this.period = this.w/map(this.value,0,0.35,4.5,1.5); // How many pixels before the wave repeats`
    this.amplitude = this.w/20; // Height of wave
    this.dx = (360 / this.period) * this.xspacing; // Value for incrementing x`
    this.theta = focusedRandom(0,100); // Start angle at 0
    
    this.yvalues = new Array(floor(this.w / this.xspacing)); // Using an array to store height values for the wave`

    this.calc = function() {
        // Increment theta (try different values for 
        // 'angular velocity' here)

        // For every x value, calculate a y value with sine function
        var x = this.theta;
        for (var i = 0; i < this.yvalues.length; i++) {
            this.yvalues[i] = sin(x)*this.amplitude;
            x += this.dx;
        }
    }

    this.draw = function() {
        noStroke();
        // A simple way to draw the wave with an ellipse at each location
        push();
        translate(this.x, this.y);
        noFill();
        stroke(waveCol);
        //ellipse(0,0,10,10);
        strokeWeight(this.w*(cellRadius/150));
        beginShape();
        for (var x = 0; x < this.yvalues.length; x++) {
            curveVertex((x * this.xspacing)-this.w/2, this.yvalues[x]);
        }
        endShape();

        pop();
    }
}
