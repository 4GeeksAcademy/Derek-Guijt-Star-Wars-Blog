import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function StarshipDetail() {
  const { store, actions } = useContext(Context);
  const [starships, setstartships] = useState({})
  const { id } = useParams();

  useEffect(() => {
    actions.fetchStarshipsDetail(id);
    setstartships(store.currentStarships)
  }, []);

  if (!store.currentStarships) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card mt-5" style={{ width: "30rem", margin: "auto" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/Starships/${parseInt(id) + 1}.jpg`}
        className="card-img-top"
        alt={name}
        style={{ height: "30rem" }}
      />
      <div className="card-body">
        <h1 className="card-title">{starships.name}</h1>
        <p className="card-text">Height: {starships.height}</p>
        <p className="card-text">Mass: {starships.mass}</p>
        <p className="card-text">Hair Color: {starships.hair_color}</p>
        <p className="card-text">Skin Color: {starships.skin_color}</p>
        <p className="card-text">Eye Color: {starships.eye_color}</p>
      </div>
    </div>
  );
}

export default StarshipDetail;
