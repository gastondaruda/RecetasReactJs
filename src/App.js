import SearchBar from "./components/SearchBar"
import RecipesCard from "./components/RecipesCard"
import {useState, useEffect} from "react"
import './App.css';

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

function App() {

  const [loading, setLoading] = useState(false)
  const [query, setQuery ] = useState("")
  const [recipes, setRecipes ] = useState([])

  const searchRecipes = async () => {
    setLoading(true)
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals)
    setLoading(false);
  }

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = e => {
    e.preventDefault()
    searchRecipes()
  }

  return (
    <div className="container">
      <h2>The Meal DB API</h2>
      <SearchBar 
        handleSubmit={handleSubmit}
        value={query}
        onChange={e => setQuery(e.target.value)}
        loading={loading}
      />
      <div className="recipes">
        {recipes ? recipes.map(recipe => (
          <RecipesCard 
            key={recipe.idMeal}
            recipe={recipe}
            />
        )): "No recipes!"}
      </div>
    </div>
  );
}

export default App;
