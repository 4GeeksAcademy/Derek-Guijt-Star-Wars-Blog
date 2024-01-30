import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function PlanetDetail() {
  const { store, actions } = useContext(Context);
  const [planet, setplanet] = useState({})
  const { id } = useParams();

  useEffect(() => {
    actions.fetchPlanetDetail(id);
    setplanet(store.currentPlanets)
  }, []);

  if (!store.currentPlanets) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card mt-5" style={{ width: "30rem", margin: "auto" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${parseInt(id) + 1}.jpg`}
        className="card-img-top"
        alt={name}
        style={{ height: "30rem" }}
      />
      <div className="card-body">
        <h1 className="card-title">{planet.name}</h1>
        <p className="card-text">Height: {planet.height}</p>
        <p className="card-text">Mass: {planet.mass}</p>
        <p className="card-text">Hair Color: {planet.hair_color}</p>
        <p className="card-text">Skin Color: {planet.skin_color}</p>
        <p className="card-text">Eye Color: {planet.eye_color}</p>
      </div>
    </div>
  );
}

export default PlanetDetail;
