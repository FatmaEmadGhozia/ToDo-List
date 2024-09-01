function addTask(prioritySelector, inputSelector, counterSelector, listSelector) {
  let addBtn = document.querySelector(prioritySelector);
  let taskInput = document.querySelector(inputSelector);
  let taskCount = 0;
  let taskCounter = document.querySelector(counterSelector);

  addBtn.addEventListener('click', function() {
      let taskValue = taskInput.value.trim();
      if (taskValue === "") {
          alert("Input is empty!");
      } else {
          let listItem = document.createElement("li");
          listItem.className = "list_item border border-secondary-subtle p-3 ps-3 mt-2 d-flex";
          listItem.innerHTML = `
              <span class="value">${taskValue}</span>
              <div class="icons ms-auto">
                  <i class="fa-regular fa-circle-check me-1 text-success done" title="done"></i>
                  <i class="fa-solid fa-trash-can text-danger deleted" title="delete"></i>
              </div>
          `;
          document.querySelector(listSelector).appendChild(listItem);
          taskCounter.innerHTML = `${++taskCount}`;

          // Handle task completion
          listItem.querySelector(".done").addEventListener("click", function() {
              listItem.querySelector("span").classList.toggle("completed");
          });

          // Handle task deletion
          listItem.querySelector(".deleted").addEventListener("click", function() {
              listItem.remove();
              taskCounter.innerHTML = `${--taskCount}`;
          });

          taskInput.value = '';
      }
  });
}

// Initialize tasks for different priorities
addTask(".addTask", "#User-Task", ".number", ".Tasks-List");
addTask(".addHPeriorityTask", "#UserhighPeriorityTask", ".number1", ".TasksHighPeriorityList");
addTask(".addMPeriorityTask", "#UsermediumPeriorityTask", ".number2", ".TasksMediumPeriorityList");
addTask(".addLPeriorityTask", "#UserlowPeriorityTask", ".number3", ".TasksLowPeriorityList");
