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
    background(240);

    rectMode(CENTER);
    noStroke();

    var secCompare = seconds;

    let hourRotate   = map(sin(hours), -1, 1, 0, 90);
    let minuteRotate = map(sin(minutes), -1, 1, 0, 90);
    let secondRotate = map(seconds, 0, 59, 0, 90);

    // let hourTranslate   = map(sin(hours), -1, 1, 0, boxSize);
    // let minuteTranslate = map(sin(minutes), -1, 1, 0, boxSize);
    // let secondTranslate = map(sin(seconds), -1, 1, 0, boxSize);

    fill(139, 155, 181);

    text("Hour: "   + hours, 10, 22);
    text("Minute: " + minutes, 10, 42);
    text("Second: " + seconds, 10, 62);
    text("Millis: " + millis, 10, 82);

    angleMode(DEGREES);

    //creating blocks
    // if(!secCompare == seconds){
    //      if(drawSecBlock){
    //         blocks.push(new Block());
    //         drawSecBlock = false;
    //     }
    // }

    if(millis > 950){
        if(drawSecBlock){
            blocks.push(new Block(1));
            drawSecBlock = false;
        }
    }

    if(seconds == 59){
        if(drawMinBlock){
            blocks.push(new Block(2));
            drawMinBlock = false;
        }
    }

    if(minutes == 59){
        if(drawHourBlock){
            blocks.push(new Block(3));
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

    for (var i = 0; i < blocks.length; i++) {
        blocks[i].move();
        blocks[i].display();
    }

    for (var i = 0; i < blocks.length; i++) {
        if(blocks[i].y > height){
            blocks.splice(i,1);
        }
    }

    //line(0,height/2,width,height);

}

function Block(blockType) {
    if(blockType == 1){
        this.size = random(10,14);
        this.fill = color(255,0,0);
    } else if (blockType == 2){
        this.size = random(40,50);
                this.fill = color(0,255,0);
    } else {
        this.size = random(70,80);
                this.fill = color(0,0,255);
    }
    this.y = 0 - this.size;
    this.x = 70;
    this.r = 0;
    this.ySpeed = 3.5;
    this.xSpeed = 1;

    this.move = function(){
        //this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.r += 0.5;
    }

    this.display = function(){
        push();
        fill(this.fill);
        translate(this.x,this.y);
        rotate(this.r);
        rect(0,0,this.size,this.size);
        pop();
    }
}
