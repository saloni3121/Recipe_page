// import React, { useState } from "react";
// import "./App.css";
// import Axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import Recipe from "./components/Recipe";
// import Alert from "./components/AlertBox";

// function App() {
//   const [query, setQuery] = useState("");
//   const [recipes, setRecipes] = useState([]);
//   const [alert, setAlert] = useState("");

//   const APP_ID = "41470";
//   const APP_KEY = "5dd0f2d346d3bd53d2899094";

//   const url = `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search`;

//   const getData = async () => {
//     if (query !== "") {
//       const result = await Axios.get(url);
//       if (!result.data.more) {
//         return setAlert("No food with such name");
//       }
//       console.log(result);
//       setRecipes(result.data.hits);
//       setQuery("");
//       setAlert("");
//     } else {
//       setAlert("Please fill the form");
//     }
//   };

//   const onChange = e => setQuery(e.target.value);

//   const onSubmit = e => {
//     e.preventDefault();
//     getData();
//   };

//   return (
//     <div className="App">
//       <h1>Food Searching App</h1>
//       <form onSubmit={onSubmit} className="search-form">
//         {alert !== "" && <Alert alert={alert} />}
//         <input
//           type="text"
//           name="query"
//           onChange={onChange}
//           value={query}
//           autoComplete="off"
//           placeholder="Search Food"
//         />
//         <input type="submit" value="Search" />
//       </form>
//       <div className="recipes">
//         {recipes !== [] &&
//           recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
// import item from "./components/item";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState(null);
  const [value,setValue] = useState(null);
  // const [recipeid,setRecipeid] = useState(null);

  const APP_ID = "recipe_id";
  const APP_KEY = "_id";

  useEffect(() => {
    getRecipes();
  }, []);

  // useEffect(() => {
  //   getItem();
  // },[]);

  const getRecipes = async () => {
    // const res = await Axios.get(
    //   `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${value}&app_id=${APP_ID}&app_key=${APP_KEY}`
    // );
    // // console.log(data);
    // setRecipes(res.data.hits);

    return Axios(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${value}`,{
      method:'GET'
    }).then(res=>{
      setRecipes(res);
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })

  };

  // const getItem = async () => {
  //   // const res = await Axios.get(
  //   //   `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${value}&app_id=${APP_ID}&app_key=${APP_KEY}`
  //   // );
  //   // // console.log(data);
  //   // setRecipes(res.data.hits);

  //   return Axios(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${recipeid}`,{
  //     method:'GET'
  //   }).then(res=>{
  //     setRecipes(res);
  //     console.log(res);
  //   }).catch(err=>{
  //     console.log(err);
  //   })

  // };

  const onInputChange = e => {
    setSearch(e.target.value);
    setValue(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
    console.log(value);
  };

  // const onMoreClick = () =>{
  //   getItem();
  //   console.log(recipeid);
  // };

  return (
    <div className="App">
      {recipes?<>
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes 
        recipes={recipes} />
      </div>
      </>:null}
      
    </div>
  );
}

export default App;




// import React,{useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from "./components/Header";
// import Recipes from "./components/Recipes";

// import axios from 'axios';

// function App() {

//   const [recipe,setRecipe]= useState(null);

//   const endpoint =`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${}&page=3`;

//   const getData = async()=>{
//     return axios(endpoint,{
//       method:'GET'
//     }).then(res=>{
//       setRecipe(res);
//       sessionStorage.setItem('recipes',res);
//     }).catch(err=>{
//       console.log(err);
//     })
//   }

//   getData();
//   console.log(recipe);

//   return (
//     <div className="App">
//       {recipe?recipe.data.recipes.map(item=>(
//         <img src={item.image_url} width="200px" height="200px" padding="10px"/>
//       )):null}
//     </div>
//   );
// }
// export default App;



