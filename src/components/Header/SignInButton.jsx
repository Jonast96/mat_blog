import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function SignInButton() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  return (
    <button className="button" onClick={signInWithGoogle}>
      Sign in
    </button>
  );
}

export default SignInButton;
