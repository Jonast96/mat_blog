import "../../sass/heading/heading.scss";

import { Link } from "react-router-dom";

function Heading({ recipe }) {
  console.log(recipe);
  return (
    <div
      style={{ backgroundImage: `url(${recipe?.recipeImage})` }}
      className="heading"
    >
      <div className="card">
        <span className=" ">{recipe?.authorName}</span>
        <h2 className=" ">{recipe?.title}</h2>
        <div className="img-container">
          <img className="image" src={recipe?.recipeImage} alt="" />
        </div>
        <p className=" ">{recipe?.intro}</p>

        <Link to={`/recipe/?id=${recipe?.id}`}>
          <button className="button">Se oppskrift</button>
        </Link>
      </div>
    </div>
  );
}

export default Heading;
