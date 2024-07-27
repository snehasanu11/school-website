import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <h3 class="text-danger fs-1 text">ABOUT US</h3>
      <div className="row mb-4 mt-5">
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card h-100 text-center bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">History</h5>
              <p className="card-text">
                "Founded in 1985, Springdale Public School has been
                <br />
                dedicated to providing quality education and holistic development to students."
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card h-100 text-center bg-secondary text-white">
            <div className="card-body">
              <h5 className="card-title">Vision</h5>
              <p className="card-text">
                "To create a learning environment that fosters
                <br />
                academic excellence, critical thinking, and ethical values."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card h-100 text-center bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Mission</h5>
              <p className="card-text">
                "To empower students with the knowledge, skills,
                <br />
                and values needed to thrive in a dynamic world."
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card h-100 text-center bg-danger text-white ">
            <div className="card-body">
              <h5 className="card-title">Principal's Message</h5>
              <p className="card-text">
                "At Springdale, we believe in nurturing
                <br />
                the potential of every student and guiding them towards a successful future."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4 ">
        <div className="col">
          <div className="card h-100 text-center bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">Infrastructure and Facilities</h5>
              <p className="card-text">
                "State-of-the-art science and computer labs"
                <br />
                "Spacious and well-equipped classrooms"
                <br />
                "Library with a vast collection of books and digital resources"
                <br />
                "Sports facilities including a playground, gymnasium, and swimming pool"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
