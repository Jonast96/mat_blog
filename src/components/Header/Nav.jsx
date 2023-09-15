import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import "../../sass/nav/nav.scss";

function Nav({ user, signOutUser }) {
  return (
    <nav className="container">
      <div className="mainNav">
        <h1>Food blog</h1>
        {user?.accessToken ? (
          // <SignOutButton signOutUser={signOutUser} />
          <div className="userNav">
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
