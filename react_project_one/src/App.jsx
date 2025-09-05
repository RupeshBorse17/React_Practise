import React from "react"
import UserCard from "./components/UserCard"
import Maharaj from "./assets/Maharaj.jpg"
import Maharana from "./assets/Maharana.jpg"
import Dharmaveer from "./assets/Dharmaveer.jpg"
function App() {


  return (
   <div className="container">
    <UserCard name="Chttrapati Shivaji Maharaj" desc="king of bharat" image={Maharaj}/>
    <UserCard name="DHRMAVERR CHHTRAPATI Shambhaji Maharaj" desc="king of hindustan" image={Dharmaveer}/>
    <UserCard name ="VEER SHIROMANI Maharana Pratap" desc="king of india" image={Maharana}/>
   </div>
  )
}

export default App
