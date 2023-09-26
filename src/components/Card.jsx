import React from "react";

function Card(props){
    return(
        <div>
            <div className="card">
                <div className="top">
                    <p className="name">{props.name}</p>
                    <img src={props.pfp} alt="beyonce-image" />
                </div>
                <div className="bottom">
                    <p className="info">{props.tel}</p>
                    <p className="info">{props.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;