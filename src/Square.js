import React from 'react'

const Square = ({colorValue, hexValue, isDarkText, rightColorValue}) => {
  return (
 <section className='square'  style={{ backgroundColor : rightColorValue && colorValue, color : isDarkText ? "white" : "black"}}>
<p >
{ colorValue ? colorValue : "Empty Value"}
</p>
<p>
    { hexValue ? hexValue : undefined}
</p>
 </section>
  )
}
Square.defaultProps = {
    colorValue : "My Empty Value"
}
export default Square