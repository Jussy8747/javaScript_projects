// define ul variables
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-task')
const filter = document.querySelector('#filter')
const taskinput = document.querySelector('#task')

// load all event listeners
loadEvenListeners()

// load all event listeners
function loadEvenListeners(){
// DOM load event
document.addEventListener('DOMContentLoaded', getTasks)

  // add task event
  form.addEventListener('submit', addtask)
  // remove task event
  tasklist.addEventListener('click', removeTask)
  // clear task event
  clearbtn.addEventListener('click', clearTask)
  // filter tasks
  filter.addEventListener('keyup', filterTask)
}

// //get task fro ls
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  
  tasks.forEach(function(task){
    // create li element
  const li = document.createElement('li')
  li.className = 'collection-item'
  // create text node and append to de li
  li.appendChild(document.createTextNode(task))
  // create new link element
  const link = document.createElement('a')
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // append link to li
  li.appendChild(link)
  // append li to the ul
  tasklist.appendChild(li);

  })
}

// addtask
function addtask(e){
  if(taskinput.value === ''){
    alert('add a task')
  }

  // create li element
  const li = document.createElement('li')
  li.className = 'collection-item'
  // create text node and append to de li
  li.appendChild(document.createTextNode(taskinput.value))
  // create new link element
  const link = document.createElement('a')
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // append link to li
  li.appendChild(link)
  // append li to the ul
  tasklist.appendChild(li);

  // store in local storage 
  storeTaskInLocalStorage(taskinput.value)



  // clear input
  taskinput.value = ''
e.preventDefault();
}


// store tasks
function storeTaskInLocalStorage(task){
let tasks;
if(localStorage.getItem('tasks') === null){
  tasks = [];
}else{
  tasks = JSON.parse(localStorage.getItem('tasks'))
}
tasks.push(task);
localStorage.setItem('tasks', JSON.stringify(tasks))
}

// remove tasks
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('are you sure?')){
    e.target.parentElement.parentElement.remove();
    }
  }


}

// clear task
function clearTask(e){

 // tasklist.innerHTML = ''
while(tasklist.firstChild){
   tasklist.removeChild(tasklist.firstChild)
 }
}

function filterTask(e){
const text = e.target.value.toLowerCase()
document.querySelectorAll('.collection-item').forEach(task =>{
  const item = task.firstChild.textContent
  if(item.toLowerCase().indexOf(text) != -1 ){
task.style.display = "block"
  }else {
    task.style.display = "none"
  }
})
}