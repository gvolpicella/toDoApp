/**
* todoList
* ---------------------------------------------
* expose : 	add
* 			remove
* 			set
*/
var todoList = (function() {

	var selectors = {
		divTodoList : document.getElementById("todoer-list-section")
	};

	/**
    * set todo list
    * @public
    */	
	var set = function(todos) {

		var todoListStr = "",
			todoCount   = todos.length;

		if (todoCount > 0) {

			todoListStr = '<ul id="todoer-list">';

			for (var i = 0; i < todoCount; i++) {
				todoListStr += '<li id="todo-'+i+'" class="'+todos[i].state+'">' +
					'<button class="checkboxed"><i class="fa fa-check" aria-hidden="true"></i></button>' +
					'<input class="todo-text" type="text" value="'+todos[i].title+'" required></input>' +
					'<div class="todo-date">' +
						'<i class="fa fa-calendar-o" aria-hidden="true"></i>' +
						'<input class="todo-date-input" type="date" value="'+todos[i].date+'" required></input>' +
					'</div>' +
				'</li>';
			}

			todoListStr += '</ul>';

			todoListStr += '<div class="div-actions container"><button id="clear-todos">Clear todos</button></div>';

		} else {
			todoListStr = "<p>You don’t have anything to do. <strong>Add something now</strong>.</p>";
		}

		selectors.divTodoList.innerHTML = todoListStr;
		return false;

	};

	/**
    * bind events
    * @private
    */	
	var bindEvents = function(){	

		// update our model after editing
		var editTodoHandler = function(e) {		
			e.target.closest("li").classList.remove("editing");	
			var node = e.target.closest("li"),
				index = node.id.substr(5,1),
				title = node.querySelector(".todo-text").value,
				date = node.querySelector(".todo-date-input").value,
				state = node.className.replace("editing", "").trim();
			// update todos	
			todoController.edit(index,title,date,state);
		};

		// click events on todos
		selectors.divTodoList.addEventListener('click', function(event) {	
		  // clear todo list event
		  if (event.target.id === 'clear-todos') {
		  	todoController.clear();
		  }
		  // checking a todo
		  else if (event.target.parentNode.className === 'checkboxed') {
		  	var setComplete = event.target.parentNode.parentNode;
		  	setComplete.classList.toggle("completed");
		  	editTodoHandler(event);
		  }
		});

		// click event(and blur) on todo's date/title
		selectors.divTodoList.addEventListener('click', function(event) {	
		  if (event.target.className === 'todo-text' ||
		  	  event.target.className === 'todo-date-input') {
		  	  event.target.closest("li").classList.add("editing");
		  	  event.target.addEventListener("blur", editTodoHandler);
		  }
		});
	};

	/**
    * constructor
    * @private
    */	
	var init = (function(){
		
		bindEvents();

	})();

    /**
    * Module's public interface
    * @returns {object}
    */
	return { 
		set : set
	};

})();