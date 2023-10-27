function addTask() {
    let task = document.getElementById("btn_add").value 

    if(task) {
        let listItem = document.createElement("li")
        listItem.classList.add("list-group-item", "d-flex", "align-items-center", "ps-0", "pe-3", "py-1", "rounded-0", "border-0", "bg-transparent");
        listItem.innerHTML = `
                                <div class="form-check">
                                    <input class="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked1"
                                        aria-label="..." checked />
                                </div>
                                <div><p class="lead fw-normal mb-0">${task}</p></div>
                                <div class="d-flex flex-row justify-content-end mb-1">
                                <a href="#!" class="text-info" data-mdb-toggle="tooltip" title="Edit todo">
                                            <i class="fa-solid fa-pen-to-square" style="color: #1f5137;"></i></a>
                                    <a href="#!" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo">
                                    <i class="fa-solid fa-trash" style="color: #c20030;"></i>
                                </div>
        `

        document.getElementById("task-list").appendChild(listItem)

        document.getElementById("input_to_do").value = "";
    }
}
console.log(task)