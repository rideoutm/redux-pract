import classes from "./Header.module.css";
import { authActions } from "../store";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const authenticated = useSelector((state) => state.auth.isAuthenticated);

  const logout = (e) => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
