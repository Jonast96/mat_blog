import TextInput from "./TextInput";

function IngredientsList({ ingredients, setIngredients }) {
  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const updateIngredient = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <TextInput
          key={index}
          value={ingredient}
          onChange={(value) => updateIngredient(index, value)}
          placeholder={`Ingredient ${index + 1}`}
        />
      ))}
      <button type="button" onClick={addIngredient}>
        Add Ingredient
      </button>
    </div>
  );
}

export default IngredientsList;
