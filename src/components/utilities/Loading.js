import React from "react";

const Loading = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex flex-row justify-content-center align-items-center"
    >
      <img
        alt="loading gif"
        src="https://i.stack.imgur.com/kOnzy.gif"
        className="m-auto"
        style={{ height: "80px", width: "80px" }}
      />
    </div>
  );
};

export default Loading;
