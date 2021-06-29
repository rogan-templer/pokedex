import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import BackToHome from "./BackToHome";
import { getDetails } from "../api";

function Details() {
  const [types, setTypes] = useState([]);
  const { number, name } = useParams();

  useEffect(() => {
    getDetails(number).then((types) => {
      setTypes(types);
    });
  }, [number]);

  return (
    <>
      <div className="grid">
        <h1 className="col">{name}</h1>
        <Profile />
        <p className="col">
          Types:{" "}
          {types.map((data, index) => {
            return <span key={index}>{data.type.name}, </span>;
          })}
        </p>
        <hr className="col" />
        <BackToHome />
      </div>
    </>
  );
}
export default Details;
