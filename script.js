document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const container2 = document.querySelector(".container2");

    const createTaskItem = (taskContent) => {
        const li = document.createElement("li");
        li.textContent = taskContent;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", deleteTask);
        li.appendChild(deleteButton);
        li.addEventListener("click", toggleTask);
        return li;
    };

    const addTask = () => {
        const taskContent = taskInput.value.trim();
        if (taskContent !== "") {
            const li = createTaskItem(taskContent);
            taskList.appendChild(li);
            taskInput.value = "";
            updateContainerVisibility(); 
        }
    };

    function toggleTask() {
        this.classList.toggle("completed");
    }

    const deleteTask = (event) => {
        event.stopPropagation();
        event.target.parentElement.remove();
        updateContainerVisibility(); 
    };
    
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    const initialTasks = [];
    initialTasks.forEach(task => {
        const li = createTaskItem(task);
        taskList.appendChild(li);
    });

    const addButton = document.createElement("button");
    addButton.textContent = "Add Task";
    addButton.id = "addButton";
    addButton.addEventListener("click", addTask);
    taskInput.parentNode.appendChild(addButton);

    function updateContainerVisibility() {
        if (taskList.children.length === 0) {
            container2.style.display = "none";
        } else {
            container2.style.display = "block";
        }
    }

    updateContainerVisibility();
});
