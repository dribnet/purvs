
var main_canvas , canvasSize = 1, canvasSelector, drawingMode = 'landscape', modeSelector;
var mage, cya, mageA, cyaA;

function setup () {
	mage =  color(232,12,163);
	cya =  color(31, 204, 178);

	createCanvas(960, 500);

	main_canvas = createCanvas(960, 500);
    main_canvas.parent('canvas-container');

    canvasSelector = createSelect();
    canvasSelector.option(1);
    canvasSelector.option(2);
    canvasSelector.option(3);
    canvasSelector.value(1);
    canvasSelector.parent('canvas-selector-holder');
    canvasSelector.changed(changeCanvasSize);

    modeSelector = createSelect();
    modeSelector.option('wallpaper');
    modeSelector.option('landscape');
    modeSelector.value('landscape');
    modeSelector.parent('mode-selector-holder');
    modeSelector.changed(changeMode);

}

var value = 0;
var xoff = 0.0;


function draw () {
	if (drawingMode === 'wallpaper'){
		drawWallpaper();
	}
	if (drawingMode === 'landscape'){
		drawLandscape();
	}
}

function mouseClicked() {
	if (value == 1) {
		value = 0;
	}
	else {
		value =1;
	}
}
function drawWallpaper(){
	var numb = -60;
	if (value == 0){
		noStroke();
		fill(41, 4, 33);
		rect (0, 0, width, height);
		for(j = 10; j<height; j=j+10){
			stroke (255, 208, 38,100);
			strokeWeight(random(0.5,2));
			line (0, j, width, j);
		}
		// for(i = 20; i<width; i=i+20){
		// 	stroke(232,12,163,100);
		// 	strokeWeight(random(0.5,2));
		// 	line (i, 0, i, height);
		// }
		for (j = 100; j<height+1;j=j+200){
			for (i = 100; i<width+100;i=i+200){
				stroke(232,12,163,250);
				noFill();
				strokeWeight(random(1,3));
				arc (i, j, -200, -200, random (PI, TWO_PI*0.8)-1.5, 0 );
				stroke (31, 204, 178,250);
				strokeWeight(random(1,4));
				arc (i, j, -200, -200, random (PI, TWO_PI*0.8)+1.2, 1 );
			}
		}
		for (j = 100; j<height+100;j=j+200){
			for (i = 100; i<width+100;i=i+200){
				xoff = xoff+0.1;
				var n= noise(xoff)*height;

				stroke(232,12,163,250);
				noFill();
				strokeWeight(random(1,3));
				arc (i, j, -100, -100, random (0, PI), 2 );
				stroke (31, 204, 178,250);
				strokeWeight(random(1,4));
				arc (i, j, -100, -100, random (0, PI), 3 );
			}
		}

		value = 1;
	}
	

}

function drawLandscape(){
	xoff = xoff+0.1;
	var n= noise(xoff)*height/random(10,50);
	if (value == 0){
		noStroke();
		fill(5, 33, 29);
		rect (0, 0, width, height);
		for (j = 100; j<height+100;j=j+150){
						var n= noise(xoff)*height/random(5,25);
						stroke(31, 204, 178);
						fill(232,12,163, 100+j/100);
						strokeWeight(0.8);
						beginShape();
						vertex(-1,j+250);
						vertex(0, j+(random (-n, n)));
						vertex(random(50,100), j+(random (-n, n)));
						vertex(random (110,150), j+(random (-n, n)));
						vertex(random(160,250), j+(random (-n, n)));
						vertex(random(260,350), j+(random (-n, n)));
						vertex(random (360, 400), j+(random (-n, n)));
						vertex(random (410, 450), j+(random (-n, n)));
						vertex(random (460, 550), j+(random (-n, n)));
						vertex(random (560, 600), j+(random (-n, n)));
						vertex(random (610, 650), j+(random (-n, n)));
						vertex(random (660, 750), j+(random (-n, n)));
						vertex(random (760, 850), j+(random (-n, n)));
						vertex(random (860, 900), j+(random (-n, n)));
						vertex(random (910, 950), j+(random (-n, n)));
						vertex(random (960, 970), j+(random (-n, n)));
						vertex(1000, j+250);
						endShape();
					
		}
		value = 1;
	}
}


function changeCanvasSize(){
    if(drawingMode === 'wallpaper'){
        canvasSize = canvasSelector.value();
        if(canvasSize == 2){
            main_canvas = resizeCanvas(1920, 1000);
        }
        else if(canvasSize == 3){
            main_canvas = resizeCanvas(2880, 1500);
        }
        else {
            main_canvas = resizeCanvas(960, 500);
        }
        clear();
        background(0);
        redraw();
    }
}

function changeMode(){
    drawingMode = modeSelector.value();
    if(drawingMode === 'wallpaper'){
    }
    else if(drawingMode === 'landscape'){
    }
    clear();
    background(0);
    redraw();
}


function keyTyped() {
	if (key == '!') {
		saveBlocksImages()
	}
	if (key == ' '){
		print("Spacebar was hit")
		if (drawingMode === 'wallpaper'){
			drawingMode = 'landscape';
			value = 0;
		} 
		else if (drawingMode === 'landscape') {
			drawingMode = 'wallpaper';
			value = 0;
		}
		print (drawingMode);
	}
}
