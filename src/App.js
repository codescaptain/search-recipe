import React, { Component } from 'react'
import Form from "./Components/Form"
import Recipes from "./Components/Recipes"
import "./App.css";
 
 class App extends Component {
  state ={
    recipes:[]
  }
   getRecipe=async(e)=>{
    const recipeName=e.target.elements.recipeName.value;
     e.preventDefault();
     const api_call= await fetch(`https://recipesapi.herokuapp.com/api/search?q=${recipeName}&page=1`);
     const data =await api_call.json();
     this.setState({
       recipes:data.recipes
     })
     console.log(this.state.recipes);
   }
   componentDidMount=()=>{
      if(localStorage.getItem("recipes")){
        const json=localStorage.getItem("recipes");
        const recipes=JSON.parse(json);
        this.setState({
        recipes
        })
    }
   
  }
  componentDidUpdate=()=>{
    const recipes=JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes",recipes);
  }
  render() {
    return (
      <div className="App">
     
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
        
    </div>
    )
  }
}
export default App;