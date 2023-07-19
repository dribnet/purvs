var pulseAdditive = 0;

var dials = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,
    39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60
]; //setup the numbers that will create the dials on the clock face.

function draw_clock(hour, minute, second, millis, alarm) {
        var dials = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,
    39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60
    ]; angleMode(DEGREES)
    var millis_count = map(millis,0,1000,0,360);
    var secondsWithFraction   = second + (millis / 1000);
    var second_count  = map(secondsWithFraction,0,60,0,360);
    var minute_count = map(minute,0,60,0,360);
    var hour_count = map(hour,0,12,0,360);
    if(hour >= 12){
        hour_count -= 360;;
    };

    //the above area is used to convert the time numbers into more rotation freiendly variables.

    background(255);
    strokeWeight(0);
    translate(480,250)

    //setup the scene
    main(millis_count);

    var pulse = map(cos(millis_count),-1,1,0,5); //creates the clock movement from milliseconds 
    var pulse_blob = map(cos(millis_count),-1,1,30,10); //creates the alarm movement from milliseconds

    push();
    second_hand(alarm,second_count,pulse,pulse_blob);
    pop();
    push();
    minute_hand(minute_count,pulse);
    pop();
    push();
    hour_hand(hour_count,pulse);
    pop();
    push();
    draw_text_minutes(dials,pulse);
    pop();
    push();
    draw_text_hours(dials,pulse);
    pop();

    //calls all the appropriate functions and isolates there transofrmations.
};

function second_hand(alarm,second_count,pulse,pulse_blob){ //second hand
    rotate(second_count);
    if(alarm > 0){
        fill('rgb(255, 152, 112)');
    } else if(alarm == 0){
        fill('rgb(255, 87, 122)');
        pulseAdditive = random(0,15);
    } else {
        fill('rgb(25, 178, 151)');
        pulseAdditive = 0;
    };
    ellipse(0,pulse*8-220,pulse_blob+pulseAdditive);
    ellipse(0,pulse*8-240,pulse*4+pulseAdditive);
};

function minute_hand(minute_count,pulse){ // minute hand
    fill(255);
    for(i = 0; i < minute_count; i++){
        ellipse(0,pulse-145,5);
        rotate(1);
    };
    ellipse(0,pulse-145,10);
};

function hour_hand(hour_count,pulse){ // hour hand
    fill(255);
    for(i = 0; i < hour_count; i++){
        ellipse(0,pulse-95,5);
        rotate(1);
    };
    ellipse(0,pulse-95,10);
};

function main(millis_count){ // setup the background of the clock face
    size = map(cos(millis_count),-1,1,350,330);
    fill('rgb(25, 178, 151)');
    ellipse(0,0,size);
    fill('rgb(255, 152, 112)');
    ellipse(0,0,size-85);
};

function draw_text_minutes(dials,pulse){ // draws the minute dials and roates them around the clock face
	textAlign(LEFT);
	fill(255);
	textSize(8);
	rotate(6);
	for(i = 1; i < 61; i++){
		text(dials[i],0,pulse-155);
		rotate(5.96);
	};
};

function draw_text_hours(dials,pulse){ //draws the hour dials and rotates them accordingly.
	textAlign(LEFT);
	fill(255);
	textSize(14);
	rotate(30);
	for(i = 1; i < 13; i++){
		text(dials[i],0,pulse-110);
		rotate(29.6);
	};
};


