import { availableIngredients } from "../App"
import { useState } from "react"

const IngredientList = ({ availableIngredients, addIngredient }) => {
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <>
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => addIngredient(ingredient)}>+</button>
          </li>
        </>
      ))}
    </ul>
  )
}

export default IngredientList
