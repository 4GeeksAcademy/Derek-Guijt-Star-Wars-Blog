import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

function PeopleCard() {
  const { store, actions } = useContext(Context);
  const [people, setPeople] = useState([]);

  // Fetch people on component mount
  useEffect(() => {
    actions.fetchPeople();
  }, []);

  useEffect(() => {
    setPeople(store.people);
  }, [store.people]);

  // Handling the favorites toggle
  const handleFavorites = (person) => {
    const isFavorite = store.favorites.some((fav) => fav.id === person.id);
    if (isFavorite) {
      actions.removeFavorites(person.name); // Make sure this correctly identifies the person to remove
    } else {
      actions.addFavorites(person.name, person.id, "character");
    }
  };

  return (
    <div
      className="d-flex col-10 overflow-auto mt-5 mx-auto cards"
      style={{ height: "50rem" }}
    >
      {people.map((person, index) => {
        console.log(person)
        const isFavorite = store.favorites.some(
          (fav) => fav.uid === person.uid && fav.type === "character"
        );
        return (
          <div
            key={index}
            className="card col-1 mx-1"
            style={{ width: "30rem", height: "48rem" }}
          >
            <h3>{person.name}</h3>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
              className="card-img-top"
              alt={person.name}
              style={{ height: "30rem", width: "30rem" }}
            />
            <Link to={`/CharacterDetail/` + person.uid}>Learn More</Link>
            <button
              className={isFavorite ? "fas fa-heart" : "far fa-heart"}
              onClick={() => handleFavorites(person)}
            >
              {" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PeopleCard;
