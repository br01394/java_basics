let counter = 0;



function tickUp(){
	
	counter++;
	
	document.getElementById("counter").innerHTML = counter;
	
}

function tickDown(){
	
	counter--;
	
	document.getElementById("counter").innerHTML = counter;
	
}

function runForLoop(){
	let help = counter;
	
	for(let x = 0; x < help + 1; x++){
		
		document.getElementById("forLoopResult").innerHTML += x + " ";
		
	}
}

function showOddNumbers(){
	let help = counter;
	
	for(let x = 0; x < help + 1; x++){
		
		if( x % 2 !== 0){
			document.getElementById("oddNumberResult").innerHTML += x + " ";
		}
		
	}
}

function addMultiplesToArray(){
	const numbers = [];
	let help = counter;
	
	for(let x = 0; x < help + 1; x++){
		
		if( x % 5 == 0 && x !== 0){
			numbers.push(x);
		}
		
	}
	
	console.log(numbers);
}
	
function printCarObject(){
	
	let field1 = document.getElementById("carType").value
	let field2 = document.getElementById("carMPG").value
	let field3 = document.getElementById("carColor").value
	
	let carObject = {cType: field1, cMPG: field2, cColor: field3};
	
	console.log(carObject);
	
	
}

function loadCar(x){
	if(x == 1){
		let cars = carObject1;
		document.getElementById("carType").value = cars.cType;
		document.getElementById("carMPG").value = cars.cMPG;
		document.getElementById("carColor").value = cars.cColor;
		
		
		

	}
	else if(x == 2){
		let cars = carObject2;
		document.getElementById("carType").value = cars.cType;
		document.getElementById("carMPG").value = cars.cMPG;
		document.getElementById("carColor").value = cars.cColor;
		
		
	}
	else if( x == 3){
		let cars = carObject3;
		document.getElementById("carType").value = cars.cType;
		document.getElementById("carMPG").value = cars.cMPG;
		document.getElementById("carColor").value = cars.cColor;
	}
	
	
}

function changeColor(x){
	var paraColor = document.getElementById("styleParagraph");
	
	if(x == 1){
		paraColor.style.color = "red";
	}
	else if( x == 2){
		paraColor.style.color = "green";
	}
	else if (x == 3){
		paraColor.style.color = "blue";
	}
}
