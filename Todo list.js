let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

function render(){

const list=document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

const li=document.createElement("li");

li.innerHTML=`
<span onclick="toggle(${index})" class="${task.done?'done':''}">
${task.text}
</span>

<div>
<button onclick="edit(${index})">✏️</button>
<button onclick="removeTask(${index})">❌</button>
</div>
`;

list.appendChild(li);

});

}

function addTask(){

const input=document.getElementById("taskInput");

if(input.value==="") return;

tasks.push({
text:input.value,
done:false
});

input.value="";
save();
render();
}

function toggle(i){
tasks[i].done=!tasks[i].done;
save();
render();
}

function removeTask(i){
tasks.splice(i,1);
save();
render();
}

function edit(i){

let newText=prompt("Edit task",tasks[i].text);

if(newText){
tasks[i].text=newText;
save();
render();
}

}

render();
