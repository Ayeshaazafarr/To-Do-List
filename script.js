function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    const taskList = document.getElementById("taskList");

    if (taskText !== ""){
        const li = document.createElement("li");
        li.textContent = taskText;

        li.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
}