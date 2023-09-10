/*An object that contains the slider objects 
and a set of random numbers based on the seed.
This object has a function to change the random numbers
it also has a function that returns the requested slider or random
number scaled as needed
Holds 10 focused randoms (1-10)
10 unfocused randoms (11-10)
7 sliders (21-27)*/
function ValueScaler(){
	/*these will store sliders or the random numbers created by the seed*/
	//focus-able random numbers
	this.r1 =1;
	this.r2 =1;
	this.r3 =1;
	this.r4 =1;
	this.r5 =1;
	this.r6 =1;
	this.r7 =1;
	this.r8 = 1;
	this.r9 = 1;
	this.r10 = 1;

	//unfocused randoms
	this.r11 =1;
	this.r12 =1;
	this.r13 =1;
	this.r14 =1;
	this.r15 =1;
	this.r16 =1;
	this.r17 =1;
	this.r18 = 1;
	this.r19 = 1;
	this.r20 = 1;

	//sliders;
	this.s21 = null;
	this.s22 = null;
	this.s23 = null;
	this.s24 = null;
	this.s25 = null
	this.s26 = null; 
	this.s27 = null;

	//the variable that will be rounded, or not, and returned
	this.val = 0;
	//does the function calling want an integer
	this.rounded = false;

/*takes 7 sliders and stores them*/
this.setSliders = function(s1,s2,s3,s4,s5,s6,s7){
this.s21=s1;
this.s22=s2;
this.s23=s3;
this.s24=s4;
this.s25=s5;
this.s26=s6;
this.s27=s7;
}
//updates the 10 focus-able random numbers
this.setFocusableRandoms = function(n1, n2, n3, n4, n5,n6,n7,n8,n9,n10){
	this.r1 =n1;
	this.r2 = n2;
	this.r3 = n3;
	this.r4 = n4;
	this.r5 =n5;
	this.r6 = n6;
	this.r7 = n7;
	this.r8 = n8;
	this.r9= n9;
	this.r10 = n10;
}

//updates the 10 unfocused  randoms
this.setUnfocusedRandoms = function(){
	this.r11 = focusedRandom(1,100);
	this.r12 = focusedRandom(1,100);
	this.r13 = focusedRandom(1,100);
	this.r14 = focusedRandom(1,100);
	this.r15 = focusedRandom(1,100);
	this.r16 = focusedRandom(1,100);
	this.r17 = focusedRandom(1,100);
	this.r18 = focusedRandom(1,100);
	this.r19 = focusedRandom(1,100);
	this.r20 = focusedRandom(1,100);
}

	//takes integer arguments detailing which slider-substitute is required, and how it is to be mapped
	//also takes a boolean stating whether it should be rounded to the nearest whole number
	this.scaleVals = function(slide, min, max, rounded){
	this.rounded = rounded;
		//checks which slider or random value is required
		//focused randoms
		if (slide == 1){this.val = this.r1;}
		else if (slide == 2){this.val = this.r2;}
		 else if (slide == 3){this.val = this.r3;}
		else if (slide == 4){this.val = this.r4;}
		else if (slide == 5){this.val = this.r5;}
		else if (slide == 6){this.val = this.r6;}
		else if (slide == 7){this.val = this.r7;}
		 else if (slide == 8){this.val = this.r8;}
		else if (slide == 9){this.val = this.r9;}
		else if (slide == 10){this.val = this.r10;}
		
		//unfocused randoms
		else if (slide == 11){this.val = this.r11;}
		else if (slide == 12){this.val = this.r12;}
		 else if (slide == 13){this.val = this.r13;}
		else if (slide == 14){this.val = this.r14;}
		else if (slide == 15){this.val = this.r15;}
		else if (slide == 16){this.val = this.r16;}
		else if (slide == 17){this.val = this.r17;}
		else if (slide == 18){this.val = this.r18;}
		else if (slide == 19){this.val = this.r19;}
		else if (slide == 20){this.val = this.r20;}

		//sliders
		else if (slide == 21){this.val = this.s21.value();}
		else if (slide == 22){this.val = this.s22.value();}
		 else if (slide == 23){this.val = this.s23.value();}
		else if (slide == 24){this.val = this.s24.value();}
		else if (slide == 25){this.val = this.s25.value();}
		else if (slide == 26){this.val = this.s26.value();}
		else if (slide == 27){this.val = this.s27.value();}
		


		
		else{this.val = this.s12;}

//calculates and returns the correct value, depending on whether it should be an int
//the true range required can be entered either way
		if(this.rounded){
			/*deals with the problem of there never being a full representation
			in the final number because of the floor function and allows the user to input the true range they want*/
			this.a = Math.floor(map(this.val, 0, 100, min, max+1));
			if (this.a == max+1){this.a = max;}
			return this.a;
			//return Math.floor(map(this.val, 0, 100, min, max+1));
		}
		else{
			return map(this.val, 0, 100, min, max);
		}

	}}
