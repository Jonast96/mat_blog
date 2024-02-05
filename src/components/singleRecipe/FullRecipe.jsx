import { useState, useEffect } from "react";

function FullRecipe({ recipe, author, deleteRecipe }) {
  const [isAuthor, setIsAuthor] = useState(false);

  useEffect(() => {
    if (recipe?.uid && author?.uid && recipe.uid === author.uid) {
      setIsAuthor(true);
    } else {
      setIsAuthor(false);
    }
  }, [recipe, author]);

  if (!recipe) {
    return <h2>Loading recipe</h2>;
  }
  console.log(recipe.id);

  return (
    <div className="recipe">
      {isAuthor && (
        <div className="recipe-buttons">
          <button className="edit">Rediger</button>
          <button onClick={() => deleteRecipe(recipe.id)} className="delete">
            Slett
          </button>
        </div>
      )}
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
              <p className="introText">{recipe?.intro || ""}</p>
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
