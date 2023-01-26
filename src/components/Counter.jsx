import React from "react";
import '../stylesheet/Counter.css'
function Counter ({ clicksNumber}){
    return (
        <div className="counter">
            { clicksNumber }
        </div>
    );
}

export default Counter;