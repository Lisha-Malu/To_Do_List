const input=document.getElementById("input");
const listcontainer=document.querySelector(".listcontainer");

function add(){
    if(input.value===''){
        alert("You must write something");
    }        
        else{
            let li=document.createElement("li");
            li.innerHTML=input.value;
            listcontainer.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }  
         input.value=''; 
         savedata(); 
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

// to save the data even after refresh
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

// when the website is accesed previous data to be restored
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

showtask();
