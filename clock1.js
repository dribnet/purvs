const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
const X1 = 180;
const Y1 = 120;
const Spacing = 65;
const SpacingY = 45;
const SpacingX = 35;
const Radius1 = 30;
const Radius2 = 20;
const Radius3 = 10;
const Trans1 = 20;
const Trans2 = 30;
const Trans3 = 40;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(250); // light gray background

//The first number
  	fill(0,Trans1);
	ellipse(X1-SpacingY*2,Y1+SpacingY*2,Radius1,Radius1);
	ellipse(X1-SpacingY,Y1+SpacingY,Radius1,Radius1);
	for(let a=Y1; a<390;a=a+SpacingY){
	  	ellipse(X1, a, Radius1, Radius1);
  	}
    fill(0,Trans2);

	ellipse(X1-SpacingY*2,Y1+SpacingY*2,Radius2,Radius2);
	ellipse(X1-SpacingY,Y1+SpacingY,Radius2,Radius2);
  	for(let b=Y1; b<390;b=b+SpacingY){
	  	ellipse(X1, b, Radius2, Radius2);
  	}
  	fill(0,Trans3);

	ellipse(X1-SpacingY*2,Y1+SpacingY*2,Radius3,Radius3);
	ellipse(X1-SpacingY,Y1+SpacingY,Radius3,Radius3);
  	 for(let c=Y1; c<390;c=c+SpacingY){
	  	ellipse(X1, c, Radius3, Radius3);
  	}
  	// fill(255,255,0,Trans3);

//The second number
  	fill(0,Trans1);
	ellipse(X1+Spacing, Y1+SpacingY, Radius1, Radius1);

  	for(let j= X1+Spacing+SpacingX; j<360; j=j+SpacingX){
  		ellipse(j,Y1,Radius1,Radius1);
  	}

  	ellipse(X1+SpacingX*4+Spacing, Y1+SpacingY, Radius1, Radius1);
  	ellipse(X1+SpacingX*3+Spacing, Y1+SpacingY*2, Radius1, Radius1);
  	ellipse(X1+SpacingX*2+Spacing, Y1+SpacingY*3, Radius1, Radius1);
  	ellipse(X1+SpacingX+Spacing, Y1+SpacingY*4, Radius1, Radius1);

  	for(let i= X1+Spacing; i<400; i=i+SpacingX){
  		ellipse(i,Y1+SpacingY*5,Radius1,Radius1);
  	}



  	fill(0,Trans2);
	ellipse(X1+Spacing, Y1+SpacingY, Radius2, Radius2);

  	for(let j= X1+Spacing+SpacingX; j<360; j=j+SpacingX){
  		ellipse(j,Y1,Radius2,Radius2);
  	}

  	ellipse(X1+SpacingX*4+Spacing, Y1+SpacingY, Radius2, Radius2);
  	ellipse(X1+SpacingX*3+Spacing, Y1+SpacingY*2, Radius2, Radius2);
  	ellipse(X1+SpacingX*2+Spacing, Y1+SpacingY*3, Radius2, Radius2);
  	ellipse(X1+SpacingX+Spacing, Y1+SpacingY*4, Radius2, Radius2);

  	for(let i= X1+Spacing; i<400; i=i+SpacingX){
  		ellipse(i,Y1+SpacingY*5,Radius2,Radius2);
  	}



  	fill(0,Trans3);
	ellipse(X1+Spacing, Y1+SpacingY, Radius3, Radius3);

  	for(let j= X1+Spacing+SpacingX; j<360; j=j+SpacingX){
  		ellipse(j,Y1,Radius3,Radius3);
  	}

  	ellipse(X1+SpacingX*4+Spacing, Y1+SpacingY, Radius3, Radius3);
  	ellipse(X1+SpacingX*3+Spacing, Y1+SpacingY*2, Radius3, Radius3);
  	ellipse(X1+SpacingX*2+Spacing, Y1+SpacingY*3, Radius3, Radius3);
  	ellipse(X1+SpacingX+Spacing, Y1+SpacingY*4, Radius3, Radius3);

  	for(let i= X1+Spacing; i<400; i=i+SpacingX){
  		ellipse(i,Y1+SpacingY*5,Radius3,Radius3);
  	}


//Middle
	fill(255,0,0,Trans1);
	ellipse(X1+SpacingX*4+Spacing*2, Y1+SpacingY, Radius1, Radius1);
	ellipse(X1+SpacingX*4+Spacing*2, Y1+SpacingY*4, Radius1, Radius1);


	fill(255,0,0,Trans2);
	ellipse(X1+SpacingX*4+Spacing*2, Y1+SpacingY, Radius2, Radius2);
	ellipse(X1+SpacingX*4+Spacing*2, Y1+SpacingY*4, Radius2, Radius2);
	
	fill(255,0,0,Trans3);
	ellipse(X1+SpacingX*4+Spacing*2, Y1+SpacingY, Radius3, Radius3);
	ellipse(X1+SpacingX*4+Spacing*2, Y1+SpacingY*4, Radius3, Radius3);


