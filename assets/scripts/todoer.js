var todoList=function(){var t={divTodoList:document.getElementById("todoer-list-section")},e=function(e){var o="",n=e.length;if(n>0){o='<ul id="todoer-list">';for(var d=0;d<n;d++)o+='<li id="todo-'+d+'" class="'+e[d].state+'"><button class="checkboxed"><i class="fa fa-check" aria-hidden="true"></i></button><input class="todo-text" type="text" value="'+e[d].title+'" required></input><div class="todo-date"><i class="fa fa-calendar-o" aria-hidden="true"></i><input class="todo-date-input" type="date" value="'+e[d].date+'" required></input></div></li>';o+="</ul>";o+='<div class="div-actions container"><button id="clear-todos">Clear todos</button></div>'}else o="<p>You don’t have anything to do. <strong>Add something now</strong>.</p>";t.divTodoList.innerHTML=o;return!1},o=function(){var e=function(t){t.target.closest("li").classList.remove("editing");var e=t.target.closest("li"),o=e.id.substr(5,1),n=e.querySelector(".todo-text").value,d=e.querySelector(".todo-date-input").value,a=e.className.replace("editing","").trim();todoController.edit(o,n,d,a)};t.divTodoList.addEventListener("click",function(t){if("clear-todos"===t.target.id)todoController.clear();else if("checkboxed"===t.target.parentNode.className){var o=t.target.parentNode.parentNode;o.classList.toggle("completed");e(t)}});t.divTodoList.addEventListener("click",function(t){if("todo-text"===t.target.className||"todo-date-input"===t.target.className){t.target.closest("li").classList.add("editing");t.target.addEventListener("blur",e)}})};(function(){o()})();return{set:e}}(),todoController=function(){var t=[],e=function(){var t=localStorage.getItem("todo");if(null!==t)return JSON.parse(t)},o=function(e,o){t.push({title:e,date:o,state:""});t.sort(i);localStorage.setItem("todo",JSON.stringify(t));todoList.set(t);return!1},n=function(e){e>-1&&t.splice(e,1);localStorage.setItem("todo",JSON.stringify(t));todoList.set(t);return!1},d=function(e,o,n,d){if(e&&o&&n){t[e].title=o;t[e].date=n;t[e].state=d;t.sort(i);localStorage.setItem("todo",JSON.stringify(t));todoList.set(t)}return!1},a=function(){t=[];localStorage.removeItem("todo");todoList.set(t);return!1},i=function(t,e){date1=new Date(t.date);date2=new Date(e.date);return date1<date2?-1:1};(function(){t=e();t?todoList.set(t):t=[]})();return{get:e,set:o,remove:n,clear:a,edit:d}}(),todoView=function(){var t={newTodo:document.getElementById("todoer-add"),newTodoText:document.getElementById("todoer-add-text"),newTodoDateInput:document.getElementById("todoer-add-date-input"),newTodoDateLabel:document.getElementById("todoer-add-date-label"),btnTodoSubmit:document.getElementById("todoer-add-submit")},e=function(e){this.classList.add("active");t.newTodoText.focus();e.stopPropagation();document.addEventListener("click",d)},o=function(e){t.newTodoDateLabel.classList.add("hidden");t.newTodoDateInput.click();t.newTodoDateInput.focus();e.stopPropagation()},n=function(e){e.stopPropagation();var o=t.newTodoText.value,n=t.newTodoDateInput.value;if(o&&n){e.preventDefault();todoController.set(o,n);a()}},d=function(){t.newTodo.classList.remove("active");t.newTodoText.blur();document.removeEventListener("click",d);t.newTodoDateLabel.classList.remove("hidden")},a=function(){t.newTodoText.value="";t.newTodoDateInput.value="";d()},i=function(){t.newTodo.addEventListener("click",e);t.newTodoDateLabel.addEventListener("click",o);t.newTodoDateInput.addEventListener("click",o);t.btnTodoSubmit.addEventListener("click",n)};(function(){i()})();return{}}();!function(){console.log("todo app started")}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0LmpzIiwidG9kb0NvbnRyb2xsZXIuanMiLCJ0b2RvVmlldy5qcyIsInRvZG9lci5qcyJdLCJuYW1lcyI6WyJ0b2RvTGlzdCIsInNlbGVjdG9ycyIsImRpdlRvZG9MaXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldCIsInRvZG9zIiwidG9kb0xpc3RTdHIiLCJ0b2RvQ291bnQiLCJsZW5ndGgiLCJpIiwic3RhdGUiLCJ0aXRsZSIsImRhdGUiLCJpbm5lckhUTUwiLCJiaW5kRXZlbnRzIiwiZWRpdFRvZG9IYW5kbGVyIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJub2RlIiwiaW5kZXgiLCJpZCIsInN1YnN0ciIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJ0cmltIiwidG9kb0NvbnRyb2xsZXIiLCJlZGl0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xlYXIiLCJwYXJlbnROb2RlIiwic2V0Q29tcGxldGUiLCJ0b2dnbGUiLCJhZGQiLCJnZXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicHVzaCIsInNvcnQiLCJjb21wYXJlU29ydCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzcGxpY2UiLCJyZW1vdmVJdGVtIiwiYSIsImIiLCJkYXRlMSIsIkRhdGUiLCJkYXRlMiIsInRvZG9WaWV3IiwibmV3VG9kbyIsIm5ld1RvZG9UZXh0IiwibmV3VG9kb0RhdGVJbnB1dCIsIm5ld1RvZG9EYXRlTGFiZWwiLCJidG5Ub2RvU3VibWl0IiwibmV3VG9kb0hhbmRsZXIiLCJ0aGlzIiwiZm9jdXMiLCJzdG9wUHJvcGFnYXRpb24iLCJvdXRzaWRlQ2xpY2tIYW5kbGVyIiwibmV3VG9kb0RhdGVMYWJlbEhhbmRsZXIiLCJjbGljayIsImJ0blRvZG9TdWJtaXRIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJyZXNldCIsImJs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ZCxFQUFBeUQsUUFBQXpCLGlCQUFBLFFBQUE4QixFQUNBOUQsR0FBQTRELGlCQUFBNUIsaUJBQUEsUUFBQW1DLEVBQ0FuRSxHQUFBMkQsaUJBQUEzQixpQkFBQSxRQUFBbUMsRUFDQW5FLEdBQUE2RCxjQUFBN0IsaUJBQUEsUUFBQXFDLEtBT0EsV0FDQXZELE9BT0EsY0NyR0EsV0FDQTRELFFBQUFDLElBQUEiLCJmaWxlIjoidG9kb2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4qIHRvZG9MaXN0XG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBleHBvc2UgOiBcdGFkZFxuKiBcdFx0XHRyZW1vdmVcbiogXHRcdFx0c2V0XG4qL1xudmFyIHRvZG9MaXN0ID0gKGZ1bmN0aW9uKCkge1xuXG5cdHZhciBzZWxlY3RvcnMgPSB7XG5cdFx0ZGl2VG9kb0xpc3QgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9lci1saXN0LXNlY3Rpb25cIilcblx0fTtcblxuXHQvKipcbiAgICAqIHNldCB0b2RvIGxpc3RcbiAgICAqIEBwdWJsaWNcbiAgICAqL1x0XG5cdHZhciBzZXQgPSBmdW5jdGlvbih0b2Rvcykge1xuXG5cdFx0dmFyIHRvZG9MaXN0U3RyID0gXCJcIixcblx0XHRcdHRvZG9Db3VudCAgID0gdG9kb3MubGVuZ3RoO1xuXG5cdFx0aWYgKHRvZG9Db3VudCA+IDApIHtcblxuXHRcdFx0dG9kb0xpc3RTdHIgPSAnPHVsIGlkPVwidG9kb2VyLWxpc3RcIj4nO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRvZG9Db3VudDsgaSsrKSB7XG5cdFx0XHRcdHRvZG9MaXN0U3RyICs9ICc8bGkgaWQ9XCJ0b2RvLScraSsnXCIgY2xhc3M9XCInK3RvZG9zW2ldLnN0YXRlKydcIj4nICtcblx0XHRcdFx0XHQnPGJ1dHRvbiBjbGFzcz1cImNoZWNrYm94ZWRcIj48aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPicgK1xuXHRcdFx0XHRcdCc8aW5wdXQgY2xhc3M9XCJ0b2RvLXRleHRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyt0b2Rvc1tpXS50aXRsZSsnXCIgcmVxdWlyZWQ+PC9pbnB1dD4nICtcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInRvZG8tZGF0ZVwiPicgK1xuXHRcdFx0XHRcdFx0JzxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXItb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nICtcblx0XHRcdFx0XHRcdCc8aW5wdXQgY2xhc3M9XCJ0b2RvLWRhdGUtaW5wdXRcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJyt0b2Rvc1tpXS5kYXRlKydcIiByZXF1aXJlZD48L2lucHV0PicgK1xuXHRcdFx0XHRcdCc8L2Rpdj4nICtcblx0XHRcdFx0JzwvbGk+Jztcblx0XHRcdH1cblxuXHRcdFx0dG9kb0xpc3RTdHIgKz0gJzwvdWw+JztcblxuXHRcdFx0dG9kb0xpc3RTdHIgKz0gJzxkaXYgY2xhc3M9XCJkaXYtYWN0aW9ucyBjb250YWluZXJcIj48YnV0dG9uIGlkPVwiY2xlYXItdG9kb3NcIj5DbGVhciB0b2RvczwvYnV0dG9uPjwvZGl2Pic7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0dG9kb0xpc3RTdHIgPSBcIjxwPllvdSBkb27igJl0IGhhdmUgYW55dGhpbmcgdG8gZG8uIDxzdHJvbmc+QWRkIHNvbWV0aGluZyBub3c8L3N0cm9uZz4uPC9wPlwiO1xuXHRcdH1cblxuXHRcdHNlbGVjdG9ycy5kaXZUb2RvTGlzdC5pbm5lckhUTUwgPSB0b2RvTGlzdFN0cjtcblx0XHRyZXR1cm4gZmFsc2U7XG5cblx0fTtcblxuXHQvKipcbiAgICAqIGJpbmQgZXZlbnRzXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXHRcblx0dmFyIGJpbmRFdmVudHMgPSBmdW5jdGlvbigpe1x0XG5cblx0XHQvLyB1cGRhdGUgb3VyIG1vZGVsIGFmdGVyIGVkaXRpbmdcblx0XHR2YXIgZWRpdFRvZG9IYW5kbGVyID0gZnVuY3Rpb24oZSkge1x0XHRcblx0XHRcdGUudGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZWRpdGluZ1wiKTtcdFxuXHRcdFx0dmFyIG5vZGUgPSBlLnRhcmdldC5jbG9zZXN0KFwibGlcIiksXG5cdFx0XHRcdGluZGV4ID0gbm9kZS5pZC5zdWJzdHIoNSwxKSxcblx0XHRcdFx0dGl0bGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10ZXh0XCIpLnZhbHVlLFxuXHRcdFx0XHRkYXRlID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGF0ZS1pbnB1dFwiKS52YWx1ZSxcblx0XHRcdFx0c3RhdGUgPSBub2RlLmNsYXNzTmFtZS5yZXBsYWNlKFwiZWRpdGluZ1wiLCBcIlwiKS50cmltKCk7XG5cdFx0XHQvLyB1cGRhdGUgdG9kb3NcdFxuXHRcdFx0dG9kb0NvbnRyb2xsZXIuZWRpdChpbmRleCx0aXRsZSxkYXRlLHN0YXRlKTtcblx0XHR9O1xuXG5cdFx0Ly8gY2xpY2sgZXZlbnRzIG9uIHRvZG9zXG5cdFx0c2VsZWN0b3JzLmRpdlRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcdFxuXHRcdCAgLy8gY2xlYXIgdG9kbyBsaXN0IGV2ZW50XG5cdFx0ICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnY2xlYXItdG9kb3MnKSB7XG5cdFx0ICBcdHRvZG9Db250cm9sbGVyLmNsZWFyKCk7XG5cdFx0ICB9XG5cdFx0ICAvLyBjaGVja2luZyBhIHRvZG9cblx0XHQgIGVsc2UgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9PT0gJ2NoZWNrYm94ZWQnKSB7XG5cdFx0ICBcdHZhciBzZXRDb21wbGV0ZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cdFx0ICBcdHNldENvbXBsZXRlLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG5cdFx0ICBcdGVkaXRUb2RvSGFuZGxlcihldmVudCk7XG5cdFx0ICB9XG5cdFx0fSk7XG5cblx0XHQvLyBjbGljayBldmVudChhbmQgYmx1cikgb24gdG9kbydzIGRhdGUvdGl0bGVcblx0XHRzZWxlY3RvcnMuZGl2VG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1x0XG5cdFx0ICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3RvZG8tdGV4dCcgfHxcblx0XHQgIFx0ICBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAndG9kby1kYXRlLWlucHV0Jykge1xuXHRcdCAgXHQgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFwibGlcIikuY2xhc3NMaXN0LmFkZChcImVkaXRpbmdcIik7XG5cdFx0ICBcdCAgZXZlbnQudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGVkaXRUb2RvSGFuZGxlcik7XG5cdFx0ICB9XG5cdFx0fSk7XG5cdH07XG5cblx0LyoqXG4gICAgKiBjb25zdHJ1Y3RvclxuICAgICogQHByaXZhdGVcbiAgICAqL1x0XG5cdHZhciBpbml0ID0gKGZ1bmN0aW9uKCl7XG5cdFx0XG5cdFx0YmluZEV2ZW50cygpO1xuXG5cdH0pKCk7XG5cbiAgICAvKipcbiAgICAqIE1vZHVsZSdzIHB1YmxpYyBpbnRlcmZhY2VcbiAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgKi9cblx0cmV0dXJuIHsgXG5cdFx0c2V0IDogc2V0XG5cdH07XG5cbn0pKCk7IiwiLyoqXG4qIHRvZG9Db250cm9sbGVyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBleHBvc2UgOiBcdGdldFxuKiBcdFx0XHRzZXRcbiogXHRcdFx0cmVtb3ZlXG4qIFx0XHRcdGNsZWFyXG4qL1xudmFyIHRvZG9Db250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuXG5cdHZhciB0b2RvcyA9IFtdO1xuXG5cdC8qKlxuICAgICogZ2V0IHRvZG8gbGlzdFxuICAgICogQHB1YmxpY1xuICAgICovXHRcblx0dmFyIGdldCA9IGZ1bmN0aW9uKCkge1x0XHRcblx0XHR2YXIgdG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kbycpO1xuXHQgICAgaWYgKHRvZG9zICE9PSBudWxsKSB7XG5cdCAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodG9kb3MpOyBcblx0ICAgIH1cblx0fTtcblxuXHQvKipcbiAgICAqIGFkZCBhIHRvZG9cbiAgICAqIEBwdWJsaWNcbiAgICAqL1x0XG5cdHZhciBzZXQgPSBmdW5jdGlvbih0aXRsZSwgZGF0ZSkge1xuXHQgICAgdG9kb3MucHVzaCh7XG5cdCAgICBcdCd0aXRsZScgOiB0aXRsZSxcblx0ICAgIFx0J2RhdGUnICA6IGRhdGUsXG5cdCAgICBcdCdzdGF0ZScgOiBcIlwiXG5cdCAgICB9KTtcblx0ICAgIHRvZG9zLnNvcnQoY29tcGFyZVNvcnQpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcblx0XHR0b2RvTGlzdC5zZXQodG9kb3MpO1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdC8qKlxuICAgICogcmVtb3ZlIGEgdG9kb1xuICAgICogQHB1YmxpY1xuICAgICovXHRcblx0dmFyIHJlbW92ZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHQgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8nLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuXHRcdHRvZG9MaXN0LnNldCh0b2Rvcyk7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0LyoqXG4gICAgKiBlZGl0IGEgdG9kb1xuICAgICogQHB1YmxpY1xuICAgICovXHRcblx0dmFyIGVkaXQgPSBmdW5jdGlvbihpbmRleCwgdGl0bGUsIGRhdGUsIHN0YXRlKSB7XG5cdFx0aWYgKGluZGV4ICYmIHRpdGxlICYmIGRhdGUpIHtcblx0XHRcdHRvZG9zW2luZGV4XS50aXRsZSA9IHRpdGxlO1xuXHRcdFx0dG9kb3NbaW5kZXhdLmRhdGUgPSBkYXRlO1xuXHRcdFx0dG9kb3NbaW5kZXhdLnN0YXRlID0gc3RhdGU7XHRcblx0XHRcdHRvZG9zLnNvcnQoY29tcGFyZVNvcnQpO1x0XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kbycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG5cdFx0XHR0b2RvTGlzdC5zZXQodG9kb3MpO1xuXHRcdH1cdFx0XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0LyoqXG4gICAgKiBjbGVhciB0b2RvIGxpc3RcbiAgICAqIEBwdWJsaWNcbiAgICAqL1x0XG5cdHZhciBjbGVhciA9IGZ1bmN0aW9uKCkge1xuXHRcdHRvZG9zID0gW107XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG8nKTtcblx0XHR0b2RvTGlzdC5zZXQodG9kb3MpO1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdC8qKlxuICAgICogY29tcGFyZXMgdHdvIGRhdGVzXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXHRcblx0dmFyIGNvbXBhcmVTb3J0ID0gZnVuY3Rpb24oYSwgYikge1xuXHRcdGRhdGUxID0gbmV3IERhdGUoYS5kYXRlKTtcblx0XHRkYXRlMiA9IG5ldyBEYXRlKGIuZGF0ZSk7XG5cdFx0aWYgKGRhdGUxIDwgZGF0ZTIpIHsgcmV0dXJuIC0xOyB9XG5cdFx0ZWxzZSByZXR1cm4gMTtcblx0fTtcdFxuXG5cdC8qKlxuICAgICogY29uc3RydWN0b3JcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cdFxuXHR2YXIgaW5pdCA9IChmdW5jdGlvbigpe1xuXHRcdHRvZG9zID0gZ2V0KCk7XG5cdFx0aWYgKHRvZG9zKSB7XG5cdFx0XHR0b2RvTGlzdC5zZXQodG9kb3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b2RvcyA9IFtdO1xuXHRcdH1cdFx0XG5cdH0pKCk7XG5cbiAgICAvKipcbiAgICAqIE1vZHVsZSdzIHB1YmxpYyBpbnRlcmZhY2VcbiAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgKi9cblx0cmV0dXJuIHsgXG5cdFx0Z2V0IDogZ2V0LFxuXHRcdHNldCA6IHNldCxcblx0XHRyZW1vdmUgOiByZW1vdmUsXG5cdFx0Y2xlYXIgOiBjbGVhcixcblx0XHRlZGl0IDogZWRpdFxuXHR9O1xuXG59KSgpOyIsIi8qKlxuKiB0b2RvVmlld1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG52YXIgdG9kb1ZpZXcgPSAoZnVuY3Rpb24oKSB7XG5cblx0Ly8gdG9kbyBhZGQgbmV3IHNlY3Rpb25cblx0dmFyIHNlbGVjdG9ycyA9IHtcblx0XHRuZXdUb2RvICAgICAgICAgIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvZXItYWRkXCIpLCAgICAgICAgICAgICAvLyBmb3JtXG5cdFx0bmV3VG9kb1RleHQgICAgICA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb2VyLWFkZC10ZXh0XCIpLCAgICAgICAgLy8gdGV4dCBpbnB1dFxuXHRcdG5ld1RvZG9EYXRlSW5wdXQgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9lci1hZGQtZGF0ZS1pbnB1dFwiKSwgIC8vIGRhdGUgaW5wdXRcblx0XHRuZXdUb2RvRGF0ZUxhYmVsIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvZXItYWRkLWRhdGUtbGFiZWxcIiksICAvLyBkYXRlIG1hc2tcblx0XHRidG5Ub2RvU3VibWl0ICAgIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvZXItYWRkLXN1Ym1pdFwiKSAgICAgICAvLyBzdWJtaXQgYnV0dG9uXG5cdH07XG5cblx0LyoqXG4gICAgKiBhZGQgbmV3IHRvZG8gdGV4dCBoYW5kbGVyXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXHRcblx0dmFyIG5ld1RvZG9IYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0c2VsZWN0b3JzLm5ld1RvZG9UZXh0LmZvY3VzKCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG91dHNpZGVDbGlja0hhbmRsZXIpO1xuXHR9O1xuXG5cdC8qKlxuICAgICogYWRkIG5ldyB0b2RvIGRhdGUgaGFuZGxlclxuICAgICogQHByaXZhdGVcbiAgICAqL1x0XG5cdHZhciBuZXdUb2RvRGF0ZUxhYmVsSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcblx0XHRzZWxlY3RvcnMubmV3VG9kb0RhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRcdHNlbGVjdG9ycy5uZXdUb2RvRGF0ZUlucHV0LmNsaWNrKCk7XG5cdFx0c2VsZWN0b3JzLm5ld1RvZG9EYXRlSW5wdXQuZm9jdXMoKTtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9O1xuXG5cdC8qKlxuICAgICogYWRkIG5ldyB0b2RvIHN1Ym1pdCBoYW5kbGVyXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXHRcblx0dmFyIGJ0blRvZG9TdWJtaXRIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dmFyIHRpdGxlID0gc2VsZWN0b3JzLm5ld1RvZG9UZXh0LnZhbHVlO1xuXHRcdHZhciBkYXRlID0gc2VsZWN0b3JzLm5ld1RvZG9EYXRlSW5wdXQudmFsdWU7XG5cdFx0aWYgKHRpdGxlICYmIGRhdGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRvZG9Db250cm9sbGVyLnNldCh0aXRsZSwgZGF0ZSk7XG5cdFx0XHRyZXNldCgpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcbiAgICAqIGNsaWNraW5nIG91dHNpZGUgdGhlIGFkZCBuZXcgdG9kbyBzZWN0aW9uIGNsb3NlcyBpdFxuICAgICogQHByaXZhdGVcbiAgICAqL1x0XG5cdHZhciBvdXRzaWRlQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0c2VsZWN0b3JzLm5ld1RvZG8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cdFx0c2VsZWN0b3JzLm5ld1RvZG9UZXh0LmJsdXIoKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG91dHNpZGVDbGlja0hhbmRsZXIpO1xuXHRcdHNlbGVjdG9ycy5uZXdUb2RvRGF0ZUxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cdH07XG5cblx0LyoqXG4gICAgKiB1dGlsaXR5IGZvcm1hdCBkYXRlXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG5cdHZhciBmb3JtYXREYXRlID0gZnVuY3Rpb24oZCkge1xuXHQgIHZhciBkYXRlID0gbmV3IERhdGUoZCk7XG5cdCAgcmV0dXJuIFtkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRNb250aCgpKzEsIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLnN1YnN0cigyLCAyKV0uam9pbignLycpO1xuXHR9O1xuXG5cdC8qKlxuICAgICogY2xlYXIgdG9kbyBpbnB1dHNcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cblx0dmFyIHJlc2V0ID0gZnVuY3Rpb24oKSB7XG5cdFx0c2VsZWN0b3JzLm5ld1RvZG9UZXh0LnZhbHVlID0gXCJcIjtcblx0XHRzZWxlY3RvcnMubmV3VG9kb0RhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0b3V0c2lkZUNsaWNrSGFuZGxlcigpO1xuXHR9O1xuXG5cdC8qKlxuICAgICogYmluZCBldmVudHNcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cblx0dmFyIGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRzZWxlY3RvcnMubmV3VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvZG9IYW5kbGVyKTtcblx0XHRzZWxlY3RvcnMubmV3VG9kb0RhdGVMYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvZG9EYXRlTGFiZWxIYW5kbGVyKTtcblx0XHRzZWxlY3RvcnMubmV3VG9kb0RhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvZG9EYXRlTGFiZWxIYW5kbGVyKTtcblx0XHRzZWxlY3RvcnMuYnRuVG9kb1N1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0blRvZG9TdWJtaXRIYW5kbGVyKTtcblx0fTtcblx0XG5cdC8qKlxuICAgICogY29uc3RydWN0b3JcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cdFxuXHR2YXIgaW5pdCA9IChmdW5jdGlvbigpe1xuXHRcdGJpbmRFdmVudHMoKTtcdFx0XG5cdH0pKCk7XG5cbiAgICAvKipcbiAgICAqIE1vZHVsZSdzIHB1YmxpYyBpbnRlcmZhY2VcbiAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgKi9cblx0cmV0dXJuIHsgfTtcblxufSkoKTsgIiwiLyoqXG4qIHRvZG9lclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4oZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coXCJ0b2RvIGFwcCBzdGFydGVkXCIpO1xufSkoKTsiXX0=
