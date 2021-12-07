import React, { Component } from "react";

export default class MovieElement extends Component {
  render() {
    return (
      <div className="w-25 p-2">
        <div className="card">
          <img
            src="https://cdn.vox-cdn.com/thumbor/pCOEKcnT6dQFjcnMazFFJ6fCRw4=/0x0:1688x2500/1200x800/filters:focal(740x1477:1010x1747)/cdn.vox-cdn.com/uploads/chorus_image/image/69896512/Eternals_Payoff_1_Sheet_v6_Lg.0.jpg"
            alt="poster of the Eternals"
            className="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Eternals</h5>
            <p className="card-text">
              The Eternals, a race of immortal beings with superhuman powers who
              have secretly lived on Earth for thousands of years, reunite to
              battle the evil Deviants.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
