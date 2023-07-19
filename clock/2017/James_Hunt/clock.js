// These variables represent the conventions set by the Braille Authority.
// However they have been scaled and are represented as pixels
var dotSize = 36; // 1.44mm Dot Size
var dotSpace = 58.5; // 2.34mm Space between Dots
var cellSpace = 155; // 6.1mm Space between Cells

function draw_clock(obj) {
	// Sets the colours for use. As changing variables though so I can edit them with my alarm
    let cyan = color(0, 255, 255); // Cyan
    let yellow = color(255, 255, 0); // Yellow
    let magenta = color(255, 0, 255); // Meganta

    // Set for me by the existing code. The time with the addition of the alarm function
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarm = obj.seconds_until_alarm

    // Makes a variable to be controlled by the layers and used by the Braille Cells.
    let timer = seconds;

    // Stroke weight to 0 pixels.
    strokeWeight(0);

    //Alarm Code.

    // Sets up the check for the alarm. Sets the normal state and the alarm state.
    // Alarm state is set to have the background flash black and white with the 
    // Braille flashing the opposite to the background. Largely inspired by
    // the lecturers code for the Bar Clock.
    if (alarm < 0) {
        background(230); // Light Grey Background
    }
    else {
        if(seconds % 2 == 0) {
            background(0); // Black
            cyan = (255);
            yellow = (255);
            magenta = (255);
        }
        else {
            background(230); // White
            cyan = (0);
            yellow = (0);
            magenta = (0);
        }
    }

	// Again basically derived from the lecturers Bar Clock, however changed obviously
	// for the format of my clock and the aesthetic I am going for. Controls the alarm 
	// count down from 20. Makes the background turn progressively darker until it is black
	// and the Braille progressively changes from their set colour to white to contrast the
	// background.
	if (alarm > 0) {
		fill(100);
		rect(width-50, height-50, 40, 40);

		if (alarm < 20.0) {
			var alarmBackground = map(alarm, 0, 20, 0, 230);
			background (alarmBackground);

			var colourChange = map(alarm, 0, 20, 255, 0);
			cyan = color(colourChange, 255, 255);
			yellow = color(255, 255, colourChange);
			magenta = color(255, colourChange, 255);
		}
	}

	// Code for the Braille Numbers and Layers.

    // Loops all the code into 3 different layers for the clock.
    for(let layer = 0; layer<3; layer++){
        // Sets all the colours for the layers dependant on the layer.
        if (layer == 0){
            fill (cyan);
        } else if (layer == 1){
            fill (yellow);
        }
        else {
            fill (magenta);
        }

        // Syncs the layers and timer variables so each layer represents a different time.
        if (layer == 0){
            timer = seconds;
        } else if (layer == 1){
            timer = minutes;
        }
        else {
            timer = hours;
        }

        // Controls the Ones column on the numbers. Split between the 0-59 format and the
        // 1-12 format as they can't be coded the same on a AM/PM clock.
        if (layer <= 1){
            push();
            translate(402, 168);
            if((timer == 1)||(timer == 11)||(timer == 21)||(timer == 31)||(timer == 41)||(timer == 51)){
                drawA1();
            } else if((timer == 2)||(timer == 12)||(timer == 22)||(timer == 32)||(timer == 42)||(timer == 52)){
                draw2();
            } else if((timer == 3)||(timer == 13)||(timer == 23)||(timer == 33)||(timer == 43)||(timer == 53)){
                draw3();
            } else if((timer == 4)||(timer == 14)||(timer == 24)||(timer == 34)||(timer == 44)||(timer == 54)){
                draw4();
            } else if((timer == 5)||(timer == 15)||(timer == 25)||(timer == 35)||(timer == 45)||(timer == 55)){
                draw5();
            } else if((timer == 6)||(timer == 16)||(timer == 26)||(timer == 36)||(timer == 46)||(timer == 56)){
                draw6();
            } else if((timer == 7)||(timer == 17)||(timer == 27)||(timer == 37)||(timer == 47)||(timer == 57)){
                draw7();
            } else if((timer == 8)||(timer == 18)||(timer == 28)||(timer == 38)||(timer == 48)||(timer == 58)){
                draw8();
            } else if((timer == 9)||(timer == 19)||(timer == 29)||(timer == 39)||(timer == 49)||(timer == 59)){
                draw9();
            } else if((timer == 0)||(timer == 10)||(timer == 20)||(timer == 30)||(timer == 40)||(timer == 50)){
                draw0();
            }
            pop();
        }
        else {
            push();
            translate(402, 168);
            if((timer == 1)||(timer == 11)||(timer == 13)||(timer == 23)){
                drawA1();
            } else if((timer == 2)||(timer == 12)||(timer == 14)||(timer == 0)){
                draw2();
            } else if((timer == 3)||(timer == 15)){
                draw3();
            } else if((timer == 4)||(timer == 16)){
                draw4();
            } else if((timer == 5)||(timer == 17)){
                draw5();
            } else if((timer == 6)||(timer == 18)){
                draw6();
            } else if((timer == 7)||(timer == 19)){
                draw7();
            } else if((timer == 8)||(timer == 20)){
                draw8();
            } else if((timer == 9)||(timer == 21)){
                draw9();
            } else if((timer == 10)||(timer == 22)){
                draw0();
            }
            pop();
        }

        //Controls the Tens column on the numbers. Same formatting as above, but this time hours is only 0 and 1.
        if (layer <= 1){
            push();
            translate(247, 168);
            if((timer == 1)||(timer == 2)||(timer == 3)||(timer == 4)||(timer == 5)
            ||(timer == 6)||(timer == 7)||(timer == 8)||(timer == 9)||(timer == 0)){
                draw0();
            } else if((timer == 11)||(timer == 12)||(timer == 13)||(timer == 14)||(timer == 15)
            ||(timer == 16)||(timer == 17)||(timer == 18)||(timer == 19)||(timer == 10)){
                drawA1();
            } else if((timer == 21)||(timer == 22)||(timer == 23)||(timer == 24)||(timer == 25)
            ||(timer == 26)||(timer == 27)||(timer == 28)||(timer == 29)||(timer == 20)){
                draw2();
            } else if((timer == 31)||(timer == 32)||(timer == 33)||(timer == 34)||(timer == 35)
            ||(timer == 36)||(timer == 37)||(timer == 38)||(timer == 39)||(timer == 30)){
                draw3();
            } else if((timer == 41)||(timer == 42)||(timer == 43)||(timer == 44)||(timer == 45)
            ||(timer == 46)||(timer == 47)||(timer == 48)||(timer == 49)||(timer == 40)){
                draw4();
            } else if((timer == 51)||(timer == 52)||(timer == 53)||(timer == 54)||(timer == 55)
            ||(timer == 56)||(timer == 57)||(timer == 58)||(timer == 59)||(timer == 50)){
                draw5();
            }
            pop();
        }
        else {
            push();
            translate(247, 168);
            if ((timer == 1)||(timer == 2)||(timer == 3)||(timer == 4)||(timer == 5)||(timer == 6)
            ||(timer == 7)||(timer == 8)||(timer == 9)||(timer == 13)||(timer == 14)||(timer == 15)
            ||(timer == 16)||(timer == 17)||(timer == 18)||(timer == 19)||(timer == 20)||(timer == 21)){
                draw0();
            } else if((timer == 10)||(timer == 11)||(timer == 12)||(timer == 22)||(timer == 23)||(timer == 0)){
                drawA1();
            }
            pop();
        }

        // The easier Braille Cells with less variables than the numbered cells.

        // Calls the Draw Number Indicator Function.
        push();
        translate(92, 168);
        drawN();
        pop();

        // Changes the A in AM to P or vice versa depending on the time of the day.
        push(); 
        translate(617, 168);
        if(hours <= 12){
            drawA1();
        } else {
            drawP();
        }
        pop();

        // Calls the Draw M function.
        push();
        translate(772, 168);
        drawM();
        pop();

        // Translates ever so slightly so you can see each layer.
        translate(5, 5);
    }
}

