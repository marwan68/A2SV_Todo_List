document.addEventListener("DOMContentLoaded", function () {
  let addButton = document.getElementById("add-task-btn");
  let taskInput = document.getElementById("new-task-input");
  let taskList = document.getElementById("task-list");

  function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please write a task first!");
      return;
    }

    let li = document.createElement("li");
    let taskName = document.createElement("p");
    taskName.textContent = taskText;

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    editButton.addEventListener("click", function () {
      let newTask = prompt("Edit your task:", taskName.textContent);
      if (newTask !== null && newTask.trim() !== "") {
        taskName.textContent = newTask;
      }
    });

    removeButton.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(taskName);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = "";
  }

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
