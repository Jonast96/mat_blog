function FullRecipe({ recipe }) {
  return (
    <div className="recipe">
      <div className="img-title">
        <img src={recipe?.recipeImage || ""} alt={recipe?.title || ""} />
        <h2>{recipe?.title || ""}</h2>
        <div className="recipe-tags">
          <span>{recipe?.time || ""}</span>
          <span>{recipe?.difficulty || ""}</span>
          <span>{recipe?.dish || ""}</span>
        </div>
      </div>
      <div className="recipe-userinfo">
        <p>{recipe?.authorName}</p>
        <p>{recipe?.authorImage}</p>
        <p>{recipe?.intro || ""}</p>
      </div>
      <div className="recipe-main">
        <ul>
          {recipe?.ingredients && recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((ingredient, index) => (
              <li key={index}>- {ingredient}</li>
            ))
          ) : (
            <li>No ingredients listed</li>
          )}
        </ul>
        <p className="recipeText">{recipe?.recipeText || ""}</p>
      </div>
    </div>
  );
}

export default FullRecipe;
