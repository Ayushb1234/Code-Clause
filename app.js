const addbtn = document.querySelector("#addbtn")
const main =document.querySelector('#main')

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }

    )
    


}
 addbtn.addEventListener(
    "click",
    function () {
        addNote()
    }
 )
//  <div class="note">
//  <div class="tool">
//      <i class="fas fa-trash"></i>
//      <i class="fas fa-save"></i>

//  </div>
//  <textarea></textarea>



// </div> 


 const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
         <i class="trash fas fa-trash"></i>
        <i class="save fas fa-save"></i>

</div>
<textarea></textarea>

`; 
note.querySelector(".trash").addEventListener(
    "click",
    function() {
        note.remove()
    }
)   
note.querySelector(".save").addEventListener(
    "click",
    function() {
        saveNotes()
    }
)
    main.appendChild(note);


 }