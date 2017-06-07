//This creates the global variable x and assigns it the number value of 5. 
// var x = 5;

// x += 1;//this is adding the the original value of x which is 5 by 1 which in total gives us 6. 
// console.log(x);

// x++;// this is also incrementing it by 1. 
// console.log(x);

// x=x+1;//also is incrementing the x by 1.
// console.log(x);

////////////////////////////////////////////////////////////////////////////////////////////////


// var y = 8;

// y -= 1;// One method of subracting the value of 8 by 1.
// console.log(y);

// y --;
// console.log(y);

// y = y - 1;
// console.log(y);
// ////These are 3 different ways to decrease Y by 1. 

////////////////////////////////////////////////////////////////////////////////////////////////

// var z = 8;
// z = z*2;// This is how you multiply the variable value which is 8 by 2. 
// console.log(z);

// z *= 2;// this is another way to multiplay the value of z by 2. 
// console.log(z);

////////////////////////////////////////////////////////////////////////////////////////////////

// var a = 8;
// a = a/2;//this shows how to divide the value of a by 2.
// console.log(a);

// a /= 2;// this is another method of a being divided by 2. 
// console.log(a);

///////////////////////////////////////////////////////////////////////////////////////////////

// var b =17;// Modulus says take this number and divide it by a number and give me the remainder number to put in the console. 
// b = b % 2;
// console.log(b);

////////////////////////////////////////////////////////////////////////////////////////////////

//Below is an if/else statement to determine wether a number is even or odd.
function evenOrOdd(num){
	var tester = num % 2;
	if(tester == 0){
		console.log('its a even');
	} else if(tester === 1){
		console.log("The value passed is odd");
	} else{
		console.log('please provide a number for this function');
	}
}

evenOrOdd(10);









