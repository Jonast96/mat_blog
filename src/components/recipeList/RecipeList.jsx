import RecipeCard from "../RecipeCard";
import "../../sass/recipeList/recipeList.scss";
function RecipeList({ recipe }) {
  return (
    <div className="recipe-list">
      <div className="filters">FILTERS GO HERE</div>

      <div className="recipe-list-container">
        {recipe.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
