window.addEventListener('load',function(){
    const formInput = document.getElementById("inputNewItem");
    const userInput = document.getElementById("entertask");
    const displayBlock = document.getElementById("displayTasks");
    
    formInput.addEventListener('submit',(e)=>{
        e.preventDefault();
        let text = userInput.value;
        if (text== ''){
            alert("Please enter a item to be added!");
            return;
        }
        //Main container for individual todo list item
        const indvTask = document.createElement("div");
        indvTask.classList.add("task");

        //Main textbox containing each item
        const textBox = document.createElement("input");
        textBox.classList.add("inputprop","boxtype");
        textBox.type="text";
        textBox.setAttribute("readonly","readonly");
        textBox.value=text;
        indvTask.appendChild(textBox);
        
        //Section which will group both the below buttons
        const buttonSection = document.createElement("section");
        buttonSection.classList.add("btns");
        //Create Edit button
        const editButton = document.createElement("button");
        editButton.classList.add("edit-task","btn");
        editButton.type="button";
        editButton.innerText = "Edit";
        //Create Delete button
        const delButton = document.createElement("button");
        delButton.classList.add("delete-task","btn");
        delButton.type="button";
        delButton.innerText = "Delete";
        //Appending both the buttons with the section
        buttonSection.appendChild(editButton);
        buttonSection.appendChild(delButton);
        indvTask.appendChild(buttonSection);
        
        //and further appending with the main div containing each todo list item
        displayBlock.appendChild(indvTask);

        userInput.value = "";
        editButton.addEventListener('click',(e)=>{
            if (editButton.innerText.toLowerCase() =='edit'){
                textBox.removeAttribute("readonly");
                editButton.innerText = 'Save';
            }else{
                    editButton.innerText = 'Edit';
                    textBox.setAttribute("readonly","readonly");
            }
        });

        delButton.addEventListener('click',(e)=>{
            indvTask.remove();
        });
    }); 

});