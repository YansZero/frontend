const date = document.getElementById('date');
const time = document.getElementById('time');
const note = document.getElementById('note');
const addNoteBtn = document.getElementById('addNoteBtn');
const deleteNoteBtn = document.getElementById('deleteNoteBtn');
const showList = document.getElementById('showList');
const noteList=[];

date.valueAsDate = new Date();

//class
// class RenderTemplate {
//     appen() {   }
//
//     render() {
//         let contentStr='';
//         noteList.map((data)=>{
//             //template
//             contentStr += `
//             <div class='item'>
//                 <div>
//                     <p>Note: ${data.note}</p>
//                     <p>Note-time: ${data.date}-${data.time}</p>
//                 </div>
//             </div>
//             `;
//         });
//         showList.innerHTML = contentStr;
//     }
// }

// const r1 = new RenderTemplate();

// addNoteBtn.addEventListener('click',function () {
//     noteList.unshift({
//         id:noteList.length,
//         date:date.value,
//         time:time.value,
//         note:note.value
//     });
//     r1.render(); 
// })

// deleteNoteBtn.addEventListener('click',function () {
//     noteList.shift();
//     r1.render(); 
// })

//function
function refreshList() {
    let contentStr='';
    noteList.map((data)=>{
        //template
        contentStr += `
        <div class='item'>
            <div>
                <p>Note: ${data.note}</p>
                <p>Note-time: ${data.date}-${data.time}</p>
            </div>
        </div>
        `;
    });
    showList.innerHTML = contentStr;
}

addNoteBtn.addEventListener('click',function () {
    noteList.unshift({
        id:noteList.length,
        date:date.value,
        time:time.value,
        note:note.value
    });
    refreshList(); 
})

deleteNoteBtn.addEventListener('click',function () {
    noteList.shift();
    refreshList(); 
})

