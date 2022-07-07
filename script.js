const addTask = document.getElementById("addTask")
const randomTask = document.getElementById("randomTask")
const validateTask = document.getElementById("validateTask")
const priority = document.getElementById("priority")
const sendToDoing = document.getElementById("sendToDoing")
const deleteTask = document.getElementById("deleteTask")
const formSection = document.getElementById("sectionForm")
const form = document.getElementById("newTaskForm")
const input = document.getElementById("newTaskInput")
const tasks = document.getElementById("tasks")

// const createTask = () => {
//   tasks.innerHTML += `
//     <div id="tasks" class="taskDiv">

//       <i id="validate" class='fa fa-circle' style='color:#b5b5b5'></i>
//       <div class="taskContent">
//           sosmdfjh
//       </div>
//       <div class="iconsEnd">
//         <i id="priority" class='fa fa-star' style='color:#d35a78'></i>
//         <i id="sendToDoing" class='fa fa-arrow-down' style='color:#740707'></i>
//         <i id="deleteClass" class='fa-solid fa-trash-can'></i>
//       </div>

//     </div>
//     `
// }

// document.querySelector('#addTask').addEventListener('click', () => {
//   createTask()
// });

// const deleteTaskFunction = () => {

// }

// prevents refreshing the page while adding a task
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;

  if(!task){
    alert("Please add a task")
    return
  }

  tasks.innerHTML += `
  <div class="taskDiv">
    <i id="validate" class='fa fa-circle' style='color:#b5b5b5'></i>
    <div class="taskContent">
      <input type = "text" value = "${task}" readonly>
    </div>
    <div class="iconsEnd">
      <i id="priority" class='fa fa-star' style='color:#d35a78'></i>
      <i id="sendToDoing" class='fa fa-arrow-down' style='color:#740707'></i>
      <i id="deleteClass" class='fa-solid fa-trash-can'></i>
      <button id="editBtn">edittt</button>
    </div>
  </div>
  `
  // rest the value of the task
  input.value =''

  const taskEdit = document.getElementById('editBtn')

  let id = this.getAttribute('id')
  console.log(id)

  taskEdit.addEventListener('click', () => {
    if( id == ("editBtn")){
      console.log("ok")
    }
  })


})