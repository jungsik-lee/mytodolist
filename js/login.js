const form = document.querySelector(".initial-screen");
const input = document.querySelector(".initial-screen-input input");
function onSaveUserName(event)
{
    const username = input.value;
    localStorage.setItem("username",username); 
}


const savedName = localStorage.getItem("username");
if(savedName === null)
{
    form.classList.remove("hidden");
    form.addEventListener("submit",onSaveUserName);
}
else{
    location.href = "todoList.html";
}