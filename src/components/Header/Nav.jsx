import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import "../../sass/nav/nav.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Nav({ user, signOutUser }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="container">
      <div className="mainNav">
        <Link to="/">
          <h1>MatKroken</h1>
        </Link>
        {user?.accessToken ? (
          <div className="userNav">
            <a href="/create">
              <div className="addRecipe button">
                <FontAwesomeIcon icon={faPlus} /> Ny oppskrift
              </div>{" "}
            </a>
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="profileDiv"
            >
              <div>
                <img src={user.photoURL} alt="" />
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
              <div
                className={
                  showDropdown ? "profileDropdown show" : "profileDropdown hide"
                }
              >
                <SignOutButton signOutUser={signOutUser} />
              </div>
            </div>
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </nav>
  );
}

export default Nav;
