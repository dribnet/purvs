var pulseAdditive = 0;

var dials = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,
    39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60
];

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

    background(255);
    strokeWeight(0);
    translate(480,250)

    main(millis_count);

    var pulse = map(cos(millis_count),-1,1,0,5);
    var pulse_blob = map(cos(millis_count),-1,1,30,10);

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
};

function second_hand(alarm,second_count,pulse,pulse_blob){
    rotate(second_count);
    if(alarm > 0){
        fill('rgb(255, 152, 112)');
    } else if(alarm == 0){
        fill('rgb(255, 87, 122)');
        pulseAdditive = random(0,20);
    } else {
        fill('rgb(25, 178, 151)');
        pulseAdditive = 0;
    };
    ellipse(0,pulse*8-220,pulse_blob+pulseAdditive);
    ellipse(0,pulse*8-240,pulse*4);
};

function minute_hand(minute_count,pulse){
    fill(255);
    for(i = 0; i < minute_count; i++){
        ellipse(0,pulse-145,5);
        rotate(1);
    };
    ellipse(0,pulse-145,10);
};

function hour_hand(hour_count,pulse){
    fill(255);
    for(i = 0; i < hour_count; i++){
        ellipse(0,pulse-95,5);
        rotate(1);
    };
    ellipse(0,pulse-95,10);
};

function main(millis_count){
    size = map(cos(millis_count),-1,1,350,330);
    fill('rgb(25, 178, 151)');
    ellipse(0,0,size);
    fill('rgb(255, 152, 112)');
    ellipse(0,0,size-85);
};

function draw_text_minutes(dials,pulse){
	textAlign(LEFT);
	fill(255);
	textSize(8);
	rotate(6);
	for(i = 1; i < 61; i++){
		text(dials[i],0,pulse-155);
		rotate(5.96);
	};
};

function draw_text_hours(dials,pulse){
	textAlign(LEFT);
	fill(255);
	textSize(14);
	rotate(30);
	for(i = 1; i < 13; i++){
		text(dials[i],0,pulse-110);
		rotate(29.6);
	};
};


