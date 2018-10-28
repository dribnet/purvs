

let do_animation = true;


var anim = 0;


function drawGrid(p5, x1, x2, y1, y2, z, zoom) {

let cx=0, cy=0, cx2=0, cy2=0;
  
  p5.background(80);
  p5.rectMode(p5.CORNERS);


 
 
  let x = 0;
  for (var j = 0; j < 45; j+=3.14159265 /10) {
   cx = p5.map(512 + p5.cos(j+anim)*(350 - x), x1, x2, 0, 256);
    cy = p5.map(512 + p5.cos(j-anim)*(350 - x), y1, y2, 0, 256); 
	  dx = 25;
    dy = 25;
    x+=2.377;
    p5.fill(255, 800, 800);
    p5.ellipse(cx+2, cy, dx, dy-2);
  }

 

  for (var i = 0; i <6.3; i+=3.14159265 /60) {
	  
	  
	  //
   /**
	//1
     cx = p5.map(512 + p5.cos(-i)*10, x1, x2, -0, 256);
    cy = p5.map(512 + p5.sin(i)*10, y1, y2, -0, 256);
    dx = p5.map(512 + p5.cos(i), x1, x2, -0, 256);
    dy = p5.map(512+p5.sin(-i)*10, y1, y2, -0, 256);
    cx2 = p5.map(412+50, x1, x2, 100, 256);
	
	**/
	/**
   //2
    cx = p5.map(512 + p5.cos(-i)*10, x1, x2, -0, 256);
    cy = p5.map(512 + p5.sin(-i)*10, y1, y2, -0, 256);
    dx = p5.map(512 +p5.sin(i)*10, x1, x2, -0, 256);
    dy = p5.map(512+p5.cos(i)*10, y1, y2, -0, 256);
    cx2 = p5.map(412+50, x1, x2, 100, 256);
	**/
  
   //3
	cx = p5.map(512 + p5.cos(i)*10, x1, x2, -0, 256);
    cy = p5.map(512 + p5.sin(i), y1, y2, -0, 256);
    dx = p5.map(512 +p5.cos(i), x1, x2, -0, 256);
    dy = p5.map(512+p5.sin(i)*10, y1, y2, -0, 256);
    cx2 = p5.map(412+50, x1, x2, 100, 256);
  
    p5.fill(255, 800, 800);
    p5.line(cx, cy, dx, dy);
  
  }
 
 
  anim += 0.0002;
  if(anim>3.14159265*2) 
	  anim = 0;

}