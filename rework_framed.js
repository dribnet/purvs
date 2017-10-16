/* This is an example of 10print translated into the PS4 framework */
var blue = "#0000AA";
var light_blue = "#0088FF";
var noiseScale = 1 /200.0;

function drawLayer(p5, x1, x2, y1, y2, z, zoom) {
    var seg_size = x2 - x1;

    var grid_size = 3*(10*zoom); //must be odd number >1
    var grid_size = 3;

    var hex_size = seg_size/(3*2);
    console.log(hex_size);
    var index = new Index(0, 0, grid_size+2*zoom,grid_size*1.5, hex_size, p5,x1,y1,z);
    index.draw();
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
    p5.noiseDetail(8, 0.5);
    p5.ellipseMode(p5.CENTER);
    //p5.background(light_blue);
    //p5.stroke(light_blue);
    p5.noStroke();
    drawLayer(p5, x1, x2, y1, y2, z, zoom);
    p5.noFill();
    p5.stroke(255, 0, 0);
    p5.rect(0, 0, 255, 255);
}

var Index = function(x, y, g_width, g_height, hexSize, p5,x1,y1,z) {
    this.x = x;
    this.y = y;

    this.zVal = z;
    this.store = {};
    this.keys = [];
    this.global_x = x1;
    this.global_y = y1;
    this.hexSize = hexSize;
    this.hexHeight = hexSize * 2;
    this.hexWidth = hexSize * 2;
    this.regWidth = Math.sqrt(3) / 2 * this.hexHeight;
    this.p5 = p5;
    this.gridHeight = g_height;
    this.gridWidth = g_width;

    this.draw = function() {
        for (var i = 0; i < this.keys.length; i++) {
            var hx = this.store[this.keys[i]];
            hx.drawHex(p5);
        }
    };

    this.mapGen = function(radius) {
        for (var q = -radius; q <= radius; q++) {
            for (var r = -radius; r <= radius; r++) {
                for (var s = -radius; s <= radius; s++) {
                    if (q + s + r === 0) {
                        this.createHex(q, r);
                    }
                }
            }
        }
    };

    this.rect_mapGen = function(map_width, map_height) {

        for (var r = 0; r < map_height; r++) {
            var r_offset = Math.floor(r / 2);
            for (var q = 0 - r_offset; q < map_width - r_offset; q++) {
                this.createHex(q, r);
            }
        }
    };

    this.createHex = function(q, r) {
        this.store[getKey(q, r)] = new Hexagon(q, r, this, this.p5);
        this.keys.push(getKey(q, r));
    };

    this.getHex = function(q, r) {
        var key = getKey(q, r);
        return this.store[key];
    };

    this.rect_mapGen(this.gridWidth, this.gridHeight);

};

var Hexagon = function(q, r, index) { //pointed top hexes in an axial co-ordinate system

    this.parent = index;
    var size = index.hexSize; //long radius

    this.q = q; //column ref : cols are on a diagonal left->right top->bottom
    this.r = r; //row ref : rows are parallel to x axis
    this.s = -q - r;

    this.y = index.y + (size * 3 / 2 * r);
    this.x = index.x + (size * 2 * (q + r / 2));

    var global_x = this.parent.global_x+this.x;
    var global_y = this.parent.global_y+this.y;
    var p5 = index.p5;
    this.noiseVal = p5.noise(global_x * noiseScale ,global_y * noiseScale ,index.zVal);
    this.color = p5.lerpColor(p5.color(0,0,255),p5.color(255),this.noiseVal);


    this.drawHex = function(p5) {
        p5.push();
        p5.stroke(blue);
        p5.beginShape();
        p5.fill(this.color);
        p5.strokeWeight(1);
        for (var i = 0; i < 6; i++) {
            var point = this.corner(i);
            p5.vertex(point[0], point[1]);
        }
        p5.endShape(p5.CLOSE);
        p5.pop();
        

    };
    this.colorCalc = function(){
        var col;
        return col
    }

    this.corner = function(i) {
        // return point at a specific corner
        // corners indexed from right-bottom corner on hex moving clockwise

        var angle_deg = (60 * i) + 30;
        var angle_rad = Math.radians(angle_deg);
        angle_rad %= Math.PI * 2;
        var point = [
            this.x + size * Math.cos(angle_rad),
            this.y + size * Math.sin(angle_rad)
        ];
        if (i == 5 || i === 0) {
            point[0] += Math.abs((this.parent.hexHeight - this.parent.regWidth)) / 2;
        }
        if (i == 3 || i == 2) {
            point[0] -= (Math.abs(this.parent.hexHeight - this.parent.regWidth)) / 2;
        }
        return point;
    };

};


function getKey(q, r) {
    return String(q + "_" + r);
}

// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};