//The third number
  	fill(0,Trans1);
	ellipse(X1+SpacingX*4+Spacing*3, Y1+SpacingY, Radius1, Radius1);

	for(let z= X1+SpacingX*5+Spacing*3; z<640; z=z+SpacingX){
  		ellipse(z,Y1,Radius1,Radius1);
  	}

  	ellipse(X1+SpacingX*8+Spacing*3, Y1+SpacingY, Radius1, Radius1);
  	ellipse(X1+SpacingX*7+Spacing*3, Y1+SpacingY*2, Radius1, Radius1);
  	ellipse(X1+SpacingX*6+Spacing*3, Y1+SpacingY*3, Radius1, Radius1);
  	ellipse(X1+SpacingX*5+Spacing*3, Y1+SpacingY*4, Radius1, Radius1);

  	for(let i= X1+SpacingX*4+Spacing*3; i<680; i=i+SpacingX){
  		ellipse(i,Y1+SpacingY*5,Radius1,Radius1);
  	}


  	fill(0,Trans2);
  	ellipse(X1+SpacingX*4+Spacing*3, Y1+SpacingY, Radius2, Radius2);


	for(let z= X1+SpacingX*5+Spacing*3; z<640; z=z+SpacingX){
  		ellipse(z,Y1,Radius2,Radius2);
  	}

  	ellipse(X1+SpacingX*8+Spacing*3, Y1+SpacingY, Radius2, Radius2);
  	ellipse(X1+SpacingX*7+Spacing*3, Y1+SpacingY*2, Radius2, Radius2);
  	ellipse(X1+SpacingX*6+Spacing*3, Y1+SpacingY*3, Radius2, Radius2);
  	ellipse(X1+SpacingX*5+Spacing*3, Y1+SpacingY*4, Radius2, Radius2);

  	for(let i= X1+SpacingX*4+Spacing*3; i<680; i=i+SpacingX){
  		ellipse(i,Y1+SpacingY*5,Radius2,Radius2);
  	}



  	fill(0,Trans3);
  	ellipse(X1+SpacingX*4+Spacing*3, Y1+SpacingY, Radius3, Radius3);


	for(let z= X1+SpacingX*5+Spacing*3; z<640; z=z+SpacingX){
  		ellipse(z,Y1,Radius3,Radius3);
  	}

  	ellipse(X1+SpacingX*8+Spacing*3, Y1+SpacingY, Radius3, Radius3);
  	ellipse(X1+SpacingX*7+Spacing*3, Y1+SpacingY*2, Radius3, Radius3);
  	ellipse(X1+SpacingX*6+Spacing*3, Y1+SpacingY*3, Radius3, Radius3);
  	ellipse(X1+SpacingX*5+Spacing*3, Y1+SpacingY*4, Radius3, Radius3);

  	for(let i= X1+SpacingX*4+Spacing*3; i<680; i=i+SpacingX){
  		ellipse(i,Y1+SpacingY*5,Radius3,Radius3);
  	}



//The forth number
	// ellipse(X1+SpacingX*8+Spacing*4, Y1+SpacingY, Radius1, Radius1);

  	fill(0,Trans1);
	for(let l=Y1+SpacingY; l<330; l=l+SpacingY){
	ellipse(X1+SpacingX*8+Spacing*4, l, Radius1, Radius1);
	}

	for(let l= X1+SpacingX*9+Spacing*4; l<840; l=l+SpacingX){
  		ellipse(l,Y1,Radius1,Radius1);
  	}

	for(l=Y1+SpacingY; l<330; l=l+SpacingY){
	ellipse(X1+SpacingX*12+Spacing*4, l, Radius1, Radius1);
	}

	for(let l= X1+SpacingX*9+Spacing*4; l<840; l=l+SpacingX){
  		ellipse(l,Y1+SpacingY*5,Radius1,Radius1);
  	}


  	fill(0,Trans2);
	for(let l=Y1+SpacingY; l<330; l=l+SpacingY){
	ellipse(X1+SpacingX*8+Spacing*4, l, Radius2, Radius2);
	}

	for(let l= X1+SpacingX*9+Spacing*4; l<840; l=l+SpacingX){
  		ellipse(l,Y1,Radius2,Radius2);
  	}

	for(l=Y1+SpacingY; l<330; l=l+SpacingY){
	ellipse(X1+SpacingX*12+Spacing*4, l, Radius2, Radius2);
	}

	for(let l= X1+SpacingX*9+Spacing*4; l<840; l=l+SpacingX){
  		ellipse(l,Y1+SpacingY*5,Radius2,Radius2);
  	}



  	fill(0,Trans3);
  	for(let l=Y1+SpacingY; l<330; l=l+SpacingY){
	ellipse(X1+SpacingX*8+Spacing*4, l, Radius3, Radius3);
	}

	for(let l= X1+SpacingX*9+Spacing*4; l<840; l=l+SpacingX){
  		ellipse(l,Y1,Radius3,Radius3);
  	}

	for(l=Y1+SpacingY; l<330; l=l+SpacingY){
	ellipse(X1+SpacingX*12+Spacing*4, l, Radius3, Radius3);
	}

	for(let l= X1+SpacingX*9+Spacing*4; l<840; l=l+SpacingX){
  		ellipse(l,Y1+SpacingY*5,Radius3,Radius3);
  	}

	noStroke();

}

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
