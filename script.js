document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  li.addEventListener("click", () => li.remove());

  taskList.appendChild(li);
  taskInput.value = "";
}
