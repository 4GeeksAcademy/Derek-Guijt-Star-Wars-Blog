import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function StarshipDetail() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.fetchStarshipDetail(id);
  }, []);

  return (
    <div className="card mt-5" style={{ width: "30rem", margin: "auto" }}>
      {true? (<><img
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        className="card-img-top"
        alt={name}
        style={{ height: "30rem" }}
      />
      <div className="card-body">
        <h1 className="card-title">{store.currentStarship.model}</h1>
        <p className="card-text">Starship Class: {store.currentStarship.starship_class}</p>
        <p className="card-text">Crew: {store.currentStarship.crew}</p>
        <p className="card-text">Passengers: {store.currentStarship.passengers}</p>
        <p className="card-text">Length: {store.currentStarship.length}</p>
        <p className="card-text">Cost: {store.currentStarship.cost_in_credits}</p>
      </div></>) : (<div>Loading...</div>)}
    </div>
  );
}

export default StarshipDetail;
