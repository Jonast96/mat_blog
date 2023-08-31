import React, { useState } from "react";
import TextInput from "./TextInput";
import IngredientsList from "./IngredientsList";
import TextAreaInput from "./TextAreaInput";
import DropdownSelect from "./DropdownSelect";

function RecipeForm({ postRecipe, author }) {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: [""],
    recipeText: "",
    recipeImage: "",
    tags: [],
    intro: "",
    time: 0,
  });

  const handleChange = (field, value) => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTags = [...recipe.tags];
    if (recipe.difficulty) {
      updatedTags.push(recipe.difficulty);
    }
    if (recipe.dish) {
      updatedTags.push(recipe.dish);
    }
    const completeRecipe = {
      ...recipe,
      tags: updatedTags,
      authorName: author?.displayName || "",
      authorImage: author?.photoURL || "",
    };
    postRecipe(completeRecipe);
  };

  const difficultyOptions = [
    { label: "ingen", value: "" },
    { label: "lett", value: "lett" },
    { label: "middels", value: "middels" },
    { label: "vanskelig", value: "vanskelig" },
  ];

  const dishOptions = [
    { label: "ingen", value: "" },
    { label: "frokost", value: "frokost" },
    { label: "lunsj", value: "lunsj" },
    { label: "forrett", value: "forrett" },
    { label: "middag", value: "middag" },
    { label: "dessert", value: "dessert" },
  ];

  const timeOptions = [
    { label: "ingen", value: "" },
    { label: "0-15 min", value: "0-15" },
    { label: "15-30 min", value: "15-30" },
    { label: "30-60 min", value: "30-60" },
    { label: "60-120 min", value: "60-120" },
    { label: "over 120 min", value: "over 120" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={recipe.title}
        onChange={(value) => handleChange("title", value)}
        placeholder="Recipe Title"
      />

      <TextAreaInput
        value={recipe.intro}
        onChange={(value) => handleChange("intro", value)}
        placeholder="Recipe Intro"
      />

      <TextInput
        value={recipe.recipeImage}
        onChange={(value) => handleChange("recipeImage", value)}
        placeholder="Recipe Image"
      />
      <IngredientsList
        ingredients={recipe.ingredients}
        setIngredients={(value) => handleChange("ingredients", value)}
      />
      <TextAreaInput
        value={recipe.recipeText}
        onChange={(value) => handleChange("recipeText", value)}
        placeholder="Recipe Instructions"
      />
      <div>
        Vansklighetsgrad:
        <DropdownSelect
          options={difficultyOptions}
          selectedValue={recipe.difficulty}
          onChange={(value) => handleChange("difficulty", value)}
        />
      </div>
      <div>
        Type rett:
        <DropdownSelect
          options={dishOptions}
          selectedValue={recipe.dish}
          onChange={(value) => handleChange("dish", value)}
        />
      </div>

      <div>
        Tid:
        <DropdownSelect
          options={timeOptions}
          selectedValue={recipe.time}
          onChange={(value) => handleChange("time", value)}
        />
      </div>

      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;
