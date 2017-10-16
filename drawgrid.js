
var max_thickness = 0;
var max_movement = 0;
var ball_radius = 0;
var line_width = 1;
var gridSize;


//population variables
var empty;
var bigRect;
var smallRect;
var grass;
var bigCircle;
var flatLine;
var rock;
var tree;
var smallTree;
var rect4;
var circle4;
var house;
var person;
var flower;
var cave;

var populations;

var totalPopulation;

/* OPTIONAL VARIABLES */
/* what is the initial zoom level (defaults to 0) */
var initialZoomLevel = 6;
/* what is the maximum zoom level (make this at least 10. defaults to 16) */
var maxZoomLevel = 9;

function initPopulations(p5){


  empty = 115;
  grass = 25;
  flatLine = 0;
  rock = 7;
  tree = 60;
  smallTree = 20;
  house = 24;
  obelisk = 7;
  flower = 20 ;
  cave = 13;


  populations = [empty,grass,flatLine,rock,smallTree,tree,house,obelisk,flower,cave];
  totalPopulation = 0;

  for(var i = 0; i < populations.length; i++){
      totalPopulation = totalPopulation + populations[i];
  }


}


function getOffsetPoint(p5, x, y, z, noiseScale) {
  var noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  var noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  var offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  var offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
}

function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}

