import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import "../../sass/nav/nav.scss";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Nav({ user, signOutUser }) {
  return (
    <nav className="container">
      <div className="mainNav">
        <Link to="/">
          <h1>MatKroken</h1>
        </Link>
        {user?.accessToken ? (
          <div className="userNav">
            {/* <SignOutButton signOutUser={signOutUser} /> */}
            <a href="/create">
              <div className="addRecipe">
                <FontAwesomeIcon icon={faPlus} />
              </div>{" "}
            </a>
            <p>{user.displayName}</p>
            <img src={user.photoURL} alt="" />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </nav>
  );
}

export default Nav;
