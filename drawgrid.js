var max_thickness = 64;
var max_movement = 32;
var ball_radius = 32;
var line_width = 8;
var grid_size = 64;

var resolution = 100; // how many points in the circle



function getOffsetPoint(p5, x, y, z, noiseScale) {
  var noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  var noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  var offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  var offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
}

function showCheck(p5, x, y, z, noiseScale) {
  var showLeaf = Math.floor(5*p5.noise(x * noiseScale, y * noiseScale, z+1));
 
  return (showLeaf)
}

function getLinePos(p5, x, y, z, noiseScale) {
  var line_pos = p5.noise(x * noiseScale, y * noiseScale, z+6);
 
  return (line_pos)
}

function showFlower(p5, x, y, z, noiseScale) {
  var probability = Math.floor(10*p5.noise(x * noiseScale, y * noiseScale, z+4));
 	var flower = false;
 	if (probability%2==0){
 		flower = true;
 	}
  return (flower)
}

function getRotation(p5, x, y, z, noiseScale) {
  var rot = p5.noise(x * noiseScale, y * noiseScale, z+2);

 var mapRot =	p5.map(rot, 0, 0.8, 0, 360);

  return (mapRot)
}

function getSize(p5, x, y, z, noiseScale) {
  var s = p5.noise(x * noiseScale, y * noiseScale, z+3);
  
  var mapS = p5.map(s, 0.1, 0.75, 0.6, 1.3);
  return (mapS)
}

function colorPalette(p5, x, y, z, noiseScale) {
	var r = 255*p5.noise(x * noiseScale, y * noiseScale, z+20);
  	var g = 255*p5.noise(x * noiseScale, y * noiseScale, z+30);
  	var b= 255*p5.noise(x * noiseScale, y * noiseScale, z+40);

  	var red = Math.floor(p5.map(r, 60, 190, 50, 200));
  	var green = Math.floor(p5.map(g, 60, 190, 100, 200));
  	var blue = Math.floor(p5.map(b, 60, 190, 50, 130));


  	return [red, green, blue]
}

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	var waterColor = p5.color(200, 225, 255); //color of background water
/*
 * This is the function to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */

	var max_shift = max_thickness + max_movement;
  	var min_x = snap_to_grid(x1 - max_shift, grid_size);
  	var max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  	var min_y = snap_to_grid(y1 - max_shift, grid_size);
  	var max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  	var multiplier = 5;
  	var size = 20;

  	var c_p00 = p5.map(0, x1, x2, 0, size);
  	var c_pball = p5.map(ball_radius, x1, x2, 0, size);

  	
  	p5.background(waterColor);
  

  	for(var x=min_x; x<max_x; x+=grid_size/multiplier) {
    	for(var y=min_y; y<max_y; y+=grid_size/multiplier) {   		
  
 			LilypadSet(p5, x1, x2, y1, y2, z, zoom, c_pball - c_p00, x, y);
    	
   		}	
   	}
   	//draw debug grid
   	// p5.stroke(255, 0, 0);
   	// p5.noFill();
   	// p5.rect(0, 0, 255, 255);
}


//pond object
function LilypadSet(p5, x1, x2, y1, y2, z, zoom, c_ball_radius, x, y){
  	//draw the leaf
  	this.drawLeaf = function(){
	p5.push();	
	p5.rotate(this.rotation);
	p5.fill(this.leafColor[0], this.leafColor[1], this.leafColor[2]);

	var bumpiNoise = p5.noise(x, y, 100);
	var leafLines = [];

		if (zoom > 1){
			var bumpiNess = p5.map(bumpiNoise, 0, 1, 0.1, 1.5);
			var inset = true;
		}

		if (zoom > 3){
			var leafDetail = true;
		}

		p5.beginShape();

		for (var a=0; a<=p5.TWO_PI; a+=p5.TWO_PI/resolution) {
			
			// var nVal = p5.map(p5.noise(p5.cos(a)*this.leafShape+1, p5.sin(a)*this.leafShape+1), 0.0, 1.0, 1.4, 1.0); 
			var rVal = p5.noise(x, y, 100+a*bumpiNess);
			// console.log(rVal);
			var nVal = this.size*p5.map(rVal, 0.0, 1.0, 1.4, 1.0); 
			// var nVal = 1.4;
			var Vertx = p5.cos(a)*this.cur_ball_radius *nVal;
			var Verty = p5.sin(a)*this.cur_ball_radius *nVal;


		if (inset == true){
			//add lilypad inset
			if(a == 0){
				Vertx = 0;
				Verty = 0;
			} else if (a == p5.TWO_PI/resolution){
				Vertx = Vertx/2;
				Verty = Verty/2;
			}

		}
		if(a!==0 ){
			p5.vertex(Vertx, Verty);
		}

		var verts = {
				outerX: Vertx,
				outerY: Verty
			}
			leafLines.push(verts);
		}
		p5.endShape(p5.CLOSE);


		if (leafDetail == true){
			//lines
			
	  		p5.stroke(this.leafColor[0]+55, this.leafColor[1]+75, this.leafColor[2]+55, 50);
			for (var l=3; l<leafLines.length-1; l+=1){
				if(l%2==0){
				
	  				p5.line(20*this.linePos, 1, leafLines[l].outerX, leafLines[l].outerY);
	  			}
	  		}
		}

		p5.pop();
	};


	this.drawFlower = function(){
		p5.fill(0);

		this.generatePetalShape = function(){
			//drawPetal
			//p5.ellipse(0, 0, this.cur_ball_radius);
			p5.fill(255);
			p5.beginShape();
			p5.curveVertex(this.cur_ball_radius/4, this.cur_ball_radius/16);
				p5.curveVertex(0, 0);
				p5.curveVertex(this.cur_ball_radius/4, this.cur_ball_radius/-16);
				p5.curveVertex(this.cur_ball_radius/2, 0);
			p5.curveVertex(this.cur_ball_radius/4, this.cur_ball_radius/16);
			p5.curveVertex(0, 0);
			p5.curveVertex(this.cur_ball_radius/4, this.cur_ball_radius/-16);
			p5.endShape();
		};
		
		this.generatePetalShape();
	};


	var shift_point = getOffsetPoint(p5, x, y, z, 0.4);

	var noiseScaleL = 1.0;
	this.show_leaf = showCheck(p5, x, y, z, 0.4);
	this.show_flower = showFlower(p5, x, y, z, 0.6);

	this.x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
  	this.y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
  	this.leafColor = colorPalette(p5, x, y, z, 0.4);
  	this.leafShape = 0.9; 
  	this.cur_ball_radius = c_ball_radius;

  	this.rotation = getRotation(p5, x, y, z, 0.1);
  	this.size = getSize(p5, x, y, z, 0.1);
  		this.linePos = getLinePos(p5, x, y, z, 0.1);
  

	p5.noStroke();


	p5.push();
	p5.translate(this.x_pos, this.y_pos);
	if (this.show_leaf == 3 || this.show_leaf == 0){
		this.drawLeaf();
		if(this.show_flower == true){
			drawFlower();
		}
	}
	p5.pop();

}


