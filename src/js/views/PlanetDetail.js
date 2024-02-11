import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function PlanetDetail() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();


  useEffect(() => {
    actions.fetchPlanetDetail(id);
  }, []);

  return (
    <div className="card mt-5" style={{ width: "30rem", margin: "auto" }}>
      {true? (<><img
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        className="card-img-top"
        alt={name}
        style={{ height: "30rem" }}
      />
      <div className="card-body">
        <h1 className="card-title">{store.currentPlanet.name}</h1>
        <p className="card-text">Name: {store.currentPlanet.name}</p>
        <p className="card-text">Population: {store.currentPlanet.population}</p>
        <p className="card-text">Terrain: {store.currentPlanet.terrain}</p>
        <p className="card-text">Diameter: {store.currentPlanet.diameter}</p>
        <p className="card-text">Rotation Period: {store.currentPlanet.rotation_period}</p>
      </div></>) : (<div>Loading...</div>)}
    </div>
  );
}

export default PlanetDetail;
