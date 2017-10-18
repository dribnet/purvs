
var line_width = 1;
var gridSize;

var biome;


//population variables
var lake;
var empty;
var grass;
var rock;
var tree;
var snowyTree;
var smallTree;
var house;
var person;
var flower;
var cave;

var populations;

var totalPopulation;

/* OPTIONAL VARIABLES */
/* what is the initial zoom level (defaults to 0) */
var initialZoomLevel = 1;
/* what is the maximum zoom level (make this at least 10. defaults to 16) */
var maxZoomLevel = 4;


function initPopulations(p5,x,y){

  lake = 1;
  empty = 40 + p5.round(p5.noise(y,x)*20);
  grass = 25 + p5.round(p5.noise(y,x)*10);
  rock = 7 + p5.round(p5.noise(y,x)*10);
  tree = 20 + p5.round(p5.noise(y,x)*20);
  snowyTree = 80 + p5.round(p5.noise(y,x)*20);
  smallTree = 20 + p5.round(p5.noise(y,x)*10);
  house = 14;
  obelisk = 0.1;
  flower = 1 ;
  cave = 13;

  populations = [lake,empty,flower,grass,rock,smallTree,obelisk,tree,snowyTree,house];
  totalPopulation = 0;

  for(var i = 0; i < populations.length; i++){
      totalPopulation = totalPopulation + populations[i];
  }


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


  if(zoom <= 0){
    gridSize = 8;
  }
  else if(zoom == 1){
    gridSize = 4;
  }
  else if(zoom < 2){
    gridSize = 2;
  }
  else{
    gridSize = 2;
  }

  var minX = snap_to_grid(x1, gridSize);
  var maxX = snap_to_grid(x2 + gridSize, gridSize);
  var minY = snap_to_grid(y1, gridSize);
  var maxY = snap_to_grid(y2 + gridSize, gridSize);

  var noiseScale = 0.03;
  //p5.noiseDetail(2,0.5);

  for(var x=minX; x<maxX; x+=gridSize) {
    for(var y=minY; y<maxY; y+=gridSize) {

      var biomeMult = 0.01;
      var biomeSelect = p5.noise(y*biomeMult,x*biomeMult);

      if(biomeSelect > 0.55){
        biome = "tiaga";
      }
      else if (biomeSelect > 0.45){
        biome = "forest";
      }
      else if(biomeSelect > 0.4){
        biome = "autumn";
      }
      else if(biomeSelect > 0.3){
        biome = "forest";
      }
      else{
        biome = "lake";
      }

      initPopulations(p5,x,y);

      var leftX = p5.map(x, x1, x2, 0, 256);
      var topY = p5.map(y, y1, y2, 0, 256);
      var rightX = p5.map(x+gridSize, x1, x2, 0, 256);
      var bottomY = p5.map(y+gridSize, y1, y2, 0, 256);
      var colWidth = p5.map(gridSize,x1,x2,0,256) - p5.map(0, x1, x2, 0, 256);
      var rowHeight = p5.map(gridSize,y1,y2,0,256) - p5.map(0, y1, y2, 0, 256);
      var colWidthThird = p5.map(gridSize/3,x1,x2,0,256) - p5.map(0, x1, x2, 0, 256);
      var rowHeightThird = p5.map(gridSize/3,y1,y2,0,256) - p5.map(0, y1, y2, 0, 256);

      var perl = p5.noise(x*noiseScale, y*noiseScale);

      //p5.strokeWeight(lineWidth);
      p5. strokeWeight(1);
      p5.stroke(0);

      var shapeType = getShape(x*noiseScale, y*noiseScale);

      let shape = false;

      // only show half of the shapes at this zoom level
      if(zoom > 2){
        if(p5.noise(y,x) > 0.5){
              shape = true;
        }

      }
      // only show less than 1/5th of shapes at this zoom level
      else if (zoom > 1){
        if(p5.noise(x,y) > 0.8 ){
          shape = true;
        }
      }
      else{

      }

      if(biome == "tiaga"){
        tiaga(p5, x1 , y1, x2, y2, z, zoom,  shapeType+p5.round(p5.map(p5.noise(x,y),0,1,-1,1)), shape);
      }
      else if (biome == "lake"){
        lake(p5, x1 , y1, x2, y2, z, zoom,  shapeType+p5.round(p5.map(p5.noise(x,y),0,1,-1,1)), shape);
      }
      else if(biome == "autumn"){
        autumn(p5, x1 , y1, x2, y2, z, zoom,  shapeType+p5.round(p5.map(p5.noise(x,y),0,1,-1,1)), shape);
      }
      else{
        forest(p5, x1 , y1, x2, y2, z, zoom,  shapeType+p5.round(p5.map(p5.noise(x,y),0,1,-1,1)), shape);
      }

  }

    /**

  Gets an individual shape using perlin noise to decide which one it will return

  **/
  function getShape(row,col){

    var total = 0;
    var shape;

    var rand = (p5.round(p5.noise(row,col)*totalPopulation));


    for(var i = 0; i < populations.length; i++){
      total=total+populations[i];
      if(total > rand){
        shape = i;
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


  function drawHeight(p5, x, y, shapeType){
    var perlHeight = p5.noise(x1,y1)
    p5.noStroke();
  }


  function tiaga(p5, x1, x2, y1, y2, z, zoom, shapeType, shape){

    var shapeString;

    if(shapeType == 0 ){
      shapeString = "lake";
    }
    else if(shapeType == 1){
      shapeString = "empty";
    }
    else if(shapeType == 2){
      shapeString = "flower";
    }
    else if(shapeType == 3){
      shapeString = "grass";
    }
    else if(shapeType == 4){
      shapeString = "rock";
    }
    else if(shapeType == 5){
      shapeString = "smallTree";
    }
    else if(shapeType == 6){
      shapeString = "obelisk";
    }
    else if(shapeType == 7){
      shapeString = "snowyTree";
    }
    else if(shapeType == 8){
      shapeString = "snowyTree";
    }
    else if(shapeType == 9){
      shapeString = "house";
    }
    else{
      shapeString = "empty";
    }

    drawShape(p5, x1, x2, y1, y2, z, zoom, shapeString, shape)
  }

  function forest(p5, x1, x2, y1, y2, z, zoom, shapeType, shape){


    var shapeString;

    if(shapeType == 0 ){
      shapeString = "lake";
    }
    else if(shapeType == 1){
      shapeString = "empty";
    }
    else if(shapeType == 2){
      shapeString = "flower";
    }
    else if(shapeType == 3){
      shapeString = "grass";
    }
    else if(shapeType == 4){
      shapeString = "grass";
    }
    else if(shapeType == 5){
      shapeString = "rock";
    }
    else if(shapeType == 6){
      shapeString = "smallTree";
    }
    else if(shapeType == 7){
      shapeString = "smallTree";
    }
    else if(shapeType == 8){
      shapeString = "tree";
    }
    else if(shapeType == 9){
      shapeString = "tree";
    }
    else{
      shapeString = "empty";
    }

    drawShape(p5, x1, x2, y1, y2, z, zoom, shapeString, shape)


  }


  function lake(p5, x1, x2, y1, y2, z, zoom, shapeType, shape){


    var shapeString;

    if(shapeType == 0 ){
      shapeString = "lake";
    }
    else if(shapeType == 1){
      shapeString = "lake";
    }
    else if(shapeType == 2){
      shapeString = "fish";
    }
    else if(shapeType == 3){
      shapeString = "lake";
    }
    else if(shapeType == 4){
      shapeString = "lake";
    }
    else if(shapeType == 5){
      shapeString = "lake";
    }
    else if(shapeType == 6){
      shapeString = "seaweed";
    }
    else if(shapeType == 7){
      shapeString = "empty";
    }
    else if(shapeType == 8){
      shapeString = "grass";
    }
    else if(shapeType == 9){
      shapeString = "smallTree";
    }
    else{
      shapeString = "empty";
    }

    drawShape(p5, x1, x2, y1, y2, z, zoom, shapeString, shape);

  }

  function autumn(p5, x1, x2, y1, y2, z, zoom, shapeType, shape){

    var shapeString;

    if(shapeType == 0 ){
      shapeString = "grass";
    }
    else if(shapeType == 1){
      shapeString = "grass";
    }
    else if(shapeType == 2){
      shapeString = "grass";
    }
    else if(shapeType == 3){
      shapeString = "smallTree";
    }
    else if(shapeType == 4){
      shapeString = "smallTree";
    }
    else if(shapeType == 5){
      shapeString = "flower";
    }
    else if(shapeType == 6){
      shapeString = "tree";
    }
    else if(shapeType == 7){
      shapeString = "tree";
    }
    else if(shapeType == 8){
      shapeString = "tree";
    }
    else if(shapeType == 9){
      shapeString = "cave";
    }
    else{
      shapeString = "empty";
    }

      drawShape(p5, x1, x2, y1, y2, z, zoom, shapeString, shape);

  }



  function drawShape(p5, x1, x2, y1, y2, z, zoom, shapeType, shape){

    if(zoom > 2){
    p5.noStroke();
    }
    else{
      p5.stroke(0,80);
    }


    var tileOffset = p5.round(p5.map(p5.noise(x,y),0,1,0,50));
    var lakeOffset = p5.round(p5.map(p5.noise(x,y),0,1,-10,10));
    var treeOffset = p5.round(p5.map(p5.noise(x,y),0,1,-40,40));
    var rockOffset = p5.round(p5.map(p5.noise(x,y),0,1,-50,50));
    var autumnOffsetR = p5.round(p5.map(p5.noise(x,y),0,1,-10,10));
    var autumnOffsetG = p5.round(p5.map(p5.noise(y,x),0,1,-10,10));
    var autumnOffsetB = p5.round(p5.map(p5.noise(y,x),0,1,-10,10));


    //lake
    if(shapeType == "lake"){

      if(biome == "tiaga"){
        p5.fill(193+tileOffset, 217+tileOffset, 255+tileOffset);
      }

      p5.fill(193+lakeOffset, 217+lakeOffset, 255+lakeOffset);
      p5.rect(leftX,topY,colWidth,rowHeight);
    }
    else if(shapeType == "seaweed"){

      if(biome == "tiaga"){
        p5.fill(193+tileOffset, 217+tileOffset, 255+tileOffset);
      }

      p5.fill(193+lakeOffset, 217+lakeOffset, 255+lakeOffset);
      p5.rect(leftX,topY,colWidth,rowHeight);


      if(shape == false){
        return;
      }


      p5.strokeWeight(2);
      p5.stroke(80, 175, 112);
      p5.line(leftX,mapY(y+gridSize-(gridSize/5)),leftX,bottomY);
      p5.line(mapX(x+(gridSize/2)),mapY(y+gridSize-(gridSize/3)),mapX(x+(gridSize/2)),bottomY);
      p5.line(rightX,mapY(y+gridSize-(gridSize/5)),rightX,bottomY);


    }

    else if(shapeType == "fish"){

      if(biome == "tiaga"){
        p5.fill(193+tileOffset, 217+tileOffset, 255+tileOffset);
      }

      p5.fill(193+lakeOffset, 217+lakeOffset, 255+lakeOffset);
      p5.rect(leftX,topY,colWidth,rowHeight);

      if(shape == false){
        return;
      }

      p5.fill(193+rockOffset,217+rockOffset,255+rockOffset);
      p5.stroke(60+rockOffset);
      p5.triangle(mapX(x+gridSize/3),mapY(y+(gridSize/2)),mapX(x+(gridSize/2)),mapY(y+(gridSize/4)),mapX(x+gridSize-(gridSize/3)),mapY(y+(gridSize/2)));


    }
    //empty
    else if(shapeType == "empty"){

        p5.fill(198 , 255, 203);

      p5.rect(leftX,topY,colWidth,rowHeight);
    }
    //flower
    else if (shapeType == "flower"){

      if(biome == "autumn"){
        p5.fill(120+tileOffset+autumnOffsetR*2, 168+tileOffset, 79+tileOffset);
      }
      else{
        p5.fill(190+tileOffset, 239+tileOffset, 186+tileOffset);
     }
      p5.rect(leftX,topY,colWidth,rowHeight);

      if(shape == false){
        return;
      }

      if(biome == "autumn"){
        p5.fill(247+autumnOffsetR*10, 186+autumnOffsetG*3, 136);
      }
      else{
        p5.fill(240, 242, 147);
      }
      p5.stroke(165, 155, 119);

      p5.line(mapX(x+gridSize/2),mapY(y+gridSize-(gridSize/3)),mapX(x+(gridSize/2)),mapY(y+gridSize));
      p5.ellipse(mapX(x+(gridSize/1.9)),mapY(y+gridSize-(gridSize/3)),colWidthThird,rowHeightThird);

    }

    //grass
    else if(shapeType == "grass"){

      p5.fill(190+tileOffset, 239+tileOffset, 186+tileOffset);
      p5.rect(leftX,topY,colWidth,rowHeight);

      if(shape == false){
        return;
      }

      p5.strokeWeight(2);
      p5.stroke(123,182,91);
      p5.line(leftX,mapY(y+gridSize-(gridSize/5)),leftX,bottomY);
      p5.line(mapX(x+(gridSize/2)),mapY(y+gridSize-(gridSize/3)),mapX(x+(gridSize/2)),bottomY);
      p5.line(rightX,mapY(y+gridSize-(gridSize/5)),rightX,bottomY);
    }
    //rock
    else if(shapeType == "rock"){

      if(biome == "forest"){
        p5.fill(180+tileOffset);
      }
      else{
        p5.fill(200+tileOffset);
      }
      p5.rect(leftX,topY,colWidth,rowHeight);

      if(shape == false){
        return;
      }

      p5.fill(200+rockOffset);
      p5.stroke(60+rockOffset);
      p5.triangle(leftX,mapY(y+(gridSize/2)),mapX(x+(gridSize/2)),topY,rightX,mapY(y+(gridSize/2)));

    }
    //smalltree
    else if(shapeType== "smallTree"){

      if(biome == "forest"){
        p5.fill(110+tileOffset, 168+tileOffset, 79+tileOffset);
      }
      else if(biome == "autumn"){
        p5.fill(120+tileOffset+autumnOffsetR*2, 168+tileOffset, 79+tileOffset);
      }
      else{
        p5.fill(123+tileOffset,182+tileOffset,91+tileOffset);
      }
      //p5.fill(255);
      p5.rect(leftX,topY,colWidth,rowHeight);

      if(shape == false){
        return;
      }

      if(biome == "autumn"){
        p5.fill(143+autumnOffsetR*4,172+autumnOffsetG,101);
      }
      else{
        p5.fill(123+treeOffset,182+treeOffset,91+treeOffset);
      }
      p5.stroke(42, 71, 49);

      p5.line(mapX(x+(gridSize/2)),mapY(y+gridSize/2),mapX(x+(gridSize/2)),bottomY);
      p5.triangle(mapX(x+(gridSize*0.2)),mapY(y+(gridSize/2)),mapX(x+(gridSize/2)),mapY(y-(gridSize*0.1)),mapX(x+gridSize-(gridSize*0.2)),mapY(y+(gridSize/2)));


    }
    //obelisk
    else if(shapeType == "obelisk"){

      p5.fill(123+tileOffset,182+tileOffset,91+tileOffset);
      //p5.fill(255);
      p5.rect(leftX,topY,colWidth,rowHeight);

      if(shape == false){
        return;
      }

      p5.fill(150);
      p5.stroke(50);

      p5.beginShape();
      p5.vertex(mapX(x+(gridSize*0.35)),bottomY);
      p5.vertex(mapX(x+(gridSize*0.65)),bottomY);
      p5.vertex(mapX(x+(gridSize*0.65)),topY);
      p5.vertex(mapX(x+(gridSize*0.5)),mapY(y-(gridSize*0.2)));
      p5.vertex(mapX(x+(gridSize*0.35)),topY);

      p5.endShape(p5.CLOSE);

    }
    //tree
    else if(shapeType== "tree"){

      if(biome == "forest"){
        p5.fill(110+tileOffset, 168+tileOffset, 79+tileOffset);
      }
      else if(biome == "autumn"){
        p5.fill(130+autumnOffsetR+tileOffset, 168+tileOffset, 79+tileOffset);
      }
      else{
        p5.fill(123+tileOffset,182+tileOffset,91+tileOffset);
      }
      //p5.fill(255);
      p5.rect(leftX,topY,colWidth,rowHeight);



      if(shape == false){
        return;
      }

      if(biome == "autumn"){
          p5.fill(143+autumnOffsetR*4,172+autumnOffsetG,101);
      }
      else{
        p5.fill(123+treeOffset,182+treeOffset,91+treeOffset);
      }
      p5.stroke(42+treeOffset, 71+treeOffset, 49+treeOffset);

      p5.line(mapX(x+(gridSize/2)),mapY(y+gridSize/2),mapX(x+(gridSize/2)),bottomY);
      p5.triangle(leftX,mapY(y+gridSize/2),mapX(x+(gridSize/2)),mapY(y-gridSize/2),rightX,mapY(y+gridSize/2));




    }
    //snowyTree
      else if(shapeType=="snowyTree"){

        p5.fill(123+tileOffset,182+tileOffset,91+tileOffset);
        //p5.fill(255);
        p5.rect(leftX,topY,colWidth,rowHeight);

        p5.fill(255,p5.round(p5.map(p5.noise(x,y),0,1,0,255)));
        p5.rect(leftX,topY,colWidth,rowHeight);

        if(shape == false){
          return;
        }


        p5.fill(123+treeOffset,182+treeOffset,91+treeOffset);
        p5.stroke(42+treeOffset, 71+treeOffset, 49+treeOffset);

        p5.line(mapX(x+(gridSize/2)),mapY(y+gridSize/2),mapX(x+(gridSize/2)),bottomY);
        p5.triangle(leftX,mapY(y+gridSize/2),mapX(x+(gridSize/2)),mapY(y-gridSize/2),rightX,mapY(y+gridSize/2));

      //  if(tileType == "snow"){
          p5.fill(255);

          p5.triangle(mapX(x+(gridSize*0.13)),mapY(y+(gridSize*0.3)),mapX(x+(gridSize/2)),mapY(y-(gridSize/2)),mapX(x+gridSize-(gridSize*0.13)),mapY(y+(gridSize*0.3)));
      //  }
      }

    //house
    else if (shapeType == "house"){

      p5.fill(186+tileOffset, 178+tileOffset, 147+tileOffset);
      p5.stroke(66, 53, 43);

      if(shape == false){
        return;
      }

      //p5.rect(leftX,topY,p5.map(gridSize,x1,x2,0,256),mapY(gridSize-10));
      p5.rect(leftX,topY,colWidth,rowHeight);
      p5.fill(183, 156, 126);
      p5.rect(mapX(x+gridSize/3),mapY(y+gridSize/3),colWidthThird,rowHeightThird);
      p5.triangle(leftX,topY,mapX(x+(gridSize/2)),mapY(y-(gridSize/2)),rightX,topY);
      p5.rect(mapX(x+gridSize/3),mapY(y+gridSize/1.5),colWidthThird,rowHeightThird);

    }
    else if (shapeType == "cave"){

      if(biome == "forest"){
        p5.fill(110+tileOffset, 168+tileOffset, 79+tileOffset);
      }
      else if(biome == "autumn"){
        p5.fill(130+autumnOffsetR+tileOffset, 168+tileOffset, 79+tileOffset);
      }
      else{
        p5.fill(123+tileOffset,182+tileOffset,91+tileOffset);
      }
      //p5.fill(255);
      p5.rect(leftX,topY,colWidth,rowHeight);

      p5.fill(200);
      p5.stroke(60);

      if(shape == false){
        return;
      }

      p5.quad(mapX(x-gridSize),bottomY-1,mapX(x-(gridSize*0.3)),mapY(y-gridSize/2),mapX(x+gridSize-(gridSize*0.7)),mapY(y-gridSize/2),rightX,bottomY-1);

      p5.fill(120);
      p5.triangle(mapX(x-(gridSize*0.3)),bottomY-1,leftX,mapY(y+gridSize-(gridSize/3)),mapX(x+(gridSize*0.3)),bottomY-1);

    }
    else {

      if(biome == "forest"){
        p5.fill(119, 211, 114);
      }
      else{
        p5.fill(198 , 255, 203);
      }
      p5.rect(leftX,topY,colWidth,rowHeight);

    }




  }



  }

}
