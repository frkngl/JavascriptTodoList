//Tüm elementleri seçme
const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelector(".card-body")[0];
const secondCardBody=document.querySelector(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

eventListener();

function eventListener(){//Tüm event listenerlar
    form.addEventListener("submit",addTodo);
}

function addTodo(e){
    const newTodo=todoInput.value.trim();
    addTodoToUI(newTodo);
    e.preventDefault();
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