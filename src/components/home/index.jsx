import { useDispatch, useSelector } from "react-redux";
import HobbyList from "./hobby-list";
import { addNewHobby } from "../../actions/hobby";
const HomePage = () => {
  const hobbyList = useSelector((state) => state.hobby.list);

  const dispatch = useDispatch();

  const handleAddHobby = () => {
    console.log("state", hobbyList);
    const randomNumber = Math.random();
    const hobby = {
      name: `Hobby ${randomNumber}`,
      id: randomNumber,
    };
    const action = addNewHobby(hobby);
    console.log(action);
    dispatch(action);
  };
  return (
    <div>
      <div>
        <button onClick={handleAddHobby}>Random Hobby</button>
      </div>
      <HobbyList list={hobbyList} />
    </div>
  );
};

export default HomePage;
