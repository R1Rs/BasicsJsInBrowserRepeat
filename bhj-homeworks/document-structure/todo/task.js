let taskInput = document.querySelector(".tasks__input");
let taskList = document.querySelector(".tasks__list");

let taskAdd = document.querySelector(".tasks__add");
taskAdd.addEventListener("click", addTask);

function addTask(el) {
    el.preventDefault();
    if (taskInput.value != "") {
    taskList.innerHTML += `<div class="task"> 
                           <div class="task__title">${taskInput.value}</div>
                           <a hrev="#" class="task__remove">&times;</a>
                           </div>`
    taskInput.value = "";
    let taskRemove = document.querySelectorAll(".task__remove");
    taskRemove.forEach(element => element.addEventListener("click", deleteTask));
}}


function deleteTask(el) {
   element = el.target;
   elementForDelete = element.parentElement;
   elementForDelete.remove();
}