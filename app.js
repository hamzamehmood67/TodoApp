let inp = document.querySelector("input")
let btn = document.querySelector("button");
let tasks = document.getElementById('tasks')


const addNewTask = function () {
    if (inp.value != "") {
        let item = document.createElement('li');

        //creating delete bitton
        let deletebtn = document.createElement('button');
        deletebtn.innerText = "Delete"
        deletebtn.classList.add('delete');


        item.innerText = inp.value;
        item.appendChild(deletebtn);


        tasks.appendChild(item)

        inp.value = ""
    }
}


btn.addEventListener('click', function () {
    addNewTask();
})

//Deleting Tasks by using event Deligation

tasks.addEventListener('click', function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})

//If enter is press then new task will be added

inp.addEventListener('keypress', function (event) {
    if (event.key == "Enter") {
        addNewTask();
    }
})
