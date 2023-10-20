let inp = document.querySelector("input")
let btn = document.querySelector("button");
let tasks = document.getElementById('tasks')



btn.addEventListener('click', function () {
    let item = document.createElement('li');

    //creating delete bitton
    let deletebtn = document.createElement('button');
    deletebtn.innerText = "Delete"
    deletebtn.classList.add('delete');


    item.innerText = inp.value;
    item.appendChild(deletebtn);


    tasks.appendChild(item)

    inp.value = ""
})

//Deleting Tasks by using event Deligation

tasks.addEventListener('click', function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})
