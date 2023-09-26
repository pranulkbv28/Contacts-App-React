import React from "react";
import beyonce from "./assets/beyoncePFP.jpeg"
import jason from "./assets/jasonPFP.jpg"
import selena from "./assets/selenaPFP.jpeg"
import Card from "./Card";


function App(){
    return(
        <div>
            <h1>Contact List</h1>
            <Card 
                name={"Beyonce"}
                pfp={beyonce}
                tel={"+123 456 789"}
                email={"b@yonce.com"}
            />
            <Card 
                name={"Jason Momoa"}
                pfp={jason}
                tel={"+987 654 321"}
                email={"jason@momoa.com"}
            />
            <Card 
                name={"Selena Gomez"}
                pfp={selena}
                tel={"951 753 8426"}
                email={"selena@love.com"}
            />
        </div>
    )
}

export default App;