import React from 'react'

function ContinueWatchingCard({movie}) {
    return (
        <div className="col">
        <div className="card">
            <img style={{ height: `40vh`, objectFit: `cover` }} src={movie.url} alt="" className="card-img img-fluid" />
            <div className="">

                <div className="text-center">
                    <h6 >{movie.title}</h6>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContinueWatchingCard
