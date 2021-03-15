import {useEffect,useState} from 'react'
import './App.scss';
import Recipe from './Recipe.js'
import SearchForm from './SearchForm.js'
function App(){
  
  
  // Search information
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  const updateSearch = (e) =>{
    setSearch(e.target.value)
  }

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }

  // Api information
  const applicationID = "93210aa1"
  const applicationKey = "d728240f673499ad851d136e94d51629"	
  const applicationURL = `https://api.edamam.com/search?q=${query}&app_id=${applicationID}&app_key=${applicationKey}`
  
  const [recipes, setRecipes] = useState([])
  useEffect(() => {getRecipes()},[query])

  const getRecipes = async () =>{
    const response = await fetch(applicationURL)
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }


  return (
    <div className="App">
      <SearchForm
      updateQuery = {updateQuery}
      search = {search}
      updateSearch = {updateSearch}/>

      {recipes.map(recipe => (
        <Recipe recipe={recipe.recipe} key={recipe.recipe.label}/>
      ))}
    </div>
  );
}

export default App;
