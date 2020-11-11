import Navbare from "./component/Navbare";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import Footer from "./component/Footer";
import SingleCocktail from "./pages/SingleCocktail";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [loadCocktails, setLoadCocktails] = useState(true);
  const [cocktails, setcocktails] = useState([]);
  const [searched, setSearched] = useState("");
  const searching = () => {
    Axios.get(
      (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searched}`)
    )
      .then((res) => {
        setcocktails(res.data.drinks);
        setLoadCocktails(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    searching();
  }, [searched]);

  return (
    <div className="App">
      <Navbare />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home cocktails={cocktails} loadCocktails={loadCocktails} searched={searched}
            setSearched={setSearched} />
          )}
        />
        <Route
          path={"/singelCocktail/:id"}
          render={(props) => (
            <SingleCocktail {...props} cocktails={cocktails} />
          )}
        />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
