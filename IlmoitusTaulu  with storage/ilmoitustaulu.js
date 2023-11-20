const lappu = document.body.querySelector("textarea");

console.log("lappu: ", lappu);

const valinta = document.body.querySelectorAll("input");

console.log("valinta: ", valinta);

//previous notes appear on loading the page (gettNotes Method)
// getNotes().forEach(note => {
//   // const noteElement = createNoteElement(note.id, note.content )
//   //insert these notes before button(addNoteButton)
//   noteElement.insert(note);
// });


// calling local storage api to bring all the notes
function getNotes(){
  return JSON.parse(localStorage.getItem("stickynotes-notes")|| "[]" );
}


var str,
element = document.getElementById("filename");
if (element != null) {
    str = element.value;
}
else {
    str = null;
}

console.log("str: ", str);



//CHANGE COLOR


valinta[1].addEventListener("click", () => {
  changeColor(1);
})
valinta[2].addEventListener("click", () => {
  changeColor(2);
})
valinta[3].addEventListener("click", () => {
  changeColor(3);
})
valinta[4].addEventListener("click", () => {
  changeColor(4);
})

const firstColor = valinta[1];
const secondColor = valinta[2];
const thirdColor = valinta[3];
const fourthColor = valinta[4];



function changeColor(color) {

  lappu.style.opacity = "0.8";

  switch (color) {
  case 1:
      lappu.style.background = "#dc7848";
      break;
  case 2:
    lappu.style.background = "#277bc0";
      break;
  case 3:
    lappu.style.background = "#a7e7f6";
    lappu.style.opacity = "1";
    break;
  case 4:
    lappu.style.background = "#E86594";
    break;
  }
}

// change colour end


function getInput() {

  window.userInput = document.getElementById('viestikenttä').value;
  window.userInputName = document.querySelector('.filename').value;
  console.log("userInput: ", userInput);
  console.log(userInputName);
  // alertUserInput();
}

// function alertUserInput() {
//   alert(userInput);
// }
var userInput = "hello";
var userInputName = "world";
var subButton = document.querySelector("button");
// subButton.addEventListener('click', userInput, false);

console.log(subButton);
subButton.addEventListener("click", getInput);




 function saveNotes(notes){
      localStorage.setItem("stickynotes-notes", JSON.stringify(notes) );
    }
    
// PUBLISH NOTE

 

  


function AddNote(){
  
   //  ** HANNIKA ADDED following when trying to resolve the missing data issue
//   validateTextBox()

// }

//   function validateTextBox() {

//     if (document.getElementById("viestikenttä","").value != "" || document.querySelector('.filename').value != "") { 

// HANNIKA ADDED FINISH **

  const noteboard = document.body.querySelector(".placeholderNotes");
  console.log("noteboard: ", noteboard);
  const newNote = document.createElement("div");
  const noteText = document.createElement("p");
  const noteName = document.createElement("p");
  newNote.classList.add("newNote");
  noteText.classList.add("noteText");
  noteName.classList.add("noteName");
  noteText.textContent = userInput;
  noteName.textContent = userInputName;
  noteboard.appendChild(newNote);
  newNote.appendChild(noteText);
  newNote.appendChild(noteName);
  newNote.style.background = lappu.style.background;
  newNote.style.opacity = "0.8";


 const notes = getNotes();
 notes.push(noteboard);
  saveNotes(notes);
  window.userInputName = document.getElementById('filename').value;
  }
  // **HANNIKA ADDED following when trying to resolve the missing data issue
  

//  else {
//   alert("Täytä puuttuvat kentät!");
// }

//   }
  // HANNIKA ADDED FINISH **
  



  subButton.addEventListener("click", () => {AddNote()});





//delete note on double click
// element.addEventListener("dblclick", ()=>{
//   const doDelete = confirm("Are you sure you want to delete this note?");
//   if(doDelete){
//     deleteNote(id,element);
//   }
//   })
//   return element;
// }


// Make radio required
// is the note permanent?


// PUBLISH NOTE MAIN PAGE

