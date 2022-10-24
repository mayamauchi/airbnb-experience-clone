import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/data"


function App() {
  
  const cards = data.map(item => {
    return (
      <Card 
      key = {item.id}
      {...item} 
      
      />
      )
    })
    return (
      <div>
          <Hero/>
          <Navbar/>
          <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

export default App;