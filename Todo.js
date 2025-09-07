const inputeBox = document.getElementById("inputeBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener ("click", function() {
    const task = inputeBox.value;
    if (task === "") {
        alert ("Task cannot be empty!");
        return;
    }

    const list = document.createElement("li");
    list.textContent = task;

    list.addEventListener("click", function (){
        list.classList.toggle("done");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", function() {
        todoList.removeChild(list);
})


list.appendChild(deleteBtn);
todoList.appendChild(list);
inputeBox.value = "";
})



