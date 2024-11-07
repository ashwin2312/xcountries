// import React from "react";

export const CountryCard = ({ name, flag }) => {
  return (
    <div>
      <div
        style={{
          width: "250px",
          height: "200px",
          padding: "10px",
          border: "2px solid lightgrey",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src={flag}
          alt={`Flag of ${name}`}
          style={{ width: "150px", height: "100px" }}
        />
        <h2>{name}</h2>
      </div>
    </div>
  );
};
