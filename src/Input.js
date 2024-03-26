import React from 'react'
import colorNames from "colornames"
const Input = ({colorValue, setColorValue, hexValue, setHexValue, isDarkText, setIsDarkText, setRightColorValue}) => {
  
  return (
    <form onSubmit={ (e) => {
    e.preventDefault();
    setColorValue("")}}>
    <label>Add Color Name:</label>
    <input 
    autoFocus
    type="text"
    value={colorValue}
    onChange={ (e) => {
      
      setColorValue(e.target.value)
      setHexValue(colorNames(e.target.value))
      colorNames(e.target.value) === undefined ? setRightColorValue(false) : setRightColorValue(true)
      
      

     }}
     placeholder='Enter Color Value:'
    />
    <button
    type='button'
    onClick={() => setIsDarkText(!isDarkText)}
    >
        Toggle Dark Text
    </button>
    </form>
  )
}

export default Input