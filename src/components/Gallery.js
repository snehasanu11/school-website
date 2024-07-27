import React from 'react';

const Gallery = () => {
  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <img src="home.jpg" alt="home img" className="img-fluid" style={{ maxHeight: '500px', maxWidth: '1200px' }} />
      </div>

      <div id="carouselExampleCaptions" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="sport1.webp" alt="sports" className="d-block w-100" style={{ maxHeight: '400px' }} />
            <div className="carousel-caption d-none d-md-block">
              <p>Students participating in various sports events</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="sport2.webp" alt="science projects" className="d-block w-100" style={{ maxHeight: '400px' }} />
            <div className="carousel-caption d-none d-md-block">
              <p>Students presenting their science projects</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="sport3.webp" alt="cultural fest" className="d-block w-100" style={{ maxHeight: '400px' }} />
            <div className="carousel-caption d-none d-md-block">
              <p>Students performing in the cultural fest</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="sport4.avif" alt="sports event" className="d-block w-100" style={{ maxHeight: '400px' }} />
          </div>
          <div className="carousel-item">
            <img src="sport5.avif" alt="sports event" className="d-block w-100" style={{ maxHeight: '400px' }} />
          </div>
          <div className="carousel-item">
            <img src="sport6.webp" alt="sports event" className="d-block w-100" style={{ maxHeight: '400px' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
