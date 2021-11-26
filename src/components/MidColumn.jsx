import React from 'react'
import MainPoster from './MainPoster'
import { FaStar as Star } from 'react-icons/fa'

const actors = [
    {
        image: `https://fr.web.img4.acsta.net/pictures/20/06/24/12/19/5492052.jpg`,
        name: `Charlize Theron`
    },
    {
        image: `https://www.emmys.com/sites/default/files/styles/bio_pics_detail/public/Laurence-Fishburne-for-bio_0.jpg?itok=y18HHBkt`,
        name: `Laurence FishBurn`
    },
    {
        image: `https://i2-prod.liverpoolecho.co.uk/incoming/article20308407.ece/ALTERNATES/s615/1_BBC-Drama-series-The-Responder-being-filmed-on-Richmond-RowEvertonLiverpoolstarring-Martin-Freema.jpg`,
        name: `Martin Freeman`
    },

]

const continue_watching = [
    {
        image: `https://www.hollywoodreporter.com/wp-content/uploads/2021/11/Redpill-PR-Announcement-Publicity-H-2021.jpg?w=681&h=383&crop=1`,
        name: `The Matrix`
    },
    {
        image: `
        https://cdn.vox-cdn.com/thumbor/6rU5sGc4CfG7UH2UTjF8kltb-UQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6389217/deadpool-gallery-03-gallery-image.0.jpg   
        `,
        name: `Dead Pool`
    },
    {
        image: `https://s1.gaming-cdn.com/images/products/6141/orig/game-steam-the-lord-of-the-rings-gollum-cover.jpg`,
        name: `Lord of the Rings`
    },
]


function MidColumn() {
    return (
        <div class="col-6">
            <div className="row header-center padding">
                <div className="col "><button className="btn btn-link btn-medium">TV Series</button></div>
                <div className="col"><button className="btn btn-link btn-medium">Movies</button></div>
                <div className="col"><button className="btn btn-link btn-medium">Animes</button></div>
                <div className="col-5"></div>
            </div>
            <div className="main-poster">
                <MainPoster></MainPoster>
            </div>
            <br />
            <br />
            <div className="best-actors">
                <h6>
                    Best Artists
              </h6>
                <br />
                <div className="row">
                    {
                        actors.map((actor, index) => {
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
                        })
                    }
                    {/* <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div> */}
                </div>
            </div>
            <div className="continue-watching">
                <br />
                <br />
                <h6>Continue watching</h6>
                <br />
                <div className="row ">
                    {
                        continue_watching.map((actor, index) => {
                            return (
                                <div className="col">
                                    <div className="card">
                                        <img style={{ height: `40vh`, objectFit: `cover` }} src={actor.image} alt="" className="card-img img-fluid" />
                                        <div className="">

                                            <div className="text-center">
                                                <h6 >{actor.name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MidColumn
