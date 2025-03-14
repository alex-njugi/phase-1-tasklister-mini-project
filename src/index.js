document.addEventListener("DOMContentLoaded", () => {
  // Get references to form and task list
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents page reload

    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Ignore empty tasks

    // Create a task element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.style.marginLeft = "10px";

    // Delete task on button click
    deleteButton.addEventListener("click", () => li.remove());

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  });
});
