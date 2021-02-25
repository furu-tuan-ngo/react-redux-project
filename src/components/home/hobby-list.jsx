const HobbyList = (props) => {
  return (
    <ul>
      {props.list.map((hobby) => {
        return <li key={hobby.id}>{hobby.name}</li>;
      })}
    </ul>
  );
};

export default HobbyList;
