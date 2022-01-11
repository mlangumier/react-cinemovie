import React from "react";
import Style from "./FavoriteElement.module.scss";

function FavoriteElement(props) {
  return (
    <div className={"d-flex flex-row bg-light " + Style.container}>
      <img
        src={props.favorite.img}
        alt="poster of the favorite"
        height="200"
        width="150"
      />
      <div className="card-body flex-fill d-flex flex-column p-3">
        <h5 className="card-title list-group">{props.favorite.title}</h5>
        <p className="card-text flex-fill">{props.favorite.details}</p>
        <div className="d-flex flex-row justify-content-end">
          <button
            className="btn btn-small btn-danger"
            onClick={() => {
              props.removeFavorite(props.favorite.title);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteElement;
