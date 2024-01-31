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
        <p className="card-text">Height: {store.currentPlanet.height}</p>
        <p className="card-text">Mass: {store.currentPlanet.mass}</p>
        <p className="card-text">Hair Color: {store.currentPlanet.hair_color}</p>
        <p className="card-text">Skin Color: {store.currentPlanet.skin_color}</p>
        <p className="card-text">Eye Color: {store.currentPlanet.eye_color}</p>
      </div></>) : (<div>Loading...</div>)}
    </div>
  );
}

export default PlanetDetail;
