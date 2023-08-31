import RecipeCard from "../RecipeCard";
import "../../sass/recipeList/recipeList.scss";
import Filters from "./Filters";
import { useState } from "react";
function RecipeList({ recipe }) {
  const [timeFilter, setTimeFilter] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const filteredRecipes = recipe.filter((r) => {
    return (
      (timeFilter.length ? timeFilter.includes(String(r.time)) : true) &&
      (difficultyFilter.length
        ? difficultyFilter.includes(r.difficulty)
        : true) &&
      (typeFilter.length ? typeFilter.includes(r.dish) : true)
    );
  });

  console.log(filteredRecipes);
  return (
    <div className="recipe-list">
      <div className="filters">
        <Filters
          setTimeFilter={setTimeFilter}
          setDifficultyFilter={setDifficultyFilter}
          setTypeFilter={setTypeFilter}
        />
      </div>

      <div className="recipe-list-container">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
