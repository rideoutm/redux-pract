import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { authActions } from "./store";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {console.log(authenticated)}
      <Header />
      {authenticated ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
