import React, { Component } from 'react'
import { Link } from 'react-router-dom'



 class Recipe extends Component {
     state={
         activeRecipe:[]
        }
     componentDidMount=async()=>{
        const id = this.props.location.state.recipe;
        const req= await fetch(`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${id}`);
        const res= await req.json();
        
         
        this.setState({
            activeRecipe: [res.recipe]

        });

        console.log(this.state.activeRecipe);
       
     }
    render() {
        
        return (
            <div className="container">
            {this.state.activeRecipe.map((item, i) => {
                     return (
                     <div key={i} className="active-recipe">
                        
                        <img className="active-recipe__img" src={item.image_url} alt={item.title} />
                        <h3 className="active-recipe__title">{item.title}</h3>
                        <h3 className="active-recipe__publisher">
                        <span>{item.publisher}</span>
                        </h3>
                        <p className="active-recipe__website">
                       <span> Website: <a href={item.source_url}>{item.source_url}</a></span></p>
                       <button className="recipe__buttons">
                              <Link to="/">Go Home</Link>
                       </button>
                     </div>
                     )
               }
               
            )}

          
           
              
            </div>
            
        )
    }
}
export default Recipe;