const addTask = document.getElementById("addTask")
const randomTask = document.getElementById("randomTask")
const validateTask = document.getElementById("validateTask")
const priority = document.getElementById("priority")
const sendToDoing = document.getElementById("sendToDoing")
const formSection = document.getElementById("sectionForm")
const form = document.getElementById("newTaskForm")
const input = document.getElementById("newTaskInput")
const tasksList = document.getElementById("tasks")

// prevents refreshing the page while adding a task
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;

  if(!task){
    alert("Please add a task")
    return
  }

//  // tasks.innerHTML += `
//  // <div class="taskDiv" id="taskEl">
//  //   <i id="validate" class='fa fa-circle' style='color:#b5b5b5'></i>
//  //   <div class="taskContent">
//  //     <input type = "text" value = "${task}" readonly>
//  //   </div>
//  //   <div class="iconsEnd">
//  //     <i id="priority" class='fa fa-star' style='color:#d35a78'></i>
//  //     <i id="sendToDoing" class='fa fa-arrow-down' style='color:#740707'></i>
//  //     <i id="deleteTask" class='fa-solid fa-trash-can'></i>
//  //     <button id="editBtn">edittt</button>
//  //   </div>
//  // </div>
//  // `
  const taskElement = document.createElement('div')
  taskElement.classList.add('taskDiv')

  const buttonValidate = document.createElement('button')
  const validateImg = document.createElement('i')

  taskElement.appendChild(buttonValidate)
  buttonValidate.appendChild(validateImg)

  validateImg.classList.add('fa', 'fa-circle')
  validateImg.setAttribute('id', 'validate')

  const taskContentElement = document.createElement('div')
  taskContentElement.classList.add('taskContent')

  taskElement.appendChild(taskContentElement)

  const contentPara = document.createElement('p')
  contentPara.classList.add('content')
  contentPara.innerHTML = task

  taskContentElement.appendChild(contentPara)

  const taskEndBtns = document.createElement('div')
  taskEndBtns.classList.add('iconsEnd')

  // task end buttons
  const buttonPriority = document.createElement('button')
  const priorityImg = document.createElement('i')

  buttonPriority.appendChild(priorityImg)
  priorityImg.classList.add('fa', 'fa-star')
  priorityImg.setAttribute('id', 'priority')

  const buttonDoingTask = document.createElement('button')
  const doingTaskImg = document.createElement('i')

  buttonDoingTask.appendChild(doingTaskImg)
  doingTaskImg.classList.add('fa', 'fa-arrow-down')
  doingTaskImg.setAttribute('id', 'priority')

  const buttonDelete = document.createElement('button')
  const deleteTaskImg = document.createElement('i')

  buttonDelete.appendChild(deleteTaskImg)
  deleteTaskImg.classList.add('fa-solid', 'fa-trash-can')
  deleteTaskImg.setAttribute('id', 'deleteTaskImg')


  taskElement.appendChild(buttonPriority)
  taskElement.appendChild(buttonDoingTask)
  taskElement.appendChild(buttonDelete)
  tasksList.appendChild(taskElement)

  // rest the value of the task
  input.value =''

  // delete a task
  buttonDelete.addEventListener('click', () => {
    tasksList.removeChild(taskElement)
  })

})




