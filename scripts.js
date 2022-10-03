const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const taskContainter = document.qyerySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    console.log(inputIsValid);

    if (!inputIsValid) {
        return inputElement.classList.add ("error")
    }

    const taskItemContainer = document.createElement("div");
    taskContainter.classList.add
    ("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener("click", () => handleClick(taskContent));

    const deleteItem = document.createElement("i");
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa-trash-alt");

    deleteItem.addEventListener("click", () => handleDeletClick(taskItemContainer, taskContent)
);
  
    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    taskContainter.appendChild
    (taskContainter);

    inputElement.value = "";
    updateLocalStorage();
};

const handleClick = (taskContent) => {
    const tasks = taskContainter.childNodes;

    for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClicked) {
        task.firstChild.classList.toggle ("completed");

    }

  }

  updateLocalStorage();

};

const handleDeleteClick = (taskItemContainer, taskContent) => {
    const tasks = tasksContainer.childNodes;

   for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.IsSameNode(taskContent);

    if (currentTaskIsBeingClicked) {
        taskItemContainer.remove();
        }
   }

    updateLocalStorage();
};

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
};

const updateLocalStorage = () => {
    const tasks = taskContainter.childNodes;

    const localStorageTasks = [...tasks].map ((task) => {
        const content = task.firstChild;
        const isCompleted = content.classList.contains("completed");

        return { desciption: content.innerText, isCompleted};
    });

    localStorage.setItem("tasks", JSON.stringify (localStorageTasks));
};

const refreshTaskUsingLocalStorage = () => {
  const tasksFromLocalStorage = JSON.parse (localStorage.getItem("tasks"));

  if (!tasksFromLocalStorage) return;

  for (const task of tasksFromLocalStorage) {
    const taskContainer = document. createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");

    if (task.isCompleted) {
        taskContent.classList.add("completed");

    }    

    taskContent.addEventListener("click", () => handleClick(taskContent));

    const deleteItem = document.createElement("i");
        deleteItem.classList.add("far");
        deleteItem.classList.add("fa-trash-alt");

    deleteItem.addEventListener("click" , () => handleDeleteClick(taskItemContainer, taskContent)
        
     );

    taskItemContainer.appendChild (taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer);

}
};

refreshTaskUsingLocalStorage();

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());
