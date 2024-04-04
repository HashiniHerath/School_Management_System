import React, { Component } from 'react';

const cardStyles = {
  width: '20rem',
  margin: '1rem',
};

export default class ClubHome extends Component {
  render() {
    return (
      <div className='container-fluid vh-100' style={{backgroundColor: "white"}}>
        <br></br>
        <h2>Club Management System</h2>


        <div className="d-flex flex-wrap justify-content-center">
          <div className="card" style={cardStyles}>
            <img
              className="card-img-top"
              src="https://media.istockphoto.com/id/537228978/photo/landscape-with-milky-way-silhouette-of-a-father-and-son.jpg?s=612x612&w=0&k=20&c=leGjKS51LqES_wjn5pC19B-pr6xQ0fQ7gg4RHitfZco="
              style={{ height: '200px', width: '319px' }}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Astronomy Club</h5>
             
              <a href="AstronomyHome" className="btn btn-primary">
                Click here
              </a>
            </div>
          </div>

          <div className="card" style={cardStyles}>
            <img
              className="card-img-top"
              src="https://previews.123rf.com/images/argus456/argus4561702/argus456170211479/71209491-quiz-club-3d-rendering-text-on-metal.jpg"
              style={{ height: '200px', width: '319px' }}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Quiz Club</h5>
              
              <a href="QuizHome" className="btn btn-primary">
                Click here
              </a>
            </div>
          </div>

          <div className="card" style={cardStyles}>
            <img
              className="card-img-top"
              src="https://www.unb.ca/studentlife/_assets/images/inline-sj_clubs.jpg"
              style={{ height: '200px', width: '319px' }}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Sports Club</h5>
             
              <a href="#" className="btn btn-primary">
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
