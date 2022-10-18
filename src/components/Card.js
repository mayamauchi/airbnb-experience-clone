import React from "react"

 function Card() {
    return (
        <div className="card">
            <img src={require("../images/ankur-warikoo.png")} className="card--image"/>
            <div className="card--stats">
                <img src={require("../images/star.png")} className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>

            </div>
                <p>Life lessons with Ankur Warikoo</p>
                <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card