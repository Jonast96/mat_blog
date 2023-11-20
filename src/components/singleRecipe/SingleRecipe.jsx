import { useLocation } from "react-router-dom";
import FullRecipe from "../fullRecipe/FullRecipe";

function SingleRecipe({ recipes }) {
  window.scrollTo(0, 0);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const recipeId = queryParams.get("id");
  console.log(recipeId);
  console.log(recipes);
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  return (
    <div className="container">
      <FullRecipe recipe={recipe} />
    </div>
  );
}

export default SingleRecipe;
