let res = prompt('What is the "official" name of JavaScript?', "");

if (res === "ECMAScript") {
  alert("Right!");
} else {
  alert('You don\'t know? "ECMAScript!"');
}



// 2 exercise

let userPrompt = prompt('Enter a number:', '');


//-------- ternary version: 

let res = userPrompt > 0 ? '1' :
	userPrompt < 0 ? '-1' :
  userPrompt == 0 ? '0' : 'Unexpected result';

alert(res);

//------ If version:

let res = '';

if (userPrompt > 0) {
	res = 1;
} else if (userPrompt < 0){
	res = -1;
} else if (userPrompt == 0) {
	res = 0;
} else {
	res = 'Unexpected result'
}
