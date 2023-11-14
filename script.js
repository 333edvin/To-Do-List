function addTask() {
    // Get task input value
    var taskInput = document.getElementById('taskInput');
    var taskValue = taskInput.value.trim();

    // creating tasks
    if (taskValue !== '') {
      var listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
      listItem.innerHTML = `
        <span>${taskValue}</span>
        <div>
          <button class="btnn  btn-sm mr-2" onclick="editTask(this)"><i class="fa-solid fa-pen-to-square" style="color: #005eff;"></i></button>
          <button class="btnn  btn-sm" onclick="deleteTask(this)"><i class="fa-solid fa-trash" style="color: #ff0000;"></i></button>
        </div>
      `;

      // new list item
      document.getElementById('taskList').appendChild(listItem);

      // Clear the task input field
      taskInput.value = '';
    }
  }

  function editTask(button) {
    var listItem = button.closest('li');
    var taskText = listItem.querySelector('span').innerText;

    // Display prompt for editing task
    var editedTask = prompt('Edit Task:', taskText);

    if (editedTask !== null && editedTask !== '') {
      listItem.querySelector('span').innerText = editedTask;
    }
  }

  function deleteTask(button) {
    var listItem = button.closest('li');
    listItem.parentNode.removeChild(listItem);
  }