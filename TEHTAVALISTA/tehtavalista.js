const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");
//previous notes appear on loading the page
getNotes().forEach(note => {
  const noteElement = createNoteElement(note.id, note.content )
  //insert these notes before button(addNoteButton)
  notesContainer.insertBefore(noteElement, addNoteButton);
});
//on clicking the button add notes
addNoteButton.addEventListener("click",()=>{ addNote()});


// calling local storage api to bring all the notes
function getNotes(){
  return JSON.parse(localStorage.getItem("stickynotes-notes")|| "[]" );
}


function saveNotes(notes){
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes) );
}


//create text area for each sticky note
function createNoteElement(id, content){
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Add Note";
    var colors = ['#277bc0', '#f4b63f', '#dc7848', '#fdf5d3', '#a7e7f6'];
//if want to give random color from array:
   var random_color = colors[Math.floor(Math.random() * colors.length)];
   element.style.backgroundColor = random_color;
  element.style.boxShadow = "0px 10px 24px 0px rgba(0,0,0,0.65)";

  //when there is any "change in the text, update notes"
  element.addEventListener("change", ()=>{updateNote(id, element.value);});

  //delete note on double click
  element.addEventListener("dblclick", ()=>{
  const doDelete = confirm("Are you sure you want to delete this note?");
  if(doDelete){
    deleteNote(id,element);
  }
  })
  return element;
}




//adding new note to the existing array of notes
function addNote(){
//get the existing array and add into it
const notes = getNotes();
//creating new note
const noteObject = {
  id:  Math.floor(Math.random()*1000), //generating random id
  content: "" //default content is empty string
};
//call the fucntion to create elements for it
const noteElement = createNoteElement(noteObject.id, noteObject.content);
//insert new note before button(addNoteButton)
notesContainer.insertBefore(noteElement, addNoteButton);

notes.push(noteObject);
saveNotes(notes);
}


function updateNote(id, newContent){
console.log("Updating Note");
console.log(id, newContent);
const notes = getNotes();
//find the note in array whose id match with given id
const targetNotes = notes.filter(note =>note.id == id)[0];
   targetNotes.content = newContent;
//and change/update its content

saveNotes(notes);
}


function deleteNote(id, element){
  console.log("Deleting Note");
  console.log(id, element);
  const notes = getNotes();
  //get all the notes other than the one to delete and save them in local storage
  const targetNotes = notes.filter(note => note.id != id);
  saveNotes(targetNotes);
  notesContainer.removeChild(element);
}