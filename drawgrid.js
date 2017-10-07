
var max_thickness = 0;
var max_movement = 0;
var ball_radius = 0;
var line_width = 1;
var gridSize = 64;

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

function initPopulations(p5){


  empty = 45 + p5.round(p5.random(0,70));
  grass = 10+ p5.round(p5.random(-5,15));
  flatLine = 0;
  rock = 5 + p5.round(p5.random(-4,15));
  tree = 20 + p5.round(p5.random(-5,20));
  smallTree = 10 + p5.round(p5.random(-10,20));
  house = 1 + p5.round(p5.random(-1,4));
  obelisk = 1 + p5.round(p5.random(0,6));
  flower = 5 + p5.round(p5.random(1,15)) ;
  cave = 8 + p5.round(p5.random(-4,5));


  populations = [empty,grass,flatLine,rock,tree,smallTree,house,obelisk,flower,cave];
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

  var minX = snap_to_grid(x1, gridSize);
  var maxX = snap_to_grid(x2 + gridSize, gridSize);
  var minY = snap_to_grid(y1, gridSize);
  var maxY = snap_to_grid(y2 + gridSize, gridSize);

  p5.print(minX);


  var c_p00 = p5.map(0, x1, x2, 0, 256);
  var c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  var c_pball = p5.map(ball_radius, x1, x2, 0, 256);
  var lineWidth = c_plwidth - c_p00;
  var cur_ball_radius = c_pball - c_p00;

  p5.background(255);
  p5.fill(0, 0, 0);
  for(var x=minX; x<maxX; x+=gridSize) {
    for(var y=minY; y<maxY; y+=gridSize) {
      var leftX = p5.map(x, x1, x2, 0, 256);
      var topY = p5.map(y, y1, y2, 0, 256);
      var rightX = p5.map(x+gridSize, x1, x2, 0, 256);
      var bottomY = p5.map(y+gridSize, y1, y2, 0, 256);
      var colWidth = p5.map(gridSize,x1,x2,0,256);
      var rowHeight = p5.map(gridSize,y1,y2,0,256);
      var perl = p5.noise(x,y);

      var tileType;
      var lakeChance = 0.15;
      var snowChance = 0.75

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



      p5.strokeWeight(lineWidth);
      p5.stroke(0, 0, 0);

      //var bottomY = p5.map(y, y1, y2, 0, 256);
      p5.line(leftX, topY, rightX, topY);
      p5.line(leftX, topY, leftX, bottomY);

      var midPoint = p5.map(y-(gridSize/2),y1,y2,0,256);

      var shapeType = getShape(x,y);

      if(shapeType == 1){
        p5.strokeWeight(lineWidth*2);
        p5.stroke(123,182,91);
        p5.line(leftX,mapY(y+gridSize-(gridSize/5)),leftX,bottomY);
        p5.line(mapX(x+(gridSize/2)),mapY(y+gridSize-(gridSize/3)),mapX(x+(gridSize/2)),bottomY);
        p5.line(rightX,mapY(y+gridSize-(gridSize/5)),rightX,bottomY);
      }
      else if(shapeType == 2){


      }
      else if(shapeType == 3){

        p5.triangle(leftX,mapY(y+(gridSize/2)),mapX(x+(gridSize/2)),topY,rightX,mapY(y+(gridSize/2)));

      }

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
