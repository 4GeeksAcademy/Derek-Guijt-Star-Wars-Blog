import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function CharacterDetail() {
  const { store, actions } = useContext(Context);
  const [character, setCharacter] = useState({})
  const { id } = useParams();

  useEffect(() => {
    actions.fetchPersonDetails(id);
    setCharacter(store.currentPerson)
  }, []);

  if (!store.currentPerson) {
    return <div>Loading...</div>;
  }

  // const { name, height, mass, hair_color, skin_color, eye_color } =
  //   store.currentPerson;

  return (
    <div className="card mt-5" style={{ width: "30rem", margin: "auto" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        className="card-img-top"
        alt={name}
        style={{ height: "30rem" }}
      />
      <div className="card-body">
        <h1 className="card-title">{character.name}</h1>
        <p className="card-text">Height: {character.height}</p>
        <p className="card-text">Mass: {character.mass}</p>
        <p className="card-text">Hair Color: {character.hair_color}</p>
        <p className="card-text">Skin Color: {character.skin_color}</p>
        <p className="card-text">Eye Color: {character.eye_color}</p>
      </div>
    </div>
  );
}

export default CharacterDetail;
