import React from 'react'

function Buttons({clear, result}) { 
    // console.log(props);
  return (
    <div>
        <button onClick={result}>Calculate relationship future</button>
        <button onClick={clear}>Clear</button>
        <h3></h3>
    </div>
  )
}

export default Buttons;