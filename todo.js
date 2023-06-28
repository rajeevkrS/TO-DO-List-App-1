const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('You Must Write Something')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //creating delete icon code "\u00d7"
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    //removing text from input box when task is added
    inputBox.value = "";

    //Calling local storage 
    saveData();
}


//creating click function
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData(); //Calling local storage 
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData(); //Calling local storage 
    }
}, false);

//Local Storage Function
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
