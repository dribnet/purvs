/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off'
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    background(40);

    rectMode(CENTER);
    noStroke();

    var ground = new Ground();

    let hourRotate   = map(sin(hours), -1, 1, 0, 90);
    let minuteRotate = map(sin(minutes), -1, 1, 0, 90);
    let secondRotate = map(seconds, 0, 59, 0, 90);

    // let hourTranslate   = map(sin(hours), -1, 1, 0, boxSize);
    // let minuteTranslate = map(sin(minutes), -1, 1, 0, boxSize);
    // let secondTranslate = map(sin(seconds), -1, 1, 0, boxSize);

    fill(139, 155, 181);

    angleMode(DEGREES);
    textAlign(CENTER,CENTER);

    //creating blocks
    if (random() > 0.96){
        blocks.push(new Block(0," "));
    }

    if(millis > 950){
        if(drawSecBlock){
            blocks.push(new Block(1, seconds));
            drawSecBlock = false;
        }
    }

    if(seconds == 59){
        if(drawMinBlock){
            blocks.push(new Block(2,minutes));
            drawMinBlock = false;
        }
    }

    if(minutes == 59 && seconds == 59){
        if(drawHourBlock){
            blocks.push(new Block(3,hours));
            drawHourBlock = false;
        }
    }

    //resetting booleans
    if(millis < 300){
        drawSecBlock = true;
    }

    if(seconds == 0){
        drawMinBlock = true;
    }

    if(minutes == 0){
        drawHourBlock = true;
    }

        ground.display();

    for (var i = 0; i < blocks.length; i++) {
        if(blocks[i].y + blocks[i].size >= ground.returnY(blocks[i].x)){
            blocks[i].bounce();
        }
        blocks[i].move();
        blocks[i].display();
    }

    for (var i = 0; i < blocks.length; i++) {
        if(blocks[i].y > height){
            blocks.splice(i,1);
        }
        if(blocks[i].x > width){
            blocks.splice(i,1);
        }
    }
}

function Block(blockType, time) {
    if(blockType == 0){
        this.size = random(3,6);
        this.fill = color(247, 234, 195);
        this.textSize = this.size/2;
    } else if(blockType == 1){
        this.size = random(17,20);
        this.fill = color(232, 216, 169);
        this.textSize = this.size/2;
    } else if (blockType == 2){
        this.size = random(40,50);
        this.fill = color(216, 204, 169);
        this.textSize = this.size/2;
    } else {
        this.size = random(70,80);
        this.fill = color(198, 187, 155);
        this.textSize = this.size/2;
    }
    this.y = 0 - this.size;
    this.x = 70;
    this.r = 0;
    this.ySpeed = 4;
    this.xSpeed = 0;
    this.rSpeed = 0;

    this.blockTime = time;

    this.yAccel = 0.2;
    this.rAccel = 0;

    this.move = function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.ySpeed < 5){
            this.ySpeed += this.yAccel;
        }
        this.r += this.rSpeed;
        if(this.r > 360){
            this.r = this.rSpeed;
        }
    }

    this.bounce = function(){
        this.ySpeed += 2;
        this.ySpeed = -this.ySpeed;
        this.xSpeed += 1;
        this.rSpeed += 0.7;
    }

    this.display = function(){
        push();
        translate(this.x,this.y);
        rotate(this.r);
        fill(this.fill);
        rect(0,0,this.size,this.size);
        fill(20);
        textSize(this.textSize);
        text(this.blockTime,0,0);

        pop();
    }

}

function Ground() {

    this.stepNum = 6;
    this.startingY = 300;

    this.display = function(){
        push();
        rectMode(CORNER);
        for (var i = 0; i < this.stepNum; i++) {
            fill(100);
            rect(i*width/this.stepNum, this.startingY+i*25, width/this.stepNum,500 - this.startingY+i*25);
        }
        pop();
    }

    this.returnY = function(x){
        for (var i = 0; i < this.stepNum; i++) {
            if(x > i*width/this.stepNum && x < (i+1)*width/this.stepNum){
                return(this.startingY+i*25);
            }
        }
    }
}