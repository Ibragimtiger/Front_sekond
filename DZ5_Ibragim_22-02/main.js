const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('#todo_list')


const createTodo = () => {
    if (!input.value) {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const deleteToDo = document.createElement('button')
        const edit = document.createElement('button')
        const text = document.createElement('p')

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        edit.setAttribute('class','edit')
        text.innerText = input.value
        deleteToDo.setAttribute('class','deleteToDo')
        div.append(edit)
        div.append(deleteToDo)
        edit.innerHTML="edit"
        deleteToDo.innerHTML="delete"
        div.append(text)
        todoList.prepend(div)
        edit.addEventListener("click",()=>{
            var newText=prompt("change to")
            text.innerHTML=newText
        })
        deleteToDo.addEventListener("click" , ()=>{
            todoList.removeChild(div)
        })


    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', event => event.code === 'Enter' ? createTodo() : false)


