import React, { useState } from 'react'

const Content = () => {
  const [name,setName]=useState("Earn")
    function handleNameChange(){
        const name=["grow","earn","give"]
        const int=Math.floor(Math.random()*3)
        setName(name[int])
    }
    
    
    
  return (
    <main>
    <p>Lets {name} money</p>
    <button onClick={handleNameChange}>Subscribe</button>
    
    </main>
  )
}

export default Content