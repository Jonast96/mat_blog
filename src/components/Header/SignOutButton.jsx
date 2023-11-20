function SignOutButton({ signOutUser }) {
  return (
    <button className="button sign-out" onClick={signOutUser}>
      Logg ut{" "}
    </button>
  );
}

export default SignOutButton;
