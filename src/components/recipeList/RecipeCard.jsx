import { Link } from "react-router-dom";
import "../../sass/recipeCard.scss";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <Link to={`/recipe/?id=${recipe.id}`}>
        <img src={recipe?.recipeImage} alt="" />
        <div className="recipe-card-info">
          <span>{recipe?.authorName}</span>
          <h2>{recipe?.title}</h2>
          <div className="tags-container">
            {recipe?.difficulty ? (
              <span className="tags">{recipe?.difficulty}</span>
            ) : null}
            {recipe?.dish ? <span className="tags">{recipe?.dish}</span> : null}
            {recipe?.time ? (
              <span className="tags">{recipe?.time} min</span>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;
