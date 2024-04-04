import React, { Component } from 'react';

const cardStyles = {
  width: '20rem',
  margin: '1rem',
  
  
};


export default class AstronomyHome extends Component {
  render() {
    return (
      <div>
        <br></br>
        
        <h1>Welcome Astronomy Club</h1>
        
       
        
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className="card" style={cardStyles}>
            <img
              className="card-img-top"
              src="https://cdn.mos.cms.futurecdn.net/MMwRCjVEaoJPP4dBBugWFY-1200-80.jpg"
              style={{ height: '200px', width: '319px' }} alt="Card image cap" />
        
            <div className="card-body">
              <h5 className="card-title">Games</h5>
              <p className="card-text">Try your free time</p>
              <a href="/AstromyGameLink" className="btn btn-primary">
                Click Me
              </a>
            </div>
          </div>

          <div className="card" style={cardStyles}>
            <img
              className="card-img-top"
              src="https://media.istockphoto.com/id/1344290509/photo/3d-play-icon-youtube.jpg?b=1&s=170667a&w=0&k=20&c=YlO9BB3IR57zUnPxC_PbUesfR4F6rbtk5PEyA8zgpS4="
              style={{ height: '200px', width: '319px' }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Videos</h5>
              <p className="card-text">Your Time Tables are here</p>
              <a href="/Astronomyvideoslink" className="btn btn-primary">
                Click Me
              </a>
            </div>
          </div>

          <div className="card" style={cardStyles}>
            <img
              className="card-img-top"
              src="https://www.shutterstock.com/image-photo/top-view-student-hand-writing-260nw-395718139.jpg"
              style={{ height: '200px', width: '319px' }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Reading Materials</h5>
              <p className="card-text">Read and improve knowledge</p>
              <a href="#" className="btn btn-primary">
                Click Me
              </a>
            </div>
          </div>
        </div>
        <p>

        <div className="Astitle1"><h4>Who are we</h4> </div>

        <div className="Description">
            Bomiriya Central College Kaduwela Astronomy Club is a prestigious organization that was established with the aim of developing students' knowledge and skills beyond the classroom. Since its inception, the Quiz Club has played a vital role in shaping the personalities of the students and has made significant contributions to the school's co-curricular and extracurricular activities.

The club conducts regular quizzes, lectures, and workshops to enhance students' knowledge and skills in various fields such as science, mathematics, literature, and more. The Club also focuses on developing students' communication and teamwork skills through various activities and events.

Bomiriya Central College Kaduwela Quiz Club is an essential part of the school's education process and plays a significant role in improving the overall knowledge and academic performance of the students. The club's activities and achievements have also contributed significantly to the school's legacy and reputation in the community.

Over the years, the Quiz Club has established itself as a leader in various inter-school quiz competitions, and its teams have consistently performed well in national-level competitions. The club's dedication and hard work have earned it a reputation as one of the top quiz clubs in the country.

By providing opportunities for intellectual growth and personal development, Bomiriya Central College Kaduwela Quiz Club has become an indispensable part of the school community and has inspired many young minds to pursue their passion for learning and knowledge.
            </div>

            <div className="Astitle1"><h4>As a Astronomy Club, </h4></div>
            <div>
            <b>Our vision is, </b>to be the best performing school Astronomy Club in Sri Lanka.
<br></br>
            <b>Our mission is, </b>contribute the world's top minds in knowledge for the future from mother Bomiriya. 
            </div>
<br></br>
            <div className="Astitle1"><h4>Master In-charge </h4></div>
            <li>Mr.thilak</li>
            <li>Mr.thilak</li>
            <li>Mr.thilak</li>
<br></br>
        </p>
        </div>

      
    );
    
  }

}