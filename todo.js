const todoValue=document.getElementById("todoText"),
listItems=document.getElementById('list-items'),
addUpdateClick=document.getElementById('AddUpdateClick');
let todoData=JSON.parse(localStorage.getItem("todoData"));

if(todoData!=null){ReadToDoDataitem();}
function ReadToDoDataitem(){
    console.log(todoData);
    todoData.forEach(element=>{
      let dataItem=element.item;
      let style="";
      if(element.status){
        style="style='text-decoration:line-through'";
      }
      let li=document.createElement('li');
      li.classList.add('compitem');
      const todoItems=`<div class="listitem" ${style}>
      ${dataItem}</div>
      <div class="listitem">
      ${style===""?`
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 edit todo-controls">
        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
      `:""}      
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 delete todo-controls">
      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
      </div>`;
      li.innerHTML=todoItems;
      listItems.insertBefore(li,listItems.firstChild);
      document.querySelector('.listitem').parentElement.addEventListener("click", (event)=>{
        Completetask(event);
      });
      if(element.status==false){
        document.querySelector('.edit').addEventListener("click",(event)=>{
        UpdateTodoItem(event);
        })
      }
      document.querySelector('.delete').addEventListener("click",(event)=>{
        DeleteTodoItem(event);
      })
    })
}

addUpdateClick.addEventListener("click",function(){
    CreateToDoData();
});


function CreateToDoData(){
    console.log(todoValue.value);
    if(todoValue.value){
        todoValue.focus();
    }
    let li=document.createElement('li');
    li.classList.add('compitem');
    const todoItems=`<div class="listitem">
    ${todoValue.value}</div>
    <div class="listitem">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 edit todo-controls">
    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 delete todo-controls">
    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
    </div>`;
    li.innerHTML=todoItems;
    listItems.insertBefore(li,listItems.firstChild);
    if(!todoData){
        todoData=[];
    }
    //adding to local storage
    let dataItem={item:todoValue.value, status:false};
    todoData.push(dataItem);
    localStorage.setItem("todoData",JSON.stringify(todoData));
    todoValue.value="";
    document.querySelector('.listitem').parentElement.addEventListener("click", (event)=>{
        Completetask(event);
    });
    document.querySelector('.edit').addEventListener("click",(event)=>{
        UpdateTodoItem(event);
    })
    document.querySelector('.delete').addEventListener("click",(event)=>{
        DeleteTodoItem(event);
    })
}

function UpdateTodoItem(event) {
    let l = event.currentTarget.parentElement.parentElement;
    let prevtext=l.innerText.trim();
    if (l.querySelector("div").style.textDecoration === "") {
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('placeholder', 'Add your Task');
        newInput.classList.add('updatelist');
        l.replaceChild(newInput, l.firstChild);
        const newButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        newButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        newButton.setAttribute("fill", "none");
        newButton.setAttribute("viewBox", "0 0 24 24");
        newButton.setAttribute("stroke-width", "1.5");
        newButton.setAttribute("stroke", "currentColor");
        newButton.setAttribute("class", "w-6 h-6");
        newButton.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        `;
        l.replaceChild(newButton, l.children[1]);
        newButton.addEventListener("click",()=>{
            let newitem=l.firstChild;
            if(newitem.value){
                newitem.focus();
            }
            let li=document.createElement('li');
            li.classList.add('compitem');
            const todoItems=`<div class="listitem">
            ${newitem.value}</div>
            <div class="listitem">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 edit todo-controls">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 delete todo-controls">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            </div>`;
            li.innerHTML=todoItems;
            listItems.insertBefore(li,listItems.firstChild);
            l.parentElement.removeChild(l);
            todoData.forEach((element)=>{
                if(element.item==prevtext){
                    element.item=newitem.value;
                    localStorage.setItem('todoData', JSON.stringify(todoData));
                }
            })
            document.querySelector('.listitem').parentElement.addEventListener("click", (event)=>{
                Completetask(event);
            });
            document.querySelector('.edit').addEventListener("click",(event)=>{
                UpdateTodoItem(event);
            })
            document.querySelector('.delete').addEventListener("click",(event)=>{
                DeleteTodoItem(event);
            })
        })
    }
}

function DeleteTodoItem(event){
    let l = event.currentTarget.parentElement.parentElement;
    l.remove();
    todoData.forEach((element)=>{
        if(element.item===l.innerText.trim()){
            let idx=todoData.indexOf(element);
            todoData.splice(idx,1);
            localStorage.setItem('todoData', JSON.stringify(todoData));
        }
    });
}

function Completetask(event){
    if (event.currentTarget.querySelector("div").style.textDecoration === "") {
        event.currentTarget.querySelector("div").style.textDecoration = "line-through";
        event.currentTarget.querySelector(".edit").remove();
    }
    todoData.forEach((element)=>{
        if(event.currentTarget.querySelector("div").innerText.trim()==element.item){
            element.status= true;
            console.log(element.status);
            localStorage.setItem('todoData', JSON.stringify(todoData));
        }
    })
}

todoValue.addEventListener("keypress", function(e) {
    console.log("Key pressed:", e.key);
    if (e.key === "Enter") {
        console.log("Enter key pressed");
        CreateToDoData();
    }
});