/*
 * This is the funciton to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  // debug - show border




  initPopulations(p5);

  if(zoom < 5){
    gridSize = 1;
  }

  else if(zoom < 6){
    gridSize = 0.5;
  }
  else{
    gridSize = 0.25;
  }

  //var minX = x1;
  var minX = snap_to_grid(x1, gridSize);
  var maxX = snap_to_grid(x2 + gridSize, gridSize);
  var minY = snap_to_grid(y1, gridSize);
  var maxY = snap_to_grid(y2 + gridSize, gridSize);

  var c_p00 = p5.map(0, x1, x2, 0, 256);
  var c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  var c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  var lineWidth = c_plwidth - c_p00;
  var cur_ball_radius = c_pball - c_p00;

  var noiseScale = 0.8;

  p5.background(255);
  p5.fill(0, 0, 0);
  for(var x=minX; x<maxX; x+=gridSize) {
    for(var y=minY; y<maxY; y+=gridSize) {
      var leftX = p5.map(x, x1, x2, 0, 256);
      var topY = p5.map(y, y1, y2, 0, 256);
      var rightX = p5.map(x+gridSize, x1, x2, 0, 256);
      var bottomY = p5.map(y+gridSize, y1, y2, 0, 256);
      var colWidth = p5.map(gridSize,x1,x2,0,256) - p5.map(0, x1, x2, 0, 256);
      var rowHeight = p5.map(gridSize,y1,y2,0,256) - p5.map(0, y1, y2, 0, 256);
      var colWidthThird = p5.map(gridSize/3,x1,x2,0,256) - p5.map(0, x1, x2, 0, 256);
      var rowHeightThird = p5.map(gridSize/3,y1,y2,0,256) - p5.map(0, y1, y2, 0, 256);
      var perl = p5.noise(x*noiseScale, y*noiseScale);

      var tileType;
      var lakeChance = 0.15*noiseScale;
      var snowChance = 0.75*noiseScale;

      if(perl<lakeChance){
        tileType = "lake";
      }
      else if(perl>snowChance){
        tileType = "snow";
      }
      else{
        tileType = "grass";
      }


     var perlMult = perl*180;

      //grass / snow
      p5.noStroke();
      p5.fill(169+(perlMult), 234+(perlMult), 156+(perlMult));
      p5.rect(leftX,topY,colWidth,rowHeight);

      //lake
      if(tileType == "lake"){
        p5.fill(193+perl*20, 217+perl*20, 255+perl*20);
        p5.rect(leftX,topY,colWidth,rowHeight);
        }



      //p5.strokeWeight(lineWidth);
      p5. strokeWeight(1);
      p5.stroke(0);

      //var bottomY = p5.map(y, y1, y2, 0, 256);
      //p5.line(leftX, topY, rightX, topY);
      //p5.line(leftX, topY, leftX, bottomY);

      var midPoint = p5.map(y-(gridSize/2),y1,y2,0,256);




      var shapeType = getShape(x*noiseScale, y*noiseScale);

      if(zoom > 5){
        drawShape(p5, x1, x2, y1, y2, z, zoom, shapeType);
      }
      else{
        //p5.stroke(0);
        //p5.point(leftX,topY);
      }

  }

    /**

  Gets an individual shape using perlin noise to decide which one it will return

  **/
  function getShape(row,col){

    var total = 0;
    var shape;

    //var rand = (round(random(0,totalPopulation)));
    var rand = (p5.round(p5.noise(row,col)*totalPopulation));

    //print("rand = " + rand);

    for(var i = 0; i < populations.length; i++){

      //print("populations" + i + " = " + populations[i]);
      total=total+populations[i];
      //print("total = " + total);
      if(total > rand){
        shape = i;
        //print("got! i = " + i);
        break;
      }


    }

    return shape;

  }


  function mapX (point){

      return p5.map(point,x1,x2,0,256);


  }




  function mapY (point){

    return p5.map(point,y1,y2,0,256);

  }


  function drawShape(p5, x1, x2, y1, y2, z, zoom, shapeType){

    //grass
    if(shapeType == 1){
      p5.strokeWeight(2);
      p5.stroke(123,182,91);
      p5.line(leftX,mapY(y+gridSize-(gridSize/5)),leftX,bottomY);
      p5.line(mapX(x+(gridSize/2)),mapY(y+gridSize-(gridSize/3)),mapX(x+(gridSize/2)),bottomY);
      p5.line(rightX,mapY(y+gridSize-(gridSize/5)),rightX,bottomY);
    }
    else if(shapeType == 2){


    }
    //rock
    else if(shapeType == 3){

      p5.fill(200);
      p5.stroke(60);
      p5.triangle(leftX,mapY(y+(gridSize/2)),mapX(x+(gridSize/2)),topY,rightX,mapY(y+(gridSize/2)));

    }
    //tree
    else if(shapeType==4){

      p5.fill(123,182,91);
      p5.stroke(42, 71, 49);

      p5.line(mapX(x+(gridSize/2)),mapY(y+gridSize/2),mapX(x+(gridSize/2)),bottomY);
      p5.triangle(mapX(x+(gridSize*0.2)),mapY(y+(gridSize/2)),mapX(x+(gridSize/2)),mapY(y-(gridSize*0.1)),mapX(x+gridSize-(gridSize*0.2)),mapY(y+(gridSize/2)));


    }
    //smalltree
    else if(shapeType==5){

      p5.fill(123,182,91);
      p5.stroke(42, 71, 49);

      p5.line(mapX(x+(gridSize/2)),mapY(y+gridSize/2),mapX(x+(gridSize/2)),bottomY);
      p5.triangle(leftX,mapY(y+gridSize/2),mapX(x+(gridSize/2)),mapY(y-gridSize/2),rightX,mapY(y+gridSize/2));

      if(tileType == "snow"){
        p5.fill(255);
        //noStroke();
        p5.triangle(mapX(x+(gridSize*0.13)),mapY(y+(gridSize*0.3)),mapX(x+(gridSize/2)),mapY(y-(gridSize/2)),mapX(x+gridSize-(gridSize*0.13)),mapY(y+(gridSize*0.3)));
      }


    }

    //house
    else if (shapeType == 6){

      p5.fill(186, 178, 147);
      p5.stroke(66, 53, 43);

      //p5.rect(leftX,topY,p5.map(gridSize,x1,x2,0,256),mapY(gridSize-10));
      p5.rect(leftX,topY,colWidth,rowHeight);
      p5.fill(183, 156, 126);
      p5.rect(mapX(x+gridSize/3),mapY(y+gridSize/3),colWidthThird,rowHeightThird);
      p5.triangle(leftX,topY,mapX(x+(gridSize/2)),mapY(y-(gridSize/2)),rightX,topY);
      p5.rect(mapX(x+gridSize/3),mapY(y+gridSize/1.5),colWidthThird,rowHeightThird);

    }

  }



  }

}




