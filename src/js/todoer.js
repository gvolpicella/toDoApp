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


/**
* todoController
* ---------------------------------------------
* expose : 	get
* 			set
* 			remove
* 			clear
*/
var todoController = (function() {

	var todos = [];

	/**
    * get todo list
    * @public
    */	
	var get = function() {		
		var todos = localStorage.getItem('todo');
	    if (todos !== null) {
	        return JSON.parse(todos); 
	    }
	};

	/**
    * add a todo
    * @public
    */	
	var set = function(title, date) {
	    todos.push({
	    	'title' : title,
	    	'date'  : date,
	    	'state' : ""
	    });
	    todos.sort(compareSort);
		localStorage.setItem('todo', JSON.stringify(todos));
		todoList.set(todos);
	    return false;
	};

	/**
    * remove a todo
    * @public
    */	
	var remove = function(index) {
		if (index > -1) {
		    todos.splice(index, 1);
		}
		localStorage.setItem('todo', JSON.stringify(todos));
		todoList.set(todos);
	    return false;
	};

	/**
    * edit a todo
    * @public
    */	
	var edit = function(index, title, date, state) {
		if (index && title && date) {
			todos[index].title = title;
			todos[index].date = date;
			todos[index].state = state;		
			localStorage.setItem('todo', JSON.stringify(todos));
			todoList.set(todos);
		}		
	    return false;
	};

	/**
    * clear todo list
    * @public
    */	
	var clear = function() {
		todos = [];
		localStorage.removeItem('todo');
		todoList.set(todos);
	    return false;
	};

	/**
    * compares two dates
    * @private
    */	
	var compareSort = function(a, b) {
		date1 = new Date(a.date);
		date2 = new Date(b.date);
		if (date1 < date2) { return -1; }
		else return 1;
	};	

	/**
    * constructor
    * @private
    */	
	var init = (function(){
		todos = get();
		if (todos) {
			todoList.set(todos);
		} else {
			todos = [];
		}		
	})();

    /**
    * Module's public interface
    * @returns {object}
    */
	return { 
		get : get,
		set : set,
		remove : remove,
		clear : clear,
		edit : edit
	};

})();

/**
* todoView
* ---------------------------------------------
*/
var todoView = (function() {

	// todo add new section
	var selectors = {
		newTodo          : document.getElementById("todoer-add"),       // form
		newTodoText      : document.getElementById("todoer-add-text"),  // text input
		newTodoDateInput : document.getElementById("todoer-add-date-input"),  // date input
		newTodoDateLabel : document.getElementById("todoer-add-date-label"),  // date mask
		btnTodoSubmit    : document.getElementById("todoer-add-submit") // submit button
	};

	/**
    * add new todo text handler
    * @private
    */	
	var newTodoHandler = function(e) {
		this.classList.add('active');
		selectors.newTodoText.focus();
		e.stopPropagation();
		document.addEventListener('click', outsideClickHandler);
	};

	/**
    * add new todo date handler
    * @private
    */	
	var newTodoDateLabelHandler = function(e) {
		selectors.newTodoDateLabel.classList.add("hidden");
		selectors.newTodoDateInput.click();
		selectors.newTodoDateInput.focus();
		e.stopPropagation();
	};

	/**
    * add new todo submit handler
    * @private
    */	
	var btnTodoSubmitHandler = function(e) {
		e.stopPropagation();
		var title = selectors.newTodoText.value;
		var date = selectors.newTodoDateInput.value;
		if (title && date) {
			e.preventDefault();
			todoController.set(title, date);
			reset();
		}
	};

	/**
    * clicking outside the add new todo section closes it
    * @private
    */	
	var outsideClickHandler = function() {
		selectors.newTodo.classList.remove('active');
		selectors.newTodoText.blur();
		document.removeEventListener('click', outsideClickHandler);
		selectors.newTodoDateLabel.classList.remove("hidden");
	};

	/**
    * utility format date
    * @private
    */
	var formatDate = function(d) {
	  var date = new Date(d);
	  return [date.getDate(), date.getMonth()+1, date.getFullYear().toString().substr(2, 2)].join('/');
	};

	/**
    * clear todo inputs
    * @private
    */
	var reset = function() {
		selectors.newTodoText.value = "";
		selectors.newTodoDateInput.value = "";
	};

	/**
    * bind events
    * @private
    */
	var bindEvents = function() {
		selectors.newTodo.addEventListener('click', newTodoHandler);
		selectors.newTodoDateLabel.addEventListener('click', newTodoDateLabelHandler);
		selectors.newTodoDateInput.addEventListener('click', newTodoDateLabelHandler);
		selectors.btnTodoSubmit.addEventListener('click', btnTodoSubmitHandler);
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
	return { };

})();

