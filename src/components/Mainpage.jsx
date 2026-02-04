import React, { useState } from 'react'
import NavBar from './NavBar'
import './main.css'
import SortDishes from './SortDishes'
const Mainpage = (props) => {
    const [val, setval] = useState("")
    const [inst, setinst] = useState("")
    const[img1,setimg1]=useState("")
    const[category,setcategory]=useState("");
    const[a,seta]=useState("");
    async function fetchdata(){
      if(!val.trim()) return;
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
        let resp=await data.json();
        if(resp.meals){
          setinst(resp.meals[0].strInstructions);
        setimg1(resp.meals[0].strMealThumb);
        seta(resp.meals[0].strArea);
        setcategory(resp.meals[0].strCategory);
        }
        else{
          setinst("No recipie found 😒")
          setimg1("")
        }
        


    }
  return (
    <div className='recipie'>
    <div className='page'>
    <NavBar/>
    <div className='content'>
    <p>Welcome {props.name}</p>
    <input type="text" placeholder="Enter the name of Dish" value={val} onChange={(e)=>setval(e.target.value)}></input>
    <button onClick={fetchdata}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06GLt9ubMtrBxjhTPfkAvCKByYD7_Pdq3KQ&s" style={{width:"50px", height:"100px"}}></img>
    </button>
    </div>
    </div>
   { inst && <div className='solution'>
     <p>{inst}</p>
    <img src={img1}></img>
    </div>}
    
    {img1 && <SortDishes cat={category} area={a}/>}
    </div>
    

    

    
  )
}

export default Mainpage