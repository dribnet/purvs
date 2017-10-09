var subSize =35;
var c;
var cellWidth = Math.sqrt((subSize*subSize)-(subSize/2)*(subSize/2))*2;
var noiseAmp = 0.01
var curRandomSeed;


function setup() {
    curRandomSeed = int(focusedRandom(0, 100));
    noiseSeed(curRandomSeed);

    createCanvas(800, 450);
    c = load_cells(width/cellWidth*2+1,height/(subSize));
   // c = load_cells(4,4);
    console.log(height/subSize);
    console.log(c);
}

function draw() {
    resetFocusedRandom(curRandomSeed);
    noiseSeed(curRandomSeed);

    background(color("#ffeed3"));
    stroke("white");
    push();
    //translate(width/2,height/3);
    draw_cells(c);
    pop();
}


var Cell = function(xpos, ypos,index) {
    this.construct = function() {
        this.index = index;
        this.x = xpos;
        this.y = ypos;
        this.subs = new Array(3);
        this.subDiv();
        this.noiseVal = noise(xpos * noiseAmp, ypos * noiseAmp);
        this.tallCalc();
    }

    this.tallCalc = function(argument) {
        this.tall = Math.floor(map(this.noiseVal,0.4,0.8,-1,6));
        console.log(this.tall);

    }

    this.render = function() {
        push();
       // strokeWeight(1); //TODO: change to pixel width
        for (var i = 0; i < this.subs.length; i++) {
            this.subs[i].make(this.tall);
        }
        // fill("red");
        // noStroke();
        // text(this.index,this.x- subSize,this.y);
        pop();
    };
    this.gridDebug = function(){
        push();
        stroke("red");
        noFill();
        translate(this.x,this.y-subSize);
        rotate(TWO_PI/12),
        polygon(0,0,subSize,6);
        pop();
    }
    this.colorCalc = function() { //constructor + refresh function. determines this.color based on state & value 
    };

    this.subDiv = function() { // create subCell child objects
        this.subs[0] = new subCell(this, "top");
        this.subs[1] = new subCell(this, "left");
        this.subs[2] = new subCell(this, "right");
    };

    this.refresh = function() { // called whenever a grid is refreshed. recalculates cell values to accommodate new noise map
        this.noiseVal = noise(this.x * noiseAmp, this.y * noiseAmp);
        this.tallCalc();
        this.subs = [];
        this.subDiv();
    }

    this.construct();
}

var subCell = function(parent, orientation) {
    this.construct = function() {
        // this.parent = parent;
        this.orientation = orientation;
        this.points = new Array(4);
        this.points[0] = [parent.x, parent.y];
        this.color = color("#a7f2de");
       // this.stroke = color("#EAC11F");
        this.stroke  = lerpColor(this.color,color("white"),0.6);

        this.shapeCalc();
        this.colorCalc();
        this.parent = parent;
    };

    this.make = function(tall) {
        push();
        fill(this.color);
        stroke(this.stroke);
        if(this.orientation == "top"){stroke(this.color);
            strokeWeight(2)}
        for (var hi = tall; hi >0; hi--) {
                beginShape();
            for (var i = 0; i < this.points.length; i++) {
                vertex(this.points[i][0], this.points[i][1]-subSize*hi);
            }
        endShape(CLOSE);
        }
        pop();
    };
    this.colorCalc = function(){
    	if(this.orientation == "right"){
    		this.color = lerpColor(this.color,color("#1d7f6a"),0.5);
    	}
    	if(this.orientation == "top"){
    		this.color = lerpColor(this.color,color("white"),0.6);
    	}
    };

    this.shapeCalc = function() {
        switch (this.orientation) {

            case "left":
                this.points[1] = findNewPoint(this.points[0], 210, subSize);
                this.points[2] = [this.points[1][0], this.points[1][1] + subSize];
                this.points[3] = [this.points[0][0], this.points[0][1] + subSize];
                break;

            case "top":
                this.points[1] = findNewPoint(this.points[0], -30, subSize);
                this.points[2] = [this.points[0][0], this.points[0][1] - subSize];
                this.points[3] = findNewPoint(this.points[2], 150, subSize);
                break;

            case "right":
                this.points[1] = findNewPoint(this.points[0], -30, subSize);
                this.points[2] = [this.points[1][0], this.points[1][1] + subSize];
                this.points[3] = [this.points[0][0], this.points[0][1] + subSize];
                break;
        }
    };

    this.construct();

};

function mousePressed() {
    changeRandomSeed();
    for (var i = c.length - 1; i >= 0; i--) {
        for (var o = c[i].length - 1; o >= 0; o--) {
            c[i][o].refresh();
        }
    console.log("refreshed!");
    }
}

function load_cells(cellCountX,cellCountY) { //create array of cell objects
    var hold = [];
    for (var y = 0; y < cellCountY; y++) {
        hold[y] = [];
        hold[y + 1] = [];

        for (var x = 0; x < cellCountX; x++) {
            hold[y][x] = new Cell(x*cellWidth, y*subSize*1.5,[y,x]);
        }
        y++;
        for (var x = 0; x < cellCountX; x++) {
            hold[y][x] = new Cell((x+0.5)*cellWidth, y*subSize*1.5,[y,x]);
        }
    }
    return hold;
}

function draw_cells(array){
    for (var y = 0; y < array.length; y++) {
        for (var x = 0; x < array[y].length; x++) {
            array[y][x].render();
           // array[y][x].gridDebug();

        }
    }
        for (var y = 0; y < array.length; y++) {
        for (var x = 0; x < array[y].length; x++) {
           // array[y][x].gridDebug();
        }
    }
}


function findNewPoint(point, angle, distance) {
    angle += 360;
    angle %= 360;
    var result = [];
    result[0] = Math.round(Math.cos(angle * Math.PI / 180) * distance + point[0]);
    result[1] = Math.round(Math.sin(angle * Math.PI / 180) * distance + point[1]);
    return result;
}

function changeRandomSeed() {
    curRandomSeed = curRandomSeed + 1;
    lastSwapTime = millis();
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