import React from 'react'
import NavBar from './NavBar'
import Contact from './Contact'
import "../Home.css"
const Home = () => {
  return (
    <>
    <NavBar/>
   <div className="container">
    <h1> Recipie Finder App</h1>
    <br></br>
    <div className=
    "Intro">
        <p>The Recipe Finder App helps users discover delicious recipes quickly and easily based on the ingredients they have or the dishes they love. With a simple and user-friendly interface, users can search for a wide variety of recipes, view detailed cooking instructions, and explore new meal ideas from different cuisines. This app makes cooking more enjoyable by saving time and inspiring users to try something new every day.</p>
       
    </div>
    </div>
    <br/>
    <hr/>
    <Contact />

    

   </>
  )
}

export default Home