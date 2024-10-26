// Carregar tarefas do localStorage ao abrir a aplicação
document.addEventListener("DOMContentLoaded", loadTasks);

// Adicionando evento de clique ao botão "Add Task"
document.getElementById("addTaskBtn").addEventListener("click", addTask);

// Função para adicionar nova tarefa
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const task = {
        id: Date.now().toString(),
        text: taskText,
        completed: false
    };

    saveTask(task);
    displayTask(task);

    taskInput.value = "";
}

// Função para exibir tarefa na lista com checkbox
function displayTask(task) {
    const taskList = document.getElementById("taskList");

    const taskItem = document.createElement("li");
    taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
    taskItem.dataset.id = task.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "mr-2";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleComplete(task.id));

    const taskText = document.createElement("span");
    taskText.className = task.completed ? "completed-task" : "";
    taskText.textContent = task.text;

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning btn-sm mx-1";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => editTask(task.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
}

// Carregar e exibir todas as tarefas salvas no localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(displayTask);
}

// Salvar tarefa no localStorage
function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Função para alternar o estado de conclusão da tarefa
function toggleComplete(taskId) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const task = tasks.find(t => t.id === taskId);
    task.completed = !task.completed;

    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.querySelector(`[data-id='${taskId}'] span`).classList.toggle("completed-task");
}

// Função para editar o texto de uma tarefa
function editTask(taskId) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const task = tasks.find(t => t.id === taskId);

    const newText = prompt("Edit your task:", task.text);
    if (newText === null || newText.trim() === "") return;

    task.text = newText.trim();
    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.querySelector(`[data-id='${taskId}'] span`).textContent = newText;
}

// Função para excluir tarefa
function deleteTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.querySelector(`[data-id='${taskId}']`).remove();
}
