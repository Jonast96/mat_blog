function FullRecipe({ recipe }) {
  return (
    <div className="recipe">
      <img src={recipe?.recipeImage || ""} alt={recipe?.title || ""} />

      <div className="recipe-main">
        <ul className="recipe-ul">
          {recipe?.ingredients && recipe.ingredients.length > 1 ? (
            recipe.ingredients.map((ingredient, index) => (
              <li key={index}>- {ingredient}</li>
            ))
          ) : (
            <li>Ingen ingredienser</li>
          )}
        </ul>

        <div className="recipe-info">
          <div className="info">
            <h2>{recipe?.title || ""}</h2>
            <div className="recipe-userinfo">
              <img src={recipe.authorImage} alt="" />
              <p>{recipe?.authorName}</p>
            </div>
            <div className="recipe-tags">
              <span>{recipe?.time || ""}</span>
              <span>{recipe?.difficulty || ""}</span>
              <span>{recipe?.dish || ""}</span>
            </div>
            <div className="intro">
              <p>{recipe?.intro || ""}</p>
            </div>
          </div>
          <div className="recipe-text-container">
            <p className="recipeText">{recipe?.recipeText || ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullRecipe;
