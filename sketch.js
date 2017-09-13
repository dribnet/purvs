

function setup () {
  createCanvas(960, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  noFill();
  strokeWeight(0.5);
  
}

function draw (){
  var al;
  clear();
  for(var posy = 0; posy <=height*2; posy+=height/3){
    for(var posx = 0; posx <= width; posx+=(width/6)){
      al=255;
      for(var i = 1; i < 200; i+=2){
        stroke(172, 237, 255, al);
        push();
        translate(posx, posy);
        rotate(i);
        rect(0, 0, i, i);
        pop();
        al-=2.5;
      }
    }
  }

}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
