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

function getRippleCount(p5, x, y, z, noiseScale, maxRipples) {
  var n = p5.noise(x * noiseScale, y * noiseScale, z+8);
  
  numRipples = Math.floor(p5.map(n, 0.1, 0.75, 4, maxRipples));
  return (numRipples)
}

function colorPalette(p5, x, y, z, noiseScale) {
	var r = 255*p5.noise(x * noiseScale, y * noiseScale, z+20);
  	var g = 255*p5.noise(x * noiseScale, y * noiseScale, z+30);
  	var b= 255*p5.noise(x * noiseScale, y * noiseScale, z+40);

  	var red = Math.floor(p5.map(r, 60, 190, 50, 150));
  	var green = Math.floor(p5.map(g, 60, 190, 100, 200));
  	var blue = Math.floor(p5.map(b, 60, 190, 50, 130));


  	return [red, green, blue]
}

function flowerColor(p5, x, y, z, noiseScale){
	var r = 255*p5.noise(x * noiseScale, y * noiseScale, z+100);
  	var g = 255*p5.noise(x * noiseScale, y * noiseScale, z+101);
  	var b= 255*p5.noise(x * noiseScale, y * noiseScale, z+102);

  	var red = Math.floor(p5.map(r, 60, 190, 210, 255));
  	var green = Math.floor(p5.map(g, 60, 190, 180, 255));
  	var blue = Math.floor(p5.map(b, 60, 190, 200, 255));

  	
	return[red, green, blue];
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
  
    		if (zoom > 1){
  			Water(p5, x1, x2, y1, y2, z, zoom, c_pball - c_p00, x, y);
  			}

    	
   		}	
   	}

   	  	for(var x=min_x; x<max_x; x+=grid_size/multiplier) {
    	for(var y=min_y; y<max_y; y+=grid_size/multiplier) {   		
  
    
 			LilypadSet(p5, x1, x2, y1, y2, z, zoom, c_pball - c_p00, x, y);
    	
   		}	
   	}
   	// draw debug grid
   	// p5.stroke(255, 0, 0);
   	// p5.noFill();
   	// p5.rect(0, 0, 255, 255);
}

