var userSubmit = document.querySelector('#user-submit');//These are global variables.
var toDoList = document.querySelector('#to-do-list');

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

	toDoList.innerHTML = '<li><i class="fa fa-window-close close-to-do" aria-hidden="true"></i>' + userInput.value + '</li>' + toDoList.innerHTML;
	// toDoList.innerHTML += '<li>' + userInput.value + '</li>' + toDoList.innerHTML ;
	userInput.value = '';//This refreshed the text box after a word is submitted.

}

	function removeToDo(event){
		if(event.target.classList.contains('close-to-do')){
			var li = event.target.parentElement;
			toDoList.removeChild(li);
		}
	}


// function toDoList1(){
// 	this.parentNode.parentNode.removeChild(this.parentNode);
// }

toDoList.addEventListener('click',removeToDo,false);

userSubmit.addEventListener('click', addToDo),false;












