const form = document.querySelector('#submitForm');
const input = document.querySelector('#list-input');
const list = document.querySelector('#newUL');

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    const choreName = input.value;
    const newLI = document.createElement('LI');
    newLI.innerText = choreName;
    list.append(newLI);
    input.value ="";
});

list.addEventListener('click', function(e){
    e.target.nodeName === 'LI'&&
    e.target.remove();
})