//ripple object
function Water(p5, x1, x2, y1, y2, z, zoom, c_ball_radius, x, y){
	//draw background

	this.ripples = function(){


		p5.fill(0, 0, 0, 30);

		var ripple_max = 9;
		var rippleCount = getRippleCount(p5, x, y, z, 0.4, ripple_max);
		var ripple_inc = 0.1;
		var ripple_rad = 1;

		p5.strokeWeight(ripple_width);
		p5.stroke(0, 0, 0, ripple_weight);
		//p5.ellipse(0, 0, this.cur_ball_radius*ripple_min*this.size);


		for (var i=0; i<rippleCount; i+=1){
			var ripple_width =cur_ball_radius/3;
			var ripple_weight=0;
			if(zoom>3){
				ripple_weight=10;
			}
			ripple_inc+=0.1;
			ripple_rad+=ripple_inc;

			for(var j=0; j<6; j+=1){
				if(zoom < 4){
					p5.noFill();
				}else{
					p5.fill(0, 0, 0, 1);
				}
				p5.stroke(255, 255, 255, ripple_weight);
				p5.strokeWeight(ripple_width);

				p5.ellipse(0, 0, this.cur_ball_radius*ripple_rad*this.size);

				ripple_width-=cur_ball_radius/10;
				ripple_weight+=5;
			}
		}
	};


	var shift_point = getOffsetPoint(p5, x, y, z, 0.4);

	this.show = showCheck(p5, x, y, z, 0.4);
	this.x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
  	this.y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
  	this.cur_ball_radius = c_ball_radius;
  	this.size = getSize(p5, x, y, z, 0.1);


	p5.push();
	p5.translate(this.x_pos, this.y_pos);
	if (this.show == 3 || this.show_leaf == 0){
		this.ripples();
	}
	p5.pop();

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
			this.flowerZoom = true;
		} else{
			var inset = false;
			this.flowerZoom = false;
		}

		if (zoom > 3){
			var leafDetail = true;
			this.flowerDetail_1 = true;
		}else{
			var leafDetail = false;
			this.flowerDetail_1 = false;
		}
		if (zoom > 3){
	
			this.flowerDetail_2 = true;
		}else{
		
			this.flowerDetail_2 = false;
		}

		p5.beginShape();

		for (var a=0; a<=p5.TWO_PI; a+=p5.TWO_PI/resolution) {
			
			var rVal = p5.noise(x, y, 100+a*bumpiNess);
			var nVal = this.size*p5.map(rVal, 0.0, 1.0, 1.4, 1.0); 
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
				if(l%4==0){
				
	  				p5.line(20*this.linePos, 1, leafLines[l].outerX, leafLines[l].outerY);
	  			}
	  		}
		}

		p5.pop();
	};


	this.drawFlower = function(){
		this.generatePetalShape = function(ang){
			//drawPetal
			//p5.ellipse(0, 0, this.cur_ball_radius);
			p5.push();
			p5.rotate(ang);
			p5.beginShape();
			p5.curveVertex(this.cur_ball_radius/4, this.cur_ball_radius/16);
			p5.curveVertex(0, 0);
			p5.curveVertex(this.cur_ball_radius/4, this.cur_ball_radius/-16);
			p5.curveVertex(this.cur_ball_radius/2, 0);
			p5.curveVertex(this.cur_ball_radius/4, this.cur_ball_radius/16);
			p5.curveVertex(0, 0);
			p5.curveVertex(this.cur_ball_radius/4, this.cur_ball_radius/-16);
			p5.endShape();
			p5.pop();
		};

		this.generateFlowerCentre= function(){
			if(this.flowerDetail_1){
				p5.fill(235, 185, 0);
				
			
				p5.ellipse(0, 0, this.cur_ball_radius/10);

				var numPoints = 25;
				var angle = p5.TWO_PI/numPoints;
				p5.fill(235, 205, 0, 100);
				radius = this.cur_ball_radius/15;
				for (var i = 0; i < numPoints; i++){
					p5.push();
					p5.translate(radius*p5.sin(angle*i), radius*p5.cos(angle*i));
					p5.rotate(360/numPoints*i);
					p5.ellipse(0, 0, this.cur_ball_radius/10, this.cur_ball_radius/20);
					// p5.scale(0.6);
					// p5.ellipse(0, 0, this.cur_ball_radius/10, this.cur_ball_radius/20);
					p5.pop();
				}
				var radius = this.cur_ball_radius/10;
				p5.fill(255, 235, 0, 100);
				for (var i = 0; i < numPoints; i++){
					p5.push();
					p5.translate(radius*p5.sin(angle*i), radius*p5.cos(angle*i));
					p5.rotate(360/numPoints*i);
					p5.ellipse(0, 0, this.cur_ball_radius/10, this.cur_ball_radius/15);
					// p5.scale(0.6);
					// p5.ellipse(0, 0, this.cur_ball_radius/10, this.cur_ball_radius/15);
					p5.pop();
				}
			}else{
				p5.fill(235, 185, 0);
				p5.ellipse(0, 0, this.cur_ball_radius/3.5);
				p5.fill(255, 205, 0, 100);
				p5.ellipse(0, 0, this.cur_ball_radius/6);
			}

		};

		p5.fill(this.flower_color[0], this.flower_color[1], this.flower_color[2]);
		if(!this.flowerDetail_1){
			p5.strokeWeight(1);
			p5.stroke(0, 0, 0, 15);
		}else{
			p5.strokeWeight(1);
			p5.stroke(0, 0, 0, 30);
		}

		if(this.flowerZoom == true){
			var angl = 0;
			for (var p=0; p<22; p++){
				angl+=18;
				this.generatePetalShape(angl);
			}
			
			this.generateFlowerCentre();
		} else{
			p5.ellipse(0, 0, this.cur_ball_radius);
			p5.fill(this.flower_color[0]+20, this.flower_color[1]+20, this.flower_color[2]+20, 100);
			p5.ellipse(0, 0, this.cur_ball_radius/1.3);
			p5.fill(this.flower_color[0]+40, this.flower_color[1]+40, this.flower_color[2]+40, 100);
			p5.ellipse(0, 0, this.cur_ball_radius/2);
		} 
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

  	this.flowerZoom = false;
  	this.flower_color = flowerColor(p5, x, y, z, 0.4);
  

	p5.noStroke();


	p5.push();
	p5.translate(this.x_pos, this.y_pos);
	if (this.show_leaf == 3 || this.show_leaf == 0){
		this.drawLeaf();
		if(this.show_flower == true){
			this.drawFlower();
		}
	}
	p5.pop();

}


