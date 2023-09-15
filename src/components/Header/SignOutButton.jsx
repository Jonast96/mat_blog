function SignOutButton({ signOutUser }) {
  return (
    <button className="button" onClick={signOutUser}>
      Sign Out
    </button>
  );
}

export default SignOutButton;
