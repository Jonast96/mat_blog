import "../sass/recipeCard.scss";

function RecipeCard({ recipe }) {
  console.log(recipe);
  return (
    <div className="recipe-card">
      <img src={recipe?.recipeImage} alt="" />
      <div className="recipe-card-info">
        <span>{recipe?.authorName}</span>
        <h2>{recipe?.title}</h2>
        <div className="tags-container">
          <span className="tags">{recipe?.difficulty}</span>
          <span className="tags">{recipe?.dish}</span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
