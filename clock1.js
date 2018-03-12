const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
let pfont;
let hide_Hours = false;
let hide_Minutes = false;
let hide_Seconds = false;

function preload(){
	pfont = loadFont('prstart.ttf');
}

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  // you can optionally add your own code here if you also have setup code  
  angleMode(DEGREES);
}

// Update this function to draw you own maeda clock
function draw () {
  let h = hour();
  let m = minute();
  let s = second();
  let text_Size = 200;
  background(150); // light gray background
  if(pfont!=null){
	  textFont(pfont);
  }
  //Takes the Text and rotates around the screen
  translate(CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
  textAlign(CENTER, CENTER);
  //Hours
  if(!hide_Hours){
	textSize(text_Size);
	rotate(h*30);  
	fill(0);
	text(h,0,0);
	//Undo Rotation on the matrix
	rotate(-(h*30)); 
  }
 
  //Minutes
  if(!hide_Minutes){
	textSize(text_Size*0.8);
	rotate(m*6);
	fill(255);
	text(m,0,0);   
	//Undo Rotation on the matrix
	rotate(-(m*6)); 
  }
  
  //Seconds
  if(!hide_Seconds){
	rotate(s*6);
	fill(255,0,0);
	textSize(text_Size*0.6);
	text(s,0,0);
  }

}

function mouseClicked(){
	var pixelColour = get(mouseX, mouseY);
	//Clicked on Hours
	if(pixelColour[0] == 0 && pixelColour[1] == 0 && pixelColour[2] == 0 && pixelColour[3] == 255){
		hide_Minutes = true;
		hide_Seconds = true;
	}
	//Clicked on minutes
	else if(pixelColour[0] == 255 && pixelColour[1] == 255 && pixelColour[2] == 255 && pixelColour[3] == 255){
		hide_Hours = true;	
		hide_Seconds = true;		
	}
	//Clicked on seconds
	else if(pixelColour[0] == 255 && pixelColour[1] == 0 && pixelColour[2] == 0 && pixelColour[3] == 255){
		hide_Hours = true;
		hide_Minutes = true;
	}
	//Clicked elsewhere, restores clock
	else{
		hide_Hours = false;
		hide_Minutes = false;
		hide_Seconds = false;
	}
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
