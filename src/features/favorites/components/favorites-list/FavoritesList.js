import React from "react";
import FavoriteElement from "./FavoriteElement/FavoriteElement";

function FavoriteList(props) {
  return (
    <div className="d-flex flex-row flex-wrap align-content-start">
      {props.favorites.map((favorite, index) => (
        <FavoriteElement
          key={favorite.title + index}
          favorite={favorite}
          removeFavorite={props.removeFavorite}
        />
      ))}
    </div>
  );
}

export default FavoriteList;
