import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import "./navbar.css";
import "./packages.css";
import "./services.css";
import "./aboutUs.css";
import { useEffect } from "react";

const Home = () => {
  const [isSticky, setIsSticky] = React.useState(false);

  const headerRef = React.useRef();

  React.useEffect(() => {
    const offsetTop = headerRef.current.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset >= offsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mountYatra-home section__padding">
        <div className="mountYatra-home-content">
          <div className="mountYatra-home-content-logo">
            <img
              src="Images/Home-Images/Mount-Yatra-Logo.png"
              className="logo img-fluid"
              alt="mount-yatra-logo"
            />
          </div>
          <div className="mountYatra-home-content-heading">
            <h1>EXPLORE UTTARAKHAND</h1>
            <p>
              <strong>Mount Yatra</strong> Is A Service Providing Agency, Which
              Provides You Tour & Travel Packages At A Affordable Cost With Good
              Value.
            </p>
            <p>
              Explore Our Website And Find Your Package. For Making Your Journey
              More Cost Effective Pick Two or More Destinations.
            </p>
          </div>
          <div className="mountYatra-home-content-points">
            <div className="content-points">
              <a href="#section-1" className="home-btn">
                Famous Destinations
              </a>
              {/* <button>Famous Destinations</button> */}
            </div>
          </div>
        </div>

        <div className="mountYatra-home-image">
          <div className="mountYatra-home-image-container">
            <img
              src="./Images/Home-Images/mountYatra.png"
              className="img-fluid"
              alt="collage"
            />
          </div>
        </div>
      </div>

      {/* ****************************************** NAVBAR ****************************************** */}
      <nav
        className={isSticky ? "navbar center sticky" : "navbar center"}
        ref={headerRef}
      >
        <a href="#section-1" className="navbar-link">
          Packages
        </a>
        <a href="#section-2" className="navbar-link">
          Services
        </a>
        <a href="#section-3" className="navbar-link">
          About
        </a>
        <a href="#section-4" className="navbar-link">
          Contact
        </a>
      </nav>

      {/* ****************************************** PACKAGE ****************************************** */}
      <div className="packages section__padding" id="section-1">
        <h2 className="text-center">Choose Your Destination</h2>
        <div className="packages-cards-wrapper">
          <Link to="/mussoorie">
            <img
              src="./Images/Home-Images/mussoorie-card.png"
              alt="mussoorie-card"
            />
          </Link>
          <Link to="./rishikesh">
            <img
              src="./Images/Home-Images/rishikesh-card.png"
              alt="rishikesh-card"
            />
          </Link>
          <Link to="/dehradun">
            <img
              src="./Images/Home-Images/dehradun-card.png"
              alt="dehradun-card"
            />
          </Link>
          <Link to="/kedarnath">
            <img
              src="./Images/Home-Images/kedarnath-card.png"
              alt="kedarnath-card"
            />
          </Link>
          <Link to="/badrinath">
            <img
              src="./Images/Home-Images/badrinath-card.png"
              alt="badrinath-card"
            />
          </Link>
          <Link to="/nainital">
            <img
              src="./Images/Home-Images/nainital-card.png"
              alt="nainital-card"
            />
          </Link>
        </div>
      </div>

      {/* ****************************************** SERVICES ****************************************** */}
      <div className="services section__padding" id="section-2">
        <h2 className="text-center">Our Services</h2>
        <div className="services-container">
          <div className="service">
            <i className="fa-solid fa-car-side"></i>
            <h4>Car Booking</h4>
            <p>
              We provides you Car of your choice AC , Non-AC , 4 Seater to 7
              Seater or More
              <br />
              Toyota Etios, Swift DZire, Mahindra Xylo, Tavera, Innova, Tempo
              Traveller
            </p>
          </div>
          <div className="service">
            <i className="fa-solid fa-hotel"></i>
            <h4>Hotels</h4>
            <p>
              Hotel Rooms will be available as your choice and Requirements 2
              Bed Room, 3 Bed Room, 4 Bed Room, 2 Room Set , 3 Room Set and Even
              More .
            </p>
          </div>
          <div className="service">
            <i className="fa-solid fa-mountain"></i>
            <h4>Sightseeing</h4>
            <p>
              Sightseeing is the activity of going to a new place and checking
              out all of the attractions and cool features of that place.
              Walking around Valley's checking out the Scenery and boardwalk is
              also provided.
            </p>
          </div>
          <div className="service">
            <i className="fa-solid fa-pizza-slice"></i>
            <h4>Breakfast</h4>
            <p>
              Breakfast Service is also provided by <strong>Mount Yatra</strong>
              . Although It is not Mandatory to take , you have your choice
              whether you need this service or not.
            </p>
          </div>
          <div className="service">
            <i className="fa-solid fa-route"></i>
            <h4>Tour Guide</h4>
            <p>
              Tour guides ensure that itineraries are met and that customers are
              being informed in an entertaining manner the location they are
              touring.
            </p>
          </div>
          <div className="service">
            <i className="fa-solid fa-plate-wheat"></i>
            <h4>Dinner</h4>
            <p>
              Dinner Service is also provided by <strong>Mount Yatra</strong>.
              Although It is not Mandatory to take , you have your choice
              whether you need this service or not.
            </p>
          </div>
        </div>
      </div>

      {/* ****************************************** ABOUT-US ****************************************** */}
      <div className="aboutUs section__padding" id="section-3">
        <div className="aboutUsContainer">
          <h2 className="main-heading text-center">
            Aim Of Mount Yatra <i className="fa-solid fa-hands-praying"></i>
          </h2>
          <p className="text-center aboutUs-para-1">
            Mount Yatra is Tour and Travel service providing Agency , which
            offers you Tour Packages in All over Uttarakhand, in Affordable Cost
            with Good services . Our Aim is to provide an unforgetable Experience
            To our Client.
          </p>
          <p className="text-center aboutUs-para-2">
            For Making Your Journey More Affordable And Comfortable Choose
            Multiple Packages.
          </p>

          <h6 className="text-center text-white">mountyatra@gmail.com</h6>
          <h6 className="text-center text-white">
            +91 9412979959 <span>|</span> +91 7895212535
          </h6>
          <br />
          <div className="accordion border-0" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h4>Why Choose Mount Yatra ?</h4>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Mount Yatra</strong> has a trust of people and 4.7 Star rating form our previous Clients, We never disappointed any Clients from past 4 years. <br />
                  In India people welcome our Guest as Worship of God. Mount Yatra has the Same thought . The Client Safety & Satisfactory Journey is our First Priority. 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h4>How to reduce Journey Cost.</h4>
                  
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  For making your Journey more Cost Effective . Try to Choose two or more Packages , For Example <strong>Mussoorie + Rishikesh</strong> or <strong>Badrinath + Kedarnath</strong> or <strong>Gangotri + Yamunotri</strong>. <br />These kind of Packages Reduce your journey cost as well as you put more time in journey and Enjoy more Fun .
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                <h4>Journey Starting Point Haridwar ?</h4>

                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Our Journey Starts From Haridwar. This means first you have to reach Haridwar , Then our Journey Starts , But For <strong>Delhi People</strong> We have a special offer, we send our Cars to pick up our clients directly from delhi, so that they don't have to worry about reaching Haridwar.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
