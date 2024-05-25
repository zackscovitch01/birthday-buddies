import Person from "./Person";

const List = ({ people }) => {
  return (
    <section>
      {people.map((buddy) => {
        return <Person key={buddy.id} {...buddy} />;
      })}
    </section>
  );
};
export default List;
