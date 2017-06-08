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


	toDoList.innerHTML += '<li>' + userInput.value + '</li>';
	userInput.value = '';//This refreshed the text box after a word is submitted.

}

userSubmit.addEventListener('click', addToDo);