import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleCocktail({ match, cocktails}) {
  const singleCocktail = cocktails.find((el) => match.params.id === el.idDrink);
  console.log(singleCocktail);
  return (
    <div className="singleC">
      <Card className="Card" style={{ width: "30%", margin: "2%" }}>
        <Card.Img className="CardIm" variant="top" src={singleCocktail.strDrinkThumb} />
        <Card.Body>
          <Card.Title>{singleCocktail.strDrink}</Card.Title>
          <Card.Text>{singleCocktail.strAlcoholic}</Card.Text>
          <Card.Text>{singleCocktail.strIBA}</Card.Text>
          <Card.Text>
            <b>Ingredients:</b> {singleCocktail.strIngredient1},
            {singleCocktail.strIngredient2},{singleCocktail.strIngredient3},
            {singleCocktail.strIngredient4},{singleCocktail.strIngredient5},
            {singleCocktail.strIngredient6},{singleCocktail.strIngredient7}
          </Card.Text>
          <Card.Text>
            <b>Mesures:</b>
            {singleCocktail.strMeasure1},{singleCocktail.strMeasure2},
            {singleCocktail.strMeasure3},{singleCocktail.sstrMeasure4},
            {singleCocktail.strMeasure5},{singleCocktail.strMeasure6},
            {singleCocktail.strMeasure7}
          </Card.Text>
          <Card.Text>
            <b>Instructions:</b> {singleCocktail.strInstructions}
          </Card.Text>
          <Link to="/">
            <Button
              variant="primary"
            >
              Go Back Home
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleCocktail;
