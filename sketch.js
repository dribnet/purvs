let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(230, 37, 177);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  let highlighttilew = 40;
  let squarew =40;
  let squareh = 40;
  for(var xtile = 0; xtile < sourceImg.width; xtile= xtile+highlighttilew){
      let highlighttileh = random(2,20);
    for(var ytile = 0; ytile < sourceImg.height;  ytile= ytile+highlighttileh){
      let mask = maskImg.get(xtile, ytile);

      if(mask[0]==255){
        noStroke();
        let pixMod = sourceImg.get(xtile, ytile);
        if (pixMod[1]>150){
        pixMod[0]=pixMod[0]*1.3;
        pixMod[1]=pixMod[1]*1.1;
        pixMod[2]=pixMod[2]/23;
      } else if (pixMod[0]>170){
        pixMod[0] = pixMod[0]/1.1;
        pixMod[1]=pixMod[1]*1.9;
        pixMod[2]=pixMod[2]/1.5;
      }else {
        pixMod[0]=pixMod[0]*2.3;
        pixMod[1]=pixMod[1]/1.1;
        pixMod[2]=pixMod[2]/1.6;
      }
        fill(pixMod);
        rect(xtile,ytile,squarew,squareh);
        //fill(pix[0],pix[1],pix[2],200);
        //rect(xtile+2,ytile,tilewidth,tileheight);
        var randline =  random(1,10);
        if (randline<4){
          stroke(230,37,177);
          strokeWeight(15);
          strokeCap(SQUARE);
          var xoffset = random(20,40);
          line(xtile+xoffset,ytile,xtile+xoffset,ytile+highlighttileh);
          noStroke();
        }
      }


}
}




  let bgtilewidth  =6;
  let bgtileheight = 6;

  let circlediam = 17; //diameter of background circles
  for(var xtile = 0; xtile < sourceImg.width; xtile= xtile+bgtilewidth){
    for(var ytile = 0; ytile < sourceImg.height;  ytile= ytile+bgtileheight){
    let mask = maskImg.get(xtile, ytile);
    let pixdark = sourceImg.get(xtile, ytile);
    if(mask[0]==120){
      pixdark[0] = pixdark[0]/1.1;
      pixdark[1]=  pixdark[1]/3.5;
      pixdark[2]=pixdark[2]/1.5;
      fill(pixdark[0],pixdark[1],pixdark[2],170);
      noStroke();
      ellipse(xtile,ytile,circlediam);
    } if(mask[0]==255){


    }
}
}
  let linetilew = 3.5;
  let linetileh = 3.5;
for(var xtile = 0; xtile < sourceImg.width; xtile= xtile+linetilew){
  for(var ytile = 0; ytile < sourceImg.height;  ytile= ytile+linetileh){
let mask = maskImg.get(xtile, ytile);
let pix1 = sourceImg.get(xtile, ytile);
    if (mask[0] <120){
      if (pix1[0]> 150){
        pix1[0]=pix1[0]*1.1;
        pix1[2]=pix1[2]*1.9;
      }else {
      pix1[0]=pix1[0]/1.5;
      pix1[2]=pix1[2]*1.3;
    }
      stroke(pix1);
      strokeWeight(.7);
      var lineLength = random(20,60);
      var xrand =random(1,5);
      line(xtile+xrand,ytile,xtile+xrand,ytile+lineLength);
      var rand = random(1,10);
      if(rand<2){
        noFill();
        stroke(pix1[0]*1.5,pix1[1]*1.5,pix1[2]*1.5,100);
        strokeWeight(1);
        circle (xtile,ytile,2);
        noStroke();
        fill(pix1);
}
    }
  }
}

  renderCounter = renderCounter +1 ;
  if(renderCounter > 1) {
    console.log("Done!")
    noLoop();
    //uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
