import React from 'react'
import './sort.css'
const SortDishes = (props) => {
  return (
    <>
    {props.cat && <div class="quality">
        <h1>Features of the Dish</h1>
        <p>Your food choosen is {props.cat}</p>
        <p>Your food is {props.area}</p>
    </div>}
    </>
  )
}

export default SortDishes