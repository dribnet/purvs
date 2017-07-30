//An object that contains a set of random numbers based on the seed, in place of sliders
//the names are a legacy from when it was sliders running things
function SliderValues(){
	//these will store the random numbers created by the seed
	this.r1 =1;
	this.r2 =1;
	this.r3 =1;
	this.r4 =1;
	this.r5 =1;
	this.r6 =1;
	this.r7 =1;
	//the variable that will be rounded, or not, and returned
	this.val = 0;
	//does the function calling want an integer
	this.rounded = false;

//updates a set of random numbers used instead of sliders
this.randomSliders = function(n1, n2, n3, n4, n5,n6,n7){
	this.r1 =n1;
	this.r2 = n2;
	this.r3 = n3;
	this.r4 = n4;
	this.r5 =n5;
	this.r6 = n6;
	this.r7 =n7;
}

	//takes integer arguments detailing which slider-substitute is required, and how it is to be mapped
	//also takes a boolean stating whether it should be rounded to the nearest whole number
	this.scaleSliders = function(slide, min, max, rounded){
	this.rounded = rounded;
		//checks which slider value is required
		if (slide == 1){this.val = this.r1;}
		else if (slide == 2){this.val = this.r2;}
		 else if (slide == 3){this.val = this.r3;}
		else if (slide == 4){this.val = this.r4;}
		else if (slide == 5){this.val = this.r5;}
		else if (slide == 6){this.val = this.r6;}
		else{this.val = this.r7;}

//calculates and returns the correct value, depending on whether it should be an int
		if(this.rounded){
			return Math.floor(map(this.val, 0, 100, min, max));
		}
		else{
			return map(this.val, 0, 100, min, max);
		}

	}}
