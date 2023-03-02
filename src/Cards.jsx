import React from "react";


const Cards = ({ email, id, userName }) => {
    return <>
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?50x50`} />
            <div>
                <h1>{userName}</h1>
                <p>{email}</p>
            </div>
        </div>
    </>
}

export default Cards;