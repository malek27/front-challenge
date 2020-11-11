import React from "react";
import CocktailList from "../component/CocktailList";
import Filter from "../component/Filter";
function Home({cocktails,loadCocktails,searched,setSearched }) {
  return (
    <div>
      <Filter setSearched={setSearched} />
      <CocktailList cocktails={cocktails} loadCocktails={loadCocktails} searched={searched}/>
    </div>
  );
}

export default Home;
