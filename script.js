document.addEventListener('DOMContentLoaded', event => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Load tasks from localStorage
    loadTasks();

    function addTask(taskText, save=true) {
        if (save) {
            taskText = taskInput.value.trim();
        }
        
        if (!taskText) {
            console.log(taskText)
            alert("Please enter a task!");
            return;
        } else {

            const li = document.createElement('li');
            const deleteBtn = document.createElement('button');

            li.textContent = taskText;
            deleteBtn.textContent = 'Remove';
            deleteBtn.classList.add('remove-btn');
            li.appendChild(deleteBtn)
            taskList.appendChild(li);
            taskInput.value = '';

            deleteBtn.onclick = (event) => {
                const text = event.target.previousSibling.nodeValue;
                const storedTasks = JSON.parse(localStorage.getItem('tasks'));
                
                event.target.parentElement.remove();
                storedTasks.splice(storedTasks.indexOf(text), 1);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            };
        }

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Events for 'Enter' key and submit button to add tasks
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', event => {
        if (event.key == 'Enter') addTask();
    });
});
