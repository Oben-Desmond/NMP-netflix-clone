import React from 'react'
import "./styles/popular-card.css";


function PopularCard({movie}) {
    return (
        <div className={`popular-card`}>
            <div className="">
                <div className="row">
                    <div className="col">
                        <img src={movie.url} alt="" className="card-img" />
                    </div>
                    <div className="col right-col">
                        <div className="card-text">
                           {movie.title}
                       </div>
                        <small>Action, Horror</small>

                        <div className="bottom">
                            <button className="btn btn-warning imdb" >ImDB</button>
                            <span>7.4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularCard
