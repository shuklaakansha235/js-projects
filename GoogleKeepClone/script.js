const addButton = document.querySelector('#add');

const updateLsData = () =>{
    const textAreaData = document.querySelectorAll('textArea');
    const notes = [];

    textAreaData.forEach((note) => {
        return notes.push(note.value);
    });

    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNote = (text = ' ') => {

    const note = document.createElement('div');
    note.classList.add("note");

    const htmlData = `

    <div class="operation">
    <button class="edit"> <i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i> </button>
    </div>

    <div class="main ${text ? "" :"hidden"}"> </div>
    <textarea class="${text ? "hidden" :""}"> </textarea> `;
    
    note.insertAdjacentHTML('afterbegin',htmlData);


    // getting the refrences
    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // deleting the node   
    delButton.addEventListener('click', () =>{
        note.remove();
        updateLsData();
    });

   // toggle using edit button
textArea.value = text;
mainDiv.innerHTML = text;


   editButton.addEventListener('click',() =>{
    mainDiv.classList.toggle('hidden'); // toggle: onn / off
    textArea.classList.toggle('hidden'); // toggle: onn / off
  
   })

   textArea.addEventListener('change',(event) =>{
        const value = event.target.value;
        mainDiv.innerHTML = value;

        updateLsData();
   })

document.body.appendChild(note);
}

// getting data back from local storage:
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach((note) => addNewNote(note))
};

//append: add something ( it appeds a node as the last child of a node)

addButton.addEventListener('click', () =>{
    addNewNote()
});

