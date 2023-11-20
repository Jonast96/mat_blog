import React, { useRef, useEffect } from "react";
import TextInput from "./TextInput";

function IngredientsList({ ingredients, setIngredients }) {
  const inputRefs = useRef([]);

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  useEffect(() => {
    const lastInputRef = inputRefs.current[ingredients.length - 1];
    if (lastInputRef) {
      lastInputRef.focus();
    }
  }, [ingredients]);

  const updateIngredient = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <div key={index} className="ingredient-container">
          <TextInput
            ref={(el) => (inputRefs.current[index] = el)}
            value={ingredient}
            onChange={(value) => updateIngredient(index, value)}
            placeholder="Eks: 1 kg kylling"
            keyDown={() => addIngredient()}
            required={false}
          />
          <p className="button" onClick={() => removeIngredient(index)}>
            X
          </p>
        </div>
      ))}
      <button
        style={{
          marginTop: "0.5rem",
        }}
        className="button"
        type="button"
        onClick={addIngredient}
      >
        Legg til ingrediens
      </button>
    </div>
  );
}

export default IngredientsList;
