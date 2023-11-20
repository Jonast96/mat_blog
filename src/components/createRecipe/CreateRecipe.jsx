import React, { useState } from "react";
import TextInput from "../TextInput";
import IngredientsList from "../IngredientsList";
import TextAreaInput from "../TextAreaInput";
import DropdownSelect from "../DropdownSelect";
import "../../sass/createRecipe/createRecipe.scss";
import "../../sass/recipe/recipe.scss";

function CreateRecipe({ postRecipe, author }) {
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

    if (!author) {
      alert("Du må være logget inn for å legge til en oppskrift");
      window.location.href = "/";
      return;
    } else {
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

      alert("Oppskrift lagt til!");
      setRecipe({
        title: "",
        ingredients: [""],
        recipeText: "",
        recipeImage: "",
        tags: [],
        intro: "",
        time: 0,
      });
    }
  };

  const difficultyOptions = [
    { label: "ingen", value: "" },
    { label: "enkel", value: "enkel" },
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
    <div className="form-container container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Tittel:</label>
        <TextInput
          id="title"
          value={recipe.title}
          onChange={(value) => handleChange("title", value)}
          placeholder="Eks: Kjapp Kyllinggryte"
          required={true}
        />

        <label htmlFor="recipeImage">Bilde:</label>
        <TextInput
          id="recipeImage"
          value={recipe.recipeImage}
          onChange={(value) => handleChange("recipeImage", value)}
          placeholder="Eks: bildeurl.com/kyllinggryte.jpg"
          required={true}
        />

        <label htmlFor="intro">Historie:</label>
        <TextAreaInput
          id="intro"
          value={recipe.intro}
          onChange={(value) => handleChange("intro", value)}
          placeholder="Eks: Dette er en familieoppskrift..."
          required
        />

        <IngredientsList
          ingredients={recipe.ingredients}
          setIngredients={(value) => handleChange("ingredients", value)}
        />

        <label htmlFor="recipeText">Oppskrift:</label>
        <TextAreaInput
          id="recipeText"
          value={recipe.recipeText}
          onChange={(value) => handleChange("recipeText", value)}
          placeholder="Eks: 1. Forvarm ovnen..."
          required
        />

        <div className="dropdowns">
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
        </div>

        <div className="button-div">
          <button className="button" type="submit">
            Legg til oppskrift
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateRecipe;
