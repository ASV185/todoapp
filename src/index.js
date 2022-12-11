const form = document.querySelector('#submitForm');
const input = document.querySelector('#list-input');
const list = document.querySelector('#newUL');

form.addEventListener('click', function(e){
    e.preventDefault(); 
    const choreName = input.value;
    const newLI = document.createElement('LI');
    newLI.innerText = choreName;
    list.append(newLI);
    input.value ="";
});