const addTodo = () => {
  const inputBox = document.querySelector(".form-control");
  const todoList = document.getElementById("to-do-list");

  const todoText = inputBox.value.trim();

  if (todoText === "") {
    alert("Please write something to add to your to-do list.");
    return;
  }

  // Create a new list item
  const listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.textContent = todoText;

  // Create a container for the list item and date
  const listItemContainer = document.createElement("div");
  listItemContainer.className = "list-item-container d-flex align-items-center justify-content-between";

  // Create a span for the date
  const dateSpan = document.createElement("span");
  dateSpan.className = "todo-date";
  dateSpan.textContent = getCurrentDate(); // Function to get current date

  // Create a remove button and append it to the container
  const removeButton = document.createElement("span");
  removeButton.className = "remove-btn";
  removeButton.innerHTML = "&times;"; // HTML entity for '×'

  // Append the list item, date span, and remove button to the container
  listItemContainer.appendChild(listItem);
  listItemContainer.appendChild(dateSpan);
  listItemContainer.appendChild(removeButton);

  // Append the container to the list
  todoList.appendChild(listItemContainer);

  // Clear the input field after adding the item
  inputBox.value = "";

  // Add event listener to the remove button
  removeButton.addEventListener("click", () => {
    todoList.removeChild(listItemContainer);
  });

  // Add event listener to the list item to mark it as checked
  listItem.addEventListener("click", () => {
    listItem.classList.toggle("checked");
  });
};

// Function to get current date in format YYYY-MM-DD
const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();


  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};
