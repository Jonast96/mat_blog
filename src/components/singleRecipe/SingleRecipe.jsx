import { useLocation } from "react-router-dom";
import FullRecipe from "../fullRecipe/FullRecipe";
import "../../sass/singleRecipe/singleRecipe.scss";

function SingleRecipe({ recipes }) {
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
