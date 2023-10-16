import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import "../../sass/nav/nav.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Nav({ user, signOutUser }) {
  return (
    <nav className="container">
      <div className="mainNav">
        <h1>Food blog</h1>
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
