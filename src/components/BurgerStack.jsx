import { useState } from "react"
import App from "../App"

const BurgerStack = ({ burgerIngredient, removeIngredient }) => {
  return (
    <ul>
      {burgerIngredient.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => removeIngredient(ingredient)}>-</button>
        </li>
      ))}
    </ul>
  )
}

export default BurgerStack
