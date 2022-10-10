import Item from "./Item";

const List = ({ lisData, deleteData }) => {
  return (
    <div className="list">
      {lisData.map((item) => {
        const { id, note, date, time } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List
