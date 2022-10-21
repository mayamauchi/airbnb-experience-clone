import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"


function App() {
  // <Hero/>
    return (
        <div>
          <Navbar/>
          <Card
            img="../src/images/ankur-warikoo.png"
            rating="5.0"
            reviewCount= {6}
            country= "USA"
            title= "Life lessons with Ankur Warikoo"
            price= {136}
          />
        </div>
    )
}

export default App;