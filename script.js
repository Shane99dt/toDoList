const addTask = document.getElementById("addTask")
const randomTask = document.getElementById("randomTask")
const validateTask = document.getElementById("validateTask")
const priority = document.getElementById("priority")
const sendToDoing = document.getElementById("sendToDoing")
const formSection = document.getElementById("sectionForm")
const form = document.getElementById("newTaskForm")
const input = document.getElementById("newTaskInput")
const tasksList = document.getElementById("tasks")
const toDoLabel = document.getElementById("todoLabel")
const doingLabel = document.getElementById("doingLabel")
const doneLabel = document.getElementById("doneLabel")
const allLabel = document.getElementById("allLabel")
let tasksTable = []

// prevents refreshing the page while adding a task

const onTaskSubmit = () => {
  console.log("submit")
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;

  // prevents addding null tasks
  if(!task){
    alert("Please add a task")
    return
  }

  let taskObjet = {
    name: task,
    status: "To do",
  }
  tasksTable.push(taskObjet)

  const taskElement = document.createElement('div')
  taskElement.classList.add('taskDiv', 'todoTask')

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

  // priority button add
  const priorityDiv = document.createElement('div')
  priorityDiv.classList.add('dropdown')

  taskElement.appendChild(priorityDiv)

  const buttonPriority = document.createElement('button')
  buttonPriority.classList.add('dropBtn')
  const priorityImg = document.createElement('i')

  priorityDiv.appendChild(buttonPriority)

  const priorityDropdownContent = document.createElement('div')
  priorityDropdownContent.classList.add('priority-dropdown-content')
  priorityDropdownContent.setAttribute('id', 'priorityDropdown')

  priorityDiv.appendChild(priorityDropdownContent)

  const priority1 = document.createElement('a')
  priority1.innerHTML = '1'
  const priority2 = document.createElement('a')
  priority2.innerHTML = '2'
  const priority3 = document.createElement('a')
  priority3.innerHTML = '3'
  const priority4 = document.createElement('a')
  priority4.innerHTML = '4'
  const priority5 = document.createElement('a')
  priority5.innerHTML = '5'

  priority1.setAttribute('id', 'firstPriority')
  priority2.setAttribute('id', 'secondPriority')
  priority3.setAttribute('id', 'thirdPriority')
  priority4.setAttribute('id', 'fourthPriority')
  priority5.setAttribute('id', 'fifthPriority')

  priorityDropdownContent.appendChild(priority1)
  priorityDropdownContent.appendChild(priority2)
  priorityDropdownContent.appendChild(priority3)
  priorityDropdownContent.appendChild(priority4)
  priorityDropdownContent.appendChild(priority5)

  buttonPriority.appendChild(priorityImg)
  priorityImg.classList.add('fa', 'fa-star')
  priorityImg.setAttribute('id', 'priority')

  // priority content end

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

  taskElement.appendChild(buttonDoingTask)
  taskElement.appendChild(buttonDelete)
  tasksList.appendChild(taskElement)

  // rest the value of the task
  input.value =''

  //priority button toggle
  buttonPriority.addEventListener('click', () => {
    priorityDropdownContent.classList.toggle('priorityDropdownShow')
  })


  // delete a task
  buttonDelete.addEventListener('click', () => {
    tasksList.removeChild(taskElement)
  })

  // validate task

  buttonValidate.addEventListener('click', () => {
    taskElement.classList.add('doneTask')
    taskElement.classList.remove('todoTask')
    taskElement.classList.remove('doingTask')
    taskElement.style.display = 'none'
  })

  // doing task

  buttonDoingTask.addEventListener('click', () => {
    taskElement.classList.add('doingTask')
    taskElement.classList.remove('doneTask')
    taskElement.classList.remove('todoTask')
    taskElement.style.display = 'none'
  })

})

  // show toDo tasks


  const showTodo = () => {
    const list = document.getElementsByClassName("todoTask")
    for(let i = 0; i < list.length; i++){
      list[i].style.display = 'flex'
      // console.log(list[i])
    }
  }

  const hideTodoTasks = () => {
    const list = document.getElementsByClassName("todoTask")
    for(let i = 0; i < list.length; i++){
      list[i].style.display = 'none'
    }
  }

  toDoLabel.addEventListener('click', () => {
    showTodo()
    hideCurrentTasks()
    hideFinishedTasks()
  })

  // show toDo tasks end

  // show current tasks

  const showCurrentTasks = () => {
    const list = document.getElementsByClassName("doingTask")
    for(let i = 0; i < list.length; i++){
      list[i].style.display = 'flex'
      console.log(list[i])
    }
  }

  const hideCurrentTasks = () => {
    const list = document.getElementsByClassName("doingTask")
    for(let i = 0; i < list.length; i++){
      list[i].style.display = 'none'
      console.log(list[i])
    }
  }

  doingLabel.addEventListener('click', () => {
    showCurrentTasks()
    hideFinishedTasks()
    hideTodoTasks()
  })

  // show current tasks end

  // show finished tasks

  const showFinishedTasks = () => {
    const list = document.getElementsByClassName("doneTask")
    for(let i = 0; i < list.length; i++){
      list[i].style.display = 'flex'
      console.log(list[i])
    }
  }

  const hideFinishedTasks = () => {
    const list = document.getElementsByClassName("doneTask")
    for(let i = 0; i < list.length; i++){
      list[i].style.display = 'none'
      console.log(list[i])
    }
  }

  doneLabel.addEventListener('click', () => {
    showFinishedTasks()
    hideTodoTasks()
    hideCurrentTasks()
  })

  // show finished tasks end

  // show all tasks

  const showAllTasks = () => {
    const list = document.getElementsByClassName("taskDiv")
    for(let i = 0; i < list.length; i++){
      list[i].style.display = 'flex'
      console.log(list[i])
    }
  }

  allLabel.addEventListener('click', () => {
    showAllTasks()
  })

  // show all tasks end


  // Random 
  function addRandomTask(){
    randomNumber()
    makeRandomTask()
    
  }

  let randomValue = ["Random task number one", "Random task number two", "Random task Number 3"]

  function randomNumber() {
    randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
}

  function makeRandomTask(){
    let generatedTask= new task(randomValue[randomNumber]);
        tasks.innerHTML += `   
        <div class="taskDiv" id="taskEl">
        <i id="validate" class='fa fa-circle' style='color:#b5b5b5'></i>
        <div class="taskContent">
          <input type = "text" value = "${generatedTask.value}" readonly>
        </div>
        <div class="iconsEnd">
          <i id="priority" class='fa fa-star' style='color:#d35a78'></i>
          <i id="sendToDoing" class='fa fa-arrow-down' style='color:#740707'></i>
          <i id="deleteTask" class='fa-solid fa-trash-can'></i>
          <button id="editBtn">edittt</button>
        </div>
      </div>
      `
  }
