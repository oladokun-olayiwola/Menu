import React from "react";
import items from "./data";



export const Header = ({setList}) => {

  return (
    <div>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <button className="filter-btn" onClick={() => setList(items)}>All</button>
        <button
          className="filter-btn"
          onClick={() =>
            setList(items.filter((item) => item.category === "breakfast"))
          }
        >
          Breakfast
        </button>
        <button
          className="filter-btn"
          onClick={() =>
            setList(items.filter((item) => item.category === "lunch"))
          }
        >
          Lunch
        </button>
        <button
          className="filter-btn"
          onClick={() =>
            setList(items.filter((item) => item.category === "shakes"))
          }
        >
          shakes
        </button>
      </div>
    </div>
  );
}

