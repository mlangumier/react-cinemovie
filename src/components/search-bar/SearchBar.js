import React, { Component } from "react";
import { Formik } from "formik";
import apiMovie, { apiMovieMap } from "../../config/api.movie";

export default class SearchBar extends Component {
  submit = (values, actions) => {
    // console.log(values);
    const query =
      `?` +
      Object.keys(values)
        .map((key) => `${key}=${values[key]}&`)
        .join("");
    // console.log(query);
    apiMovie
      .get(`/search/movie/` + query)
      .then((res) => res.data.results)
      .then((moviesApi) => {
        const movies = moviesApi.map(apiMovieMap);
        console.log(movies);
        this.props.updateMovies(movies);
        actions.setSubmitting(false);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Formik
        onSubmit={this.submit}
        initialValues={{ query: "", language: "en-US" }}
      >
        {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="d-flex flex-row p-2 m-2">
            <input
              name="query"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Search..."
              className="form-control me-2"
              style={{ width: "25rem" }}
            />
            <select
              name="language"
              onChange={handleChange}
              onBlur={handleBlur}
              className="me-2 form-control"
              style={{ width: "5rem" }}
            >
              <option values="en-US"> English </option>
              <option values="fr-FR"> French </option>
            </select>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-small btn-primary"
            >
              Search
            </button>
          </form>
        )}
      </Formik>
    );
  }
}
