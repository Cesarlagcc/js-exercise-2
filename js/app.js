var userSubmit = document.querySelector('#user-submit');

function addToDo(event){
	event.preventDefault();
	// console.log(event);
	var userInput = document.querySelector('#user-input');
	var toDoList = document.querySelector('#to-do-list');
	// console.log(userInput.value);
	// console.log(toDoList);

	if(userInput.value === ''){
		return false;
	}

	toDoList.innerHTML = '<li>' + userInput.value + '</li>' + toDoList.innerHTML;
	// toDoList.innerHTML += '<li>' + userInput.value + '</li>' + toDoList.innerHTML ;
	userInput.value = '';//This refreshed the text box after a word is submitted.

	
}


// function toDoList1(){
// 	this.parentNode.parentNode.removeChild(this.parentNode);
// }



userSubmit.addEventListener('click', addToDo);

