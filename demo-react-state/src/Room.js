import React, { usestate, useState } from 'react';


function Room(){
    let [isLit , setLit] = useState(true);
    let [Age , setAge] =useState(23);
    function updateLit(){
        console.log("button clicked")
        setLit(!isLit);
    }
        
    const incrementAge = () => {
        console.log("button increment")
        setAge(++Age);
    }
    
 return (   
 <div>
     this is room component  {isLit ? "Lit " : 'dark' }
     <br></br>
     age = {Age}
     <br></br>
     <button onClick={updateLit}> Toggle button </button>
     <br></br>
     <button onClick={incrementAge}> Age Increment Button </button>
     </div>
 );
}
export default Room;
