import React from "react";

export default function AstromyGameLink() {
  return (
    <div>
      Games
      {/* 1st link */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <br />
        <div className="card" style={{ width: "20rem", margin: "1rem" }}>
          <img
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSolSkMwq2eqw6k5ZuwQ8MiizmUiXZQKSiA&usqp=CAU"
            style={{ height: "200px", width: "319px" }}
            alt="Card image cap"
          />

          <div className="card-body">
            <p className="card-text">How Do We Launch Things Into Space</p>
            <a href="https://youtu.be/o2FFtPPM3iY" className="btn btn-primary">
              Watch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
