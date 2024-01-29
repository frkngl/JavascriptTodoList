//Tüm elementleri seçme
const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

eventListener();

function eventListener(){//Tüm event listenerlar
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
}
function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo) {
        addTodoToUI(todo);
    })
}
function addTodo(e){
    const newTodo=todoInput.value.trim();
    if(newTodo == ""){
        showAlert("danger","Lütfen bir todo girin");
    }
    else
    {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo'nuz başarıyla eklenmiştir");
    }
    e.preventDefault();
}

function getTodosFromStorage(){//Storage'dan Todoları alma
    let todos;

    if(localStorage.getItem("todos") === null)
    {
        todos = [];
    }
    else
    {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();


    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function showAlert(type,message){
    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.role="alert";
    alert.innerHTML=`${message}`; //Birinci yol
    //alert.textContent= message;   İkinci yol
    firstCardBody.appendChild(alert);
    //setTimeOut
    setTimeout(function(){
        alert.remove();
    }, 1000);
}


function addTodoToUI(newTodo){//String değerini list item olarak UI'ya ekleyecek

// <li class="list-group-item d-flex justify-content-between">
//Todo 1
//<a href = "#" class ="delete-item">
//<i class = "fa fa-remove"></i>
//</a>
//</li>-->


//listItem oluşturma
const listItem=document.createElement("li");
//link oluşturma 
const link=document.createElement("a");
link.href = "#";
link.className="delete-item";
link.innerHTML="<i class = 'fa fa-remove'></i>";


listItem.className="list-group-item d-flex justify-content-between";


//Text Node ekleme

listItem.appendChild(document.createTextNode(newTodo));
listItem.appendChild(link);

//Todo Liste list Item'ı ekleme
todoList.appendChild(listItem); 

todoInput.value="";


}