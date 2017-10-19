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

function showCheck(p5, x, y, z, noiseScale) { //decides whether to make lilypad visible or not
  var showLeaf = Math.floor(5*p5.noise(x * noiseScale, y * noiseScale, z+1));
 
  return (showLeaf)
}

function getLinePos(p5, x, y, z, noiseScale) { //gets offset for leaf veins on lilypad
  var line_pos = p5.noise(x * noiseScale, y * noiseScale, z+6);
 
  return (line_pos)
}

function showFlower(p5, x, y, z, noiseScale) { //decides whether or not a lilypad has a flower attached
  var probability = Math.floor(10*p5.noise(x * noiseScale, y * noiseScale, z+4));
 	var flower = false;
 	if (probability%2==0){
 		flower = true;
 	}
  return (flower)
}

function getRotation(p5, x, y, z, noiseScale) { //generates a rotation value (degrees)
  var rot = p5.noise(x * noiseScale, y * noiseScale, z+2);

 var mapRot =	p5.map(rot, 0, 0.8, 0, 360);

  return (mapRot)
}

function getSize(p5, x, y, z, noiseScale) { //generates size variables
  var s = p5.noise(x * noiseScale, y * noiseScale, z+3);
  
  var mapS = p5.map(s, 0.1, 0.75, 0.6, 1.3);
  return (mapS)
}

function getFlowerPosition(p5, x, y, z, noiseScale, rad) { //generated a 'random' offset for the flower position
  var noiseX = p5.noise(x * noiseScale, y * noiseScale, z+55);
  var noiseY = p5.noise(x * noiseScale, y * noiseScale, z+50);
  var offsetX = p5.map(noiseX, 0, 1, -rad, rad);
  var offsetY = p5.map(noiseY, 0, 1, -rad, rad);
  return [offsetX, offsetY]
}

function getRippleCount(p5, x, y, z, noiseScale, maxRipples) { //decides how many ripples will be concentric
  var n = p5.noise(x * noiseScale, y * noiseScale, z+8);
  
  numRipples = Math.floor(p5.map(n, 0.1, 0.75, 4, maxRipples));
  return (numRipples)
}

function getNoiseValue (p5, x, y, z, noiseScale) { //gets noise value for water texture
  var noiseVal = p5.noise(x * noiseScale, y * noiseScale, z);
  return (noiseVal);
}

function colorPalette(p5, x, y, z, noiseScale) { //generates color palette for lily pads
	var r = 255*p5.noise(x * noiseScale, y * noiseScale, z+20);
  	var g = 255*p5.noise(x * noiseScale, y * noiseScale, z+30);
  	var b= 255*p5.noise(x * noiseScale, y * noiseScale, z+40);

  	var red = Math.floor(p5.map(r, 60, 190, 50, 150));
  	var green = Math.floor(p5.map(g, 60, 190, 100, 200));
  	var blue = Math.floor(p5.map(b, 60, 190, 50, 130));


  	return [red, green, blue]
}

function getKoiVisibility(p5, x, y, z, noiseScale){ //decides whether or not to show a koi
	var showKoi = p5.noise(x * noiseScale, y * noiseScale, z+8);

	var showK = Math.floor(p5.map(showKoi, 0.1, 0.75, 0, 21));

	if(showK % 10==0){
		var show = true;

	}else{
		var show = false;
	}
	return(show)
}

