import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import PopularCard from "./PopularCard";
import movies from "../data/movies";

export default function RightColumn() {

    const [popularMovies, setpopularMovies] = useState([]);

    useEffect(() => {
          const temp= movies.reverse()
          setpopularMovies([...temp])
    }, [])

    return (
        <div className={`col`}>
            <SearchBar></SearchBar>
            <br />
            <br />
            <h5>Popular Movies</h5>
            <div className="container">
                {
                    popularMovies.map((movie, index) => {
                        return (
                            <PopularCard movie={movie}></PopularCard>
                        )
                    })
                }
            </div>
        </div>
    )
}


