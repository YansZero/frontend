import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ addData }) => {
  const [note, setNote] = useState("")
  const [noteDate, setNoteDate] = useState("")
  const [noteTime, setNoteTime] = useState("")

  function noteChange(e) {
    setNote(e.target.value)
  }

  function noteDateChange(e) {
    setNoteDate(e.target.value)
  }

  function noteTimeChange(e) {
    setNoteTime(e.target.value)
  }

  console.log(note, noteDate, noteTime)

  function addItem() {
    addData(function (prevData) {
      return [        
        {
          id: v4(),
          note: note,
          date: noteDate,
          time: noteTime,
        },
        ...prevData,
      ]
    })
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期：</p>
      <input type="date" value={noteDate} onChange={noteDateChange} />
      <p>時間：</p>
      <input type="time" value={noteTime} onChange={noteTimeChange} />
      <button onClick={addItem} className="add">
        新增備忘事項
      </button>
    </div>
  );
};

export default Edit
