import React from "react";
import '../stylesheet/Button.css'

function Button({ text, buttonClick, clickDri }){
  return(
    <button
    // ternary
      className={ buttonClick? 'button-click' : 'button-reset' } 
      onClick={ clickDri }>
      {text}
    </button>
  )
}

export default Button;