function flowerColor(p5, x, y, z, noiseScale){ //generates colors for the flowers
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

	/* the random number seed for the tour */
	var tourSeed = 200;
	/* triplets of locations: zoom, x, y */
	var tourPath = [
	  [0, 516.000000000000, 835.500000000000],
	  [2, 516.000000000000, 835.500000000000],
	  [4, 516.000000000000, 835.500000000000],
	  [5, 516.000000000000, 835.500000000000],
	  [6, 516.000000000000, 835.500000000000]
	]

	var max_shift = max_thickness + max_movement;
  	var min_x = snap_to_grid(x1 - max_shift, grid_size);
  	var max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  	var min_y = snap_to_grid(y1 - max_shift, grid_size);
  	var max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);

  	var multiplier = 7; //increase for a higher population density
  	var size = 20; //decrease for smaller element sizes

  	var c_p00 = p5.map(0, x1, x2, 0, size);
  	var c_pball = p5.map(ball_radius, x1, x2, 0, size);

  	
  	p5.background(200, 225, 255);



  for(var x=min_x; x<max_x; x+=grid_size/multiplier) {
    	for(var y=min_y; y<max_y; y+=grid_size/multiplier) {   		
  
    		if (zoom > 1){
  				Water(p5, x1, x2, y1, y2, z, zoom, c_pball - c_p00, x, y); //draw under the water's surface
  			}

    	
   		}	
   	}

  	for(var x=min_x; x<max_x; x+=grid_size/multiplier) {
    	for(var y=min_y; y<max_y; y+=grid_size/multiplier) {   		
  
    		if (zoom > 1){
  				Ripple(p5, x1, x2, y1, y2, z, zoom, c_pball - c_p00, x, y); //draw on the water's surface
  			}

    	
   		}	
   	}


   	for(var x=min_x; x<max_x; x+=grid_size/multiplier) {
    	for(var y=min_y; y<max_y; y+=grid_size/multiplier) {   		
  
    
 			LilypadSet(p5, x1, x2, y1, y2, z, zoom, c_pball - c_p00, x, y); //draw above the water's surface
    	
   		}	
   	}
}


function Water(p5, x1, x2, y1, y2, z, zoom, c_ball_radius, x, y){
	var shift_point = getOffsetPoint(p5, x, y, z, 0.4);
	this.cur_ball_radius = c_ball_radius;
	this.x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
  	this.y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
  	this.showKoi = getKoiVisibility(p5, x, y, z, 0.4);
  	this.koiRotate = getRotation(p5, x, y, z+60, 0.4);
  	


	this.drawKoiShape = function(opacity, size){	//create single koi silhouette
			p5.beginShape();
			p5.curveVertex(this.cur_ball_radius*0.4*size, this.cur_ball_radius*0.1*size);
			p5.curveVertex(0, this.cur_ball_radius*0.25*size);
			p5.curveVertex(this.cur_ball_radius*0.4*size, -this.cur_ball_radius*0.1*size);
			p5.curveVertex(this.cur_ball_radius*0.65*size, -this.cur_ball_radius*0.2*size);
			p5.curveVertex(this.cur_ball_radius*0.95*size, -this.cur_ball_radius*0.15*size);
			p5.curveVertex(this.cur_ball_radius*1.0*size, 0);
			p5.curveVertex(this.cur_ball_radius*0.4*size, this.cur_ball_radius*0.1*size);
			p5.curveVertex(0, this.cur_ball_radius*0.25*size);
			p5.curveVertex(this.cur_ball_radius*0.4*size, -this.cur_ball_radius*0.1*size);
			p5.endShape();
	}

		this.drawKoiTail = function(opacity, size){	//create single koi silhouette
			
			//draw tail
			p5.beginShape();
				p5.curveVertex(this.cur_ball_radius*0.1*size, this.cur_ball_radius*0.7*size);
				p5.curveVertex(this.cur_ball_radius*0*size, this.cur_ball_radius*0.4*size);
				p5.curveVertex(this.cur_ball_radius*0.05*size, this.cur_ball_radius*0.25*size);
				p5.curveVertex(this.cur_ball_radius*-0.02*size, this.cur_ball_radius*0.4*size);
				p5.curveVertex(this.cur_ball_radius*0.02*size, this.cur_ball_radius*0.55*size);
				p5.curveVertex(this.cur_ball_radius*0.1*size, this.cur_ball_radius*0.7*size);
				p5.curveVertex(this.cur_ball_radius*0*size, this.cur_ball_radius*0.4*size);
				p5.curveVertex(this.cur_ball_radius*0.05*size, this.cur_ball_radius*0.25*size);
			p5.endShape();


			p5.beginShape();
				p5.curveVertex(this.cur_ball_radius*-0.01*size, this.cur_ball_radius*0.7*size);
				p5.curveVertex(this.cur_ball_radius*-0.04*size, this.cur_ball_radius*0.4*size);
				p5.curveVertex(this.cur_ball_radius*0.05*size, this.cur_ball_radius*0.25*size);
				p5.curveVertex(this.cur_ball_radius*-0.01*size, this.cur_ball_radius*0.4*size);
				p5.curveVertex(this.cur_ball_radius*0.04*size, this.cur_ball_radius*0.65*size);
				p5.curveVertex(this.cur_ball_radius*0.01*size, this.cur_ball_radius*0.85*size);
				p5.curveVertex(this.cur_ball_radius*-0.04*size, this.cur_ball_radius*0.4*size);
				p5.curveVertex(this.cur_ball_radius*0.01*size, this.cur_ball_radius*0.55*size);
			p5.endShape();

			p5.beginShape();
				p5.curveVertex(this.cur_ball_radius*-0.05*size, this.cur_ball_radius*0.4*size);
				p5.curveVertex(this.cur_ball_radius*0.05*size, this.cur_ball_radius*0.25*size);
				p5.curveVertex(this.cur_ball_radius*-0.01*size, this.cur_ball_radius*0.4*size);
				p5.curveVertex(this.cur_ball_radius*0.04*size, this.cur_ball_radius*0.65*size);
				p5.curveVertex(this.cur_ball_radius*0.03*size, this.cur_ball_radius*0.75*size);
				p5.curveVertex(this.cur_ball_radius*0.025*size, this.cur_ball_radius*0.7*size);
				p5.curveVertex(this.cur_ball_radius*-0.02*size, this.cur_ball_radius*0.6*size);
				p5.curveVertex(this.cur_ball_radius*-0.05*size, this.cur_ball_radius*0.7*size);
				p5.curveVertex(this.cur_ball_radius*-0.02*size, this.cur_ball_radius*0.9*size);
				p5.curveVertex(this.cur_ball_radius*-0.1*size, this.cur_ball_radius*0.6*size);
				p5.curveVertex(this.cur_ball_radius*-0.05*size, this.cur_ball_radius*0.4*size);
				p5.curveVertex(this.cur_ball_radius*0.05*size, this.cur_ball_radius*0.25*size);
				p5.curveVertex(this.cur_ball_radius*-0.01*size, this.cur_ball_radius*0.4*size);
			p5.endShape();

			p5.beginShape();
				p5.curveVertex(this.cur_ball_radius*-0.05*size, this.cur_ball_radius*0.4*size);
				p5.curveVertex(this.cur_ball_radius*0.05*size, this.cur_ball_radius*0.25*size);
				p5.curveVertex(this.cur_ball_radius*-0.05*size, this.cur_ball_radius*0.7*size);
				p5.curveVertex(this.cur_ball_radius*-0.02*size, this.cur_ball_radius*0.9*size);
				p5.curveVertex(this.cur_ball_radius*-0.12*size, this.cur_ball_radius*0.8*size);
				p5.curveVertex(this.cur_ball_radius*-0.1*size, this.cur_ball_radius*0.6*size);
				p5.curveVertex(this.cur_ball_radius*-0.05*size, this.cur_ball_radius*0.4*size);
				p5.curveVertex(this.cur_ball_radius*0.05*size, this.cur_ball_radius*0.25*size);
				p5.curveVertex(this.cur_ball_radius*-0.05*size, this.cur_ball_radius*0.7*size);
			p5.endShape();

			
			p5.push();

			//draw fins
			p5.fill(10, 5, 10, 5);
			p5.translate(-this.cur_ball_radius*0.16*size, this.cur_ball_radius*0.12*size);
			p5.beginShape();
				p5.curveVertex(this.cur_ball_radius*0.5*size, this.cur_ball_radius*-0.19*size);
				p5.curveVertex(this.cur_ball_radius*0.3*size, this.cur_ball_radius*-0.18*size);
				p5.curveVertex(this.cur_ball_radius*0.5*size, this.cur_ball_radius*-0.25*size);
				p5.curveVertex(this.cur_ball_radius*0.65*size, this.cur_ball_radius*-0.2*size);
				p5.curveVertex(this.cur_ball_radius*0.5*size, this.cur_ball_radius*-0.19*size);
				p5.curveVertex(this.cur_ball_radius*0.3*size, this.cur_ball_radius*-0.18*size);
				p5.curveVertex(this.cur_ball_radius*0.5*size, this.cur_ball_radius*-0.25*size);
			p5.endShape();
			

			p5.rotate(-0.5);
			p5.translate(-this.cur_ball_radius*0.1*size, this.cur_ball_radius*0.41*size);
			p5.beginShape();
				p5.curveVertex(this.cur_ball_radius*0.5*size, this.cur_ball_radius*0.28*size);
				p5.curveVertex(this.cur_ball_radius*0.74*size, this.cur_ball_radius*0.1*size);
				p5.curveVertex(this.cur_ball_radius*0.85*size, this.cur_ball_radius*0.02*size);
				p5.curveVertex(this.cur_ball_radius*0.8*size, this.cur_ball_radius*0.0*size);
				p5.curveVertex(this.cur_ball_radius*0.5*size, this.cur_ball_radius*0.1*size);
				p5.curveVertex(this.cur_ball_radius*0.74*size, this.cur_ball_radius*0.1*size);
				p5.curveVertex(this.cur_ball_radius*0.85*size, this.cur_ball_radius*0.02*size);
			p5.endShape();

			p5.beginShape();
				p5.curveVertex(this.cur_ball_radius*0.5*size, this.cur_ball_radius*0.28*size);
				p5.curveVertex(this.cur_ball_radius*0.74*size, this.cur_ball_radius*0.1*size);
				p5.curveVertex(this.cur_ball_radius*0.85*size, this.cur_ball_radius*0.02*size);
				p5.curveVertex(this.cur_ball_radius*0.8*size, this.cur_ball_radius*0.0*size);
				p5.curveVertex(this.cur_ball_radius*0.5*size, this.cur_ball_radius*0.1*size);
				p5.curveVertex(this.cur_ball_radius*0.74*size, this.cur_ball_radius*0.1*size);
				p5.curveVertex(this.cur_ball_radius*0.85*size, this.cur_ball_radius*0.02*size);
			p5.endShape();

			p5.pop();
	}

	this.drawKoi = function(){ //create blurred fish

	
		var koiOpacity = 5;
		var koiDetail = 0;
		var koiColor = [150, 175, 205];
		var koiInc = 0.05
		if (zoom > 3){

			var koiSize = 1.8;
			
			if (zoom>5){
				koiOpacity = 10;
				koiDetail = 5;
				koiColor = [0, 0, 0];
				koiInc = 0.025
			}
			for (var i=koiDetail; i<20; i++){ //adds blur to edges of the fish by making a bunch of koi shapes with low opacity
				p5.push();
			
				p5.translate(koiSize, koiSize*-1.2);
				p5.noStroke();
				p5.fill(koiColor[0], koiColor[1],koiColor[2], koiOpacity);
				this.drawKoiShape(koiOpacity, koiSize);
				if (zoom > 5){
					p5.noStroke();
					p5.fill(koiColor[0], koiColor[1],koiColor[2], koiOpacity/4);
					p5.translate(koiSize*6, -koiSize*12);
					this.drawKoiTail(koiOpacity, koiSize);
				}
				p5.pop();
				koiSize-=koiInc;
			}
					p5.noStroke();
					p5.fill(koiColor[0], koiColor[1],koiColor[2], koiOpacity*4);

		}
	}


	//draw the koi
	p5.push();
	p5.translate(this.x_pos, this.y_pos);
	p5.rotate(this.koiRotate);
	if(this.showKoi){
		this.drawKoi();

	}
	
	p5.pop();

}

function Ripple(p5, x1, x2, y1, y2, z, zoom, c_ball_radius, x, y){

	this.ripples = function(){ //generate ripples


		p5.fill(0, 0, 0, 10);

		var ripple_max = 9;
		var rippleCount = getRippleCount(p5, x, y, z, 0.4, ripple_max);
		var ripple_inc = 0;
		var ripple_rad = 0.5;


		p5.strokeWeight(ripple_width);
		p5.stroke(0, 0, 0, ripple_weight);
		//p5.ellipse(0, 0, this.cur_ball_radius*ripple_min*this.size);


		for (var i=0; i<rippleCount; i+=1){ //create each ring
			var ripple_width =cur_ball_radius/3;
			var ripple_weight=0;
			if(zoom>3){
				ripple_weight=10;
			}
			ripple_rad+=ripple_inc;
			ripple_inc+=0.25;

			for(var j=0; j<6; j+=1){ //create each ripple within each ring (detail)
				if(zoom < 4){
					p5.noFill();
				}else{
					p5.fill(0, 0, 0, 1);
				}
				p5.stroke(235, 245, 250, ripple_weight);
				p5.strokeWeight(ripple_width);

				p5.ellipse(0, 0, this.cur_ball_radius*ripple_rad*this.size);

				
				if(zoom>3){
					ripple_width-=cur_ball_radius/15;
					ripple_weight+=10;
				} else{
					ripple_width-=cur_ball_radius/10;
					ripple_weight+=10;
				}
				
			}
		}
	};


	var shift_point = getOffsetPoint(p5, x, y, z, 0.4);

	this.show = showCheck(p5, x, y, z, 0.4);
	this.x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
  	this.y_pos = p5.map(shift_point[1], y1, y2, 0, 256);
  	this.cur_ball_radius = c_ball_radius;
  	this.size = getSize(p5, x, y, z, 0.1);

  	//draw the ripples
	p5.push();
	p5.translate(this.x_pos, this.y_pos);
	if (this.show == 3 || this.show == 0){ //only draw if there's a lilypad on top
		this.ripples();
	}
	p5.pop();

}



