
/**

Generates a landscape: This landscape is based on forest tiaga biome.
The amount of rows and columns are randomized.
Calls the pattern class to do most of the randomization.

*/
function Landscape(rows,cols,rowHeight,colWidth){

  var rand = round(random(-20,10));
  rows = round(rows+rand/2);
  cols = cols+rand;
  colWidth = width/cols;
  rowHeight = height/rows;


  var pattern1 = new Pattern(rows,cols,rowHeight,colWidth,30,-1,-1,255,true);


  this.drawLandscape = function(){

    //green color
    background(169, 234+random(-25,25), 156);

    pattern1.drawEnvironment();
    pattern1.printPopulations();
    //pattern1.drawPopulations();

  }



}
