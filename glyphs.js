
//____________[DESERT GLYPHS]____________\\
function drawSkelly(p5,xpos, ypos, rad, hex_color) {// sun-bleached, skeletal remains of a large animal buried in the sand
    var w = rad*2;
    var line = rad/50;
    var strokeCol = p5.lerpColor(hex_color,p5.color("#dbc357"),0.5);

    p5.push();
    p5.fill(strokeCol);
    p5.strokeWeight(line);
    p5.stroke(hex_color);
    p5.stroke(strokeCol);
    var ypos = ypos - rad / 2
    var xpos = xpos - rad / 8

    // base position, tip position, and thickness of each bone
    var b1 = [xpos, ypos + w / 2];
    var b1_tip = [xpos - w * 7 / 32, ypos + w * 3 / 32];
    var b1_mid = midpoint(b1, b1_tip);
    var b1_thick = rad * 0.35;
    var b1_tip_thick = b1_thick / 6;
    var b1_mid_thick = p5.lerp(b1_thick, b1_tip_thick, 0.5);

    var b2 = [xpos + w * 1 / 4, ypos + w * 10 / 32];
    var b2_tip = [xpos + w * 1 / 32, ypos + w * 1 / 32];
    var b2_mid = midpoint(b2, b2_tip);
    var b2_thick = rad * 0.25;
    var b2_tip_thick = b2_thick / 6;
    var b2_mid_thick = p5.lerp(b2_thick, b2_tip_thick, 0.5);

    var b3 = [xpos + w * 13 / 32, ypos + w * 6 / 32];
    var b3_tip = [xpos + w * 8.5 / 32, ypos - 5 / 32];
    var b3_mid = midpoint(b3, b3_tip);
    var b3_thick = rad * 0.15;
    var b3_tip_thick = b3_thick / 6;
    var b3_mid_thick = p5.lerp(b3_thick, b3_tip_thick, 0.5);

    //shadows
    p5. ellipse( b1[0] - b1_thick*0.4 ,b1[1] - b1_thick * 0, b1_thick * 1.65 ,b1_thick * 1.2 );
    p5. ellipse( b2[0] - b2_thick*0.4 ,b2[1] - b2_thick * 0, b2_thick * 1.65 ,b2_thick * 1.2 );
    p5. ellipse( b3[0] - b3_thick*0.4 ,b3[1] - b3_thick * 0, b3_thick * 1.65 ,b3_thick * 1.2 );


    p5.fill("white")
    p5.beginShape(); //BONE 1
    p5.curveVertex(b1_tip[0] - b1_tip_thick / 2, b1_tip[1]); //L tip
    p5.curveVertex(b1_mid[0] + b1_mid_thick * 1 / 8, b1_mid[1] + b1_tip_thick / 2); //mid L
    p5.curveVertex(b1[0] - b1_thick / 2, b1[1] + b1_thick / 4); //left
    p5.curveVertex(b1[0] + b1_thick / 8, b1[1] + b1_thick *0.55); //bottom
    p5.curveVertex(b1[0] + b1_thick / 2, b1[1]); //right 
    p5.curveVertex(b1_mid[0] + b1_mid_thick, b1_mid[1] - b1_tip_thick); // mid R
    p5.curveVertex(b1_tip[0] + b1_tip_thick, b1_tip[1] - b1_tip_thick / 4); //R tip
    p5.curveVertex(b1_tip[0] - b1_tip_thick / 2, b1_tip[1]); //L tip
    p5.curveVertex(b1_mid[0] + b1_mid_thick * 1 / 8, b1_mid[1] + b1_tip_thick / 2); //mid L
    p5.curveVertex(b1[0] - b1_thick / 2, b1[1] + b1_thick / 4); //left
    p5.endShape();

    p5.beginShape(); //BONE 2
    p5.curveVertex(b2_tip[0] - b2_tip_thick / 2, b2_tip[1]); //L tip
    p5.curveVertex(b2_mid[0] + b2_mid_thick * 1 / 8, b2_mid[1] + b2_tip_thick / 2); //mid L
    p5.curveVertex(b2[0] - b2_thick / 2, b2[1] + b2_thick / 4); //left
    p5.curveVertex(b2[0] + b2_thick / 8, b2[1] + b2_thick *0.55); //bottom
    p5.curveVertex(b2[0] + b2_thick / 2, b2[1]); //right 
    p5.curveVertex(b2_mid[0] + b2_mid_thick, b2_mid[1] - b2_tip_thick); // mid R
    p5.curveVertex(b2_tip[0] + b2_tip_thick, b2_tip[1] - b2_tip_thick / 4); //R tip
    p5.curveVertex(b2_tip[0] - b2_tip_thick / 2, b2_tip[1]); //L tip
    p5.curveVertex(b2_mid[0] + b2_mid_thick * 1 / 8, b2_mid[1] + b2_tip_thick / 2); //mid L
    p5.curveVertex(b2[0] - b2_thick / 2, b2[1] + b2_thick / 4); //left
    p5.endShape();

    p5.strokeWeight(line*5/6); //decrease line weight as bones decrease in size

    p5.beginShape(); //BONE 3
    p5.curveVertex(b3_tip[0] - b3_tip_thick / 2, b3_tip[1]); //L tip
    p5.curveVertex(b3_mid[0] + b3_mid_thick * 1 / 8, b3_mid[1] + b3_tip_thick / 2); //mid L
    p5.curveVertex(b3[0] - b3_thick / 2, b3[1] + b3_thick / 4); //left
    p5.curveVertex(b3[0] + b3_thick / 8, b3[1] + b3_thick * 0.55); //bottom
    p5.curveVertex(b3[0] + b3_thick / 2, b3[1]); //right 
    p5.curveVertex(b3_mid[0] + b3_mid_thick, b3_mid[1] - b3_tip_thick); // mid R
    p5.curveVertex(b3_tip[0] + b3_tip_thick, b3_tip[1] - b3_tip_thick / 4); //R tip
    p5.curveVertex(b3_tip[0] - b3_tip_thick / 2, b3_tip[1]); //L tip
    p5.curveVertex(b3_mid[0] + b3_mid_thick * 1 / 8, b3_mid[1] + b3_tip_thick / 2); //mid L
    p5.curveVertex(b3[0] - b3_thick / 2, b3[1] + b3_thick / 4); //left
    p5.endShape();

    p5.strokeWeight(line*4/6);

    p5.pop();
}
function drawSteps(p5,xpos, ypos, rad, hex_color,mode){ //footsteps drawn in one of 3 orientations
    var w = rad*2;
    var col = p5.color("#dbc357")
    var strokeCol = p5.lerpColor(hex_color,col,0.65);
    var stepSize = w/10;
    var p1_index = Math.abs(mode+3)%5;
    var p1 =[0,0+w/2]; 
    var p2 =[0,0-w/2];
    p5.push();

    p5.stroke(strokeCol);
    p5.fill(strokeCol);
    p5.translate(xpos,ypos);
    p5.rotate(p5.radians(mode*63.435));
    for(var y = p1[1]-stepSize*7/3;y>p2[1]+stepSize*2;y-=stepSize){
        stepno = Math.floor((y-p2[1])/stepSize);
        if(stepno%2 == 0){
            p5.ellipse(p1[0]-stepSize/3,y,w/25,w/16);
        }else{
            p5.ellipse(p1[0]+stepSize/3,y,w/25,w/16);
        }
    }

    p5.pop();
}


