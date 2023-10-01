import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <div className="banner">
          <div className="content-column">
            {/* Content */}
            <div className="content">
              <h1>Hi I'm</h1>
              <h1>Ramzan Chaudhry</h1>
              <p>Web Developer | Graphic Designer</p>
              <a href="https://github.com/MRamzan21" target="_blank">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <i className="fa fa-github" aria-hidden="true"></i>
              <a href="https://www.linkedin.com/in/ramzan-chaudhry/" target="_blank">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </div>
          </div>
          <div className="image-column">
            {/* Profile Image */}
            <img src="profile.png" alt="Your Profile Image" className="profile-img1" />
          </div>
        </div>
      </div>
      <div className="about-me">
        <div className="about-me-image">
          <img src="about-me.jpg" alt="About Me Image" className="profile-img" />
        </div>
        <div className="about-me-content">
          <h2>About Me</h2>
          <p>
            Fermentum. Eros sodales diam egestas quis sagittis nostra, rhoncus dapibus a fames class natoque rhoncus cum
            viverra vulputate justo dictum donec gravida, eu nascetur auctor tellus hendrerit taciti sagittis taciti et
            curae; id diam.<br />
            Tristique molestie, bibendum arcu erat. Mauris sociosqu natoque tristique molestie dictum fusce elit. Maecenas
            posuere, netus massa cubilia per tincidunt euismod hymenaeos molestie vulputate vulputate natoque consequat
            laoreet scelerisque conubia elementum scelerisque a sit. Senectus dis condimentum venenatis lacus. Parturient
            elementum suscipit.<br />
            Pharetra ut a taciti. In semper. Dictumst Torquent lacinia proin sociosqu lacus mattis conubia inceptos
            massa morbi cubilia in tortor curabitur egestas class dapibus.
          </p>
          <a href="#contact" className="btn">
            Hire Me
          </a>
        </div>
      </div>
      <div className="skills">
        <h2>My Skills</h2>
        <div className="image-container">
          <div className="image-box">
            <img src="html.png" alt="Image 1" />
            <h3>HTML5</h3>
          </div>
          <div className="image-box">
            <img src="css.png" alt="Image 2" />
            <h3>CSS3</h3>
          </div>
          <div className="image-box">
            <img src="js.png" alt="Image 3" />
            <h3>JavaScript(ES6)</h3>
          </div>
          <div className="image-box">
            <img src="react.png" alt="Image 4" />
            <h3>React.JS</h3>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <h2>Contact Information:</h2>
        <p>
          <strong>Email:</strong> <a href="mailto:ramzan30161@gmil.com">ramzan30161@gmil.com</a>
        </p>
        <p>
          <strong>Phone:</strong> +923016197354
        </p>
        <p>
          <strong>Social Media:</strong>
          <a href="https://github.com/MRamzan21" target="_blank">
            <i className="fa fa-github footer-icon" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/ramzan-chaudhry/" target="_blank">
            <i className="fa fa-linkedin footer-icon" aria-hidden="true"></i>
          </a>
        </p>
      </div>
      <hr />
      <div className="footer">
        <p> Copy Right &copy; All rights reserved 2023 - 2024 </p>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    </div>
  );
}

export default App;
