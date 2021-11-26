import React from 'react'

const poster = `https://radradio.com/wp-content/uploads/jumanji-next-level-951x548.jpg`

const MainPoster = () => {
    return (
        <div className={`main-poster`}>
            <div className="card bg-dark text-white">
                <img src={poster} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <div><small>34 people are watching</small></div>
                    <div style={{ height: `40%` }} className="spacer">

                    </div>
                    <h3>Jumanji</h3>
                    <p><small>ACTION, ADVENTURE, COMEDY</small>
                    </p>
                    <div className="row btn-row">
                        <button className="btn btn-danger">watch</button>
                        <span style={{ width: `10px` }}></span>
                        <button className="btn btn-light add-btn"> + </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainPoster
