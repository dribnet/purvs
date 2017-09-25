function Landscape(){

/*
A setup function that means a single landscape object 
can be created before all necessary variables are available
and that a Landscape object can be reset as needed.
*/
this.setupLand = function(values){
this.w = w;
this.h = h;
this.vals = values;
this.border = 30;
this.currentPallet = null;
/*pallet contents, 
black, skyOne, skyTwo, skyThree, skyFour (1&2, 3&4) 
hillsLinefive, hillsShadeSix, hillsLineSeven,hillsShadeeight (pairs),
backgroundNine, backgroundTen, groundEleven, groundTwelve, TrunkOutlineThirteen, TrunkColorFourteen,
TreeOutlineFifteen, treeShadeSixteen, treeOutlineSeventeen, treeShade18, treeOutline19, treeShade20,
towerOutline21, towerShade22, towerOutline23, towerOutline24
*/
this.buildPalettes();

}

this.buildPalettes = function(){
	//this.p = [[70,69,67][153,186,231],[206,228,242],[154,129,100],[199,190,161],[65,76,60],[129,151,112],[214,214,220],[218,210,164],[134,112,54],[210,194,145],[140,122,60],[177,155,106],[74,85,68],[109,127,101],[75,97,95],[112,132,120],[151,163,123],[194,202,189],[],[,,,],[,,,],[,,,],];
	//this.p = [[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],];
	this.black = [20,2,2];
	this.sky1 = [202,206,222];
	this.sky2 = [156,14,5];
	this.sky3=[134,97,118];
	this.sky4 = [196,33,36];
	this.hills1 = [19,1,1];
	this.hills2 = [73,6,8];
	this.hills3 = [5,28,29];
	this.hills4 = [110,13,15];
	this.background1 = [0,0,0];
	this.background2 = [0,0,0];
	this.ground1 = [50,50,50];
	this.ground2 = [50,50,50];
	this.trunk1=[55,7,10];
	this.trunk2 = [55,7,10];
	this.tree1 = [40,59,61];
	this.tree2 = [40,59,61];
	this.tree3 = [38,44,48];
	this.tree4 = [38,44,48];
	this.tree5 = [8,20,21];
	this.tree6 = [8,20,21];
	this.tower1 = [202,97,130];
	this.tower2 = [166,30,20];
	this.tower3 = [77,73,78];
	this.tower4 = [0,15,14];
	this.rock1 = [109,126,144];
	this.rock2 = [47,52,60];
	this.hills5 = [19,1,1];
	this.hills6 = [73,6,8];
	this.hills7 = [5,28,29];
	this.hills8 = [110,13,15];


this.p = [this.black,this.sky1,this.sky2,this.sky3,this.sky4,this.hills1,this.hills2,this.hills3,this.hills4,this.background1,this.background2,this.ground1,this.ground2,this.trunk1,this.trunk2,this.tree1,this.tree2,this.tree3,this.tree4,this.tree5,this.tree6,this.tower1,this.tower2,this.tower3,this.tower4,this.rock1,this.rock2,this.hills5,this.hills6,this.hills7,this.hills8];


	this.black = [64,70,68];
	this.sky1 = [143,177,223];
	this.sky2 = [181,205,233];
	this.sky3=[225,171,182];
	this.sky4 = [157,190,231];
	this.hills1 = [96,79,63];
	this.hills2 = [189,155,98];
	this.hills3 = [170,145,115];
	this.hills4 = [224,219,181];
	this.background1 = [249,254,255];
	this.background2 = [205,207,186];
	this.ground1 = [189,185,160];
	this.ground2 = [202,211,168];
	this.trunk1=[123,101,78];
	this.trunk2 = [160,127,96];
	this.tree1 = [74,85,69];
	this.tree2 = [103,118,95];
	this.tree3 = [135,152,134];
	this.tree4 = [185,196,160];
	this.tree5 = [135,157,121];
	this.tree6 = [167,180,154];
	this.tower1 = [97,114,132];
	this.tower2 = [168,182,193];
	this.tower3 = [149,136,101];
	this.tower4 = [225,204,147];
	this.rock1 = [109,126,144];
	this.rock2 = [163,171,182];
	this.hills5 = [63,70,54];
	this.hills6 = [114,130,104];
	this.hills7 = [104,124,99];
	this.hills8 = [172,190,164];

if(focusedRandom(0,100)>37){
this.p = [this.black,this.sky1,this.sky2,this.sky3,this.sky4,this.hills1,this.hills2,this.hills3,this.hills4,this.background1,this.background2,this.ground1,this.ground2,this.trunk1,this.trunk2,this.tree1,this.tree2,this.tree3,this.tree4,this.tree5,this.tree6,this.tower1,this.tower2,this.tower3,this.tower4,this.rock1,this.rock2,this.hills5,this.hills6,this.hills7,this.hills8];
}
	

}
/*extracts all the colors being used from the selected pallet
where there is an outline colour it is always first and always an odd number*/
this.setupColors = function(){
	this.black = this.p[0];
	if(focusedRandom(0,100)<50){
		this.sky1 = this.p[1];
		this.sky2 = this.p[2];
	}
	else{
		this.sky1=this.p[3];
		this.sky2 = this.p[4];
	}
	//hills 1 dark stroke color
	//hills 2 dark fill color
	//hills 3 light stroke color
	//hills 4 light fill color
	if(focusedRandom(0,100)<50){
		this.hills1 = this.p[5];
		this.hills2 = this.p[6];
		this.hills3 = this.p[7];
		this.hills4 = this.p[8];
	}
	else{
		this.hills1 = this.p[27];
		this.hills2 = this.p[28];
		this.hills3 = this.p[29];
		this.hills4 = this.p[30];	
	}
	
	this.background1 = this.p[9];
	this.background2 = this.p[10];
	this.ground1 = this.p[11];
	this.ground2 = this.p[12];
	this.trunk1 = this.p[13];
	this.trunk2 = this.p[14];
	this.tree1 = this.p[15];
	this.tree2 = this.p[16];
	this.tree3 = this.p[17];
	this.tree4 = this.p[18];
	this.tree5 = this.p[19];
	this.tree6 = this.p[20];
	this.tower1 = this.p[21];
	this.tower2 = this.p[22];
	this.tower3 = this.p[23];
	this.tower4 = this.p[24];
	this.rock1 = this.p[25];
	this.rock2 = this.p[26];




}

this.drawLand = function(){
	this.setupColors();
	if(focusedRandom(0,100<50)){
	background(this.background1[0],this.background1[1],this.background1[2]);
	}
	else{
		background(this.background2[0],this.background2[1],this.background2[2]);
	}
	push();
	noStroke();
	fill(this.ground1[0],this.ground1[1],this.ground1[2],focusedRandom(50,150));
	
	ellipse(this.w/2-focusedRandom(this.w/4,-this.w/4),this.h/3*2,w/1.8,h/3);
	fill(this.ground1[0],this.ground1[1],this.ground1[2],focusedRandom(100,200));
	ellipse(this.w/2-focusedRandom(this.w/4,-this.w/4),this.h/3*2,w/1.8,h/2);
	pop();
	this.sky();
	strokeWeight(5);
	this.midground();
	this.foreground();
}

this.foreground = function(){
	this.rock(this.w/2, this.h/3*2, 150,60);
	if(focusedRandom(0,100>35)){
	this.tower(this.w/6,this.h/8, this.w/22, this.h/2);
	//this.tower(this.w/1.4,this.h/8, this.w/6, this.h/1.4);
	
	this.tree(this.w/2,this.h/10,w/2,h*0.75);}
	else{
		this.tower(this.w/2,this.h/10,w/focusedRandom(6,12),h*0.75);;
		this.tree(this.w/6,this.h/8, this.w/5, this.h/2);
	}
	this.plant(this.w/4,this.h/3,100,200);
	this.plant(this.w/8,this.h/1.2,100,200);
this.plant(this.w/16,this.h/1.7,100,200);
	this.plant(this.w/10,this.h/1.4,100,200);

}

this.tree = function(x,y,width,height){
	rectMode(CORNER);
	this.offset = 0;
	//rect(x,y,width,height);
	stroke(this.trunk1[0],this.trunk1[1],this.trunk1[2]);
	fill(this.trunk2[0],this.trunk2[1],this.trunk2[2]);
	//this.angleTrunk(x,y,width,height);

	/*bottom righthand half of the tree, has to be behind, so gets drawn first*/
	beginShape();
	//top right edge off the trunk, hidden behind rightmost branch
	curveVertex(x+width/2+width/6, y+height/3.4);
	vertex(x+width/2+width/7, y+height/2.7);
	vertex(x+width/2+width/6, y+height-height/8);
	//reset the offset positive

	//upper control point
	vertex(x+width/2+width/4, y+height-height/10-this.offset);
	
	//righthand root tip
	vertex(x+width/2+width/2.5, y+height);
	//lower controlPoint
	vertex(x+width/2+width/4, y+height-height/40-this.offset);
	//midpoint between roots
	vertex(x+width/2+width/9, y+height-height/13);
	vertex(x+width/2, y+height-height/10);
	vertex(x+width/1.8, y+height/2);
	vertex(x+width/1.8, y+height/1.8);
	endShape();

	/*main treetrunk including all branches*/
	beginShape();
	//handle centre bottom of tree
	curveVertex(x+width/2+width/9, y+height-height/13);
	//lefthand dip between roots
	vertex(x+width/2+width/20, y+height-height/14);

	//reset offset equation one
	//reset offset
	//lower right control point
	vertex(x+width/2.2, y+height-height/18-this.offset);
	//lower left control point
	vertex(x+width/2.8, y+height-height/18-this.offset);
	//lefthand root tip
	vertex(x+width/4,y+height-height/20);
	//upper left control point
	vertex(x+width/2.8, y+height-height/10-this.offset);
	//reset offset equation one again
	//upper right control point
	vertex(x+width/2.2, y+height-height/10-this.offset);

	//bottom end of trunk
	vertex(x+width/2, y+height-height/5);
	
	//top end of main trunk
	vertex(x+width/2,y+height/2);
	vertex(x+width/2-width/22, y+height/2.6)
	//reset offset
	//lower control point
	vertex(x+width/4,  y+height/3-this.offset);
	//tip of left branch
	vertex(x,  y+height/6);
	//upper control point
	vertex(x+width/4,  y+height/4-this.offset);
	//back to main trunk
	vertex(x+width/2+width/15, y+height/3.4);
	//reset offset
	//left control point
	vertex(x+width/2+width/9-this.offset, y+height/5);
	//middle branch tip
	vertex(x+width/2+width/5, y+height/10);
	//right control point
	vertex(x+width/2+width/6-this.offset, y+height/5);
	//middle right dip between branches
	vertex(x+width/2+width/7, y+height/2.7);
	//reset offset
	//upper control point
	vertex( x+width/2+width/5, y+height/2.8-this.offset);
	//righthand branch tip
	vertex( x+width/2+width/3, y+height/3.5);
	//lower control point
	vertex( x+width/2+width/5, y+height/2.4-this.offset);
	//righthandbranch meets trunk and forms knot
	vertex(x+width/2+width/10, y+height/2.2);
	//visible mid trunk line endpoint
	vertex(x+width/2+width/10.5, y+height/1.7);
	endShape();

}

this.angleTrunk = function(x,y,width,height){
	/*bottom righthand half of the tree, has to be behind, so gets drawn first*/
	beginShape();
	//top right edge off the trunk, hidden behind rightmost branch
	curveVertex(x+width/2+width/6, y+height/3.4);
	vertex(x+width/2+width/7, y+height/2.7);
	vertex(x+width/2+width/6, y+height-height/8);
	
	//righthand root tip
	vertex(x+width/2+width/2.5, y+height);
	//midpoint between roots
	vertex(x+width/2+width/9, y+height-height/13);
	vertex(x+width/2, y+height-height/10);
	vertex(x+width/2, y+height/2);
	vertex(x+width/2, y+height/1.8);
	endShape();

	/*main treetrunk including all branches*/
	beginShape();
	//handle centre bottom of tree
	vertex(x+width/2+width/9, y+height-height/13);
	//lefthand dip between roots
	vertex(x+width/2+width/20, y+height-height/14);
	//lefthand root tip
	vertex(x+width/4,y+height-height/20);
	//bottom end of trunk
	vertex(x+width/2, y+height-height/10);
	
	//top end of main trunk
	vertex(x+width/2,y+height/2);
	vertex(x+width/2-width/22, y+height/2.6)
	//tip of left branch
	vertex(x,  y+height/6);
	//back to main trunk
	vertex(x+width/2+width/10, y+height/3.4);
	//middle branch tip
	vertex(x+width/2+width/5, y+height/10);
	//middle right dip between branches
	vertex(x+width/2+width/7, y+height/2.7);
	//lefthand branch tip
	vertex( x+width/2+width/3, y+height/3.5);
	//lefthandbranch meets trunk and forms knot
	vertex(x+width/2+width/10, y+height/2.2);
	//visible mid trunk line endpoint
	vertex(x+width/2+width/10.5, y+height/1.7);
	endShape();
}

//draws one of the possible plants at the location and size given
//draws from the top left
this.plant = function(x,y,width, height){
	//choses the color
	this.pick = vals.scaleVals(9,1,3,true);
	if(this.pick==1){
		stroke(this.tree1[0],this.tree1[1],this.tree1[2]);
		fill(this.tree2[0],this.tree2[1],this.tree2[2]);
	}
	else if(this.pick == 2){
		stroke(this.tree3[0],this.tree3[1],this.tree3[2]);
		fill(this.tree4[0],this.tree4[1],this.tree4[2]);
	}
	else{
		stroke(this.tree5[0],this.tree5[1],this.tree5[2]);
		fill(this.tree6[0],this.tree6[1],this.tree6[2]);
	}

	//decides which plant will be drawn
	this.check = vals.scaleVals(1,1,6,true);
	if(this.check <3){
		this.grass3(x,y,width,height);
	}
	else if(this.check == 3){
	this.flower(x,y,width,height);
	}
	else{
	this.grass5(x,y,width,height);
}
	

	

}

//a grass plant with 5 leaves
this.grass5 = function(x,y,width, height){
	//1 in four chance the dimensions will be switched and the plant will be wider than it is tall
	if(vals.scaleVals(17,1,4,true) == 1){
		this.temp = height;
		height=width;
		width =this.temp;
	}
	//aditional chance the plant's dimensions will be square
	else if (vals.scaleVals(18,1,6,true) == 1){
		//works out which dimension will be used for
		if(vals.scaleVals(19,1,2,true)==1){
			height = width;
		}
		else{
			width = height;
		}
	}
	this.leafWidth = width/6;
	beginShape();
	//uses value 16
	if(vals.scaleVals(16,1,3,true) == 1){
		curveVertex(x+width/2-this.leafWidth*1.5, y+height);
	}
	//far left leaf
	vertex(x+width/2-this.leafWidth*2.5, y+height);
	vertex(x-width/4-focusedRandom(0,width/4), y+(height/4*3) + focusedRandom(0, height/4.2));
	//left leaf
	vertex(x+width/2-this.leafWidth*1.5, y+height-this.leafWidth);
	vertex(x+focusedRandom(-width/3,width/10),y+height/3+focusedRandom(0,height/2));
	//centre leaf
	vertex(x+width/2-(this.leafWidth/2), y+height-this.leafWidth);
	vertex(x+width/2+focusedRandom(-width/4,width/4), y+focusedRandom(0,height/4));
	vertex(x+width/2+(this.leafWidth/2),y+height-this.leafWidth);
	//right leaf
	vertex(x+width+focusedRandom(-width/10,width/2),y+height/2);
	vertex(x+width/2+(this.leafWidth*1.5), y+height-focusedRandom(0,this.leafWidth));
	// 2 in three chance to add the fifth leaf 
	if(vals.scaleVals(20,1,3,true) != 1){
		vertex(x+width+width/4+focusedRandom(-width/10,width/3), y + height/4*3+focusedRandom(-height/10,height/3));
		vertex(x+width/2+this.leafWidth*2.5, y+height);
	}
	
	if(vals.scaleVals(16,1,3,true) == 1){
		curveVertex(x+width/2+(this.leafWidth*1.5), y+height);
	}
	endShape();
}

//a grass plant with 3 leaves
this.grass3 = function(x,y,width, height){
	//1 in four chance the dimensions will be switched and the plant will be wider than it is tall
	if(vals.scaleVals(17,1,4,true) == 1){
		this.temp = height;
		height=width;
		width =this.temp;
	}
	//aditional chance the plant's dimensions will be square
	else if (vals.scaleVals(18,1,6,true) == 1){
		//works out which dimension will be used for
		if(vals.scaleVals(19,1,2,true)==1){
			height = width;
		}
		else{
			width = height;
		}
	}
this.leafWidth = width/6;
	beginShape();
	//uses value 16
	if(vals.scaleVals(16,1,3,true) == 1){
		curveVertex(x+width/2-this.leafWidth*1.5, y+height);
	}
	//left leaf
	vertex(x+width/2-this.leafWidth*1.5, y+height);
	vertex(x+focusedRandom(-width/2,width/10),y+height/3+focusedRandom(0,height/2));
	//centre leaf
	vertex(x+width/2-(this.leafWidth/2), y+height-this.leafWidth);
	vertex(x+width/2+focusedRandom(-width/4,width/4), y+focusedRandom(0,height/4));
	vertex(x+width/2+(this.leafWidth/2),y+height-this.leafWidth);
	//right leaf
	vertex(x+width+focusedRandom(-width/10,width/2),y+height/2);
	vertex(x+width/2+(this.leafWidth*1.5), y+height);
	if(vals.scaleVals(16,1,3,true) == 1){
		curveVertex(x+width/2+(this.leafWidth*1.5), y+height);
	}
	endShape();
}
//a flower
this.flower = function(x,y,width, height){
	//flowers are smaller
	x=x+width/2;
	y = y+height/2;
	width = width/3;
	height = height/3;

	this.leafWidth = width/6;
	beginShape();
	//left leaf
	vertex(x+width/2-this.leafWidth*1.5, y+height);
	vertex(x+focusedRandom(-width/2,width/10),y+height/3+focusedRandom(0,height/2));
	//centre leaf
	vertex(x+width/2-(this.leafWidth/2), y+height-this.leafWidth);
	vertex(x+width/2, y);
	vertex(x+width/2+(this.leafWidth/2),y+height-this.leafWidth);
	//right leaf
	vertex(x+width+focusedRandom(-width/10,width/2),y+height/2);
	vertex(x+width/2+(this.leafWidth*1.5), y+height);
	endShape();
}

//draws from the left top corner
//draws a tower of the specified size
this.tower = function(x,y,width,height){
	if(focusedRandom(0,100)<30){
		stroke(this.tower1[0],this.tower1[1],this.tower1[2]);
		fill(this.tower2[0],this.tower2[1],this.tower2[2]);
	}
	else{
		stroke(this.tower3[0],this.tower3[1],this.tower3[2]);
		fill(this.tower4[0],this.tower4[1],this.tower4[2]);
	}
	this.towerRoof(x,y,width,height/4- ((height-height/4)/14));
	y = y+height/4;
	height = height - height/4;
	this.slant =width/6;
	//draws a rectangle to fill the tower in with colour
	push();
	noStroke();
	beginShape();
	vertex(x+this.slant,  y);
	vertex(x,y+height+height/14);
	vertex(x+width,y+height+height/14);
	vertex(x+width-this.slant,y);
	endShape();
	//rectMode(CORNER);
	//rect(x,y,width, height+height/14);
	pop();
	
	//second base line of the tower
	beginShape();
	//bottom left
	curveVertex(x, y+height+height/14);
	vertex(x, y+height+height/14);
	//bottom middle
	vertex(x+width/2, y+height+height/20+height/14);
	//bottom right
	vertex(x+width, y+height+height/14);
	vertex(x+width, y+height+height/14);
	endShape();

	//Draws the curving line forming the back top of the tower
	//top right
	beginShape();
	curveVertex(x+width-this.slant, y);
	vertex(x+width-this.slant, y);
	//top middle
	vertex(x+width/2,y-height/30);
	//top left
	vertex(x+this.slant,y);
	vertex(x+this.slant,y);
	endShape();


	//Draws the main tower, 
	//double vertices allow for straight sides on a curve vertex object
	beginShape();
	//top left corner
	curveVertex(x+this.slant,y);
	vertex(x+this.slant,y);
	//bottom left
	vertex(x, y+height);
	vertex(x, y+height);
	//bottom middle
	vertex(x+width/2, y+height+height/20);
	//bottom right
	vertex(x+width, y+height);
	vertex(x+width, y+height);
	//top right
	vertex(x+width-this.slant, y);
	vertex(x+width-this.slant, y);
	//top middle
	vertex(x+width/2,y+(height/20-this.slant/5));
	//top left again
	vertex(x+this.slant,y);
	vertex(x+this.slant,y);
	//bottom left again for the handle
	vertex(x, y+height);
	endShape();

	//draws the window
	//uses value five
	beginShape();
	//creates a 2 in three chance the window will be curved
	if(vals.scaleVals(5, 1,3,true) != 1){
		curveVertex(x+width/4,y+height/2);
	}
	vertex(x+width/4,y+height/2.5);
	vertex(x+width/4+this.slant/6,y+height/4.5);
	//middle point
	vertex(x+width/2, y+height/10);
	vertex(x+(width/4)*3-this.slant/6, y+height/4.5);
	vertex(x+(width/4)*3, y+height/2.5);
	if(vals.scaleVals(5, 1,3,true) != 1){
		curveVertex(x+(width/4)*3, y+height/2);
	}
	endShape();

	//draws the windowsill
	push();
	this.sill=Math.floor(height/20);
	if (this.sill<3){this.sill=3;}
	strokeWeight(this.sill)
	beginShape();
	vertex(x+width/4,y+height/2.5+this.sill/2);
	vertex(x+width/4,y+height/2.5+this.sill/2);
	curveVertex(x+width/2,y+height/2.5+this.sill/2+height/35)
	vertex(x+(width/4)*3, y+height/2.5+this.sill/2);
	vertex(x+(width/4)*3, y+height/2.5+this.sill/2);
	endShape();
	pop();


	//beginShape();
	//left handle
	////curveVertex(x+width/3, y+height/2);
	//left bottom corner
	//vertex(x+width/3, y+height/2.5);
	//left curve start
	//vertex(x+width/3, y+height/3.5);
	//left curve peak
	//vertex(x+width/3+width/6,y+height/4.5);
	//vertex(x+width/3+(width/6)*2,y+height/4.5);
	////////vertex(x+width/3+(width/6)*2,y+height/2.5);
	//vertex(x+width/3+(width/6)*2,y+height/2);
	//endShape();

	

	

}


//draws from the left top corner
//draws a tower of the specified size
this.well = function(x,y,width,height){
	fill(150);
	this.wellRoof(x,y,width,height/4- ((height-height/4)/14));
	y = y+height/4;
	height = height - height/4;
	this.slant =width/6;
	//draws a rectangle to fill the tower in with colour
	noStroke();
	beginShape();
	vertex(x+this.slant,  y);
	vertex(x,y+height+height/14);
	vertex(x+width,y+height+height/14);
	vertex(x+width-this.slant,y);
	endShape();
	//rectMode(CORNER);
	//rect(x,y,width, height+height/14);

	stroke(0);
	//second base line of the tower
	beginShape();
	//bottom left
	curveVertex(x, y+height+height/14);
	vertex(x, y+height+height/14);
	//bottom middle
	vertex(x+width/2, y+height+height/20+height/14);
	//bottom right
	vertex(x+width, y+height+height/14);
	vertex(x+width, y+height+height/14);
	endShape();

	//Draws the curving line forming the back top of the tower
	//top right
	beginShape();
	curveVertex(x+width-this.slant, y);
	vertex(x+width-this.slant, y);
	//top middle
	vertex(x+width/2,y-height/30);
	//top left
	vertex(x+this.slant,y);
	vertex(x+this.slant,y);
	endShape();


	//Draws the main tower, 
	//double vertices allow for straight sides on a curve vertex object
	beginShape();
	//top left corner
	curveVertex(x+this.slant,y);
	vertex(x+this.slant,y);
	//bottom left
	vertex(x, y+height);
	vertex(x, y+height);
	//bottom middle
	vertex(x+width/2, y+height+height/20);
	//bottom right
	vertex(x+width, y+height);
	vertex(x+width, y+height);
	//top right
	vertex(x+width-this.slant, y);
	vertex(x+width-this.slant, y);
	//top middle
	vertex(x+width/2,y+(height/20-this.slant/5));
	//top left again
	vertex(x+this.slant,y);
	vertex(x+this.slant,y);
	//bottom left again for the handle
	vertex(x, y+height);
	endShape();

}

//draws from the top left corner
this.rock =  function(x,y,width,height){
	push();
	strokeWeight(vals.scaleVals(15,4,13,true));

	stroke(this.rock1[0],this.rock1[1],this.rock1[2]);
	fill(this.rock2[0],this.rock2[1],this.rock2[2]);
	
	//ellipse(x,y,width,height);
	beginShape();
	vertex(x+width/20,y+height);
	vertex(x,y+height-focusedRandom(height/40, height/3));
	vertex(x+width/15,y+height/2);
	vertex(x+(width/5), y+focusedRandom(0, height/2.5));
	//middle
	vertex(x+(width/2), y+height/15);

	vertex(x+(width/2+width/5), y);
	vertex(x+width-width/15,y+height/2);
	vertex(x+width-(focusedRandom(0,width/15)),y+height-focusedRandom(height/20,height/4));
	vertex(x+width-width/20,y+height);
	endShape();
	pop();
}

this.towerRoof =  function(x,y,width,height){
	//ellipse(x,y,width,height);
	beginShape();
	vertex(x+width/20,y+height);
	vertex(x,y+height-height/20);
	vertex(x+(width/2), y);
	vertex(x+width,y+height-height/20);
	vertex(x+width-width/20,y+height);

	endShape();

	//curve at the base
	beginShape();
	curveVertex(x+width/20,y+height);
	vertex(x+width/20,y+height);
	vertex(x+width/2, y+height+height/14);
	vertex(x+width-width/20,y+height);
	vertex(x+width-width/20,y+height);


		endShape();

}

this.wellRoof =  function(x,y,width,height){
	//ellipse(x,y,width,height);
	beginShape();
	curveVertex(x+width/20,y+height);
	vertex(x,y+height-height/20);
	vertex(x+(width/2), y);
	vertex(x+width,y+height-height/20);
	vertex(x+width-width/20,y+height);

	endShape();

	//curve at the base
	beginShape();
	curveVertex(x+width/20,y+height);
	vertex(x+width/20,y+height);
	vertex(x+width/2, y+height+height/14);
	vertex(x+width-width/20,y+height);
	vertex(x+width-width/20,y+height);


		endShape();

}

this.sky = function(){

	this.skyWash(this.border, this.border, this.w-this.border, this.h/3);

}

this.skyWash = function(xMin, yMin, xMax, yMax){
//sets a color with a lerp value based on random number one, and an opacity based on random number two	
noFill();
strokeWeight(vals.scaleVals(17,6,22,true));
//ellipseMode(CORNER);
//ellipse(xMin,yMin, xMax-xMin, yMax-yMin);
for (this.i = 0; this.i<511; this.i++){
	this.col = lerpColor(color(this.sky1[0],this.sky1[1],this.sky1[2],focusedRandom(50,150)),color(this.sky2[0],this.sky2[1],this.sky2[2],focusedRandom(50,150)), focusedRandom(0.01,0.99));
	stroke(this.col);
	beginShape();
	this.randX = focusedRandom(xMin+20, xMax-20,2);
	this.randY = focusedRandom(yMin+5,yMax-5);
	vertex(-15+this.randX+focusedRandom(-20,10),this.randY+focusedRandom(-7,7));
	vertex(this.randX+focusedRandom(-4,3),this.randY+focusedRandom(-7,7));
	vertex(15+this.randX+focusedRandom(-10,20),this.randY+focusedRandom(-7,7));
	endShape();
}
}

this.midground = function(){

	this.trees(this.border, this.border+h/3, this.w-this.border, this.border+(h/3)*2);
	this.mountains(this.border, h/5-this.border, this.w-this.border, (h/4)*2);
}

//draws a series of hills
this.mountains = function(xMin, yMin, xMax, yMax){
	push();
	this.peakNum = focusedRandom(0,20,2); 
	this.smooth = false
	//a one in five chance the mountains will all be smooth
	if(this.vals.scaleVals(11,1,5,true) ==1){
	this.smooth = true;

}
this.lerpy = 0.01
this.st = Math.floor(focusedRandom(2,7));
//calculates colours and lineweights and raws individual hills
	strokeWeight(this.st);
	this.st = this.st+1;
	stroke (lerpColor(color(this.hills1[0],this.hills1[1],this.hills1[2]),color(this.hills3[0],this.hills3[1],this.hills3[2]), this.lerpy));
	fill (lerpColor(color(this.hills2[0],this.hills2[1],this.hills2[2]),color(this.hills4[0],this.hills4[1],this.hills4[2]), this.lerpy));
	this.hill(xMin, yMin, xMax, yMax,focusedRandom(this.peakNum, this.peakNum+6), 30,20, this.smooth);
	
	strokeWeight(this.st);
	this.st = this.st+1;
	this.lerpy = this.lerpy + 0.20;
	stroke (lerpColor(color(this.hills1[0],this.hills1[1],this.hills1[2]),color(this.hills3[0],this.hills3[1],this.hills3[2]), this.lerpy));
	fill (lerpColor(color(this.hills2[0],this.hills2[1],this.hills2[2]),color(this.hills4[0],this.hills4[1],this.hills4[2]), this.lerpy));
	this.hill(focusedRandom(xMin, xMin+(xMax-xMin)/3), yMin, focusedRandom(xMax, xMax - (xMax-xMin)/3), yMax,this.peakNum, 10,15, this.smooth);
	
	strokeWeight(this.st);
	this.st = this.st+1;
	this.lerpy = this.lerpy + 0.20;
	stroke (lerpColor(color(this.hills1[0],this.hills1[1],this.hills1[2]),color(this.hills3[0],this.hills3[1],this.hills3[2]), this.lerpy));
	fill (lerpColor(color(this.hills2[0],this.hills2[1],this.hills2[2]),color(this.hills4[0],this.hills4[1],this.hills4[2]), this.lerpy));
	this.hill(focusedRandom(300,xMin+(xMax-xMin)/1.7), yMin, focusedRandom(xMin+(xMax-xMin)/1.5, xMax), yMax, focusedRandom(this.peakNum, this.peakNum+2),0,0, this.smooth);
	
	strokeWeight(this.st);
	this.st = this.st+1;
	this.lerpy = this.lerpy + 0.20;
	stroke (lerpColor(color(this.hills1[0],this.hills1[1],this.hills1[2]),color(this.hills3[0],this.hills3[1],this.hills3[2]), this.lerpy));
	fill (lerpColor(color(this.hills2[0],this.hills2[1],this.hills2[2]),color(this.hills4[0],this.hills4[1],this.hills4[2]), this.lerpy));
	this.hill(focusedRandom(xMin+(xMax-xMin)/2, xMin+(xMax-xMin)/1.3,), yMin, focusedRandom(xMin+(xMax-xMin)/1.1, xMax), yMax, this.peakNum,0,0, this.smooth);
	
	strokeWeight(this.st);
	this.st = this.st+1;
	this.lerpy = this.lerpy + 0.20;
	fill (lerpColor(color(this.hills2[0],this.hills2[1],this.hills2[2]),color(this.hills4[0],this.hills4[1],this.hills4[2]), this.lerpy));
	stroke (lerpColor(color(this.hills1[0],this.hills1[1],this.hills1[2]),color(this.hills3[0],this.hills3[1],this.hills3[2]), this.lerpy));
	this.hill(xMin, yMin, focusedRandom(300,xMin+(xMax-xMin)/1.7), yMax, focusedRandom(this.peakNum, this.peakNum+3),0,0, this.smooth);
	pop();
}


this.trees = function(xMin, yMin, xMax, yMax){

}
//peaks is the maximum number of mini peaks and valleys on each side
this.hill = function(xMin, yMin, xMax, yMax, peaks, endRaise1, endRaise2, isSmooth){
	
	//calculate the heights of the beginning, end and midpoints of the hill

	this.startY = yMax - endRaise1;
	this.endY = yMax - endRaise2;
	//the peak must be higher than both ends
	if(this.startY>this.endY){
		this.midY = focusedRandom(yMin,this.startY-30, 2);
		//the distance between the higher bottom edge and the peak
		this.peakDepth = this.endY - this.midY;
		//the highest the lower peaks are allowed to be
		this.peakHigh = this.midY + this.peakDepth/5;
		//the lowest the valleys are allowed to be
		this.peakLow = this.endY- this.peakDepth/5;
	}
	else{
		
		this.midY = focusedRandom(yMin,this.endY-30, 2);
		this.peakDepth = this.startY - this.midY;
		//the highest the lower peaks are allowed to be
		this.peakHigh = this.midY + this.peakDepth/5;
		//the lowest the valleys are allowed to be
		this.peakLow = this.startY- this.peakDepth/5;
	}
	//Calculate the x positions of the hill
	this.startX = xMin;
	this.endX = xMax;
	this.hillWidth = this.endX-this.startX;
	this.midX = (this.startX+(this.hillWidth)/2)-focusedRandom(-this.hillWidth/3,this.hillWidth/3);

//draws the hill, calculating mid points for little peaks and valleys along the way
//these points must be calculated because no point can be further left than it's predecessor
//these points may or may not actually be drawn, but they still need to be calculated so that the next point can draw on them
	beginShape();
	//if the hill is to be smooth add a curve vertex as the first handle
	//the rest will automatically draw as if they were curve vertexes
	if(isSmooth){
		curveVertex(this.startX-20,this.startY);
	}
	vertex(this.startX,this.startY);

	this.hillWidth = this.midX-this.startX;
	this.x1= this.startX+(focusedRandom(this.hillWidth/4),this.hillWidth/3);
	vertex(this.x1, focusedRandom(this.peakLow, this.peakHigh));
	
	//more peaks and valleys that may or may not happen
	for(this.a = 0; this.a < this.vals.scaleVals(3,peaks/4,peaks,true); this.a++){
		this.hillWidth = this.midX-this.x1;
		this.x1= this.x1+(focusedRandom(this.hillWidth/4),this.hillWidth/2);
		vertex(this.x1, focusedRandom(this.peakLow, this.peakHigh));
	}
	vertex(this.midX, this.midY);
	//second half peaks and valleys
	this.hillWidth = this.endX-this.midX;
	this.x1= this.midX+(focusedRandom(this.hillWidth/4),this.hillWidth/3);
	vertex(this.x1, focusedRandom(this.peakLow, this.peakHigh));

	//more peaks and valleys that may or may not happen
	for(this.a = 0; this.a < this.vals.scaleVals(4,peaks/4,peaks,true); this.a++){
		this.hillWidth = this.endX - this.x1;
		this.x1= this.x1+(focusedRandom(this.hillWidth/6),this.hillWidth/3);
		vertex(this.x1, focusedRandom(this.peakLow, this.peakHigh));
	}




	vertex(this.endX, this.endY);
	//if the hill is to be smooth add a final curve vertex handle
	if(isSmooth){
		curveVertex(this.endX-20,this.endY);
	}
	endShape();
}







}