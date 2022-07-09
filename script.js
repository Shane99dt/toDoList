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
const taskTitle = document.getElementById("taskTitle")
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
    status: "to do",
  }

  tasksTable.push(taskObjet)
  console.log(taskObjet)
  console.log(tasksTable)

  const taskElement = document.createElement('div')
  taskElement.classList.add('taskDiv', 'todoTask')
  tasksList.appendChild(taskElement)

  const buttonValidate = document.createElement('button')
  const validateImg = document.createElement('i')

  taskElement.appendChild(buttonValidate)
  buttonValidate.appendChild(validateImg)

  validateImg.classList.add('fa', 'fa-circle')
  validateImg.setAttribute('id', 'validate')

  const taskContentElement = document.createElement('div')
  taskContentElement.classList.add('taskContent')

  taskElement.appendChild(taskContentElement)

  const contentPara = document.createElement('input')
  contentPara.classList.add('content')
  contentPara.type = 'text'
  contentPara.value = task
  contentPara.setAttribute('readonly', 'readonly');

  taskContentElement.appendChild(contentPara)

  const taskEndBtns = document.createElement('div')
  taskEndBtns.classList.add('iconsEnd')

  // task end buttons

  // priority button add

  // priority button add first way with select element

  const buttonPriority = document.createElement('div')
  buttonPriority.classList.add('dropdown')
  taskElement.appendChild(buttonPriority)

  const selectList = document.createElement('select')
  selectList.setAttribute('id', 'selectPriority')
  buttonPriority.appendChild(selectList)

  let arrayPriority = [0, 1, 2, 3, 4, 5]

  for (let i = 0; i < arrayPriority.length; i++) {
    let option = document.createElement("option");
    option.value = arrayPriority[i];
    option.text = arrayPriority[i];
    selectList.appendChild(option);
  }

  ////////////////////////////////////////

  // priority button add first way with js with display element

  // const priorityDiv = document.createElement('div')
  // priorityDiv.classList.add('dropdown')
  // taskElement.appendChild(priorityDiv)

  // const buttonPriority = document.createElement('button')
  // buttonPriority.classList.add('dropBtn')
  // const priorityImg = document.createElement('i')

  // priorityDiv.appendChild(buttonPriority)

  // const priorityDropdownContent = document.createElement('div')
  // priorityDropdownContent.classList.add('priority-dropdown-content')
  // priorityDropdownContent.setAttribute('id', 'priorityDropdown')

  // priorityDiv.appendChild(priorityDropdownContent)

  // const priority1 = document.createElement('a')
  // priority1.innerHTML = '1'
  // const priority2 = document.createElement('a')
  // priority2.innerHTML = '2'
  // const priority3 = document.createElement('a')
  // priority3.innerHTML = '3'
  // const priority4 = document.createElement('a')
  // priority4.innerHTML = '4'
  // const priority5 = document.createElement('a')
  // priority5.innerHTML = '5'

  // priority1.setAttribute('id', 'firstPriority')
  // priority2.setAttribute('id', 'secondPriority')
  // priority3.setAttribute('id', 'thirdPriority')
  // priority4.setAttribute('id', 'fourthPriority')
  // priority5.setAttribute('id', 'fifthPriority')

  // priorityDropdownContent.appendChild(priority1)
  // priorityDropdownContent.appendChild(priority2)
  // priorityDropdownContent.appendChild(priority3)
  // priorityDropdownContent.appendChild(priority4)
  // priorityDropdownContent.appendChild(priority5)

  // buttonPriority.appendChild(priorityImg)
  // priorityImg.classList.add('fa', 'fa-star')
  // priorityImg.setAttribute('id', 'priority')

  // priority content end

  const buttonDoingTask = document.createElement('button')
  const doingTaskImg = document.createElement('i')

  buttonDoingTask.appendChild(doingTaskImg)
  doingTaskImg.classList.add('fa', 'fa-arrow-down')
  doingTaskImg.setAttribute('id', 'sendToDoing')

  const buttonEditTask = document.createElement('button')
  buttonEditTask.innerText = "Edit"

  const buttonDelete = document.createElement('button')
  const deleteTaskImg = document.createElement('i')

  buttonDelete.appendChild(deleteTaskImg);
  deleteTaskImg.classList.add('fa-solid', 'fa-trash-can')
  deleteTaskImg.setAttribute('id', 'deleteTaskImg')

  taskElement.appendChild(buttonDoingTask);
  taskElement.appendChild(buttonEditTask);
  taskElement.appendChild(buttonDelete);


  // reset the value of the task
  input.value =''

  //priority button toggle
  // buttonPriority.addEventListener('click', () => {
  //   priorityDropdownContent.classList.toggle('priorityDropdownShow')
  // })

  // validate task

  buttonValidate.addEventListener('click', () => {
    taskElement.classList.add('doneTask')
    taskElement.classList.remove('todoTask')
    taskElement.classList.remove('doingTask')
    taskObjet.status = 'done'
    taskElement.style.display = 'none'
  })

  // doing task

  buttonDoingTask.addEventListener('click', () => {
    taskElement.classList.add('doingTask')
    taskElement.classList.remove('doneTask')
    taskElement.classList.remove('todoTask')
    taskObjet.status = 'doing'
    taskElement.style.display = 'none'
  })

  // Edit task

  buttonEditTask.addEventListener('click', (e) => {
    if(buttonEditTask.innerText.toLowerCase() == 'edit'){
      buttonEditTask.innerText = "Save"
			contentPara.removeAttribute("readonly")
			contentPara.focus()

    }else{
      buttonEditTask.innerText = "Edit"
			contentPara.setAttribute("readonly", "readonly")
    }
  })


  // delete a task
  buttonDelete.addEventListener('click', () => {
    tasksList.removeChild(taskElement)
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
    taskTitle.innerHTML = "Tasks"
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
    taskTitle.innerHTML = "Doing"
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
    taskTitle.innerHTML = "Finished"
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
    taskTitle.innerHTML = "All"
  })

  // show all tasks end


  // Random

  let index=0;
  let randomValue = ["", "Random task number one", "Random task Number two", "Random task number 3", "Random task number 4"]

  function randomNumber() {
    randomInteger = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  }
  
  function makeRandomTask(){ 
    let generatedTask = (randomValue[randomInteger])
    console.log(generatedTask)
    tasks.innerHTML +=
    `
    <div class="taskDiv todoTask">
      <button>
        <i class="fa fa-circle" id="validate"></i></button>
        <div class="taskContent">
          <input class="content" type="text"
          value = "${generatedTask}"
            readonly="readonly"/>
        </div>
        <div class="dropdown">
          <select id="selectPriority">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button>
          <i class="fa fa-arrow-down" id="sendToDoing"></i>
        </button>
        <button>Edit</button>
        <button>
          <i class="fa-solid fa-trash-can" id="deleteTaskImg"></i>
      </button>
    </div>`
  }

  function addRandomTask(){
    randomNumber()
    makeRandomTask()
  }

  randomTask.addEventListener('click', () => {
    addRandomTask()
   })

  //