//____________[MOUTAIN GLYPHS]____________\\
function drawHill(p5,xpos,ypos,rad,hex_color){ //rolling hill: overlaps tile to the right
    var w  = rad;
    var line = rad/13

    p5.push();
    p5.fill(hex_color);  
    p5.stroke(hex_color);
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(xpos+w*7/4,ypos+w*0.2);
    p5.vertex(xpos-w*0/4,ypos+w*1-line/2);
    p5.vertex(xpos-w*4/4+line/2,ypos+w*0.5);
    p5.endShape(p5.CLOSE);

    p5.stroke("white");
    p5.strokeWeight(line);
    p5.beginShape();
    p5.curveVertex(xpos-w*5/4,ypos+w*0.5);
    //befor midpoint 
    p5.curveVertex(xpos-w*4/4,ypos+w*0.5);
    p5.curveVertex(xpos-w*3/4,ypos+w*0.2);
    p5.curveVertex(xpos-w*2/4,ypos+w*0.2);
    p5.curveVertex(xpos-w*1/4,ypos+w*0.1);
    //center of hex
    p5.curveVertex(xpos-w*0/4,ypos-w*0.1);
    //past midpoint
    p5.curveVertex(xpos+w*1/4,ypos+w*0.1);
    p5.curveVertex(xpos+w*2/4,ypos+w*0.05);
    p5.curveVertex(xpos+w*3/4,ypos-w*0.35);
    p5.curveVertex(xpos+w*4/4,ypos-w*0.5);
    //curve outside hex
    p5.curveVertex(xpos+w*5/4,ypos-w*0.35);
    p5.curveVertex(xpos+w*6/4,ypos+w*0.05);
    p5.curveVertex(xpos+w*7/4,ypos+w*0.2);
    //finalise curve
    p5.curveVertex(xpos+w*7/4,ypos+w*0.2);
    p5.endShape();
    p5.pop();

}
function drawMountain(p5,xpos,ypos,rad,hex_color){ //moutain outline with sharp peaks;
    var w  = rad;
    var line = rad/9

    p5.noFill();
    p5.push();
    p5.fill(hex_color);  
    p5.stroke("white");
    p5.strokeWeight(line);

    p5.beginShape(); //Outline
    p5.vertex(xpos-w*4/4,ypos+w*0.38);
    p5.vertex(xpos-w*3/4,ypos+w*0.15);
    p5.vertex(xpos-w*5/8,ypos+w*0.4);
    p5.vertex(xpos-w*1/4,ypos-w*0.35);
    p5.vertex(xpos-w*1/8,ypos-w*0.2);

    p5.vertex(xpos+w*1/8,ypos-w*1);

    p5.vertex(xpos+w*2/4,ypos+w*0.05);
    p5.vertex(xpos+w*5/8,ypos-w*0.3);
    p5.vertex(xpos+w*4/4,ypos+w*0.38);
    p5.endShape();
    p5.pop();
}
function drawSnowyMountain(p5,xpos,ypos,rad,hex_color){ //at the tippy top of its domains
    var w  = rad;
    var line = rad/7
    p5.noFill();
    p5.push();

    p5.fill("white");
    p5.stroke("white");
    p5.strokeWeight(1);

    p5.beginShape(); //snow 1
    p5.vertex(xpos-w*1/8+line,ypos-w*0.2-line*2);
    p5.vertex(xpos+w*1/8,ypos-w*1+line/2);
    p5.vertex(xpos+w*2/4-line  ,ypos+w*0.05-line*2);
    p5.endShape(p5.CLOSE);

    p5.beginShape(); //snow 2
    p5.vertex(xpos+w*2/4 -line/10,ypos+w*0.05);
    p5.vertex(xpos+w*5/8,ypos-w*0.3);
    p5.vertex(xpos+w*4/4-line*1.75,ypos+w*0.38-line*3.5);
    p5.endShape(p5.CLOSE);

    p5.noFill();  
    p5.strokeWeight(line);

    p5.beginShape(); //Outline
    p5.vertex(xpos-w*4/4,ypos+w*0.38);
    p5.vertex(xpos-w*3/4,ypos+w*0.15);
    p5.vertex(xpos-w*5/8,ypos+w*0.4);
    p5.vertex(xpos-w*1/4,ypos-w*0.35);
    p5.vertex(xpos-w*1/8,ypos-w*0.2);

    p5.vertex(xpos+w*1/8,ypos-w*1);

    p5.vertex(xpos+w*2/4,ypos+w*0.05);
    p5.vertex(xpos+w*5/8,ypos-w*0.3);
    p5.vertex(xpos+w*4/4,ypos+w*0.38);
    p5.endShape();
    p5.pop();
}

