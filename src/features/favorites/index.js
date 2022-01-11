import React from "react";
import { Loading } from "../../components";
import FavoriteList from "./components/favorites-list/FavoritesList";

const Favorites = (props) => {
  return (
    <div className="d-flex flex-row flex-fill pt-4 container-fluid position-relative">
      {props.hasLoaded ? (
        <div className="d-flex flex-row flex-fill pt-4 container-fluid position-relative">
          <FavoriteList
            favorites={props.favorites}
            removeFavorite={props.removeFavorite}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Favorites;
