import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [movies, setmovies] = useState([]);
  const [People, setPeople] = useState([]);
  const [loading, setloading] = useState(false);
  async function getApi(mediaType, callback) {
    setloading(true);
    let data = await axios
      .get(
        `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=09b639ab0b2b1b51b00568871d53f9fe`
      )
      .then((mov) => {
        console.log("done", mov.data.results);
        callback(mov.data.results);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        console.log("error", err);
      });
  }
  useEffect(() => {
    getApi("movie", setmovies);
    getApi("person", setPeople);
  }, []);
  console.log("movies", movies);
  return (
    <>
      {loading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {movies.slice(0, 8).map((movie) => {
              return (
                <div className="col-md-4 col-lg-3" key={movie.id}>
                  <div className="card">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" + movie.poster_path
                      }
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">{movie.overview}</p>
                      <a href="#" class="btn btn-primary">
                        view
                      </a>
                    </div>
                    <div class="card-footer text-body-secondary">
                      {movie.vote_average}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="row">
            {People.slice(0, 8).map((person) => {
              return (
                <div className="col-md-4 col-lg-3" key={person.id}>
                  <div className="card">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" + person.profile_path
                      }
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{person.name}</h5>
                      <p className="card-text">{person.known_for_department}</p>
                      <a href="#" class="btn btn-primary">
                        view
                      </a>
                    </div>
                    <div class="card-footer text-body-secondary">
                      {person.popularity}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
