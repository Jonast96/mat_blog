import "../../sass/heading/heading.scss";

function Heading({ recipe }) {
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
        <button className="button ">View recipe</button>
      </div>
    </div>
  );
}

export default Heading;
