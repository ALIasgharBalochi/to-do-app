window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const work_list = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task) {
            alert("لطفا فیلد را خالی نزارید ");
            return;
        }

		const task_el = document.createElement('div');
		task_el.classList.add('task');

        const task_container_el = document.createElement("div");
        task_container_el.classList.add("container");
        // task_container_el.innerText = task;

        

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly","readonly");

        task_container_el.appendChild(task_input_el);

        task_el.appendChild(task_container_el);

        const task_actions_el = document.createElement("dev")
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button")
        task_edit_el.classList.add("edit");
        task_edit_el.innerText = "ویرایش";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerText = "حذف";

        const task_success_el = document.createElement("button");
        task_success_el.classList.add("success");
        task_success_el.innerText = "انجام شد";

        task_actions_el.appendChild(task_success_el);
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        
        task_el.appendChild(task_actions_el);
        

        work_list.appendChild(task_el);

        input.value = "";


        task_edit_el.addEventListener("click", (e) => {
            if (task_edit_el.innerText.toLocaleLowerCase() == "ویرایش") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "ذخیره";
            }else{
                task_input_el.setAttribute("readonly","readonly");
                task_edit_el.innerText = "ویرایش ";
            }
        })

        task_delete_el.addEventListener("click", (e) => {
            task_el.style.display = "none";
        })

        task_success_el.addEventListener("click", (e) => {
           if(task_success_el.innerText == "انجام شد") {
             task_el.style.backgroundColor = "darkslategray";
             task_success_el.innerText = "برگرداندن";
           }else{
             task_el.style.backgroundColor = "black";
             task_success_el.innerText = "انجام شد";
           }
        })
    })
})

// task_el.style.backgroundColor = "darkslategray";