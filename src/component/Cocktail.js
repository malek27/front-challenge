import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Cocktail({ cocktail }) {
  return (
    <Card className="Card" style={{ width: "15rem", margin: "2%" }}>
      <Card.Img  className="CardIm" variant="top" src={cocktail.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{cocktail.strDrink}</Card.Title>
        <Card.Text>{cocktail.strAlcoholic}</Card.Text>
        <Link to={`/singelCocktail/${cocktail.idDrink}`}>
          <Button variant="primary">More Details...</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default Cocktail;
