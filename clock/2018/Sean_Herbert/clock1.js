const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
let num;

function setup () {
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  num = new Number();
}

function draw () {
  background(0);
  num.draw(9);
}

class Number{
	constructor(){
		this.zero = [
		[0,1,1,1,0],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0]];

		this.one = [
		[0,0,1,0,0],
		[0,1,1,0,0],
		[1,0,1,0,0],
		[0,0,1,0,0],
		[0,0,1,0,0],
		[0,0,1,0,0],
		[1,1,1,1,1]];

		this.two = [
		[0,1,1,1,0],
		[1,0,0,0,1],
		[0,0,0,0,1],
		[0,0,0,1,0],
		[0,0,1,0,0],
		[0,1,0,0,0],
		[1,1,1,1,1]];

		this.three = [
		[0,1,1,1,0],
		[1,0,0,0,1],
		[0,0,0,0,1],
		[0,0,1,1,0],
		[0,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0]];

		this.four = [
		[0,0,0,1,0],
		[0,0,1,1,0],
		[0,1,0,1,0],
		[1,0,0,1,0],
		[1,1,1,1,1],
		[0,0,0,1,0],
		[0,0,0,1,0]];

		this.five = [
		[1,1,1,1,1],
		[1,0,0,0,0],
		[1,1,1,1,0],
		[0,0,0,0,1],
		[0,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0]];

		this.six = [
		[0,1,1,1,0],
		[1,0,0,0,0],
		[1,1,1,1,0],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0]];

		this.seven = [
		[1,1,1,1,1],
		[0,0,0,0,1],
		[0,0,0,0,1],
		[0,0,0,1,0],
		[0,0,1,0,0],
		[0,0,1,0,0],
		[0,0,1,0,0]];

		this.eight = [
		[0,1,1,1,0],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0]];

		this.nine = [
		[0,1,1,1,0],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,1],
		[0,0,0,0,1],
		[0,1,1,1,0]];
	}

	draw(num){
		var array;
		switch(num){
			case 0:
				array = this.zero;
				break;
			case 1:
				array = this.one;
				break;
			case 2:
				array = this.two;
				break;
			case 3:
				array = this.three;
				break;
			case 4:
				array = this.four;
				break;
			case 5:
				array = this.five;
				break;
			case 6:
				array = this.six;
				break;
			case 7:
				array = this.seven;
				break;
			case 8:
				array = this.eight;
				break;
			case 9:	
				array = this.nine;
				break;
		}

		noStroke();

		for(var i = 0; i < 7; i++){
			for(var j = 0; j < 5; j++){
				if(array[i][j]){
					rect(j*20, i*20, 20,20);
				}
			}
		}
	}
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