/*
  p5.stroke(0);
  p5.fill(255);
  // debug - show border

    //grass
    if(shapeType == 1){
      p5.strokeWeight(2);
      p5.line(leftX,bottomY-(rowHeight/5),leftX,bottomY);
      p5.line(leftX+(colWidth/2),bottomY-(rowHeight/3),leftX+(colWidth/2),bottomY);
      p5.line(rightX,bottomY-(rowHeight/5),rightX,bottomY);
    }
    //flatline
    else if (shapeType== 2){
      p5.line(leftX,topY+(rowHeight/2),rightX,topY+(rowHeight/2));
    }
    //rock
    else if(shapeType==3){

      p5.triangle(leftX,topY+(sSize/2),leftX+(sSize/2),topY,rightX,topY+(sSize/2));
    }

    //tree
    else if(shapeType==4){


      p5.line(leftX+(colWidth/2),topY+rowHeight/2,leftX+(colWidth/2),bottomY);
      p5.triangle(leftX,topY+(rowHeight/2),leftX+(colWidth/2),topY-(rowHeight/2),rightX,topY+(rowHeight/2));

      if(tileType == "snow"){
        p5.fill(255);
        //noStroke();
        p5.triangle(leftX+(colWidth*0.15),topY+(rowHeight*0.3),leftX+(colWidth/2),topY-(rowHeight/2),rightX-(colWidth*0.15),topY+(rowHeight*0.3));
      }

    }
    //smalltree
    else if(shapeType == 5){

      p5.line(leftX+(colWidth/2),topY+rowHeight/2,leftX+(colWidth/2),bottomY);
      p5.triangle(leftX+(colWidth*0.2),topY+(rowHeight/2),leftX+(colWidth/2),topY-(rowHeight*0.1),rightX-(colWidth*0.2),topY+(rowHeight/2));




    }

    //house
    else if (shapeType == 6){

      p5.rect(leftX,topY,colWidth-1,rowHeight-1);
      p5.fill(183, 156, 126+p5.random(-20,20));
      p5.rect(leftX+colWidth/3,topY+rowHeight/4,colWidth/3,rowHeight/4);
      p5.triangle(leftX,topY,leftX+(colWidth/2),topY-(rowHeight/2),rightX,topY);
      p5.rect(leftX+colWidth/3,topY+rowHeight/1.5,colWidth/3,rowHeight/3);

    }
    //obelisk
    else if (shapeType == 7){


      p5.beginShape();
      p5.vertex(leftX+(colWidth*0.35),bottomY);
      p5.vertex(leftX+(colWidth*0.65),bottomY);
      p5.vertex(leftX+(colWidth*0.65),topY);
      p5.vertex(leftX+(colWidth*0.5),topY-(rowHeight*0.2));
      p5.vertex(leftX+(colWidth*0.35),topY);

      p5.endShape(CLOSE);

    }
    //flower
    else if (shapeType == 8){

      p5.line(leftX+(colWidth/2),bottomY-(rowHeight/3),leftX+(colWidth/2),bottomY);
      p5.ellipse(leftX+(colWidth/1.9),bottomY-(rowHeight/3),colWidth/4,rowHeight/4);

    }

    //cave
    else if(shapeType == 9){


      p5.quad(leftX-colWidth,bottomY-1,leftX-(colWidth*0.3),topY-rowHeight/2,rightX-(colWidth*0.7),topY-rowHeight/2,rightX,bottomY-1);

      p5.fill(120);
      p5.triangle(leftX-(colWidth*0.3),bottomY-1,leftX,topY+rowHeight/3,leftX+(colWidth*0.3),bottomY-1);



    }
*/
