import { useState, useEffect } from "react";
import SignInButton from "./components/Header/SignInButton";
import SignOutButton from "./components/Header/SignOutButton";
import RecipeForm from "./components/RecipeForm";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import RecipeListItem from "./components/RecipeListItem";
import Nav from "./components/Header/Nav";
import Heading from "./components/Heading/Heading";
import RecipeCard from "./components/RecipeCard";
import RecipeList from "./components/recipeList/RecipeList";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkz8reepxrmnTzFVkHvrYXm8pFIfb69Vk",
  authDomain: "food-blog-ac5c6.firebaseapp.com",
  projectId: "food-blog-ac5c6",
  storageBucket: "food-blog-ac5c6.appspot.com",
  messagingSenderId: "515505415546",
  appId: "1:515505415546:web:f5f62d2e6b9a2a1324a2c3",
  measurementId: "G-L23K2CJXKH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const [recipes, setRecipes] = useState([]);

  // Listen for auth state changes
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  // Sign out the user
  const signOutUser = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Add a new document with a generated id.
  const addRecipe = async (recipe) => {
    try {
      const docRef = await addDoc(collection(db, "recipes"), recipe);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Get all documents from the "recipes" collection
  async function getAllRecipes() {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    const recipeList = [];
    querySnapshot.forEach((doc) => {
      recipeList.push({ id: doc.id, ...doc.data() });
    });
    setRecipes(recipeList);
  }

  useEffect(() => {
    getAllRecipes();
  }, []);

  //Delete a document from the "recipes" collection
  const deleteRecipe = async (recipeId) => {
    try {
      await deleteDoc(doc(db, "recipes", recipeId));
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== recipeId)
      );
      console.log("Recipe deleted successfully");
    } catch (e) {
      console.error("Error deleting recipe: ", e);
    }
  };

  return (
    <>
      <Nav user={user} signOutUser={signOutUser} />
      <main className="container">
        {/* <RecipeForm postRecipe={addRecipe} author={user} /> */}

        <Heading recipe={recipes[0]} />
        <RecipeList recipe={recipes} />
      </main>

      {/* <footer>
        <p>&copy; 2023</p>
      </footer> */}
    </>
  );
}

export default App;
