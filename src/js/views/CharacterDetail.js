import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function CharacterDetail() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();


  useEffect(() => {
    actions.fetchPersonDetail(id);
  }, []);

  return (
    <div className="card mt-5" style={{ width: "30rem", margin: "auto" }}>
      {true? (<><img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        className="card-img-top"
        alt={name}
        style={{ height: "30rem" }}
      />
      <div className="card-body">
        <h1 className="card-title">{store.currentPerson.name}</h1>
        <p className="card-text">Height: {store.currentPerson.height}</p>
        <p className="card-text">Mass: {store.currentPerson.mass}</p>
        <p className="card-text">Hair Color: {store.currentPerson.hair_color}</p>
        <p className="card-text">Skin Color: {store.currentPerson.skin_color}</p>
        <p className="card-text">Eye Color: {store.currentPerson.eye_color}</p>
      </div></>) : (<div>Loading...</div>)}
    </div>
  );
}

export default CharacterDetail;