// Braille "Fonts"

// AM and the Number 1 draw function.
function drawA1(){
	ellipse(0, 0, dotSize, dotSize);
}
// PM draw function.
function drawP(){
    ellipse(0, 0, dotSize, dotSize);
    ellipse(dotSpace, 0, dotSize, dotSize);
    ellipse(0, dotSpace, dotSize, dotSize);
    ellipse(0, 2*dotSpace, dotSize, dotSize);
}
// Draws the M for the AM and PM draw functions.
function drawM(){
    ellipse(0, 0, dotSize, dotSize);
    ellipse(dotSpace, 0, dotSize, dotSize);
    ellipse(0, 2*dotSpace, dotSize, dotSize);
}
// Draws the Number Indicator.
function drawN(){
    ellipse(dotSpace, dotSpace, dotSize, dotSize);
    ellipse(dotSpace, 0, dotSize, dotSize);
    ellipse(dotSpace, 2*dotSpace, dotSize, dotSize);
    ellipse(0, 2*dotSpace, dotSize, dotSize);
}
// Draws the Number 2
function draw2(){
    ellipse(0, 0, dotSize, dotSize);
    ellipse(0, dotSpace, dotSize, dotSize);
}
// Draws the Number 3
function draw3(){
    ellipse(0, 0, dotSize, dotSize);
    ellipse(dotSpace, 0, dotSize, dotSize);
}
// Draws the Number 3
function draw4(){
    ellipse(0, 0, dotSize, dotSize);
    ellipse(dotSpace, 0, dotSize, dotSize);
    ellipse(dotSpace, dotSpace, dotSize, dotSize);
}
// Draws the Number 4
function draw5(){
    ellipse(0, 0, dotSize, dotSize);
    ellipse(dotSpace, dotSpace, dotSize, dotSize);
}
// Draws the Number 5
function draw6(){
    ellipse(0, 0, dotSize, dotSize);
    ellipse(dotSpace, 0, dotSize, dotSize);
    ellipse(0, dotSpace, dotSize, dotSize);
}
// Draws the Number 6
function draw7(){
    ellipse(0, 0, dotSize, dotSize);
    ellipse(dotSpace, 0, dotSize, dotSize);
    ellipse(0, dotSpace, dotSize, dotSize);
    ellipse(dotSpace, dotSpace, dotSize, dotSize);
}
// Draws the Number 7
function draw8(){
    ellipse(0, 0, dotSize, dotSize);
    ellipse(0, dotSpace, dotSize, dotSize);
    ellipse(dotSpace, dotSpace, dotSize, dotSize);
}
// Draws the Number 8
function draw9(){
    ellipse(dotSpace, 0, dotSize, dotSize);
    ellipse(0, dotSpace, dotSize, dotSize);
}
// Draws the Number 9
function draw0(){
    ellipse(dotSpace, 0, dotSize, dotSize);
    ellipse(0, dotSpace, dotSize, dotSize);
    ellipse(dotSpace, dotSpace, dotSize, dotSize);
}