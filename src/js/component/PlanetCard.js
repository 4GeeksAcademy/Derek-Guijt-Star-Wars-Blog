import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

function PlanetCard() {
  const { store, actions } = useContext(Context);
  const [activeFav, setActiveFav] = useState(false);
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    actions.fetchPlanets();
  }, []);

  useEffect(() => {
    setPlanets(store.planets);
  }, [store.planets]);

  const handleFavorites = (planet) => {
    const isFavorite = store.favorites.some((fav) => fav.id === planet.id);
    if (isFavorite) {
      actions.removeFavorites(planet.name);
    } else {
      actions.addFavorites(planet.name, planet.id, "planet");
    }
  };

  return (
    <div
      className="d-flex col-10 overflow-auto mt-5 mx-auto cards"
      style={{ height: "50rem" }}
    >
      {planets.map((planet, index) => {
        const isFavorite = store.favorites.some(
          (fav) => fav.id === planet.id && fav.type === "planet"
        );
        return (
          <div
            key={index}
            className="card col-1 mx-1"
            style={{ width: "30rem", height: "48rem" }}
          >
            <h3>{planet.name}</h3>
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
              className="card-img-top"
              alt={planet.name}
              style={{ height: "30rem", width: "30rem" }}
            />
            <Link to={`/PlanetDetails/${index + 1}`}>Learn More</Link>
            <button
              className={isFavorite ? "fas fa-heart" : "far fa-heart"}
              onClick={() => handleFavorites(planet)}
            ></button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanetCard;