function LilypadSet(p5, x1, x2, y1, y2, z, zoom, c_ball_radius, x, y){

  	//create the lilypad
  	this.drawLeaf = function(){
	p5.push();	
	p5.rotate(this.rotation);
	p5.strokeWeight(0.5);

	var bumpiNoise = p5.noise(x, y, 100);
	var leafLines = [];

		this.drawLilyPadLeaf = function(expand){

			p5.beginShape();

			for (var a=0; a<=p5.TWO_PI; a+=p5.TWO_PI/resolution) {
				
				var rVal = p5.noise(x, y, 100+a*bumpiNess);
				var nVal = this.size*expand*p5.map(rVal, 0.0, 1.0, 1.4, 1.0); 
				var Vertx = p5.cos(a)*this.cur_ball_radius *nVal;
				var Verty = p5.sin(a)*this.cur_ball_radius *nVal;


			if (inset == true && expand ==1){
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
		}
		if (zoom > 1){
			var bumpiNess = p5.map(bumpiNoise, 0, 1, 0.1, 1.2); //add noise to lilypad edges
			var inset = true; //add lilypad 'pacman' shape
			this.flowerZoom = true; 
		} else{
			var inset = false;
			this.flowerZoom = false;
		}
		if (zoom > 3){
			//draw shadow
			var leafDetail = false;
			p5.fill(0, 0, 0, 10);
			p5.noStroke();
			var shadowSize = 1;
			for(var i=0; i<10; i++){
				shadowSize+=0.01;
				this.drawLilyPadLeaf(shadowSize);
			}
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

		//draw leaf
		p5.fill(this.leafColor[0], this.leafColor[1], this.leafColor[2]);
		p5.stroke(this.leafColor[0]-30, this.leafColor[1]-30, this.leafColor[2]-30);
		this.drawLilyPadLeaf(1);

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
  	this.flowerOffset = getFlowerPosition(p5, x, y, z+10, 0.4, this.cur_ball_radius*2.5);

  

	p5.noStroke();


	p5.push();
	p5.translate(this.x_pos, this.y_pos);
	if (this.show_leaf == 3 || this.show_leaf == 0){
		this.drawLeaf();
		if(this.show_flower == true){
			p5.translate(this.flowerOffset[0], this.flowerOffset[1]);
			this.drawFlower();
		}
	}
	p5.pop();

}


