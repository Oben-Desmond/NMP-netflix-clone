import React from 'react'
import { FaStar as Star } from "react-icons/fa";

function ActorCard({actor}) {
    return (
        <div className="col">
        <div className="card bg-dark text-white mid-card">
            <img src={actor.image} alt="" className="card-img" />
            <div className="card-img-overlay black-overlay">
                <div className="row">
                    <div className="col"></div>
                    <div className="col" style={{ textAlign: `right` }}>
                        <button className="btn btn-light add-actor">+</button>
                    </div>
                </div>
                <br />
                <br />
                <div className="text-center">
                    <h6 >{actor.name}</h6>
                    <small className="text-medium">24+ movies</small>
                    <div className="text-center actor-rating">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ActorCard
