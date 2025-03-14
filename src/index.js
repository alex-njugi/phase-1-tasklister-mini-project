document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("DOMContentLoaded", () => {
    // Select the form and task list
    const taskForm = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    // Listen for form submission
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents page reload

        // Get the input value
        const taskInput = document.getElementById("new-task-description").value;

        if (taskInput.trim() !== "") {
            // Create a new list item
            const newTask = document.createElement("li");
            newTask.textContent = taskInput;

            // Create a delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            deleteButton.style.marginLeft = "10px";

            // Delete task when button is clicked
            deleteButton.addEventListener("click", () => {
                newTask.remove();
            });

            // Append delete button to the task
            newTask.appendChild(deleteButton);
            taskList.appendChild(newTask);

            // Clear input field
            taskForm.reset();
        }
    });
});

});
