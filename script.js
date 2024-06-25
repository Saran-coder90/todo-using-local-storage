let input = document.querySelector("#input")
let button = document.querySelector("#add")
let contain = document.querySelector("#todo-task")

let list = []

window.onload = ()=>{ 
    
    list = JSON.parse(localStorage.getItem('lists')) || []
    
    list.forEach(element => add_to_list(element));
}

button.addEventListener('click', ()=>{
   let value = input.value;
   input.value = ""
   list.push(value)
   localStorage.setItem('lists', JSON.stringify(list))
   add_to_list(value)
});

function add_to_list(value){
    let element = document.createElement('p')
    element.innerHTML = value
    contain.appendChild(element)
   
    

    element.addEventListener('click', ()=>{
        element.style.textDecoration = 'line-through'
        remove_list(value)
    })

    element.addEventListener('dblclick', ()=>{
        contain.removeChild(element)
        remove_list(value)
    })
}

function remove_list(value){
    let index_pos = list.indexOf(value)
    if (index_pos >= 0){
        list.splice(index_pos, 1)
    }

    localStorage.setItem('lists', JSON.stringify(list))
}