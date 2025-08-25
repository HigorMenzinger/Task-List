const inputTask = document.getElementById("input-task");
const sendBtn = document.getElementById("send-btn");
const taskList = document.querySelector("#list ul");

let tasks = JSON.parse(localStorage.getItem("@taskList")) || [];

function renderTaks() {
  taskList.innerHTML = "";
  tasks.forEach((todo) => {
    const liElement = document.createElement("li");
    const taskElement = document.createTextNode(todo);

    let buttonElement = document.createElement("button");
    let btnText = document.createTextNode("Excluir");

    buttonElement.appendChild(btnText);

    const position = tasks.indexOf(todo);

    buttonElement.setAttribute("onclick", `removeTask(${position})`);

    liElement.appendChild(taskElement);
    liElement.appendChild(buttonElement);
    taskList.appendChild(liElement);
  });
}

function addTask() {
  if (inputTask.value === "") {
    alert("digite uma tarefa");
    return false;
  } else {
    const newTask = inputTask.value;
    tasks.push(newTask);
    inputTask.value = "";
    renderTaks();
    saveLocalStorage();
  }
}
renderTaks();

function saveLocalStorage() {
  localStorage.setItem("@taskList", JSON.stringify(tasks));
}

function removeTask(position) {
  tasks.splice(position, 1);
  renderTaks();
  saveLocalStorage();
}

sendBtn.onclick = addTask;
