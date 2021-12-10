/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCast } from "../../api/tmdb-api";
import "./cast.css";

export default ({ movie }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCast(movie.id).then(cast => {
      setCast(cast);
    });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Actor Name</th>
          <th scope="col">Character Name</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {cast.splice(0,10).map(actor => {
          return (
            <tr key={actor.id}>
              <td id="actorImage">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/h100/${actor.profile_path}`
                      : "../../images/film-poster-placeholder.png"
                  }
                  alt={actor.name}
                />
              </td>
              <td>{actor.name}</td>
              <td>{actor.character}</td>
              <td>
                {" "}
                <Link
                  to={{
                    pathname: `/actor/${actor.id}`,
                    state: {
                      actorID: actor.id,
                    }
                  }}
                >
                  Actor Profile
                  </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
