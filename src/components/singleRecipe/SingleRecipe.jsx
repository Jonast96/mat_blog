import { useLocation } from "react-router-dom";
import FullRecipe from "./FullRecipe";

function SingleRecipe({ recipes, author, deleteRecipe }) {
  window.scrollTo(0, 0);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const recipeId = queryParams.get("id");
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  return (
    <div className="container">
      <FullRecipe recipe={recipe} author={author} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default SingleRecipe;
