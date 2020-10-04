import React,{useState} from "react";
import Axios from 'axios';

const RecipeItem = props => {

  const [ingri,setIngri] = useState(null);

  const onMoreClick = async(recipeid)=>{

    if(!ingri){
      console.log("NOICE");

    const endpoint = `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${recipeid}`

    return Axios(endpoint,{
      method:'GET'
    }).then(res=>{
      setIngri(res);
      console.log(res);
    }).catch(err=>{
      console.log(err);
    });


  }

    else{
      setIngri(null);
    }
    

    
  }

  const { name, image, recipeid } = props;
  return (
      <div class="container">
        <img class=" item"src={image}  width="400px" height="300px"/>
        {/* <div class="card-body"> */}
          <h5>{name}</h5>
          <button className="engine1"onClick={()=>onMoreClick(recipeid)}>Know more</button>
          {/* <h2>{recipeid}</h2> */}
        {/* </div> */}
        
        { ingri?<ul class="list-group list-group-flush">
          {ingri.data.recipe.ingredients.map(ingredient => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul>:null}
      </div>
  );
};

export default RecipeItem;



// className="img-fluid w-50 mx-auto rounded-circle" 
{/* <div class="container">
  <div class="row col-xs-2">
  <img src={image}style= "width: 25%; height: 25%" >
</div> */}