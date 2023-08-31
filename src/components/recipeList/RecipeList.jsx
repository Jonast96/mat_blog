import RecipeCard from "../RecipeCard";
import "../../sass/recipeList/recipeList.scss";
import Filters from "./Filters";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
function RecipeList({ recipe }) {
  const [timeFilter, setTimeFilter] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);

  const [showFilters, setShowFilters] = useState(false);
  const filteredRecipes = recipe.filter((r) => {
    return (
      (timeFilter.length ? timeFilter.includes(String(r.time)) : true) &&
      (difficultyFilter.length
        ? difficultyFilter.includes(r.difficulty)
        : true) &&
      (typeFilter.length ? typeFilter.includes(r.dish) : true)
    );
  });

  return (
    <div className="recipe-list">
      <div className="toggle-filter">
        <FontAwesomeIcon
          size="xl"
          onClick={() => setShowFilters((prevState) => !prevState)}
          icon={faFilter}
          className="filter-icon"
          style={{ cursor: "pointer", marginBottom: "10px" }}
        />
      </div>
      <div className={`filters ${showFilters ? "show" : "hide"}`}>
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
