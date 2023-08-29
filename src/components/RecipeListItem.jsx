function RecipeListItem({ recipe, author, onDelete }) {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>Made by {recipe.authorName}</p>
      <img src={recipe.recipeImage} alt={recipe.title} />
      <p>{recipe.recipeText}</p>
      {author && author.displayName === recipe.authorName && (
        <button onClick={() => onDelete(recipe.id)}>Delete</button>
      )}
    </div>
  );
}

export default RecipeListItem;