//____________[MOUTAIN GLYPHS]____________\\
 
function drawForest(p5, x, y, bottom_size, hex_color) { //tree glyph to mark forests
    p5.push();
    p5.rectMode(p5.CENTER);
    p5.fill(hex_color);
    p5.strokeWeight(bottom_size/10);
    p5.stroke("white");

    var bs = bottom_size;
    var c_b = Math.pow(bs, 2) + Math.pow(bs / 2, 2);
    var h = Math.sqrt(c_b) * 0.6;
    var rad = bottom_size / 3;

    p5.rect(x, y + bottom_size * 0.5, bottom_size / 5, bottom_size * 0.9);
    p5.triangle(x - rad, y + h, x + rad, y + h, x, y);
    y -= bottom_size / 6;
    rad *= 1.125;
    p5.triangle(x - rad, y + h, x + rad, y + h, x, y);

    p5.pop();
}



function drawWave(p5, xpos, ypos, x1, x2, y1, y2, rad) {
    var w = rad * 4;
    xpos += rad / 32

    var res = 32;
    var amp = 21; // higher val == shorter waves
    var period = 18.2; // lower val == more waves
    period *= w;
    amp = w / amp;
    var xspace = w / res;
    var dx = (360 / period) * xspace; // Value for incrementing x
    var theta = 0; // x1+xpos;
    var store = new Array(Math.floor(w / xspace)); // y values

    var x = theta;
    for (var i = 0; i < store.length; i++) {
        store[i] = Math.cos(x) * amp;
        x += dx;
    }

    p5.push();
    p5.noFill();
    p5.stroke("white");
    p5.strokeWeight(rad / 6);
    p5.beginShape();

    for (var x = 0; x < store.length; x++) {
        p5.curveVertex(xpos + (x * xspace) - w / 2, ypos + store[x]);
    }

    p5.endShape();
    p5.pop();
}

