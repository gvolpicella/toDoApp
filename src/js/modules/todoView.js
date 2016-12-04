/**
* todoView
* ---------------------------------------------
*/
var todoView = (function() {

	// todo add new section
	var selectors = {
		newTodo          : document.getElementById("todoer-add"),             // form
		newTodoText      : document.getElementById("todoer-add-text"),        // text input
		newTodoDateInput : document.getElementById("todoer-add-date-input"),  // date input
		newTodoDateLabel : document.getElementById("todoer-add-date-label"),  // date mask
		btnTodoSubmit    : document.getElementById("todoer-add-submit")       // submit button
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
		outsideClickHandler();
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