const addTask = document.getElementById("addTask")
const randomTask = document.getElementById("randomTask")
const validateTask = document.getElementById("validateTask")
const priority = document.getElementById("priority")
const sendToDoing = document.getElementById("sendToDoing")
const deleteTask = document.getElementById("deleteTask")
const formSection = document.getElementById("sectionForm")
const form = document.getElementById("newTaskForm")

const createTask = () => {
  // formSection.innerHTML += `
  //   <div class="taskDiv">
  //   <form id="task" onsubmit="onTaskSubmit(); return false;">
  //     <i id="validate" class='fa fa-circle' style='color:#b5b5b5'></i>
  //     <input value="This is a new task bla bla bla">
  //     <div class="iconsEnd">
  //       <i id="priority" class='fa fa-star' style='color:#d35a78'></i>
  //       <i class='fa fa-arrow-down' style='color:#740707'></i>
  //       <i id="deleteClass" class='fa-solid fa-trash-can'></i>
  //     </div>
  //   </form>
  // </div>
  // `
}

// document.querySelector('#addTask').addEventListener('click', () => {
//   createTask()
// });

// const deleteTaskFunction = () => {

// }

// prevents refreshing the page while adding a task
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;

  if(i)
})