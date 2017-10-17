/* This is an example of 10print translated into the PS4 framework */
var blue = "#0000AA";
var light_blue = "#0088FF";
var noiseScale = 1 /100.0;
var tourSeed = 301;

function drawLayer(p5, x1, x2, y1, y2, z, zoom) {
    var grid_size = getCurGridSize(zoom);

    var hex_size = 256/(grid_size *2); 
    //noiseScale = p5.map(x2-x1,0,256,0,1/100);

    var index = new Index(x1,x2,y1,y2, hex_size, p5,z);
    index.draw();
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
    p5.noiseDetail(8, 0.5);
    p5.background(light_blue);
    p5.noStroke();
    drawLayer(p5, x1, x2, y1, y2, z, zoom);
    p5.noFill();
    p5.stroke(255, 0, 0);
    p5.rect(0, 0, 255, 255);
}

function getCurGridSize(zoom){ // 
    var sizes = [3,6];
    return sizes[sizes.length-1-zoom] 
}

//______________[INDEX]______________\\

var Index = function(x1,x2,y1, y2, hex_size, p5,z) {

    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.z = z;
    this.p5 = p5;
    this.store = {};
    this.keys = [];

    this.hexSize = hex_size;
    this.hexHeight = hex_size * 2;
    this.hexWidth = hex_size * 2;
    this.regWidth = Math.sqrt(3) / 2 * this.hexHeight; //width of a regular hexagon before horiz. stretch     
    
    var grid_size = 256/(2*hex_size);
    this.gridHeight = grid_size*1.5;
    this.gridWidth = grid_size+1;

    this.draw = function() {
        for (var i = 0; i < this.keys.length; i++) {
            var hx = this.store[this.keys[i]];
            if(hx.noiseVal >0.55){
            hx.drawHex(p5);
            }
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



//______________[HEXAGON]______________\\



var Hexagon = function(q, r, index) { //pointed top hexes in an axial co-ordinate system

    this.parent = index;
    var p5 = index.p5;
    var size = index.hexSize; //long radius

    this.q = q; //column ref : cols are on a diagonal left->right top->bottom
    this.r = r; //row ref : rows are parallel to x axis
    this.s = -q - r;

    this.x = (size * 2 * (q + r / 2));
    this.y = (size * 3 / 2 * r);
    
//    var noiseX = p5.map(this.x,index.x1,index.x2,0,256);
//    var noiseY = p5.map(this.y,index.y1,index.y2,0,256);
    var noiseX = this.x+index.x1;
    var noiseY = this.y+index.y1;


    this.noiseVal = p5.noise( noiseX * noiseScale , noiseY * noiseScale,this.parent.z);
    this.color = p5.lerpColor(p5.color(0,0,255),p5.color(255),this.noiseVal) ;


    this.drawHex = function(p5) {
        p5.push();
        p5.stroke(blue);
        p5.beginShape();
        p5.strokeWeight(1);
        if (this.q === 2 && this.r ===4){
            this.color = p5.color("red");

        }
        p5.fill(this.color);
        for (var i = 0; i < 6; i++) {
            var point = this.corner(i);
            var mx = this.x //p5.map(this.x,this.parent.x1,this.parent.x2,0,256);
            var my = this.y //p5.map(this.y,this.parent.y1,this.parent.y2,0,256);
            p5.vertex(point[0], point[1]);
        }
        p5.endShape(p5.CLOSE);
        p5.stroke("white");
        p5.fill("red");
        p5.textSize(15);
        //if (this.q == 3 && this.r ==3 ){
          //p5.text((this.x+this.parent.x1)+"_"+(this.y+this.parent.y1),this.x-40,this.y,);  
        //}
        
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