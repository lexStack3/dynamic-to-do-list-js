document.addEventListener('DOMContentLoaded', event => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (!taskText) {
            alert("Please enter a task!");
            return;
        };

        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');

        li.textContent = taskText;
        deleteBtn.textContent = 'Remove';
        deleteBtn.classList.add('remove-btn');
        li.appendChild(deleteBtn)
        deleteBtn.onclick = (event) => {
            event.target.parentElement.remove();
        };
        taskList.appendChild(li);
        taskInput.value = '';
    };

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', event => {
        if (event.key == 'Enter') addTask();
    });
});
