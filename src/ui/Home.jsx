import CreateUser from "../features/user/CreateUser"
import { useSelector } from "react-redux"
import Button from "./Button";

function Home() {
  const userName = useSelector(state=> state.user.userName);

  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="text-xl md:text-3xl px-4 text-yellow-600 font-semibold text-center mb-4">
        The best pizza.
        <br />
       <span className="text-yellow-400"> Straight out of the oven, straight to you. </span>
      </h1>
      {!userName ? <CreateUser /> : <Button type="primary" to="/menu">{`Continue Ordering ${userName}`}</Button> }
      
    </div>
  );
}

export default Home;
