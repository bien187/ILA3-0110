import React from "react";
import "./Styles/Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-content">
        <h1 className="name">Ben Müller</h1>
        <p className="description">
          <span className="highlight">Angehender Informatiker</span> mit einem Auge für{" "}
          <span className="highlight"> das Wesentliche</span>
        </p>
      </div>
      <div className="image-content">
        <img
          src="/pics/Ben_Portrait.jpg"
          alt="Ben Müller"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default Home;
