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
			todos.sort(compareSort);	
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
		else if (date1 > date2) { return 1; }
		else return 0;
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