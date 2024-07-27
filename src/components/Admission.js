import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Admission = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 text-danger-emphasis bg-danger-subtle  ">
      <div className="d-flex align-items-start  ">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
            Home
          </button>
          <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
            Profile
          </button>
          <button className="nav-link" id="v-pills-dates-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dates" type="button" role="tab" aria-controls="v-pills-dates" aria-selected="false">
            Important Dates
          </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
            Admission forms are available for download.
            <br />
            Submit the completed form along with required documents at the school office.
          </div>
          <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
            Admission is based on merit and availability of seats.
            <br />
            Entrance tests may be conducted for certain grades.
          </div>
          <div className="tab-pane fade" id="v-pills-dates" role="tabpanel" aria-labelledby="v-pills-dates-tab" tabIndex="0">
            Admission Form Availability: March 1st
            <br />
            Last Date for Submission: March 31st
            <br />
            Entrance Test: April 15th
            <br />
            Announcement of Results: April 30th
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
