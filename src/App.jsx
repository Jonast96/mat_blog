import { useState, useEffect } from "react";
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
import Nav from "./components/Header/Nav";
import Heading from "./components/Heading/Heading";
import RecipeList from "./components/recipeList/RecipeList";
import Loading from "./components/Loading";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import SingleRecipe from "./components/singleRecipe/SingleRecipe";

import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    window.location.href = "/";
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

  function Layout(props) {
    return (
      <div>
        <header>
          <Nav user={user} signOutUser={signOutUser} />
        </header>
        <main>{props.children}</main>
        <footer className="container">
          <p>&copy; 2023</p>
        </footer>
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {recipes.length > 0 ? (
                    <main className="container">
                      <Heading
                        recipe={
                          recipes[Math.floor(Math.random() * recipes.length)]
                        }
                      />
                      <RecipeList
                        recipe={recipes}
                        deleteRecipe={deleteRecipe}
                      />
                    </main>
                  ) : (
                    <Loading />
                  )}
                </>
              }
            />

            <Route
              path="/create"
              element={<CreateRecipe postRecipe={addRecipe} author={user} />}
            />

            <Route
              path="/recipe"
              element={<SingleRecipe recipes={recipes} />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
