import React from "react";
import { Spinner } from "react-bootstrap";
import Cocktail from "./Cocktail"

function CocktailList({cocktails,loadCocktails}) {
  return (
    <div className="cocktail">
    {loadCocktails ? (
      <Spinner animation="border" variant="primary" />
    ) :  (cocktails  ===  null || cocktails.length===0 ) ? (
       (
      <h2>Nothing to show !!</h2>
    )
    ) :  (
      cocktails.map((el, i) => <Cocktail key={i} cocktail={el} />)
    )}
  </div>
  );
}

export default CocktailList;
