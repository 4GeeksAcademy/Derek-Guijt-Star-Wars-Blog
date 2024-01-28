import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

import PeopleScroller from "../component/PeopleScroller.js";
import PlanetScroller from "../component/PlanetScroller.js";
import StarshipScroller from "../component/StarshipScroller.js";

export const Home = () => (
  <>
    <PeopleScroller />
    <PlanetScroller />
    {/* <StarshipScroller /> */}
  </>
);
