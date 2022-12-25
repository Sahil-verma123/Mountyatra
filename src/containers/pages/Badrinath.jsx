import React from 'react';
import './mussoorie.css';

const Badrinath = () => {
  return (
    <div>
      <div className="background-image-badrinath">
        <h1 className="background-image-heading text-center">BADRINATH</h1>
      </div>
      <div className="destination-content section__padding">
        <div className="content-box">
          <div className="image-box">
            <img
              src="./Images/badrinath-images/badrinath-1.jpg"
              alt="mussoorie1"
            />
          </div>
          <div className="content">
            <h4>About Badrinath Dham Yatra.</h4>
            <p>
            Badrinath is a town and nagar panchayat in Chamoli district in the state of Uttarakhand, India. A Hindu holy place, it is one of the four sites in India's Char Dham pilgrimage and is also part of India's Chota Char Dham pilgrimage circuit. It gets its name from the Badrinath Temple. This holy town is named after the Badrinath temple dedicated to the preserver, Lord Vishnu. Many Hindu devotees are smitten by the charm of this holy shrine as it showcases the traditional Garhwali wooden architecture.
            </p>
          </div>
        </div>
        <hr />
        <div className="content-box content-box-2">
          <div className="content">
            <h4>Badrinath Trip Plan.</h4>
            <p>
            If you are an individual and want to travel to Badrinath alone, then it isn’t a huge task to achieve. Badrinath is situated at the roadside and the only thing you need to know is how to reach that location. Below is the day to a day travel guide to Badrinath Dham for travelers. <br />
            <strong>Day 0: Reach to Rishikesh / Haridwar or Dehradun</strong> <br />
            <strong>Day 1: Rishikesh to Badrinath / Joshimath. 295 km | 10 Hrs</strong> <br />
            <strong>Day 2: Visit Badrinath Temple &amp; Nearby locations</strong> <br />
            <strong>Day 3: Badrinath to Rishikesh / Haridwar</strong>
            </p>
          </div>
          <div className="image-box">
            <img
              src="./Images/badrinath-images/badrinath-2.jpg"
              alt="mussoorie1"
            />
          </div>
        </div>
        <hr />
        <div className="content-box">
          <div className="image-box">
            <img
              src="./Images/badrinath-images/badrinath-3.jpg"
              alt="mussoorie1"
            />
          </div>
          <div className="content">
            <h4>Badrinath to Joshimath.</h4>
            <p>
            As thousands of devotees ascent to the revered Badrinath shrine during the peak season, even finding a bed could be a task, let alone a room to stay. It is advisable to book an accommodation at Joshimath which is 45 kms from Badrinath. You can make a day trip to Badrinath and return to Joshimath  by evening.
            </p>
          </div>
        </div>
        <div className="accordion page-accordion" id="accordionExample">
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
                <h3>Badrinath Trip Plan.</h3>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                To explore <strong>Badrinath</strong> and its nearby
                surroundings at a relaxed pace, you would need{" "}
                <strong>3-4 Days</strong> minimum as there are plenty of places in
                and around Kedarnath. I would recommend to visit these places{" "}
                <strong>
                Pandukeshwar, Yogdhyan Badri Temple, Mana Village, Tapta Kund Badrinath, Bheem Pul etc.
                </strong>{" "}
                
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
                <h3>Badrinath Trip From Delhi ?</h3>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Yes !!!</strong>{" "} We have a Special Offer for <strong>Delhi Clients</strong> , Our cars will pick up You directly Form Delhi , So that you will not have to worry about how to reach Haridwar.
                Hurry Up! Don't waste your time . <strong>Badrinath is waiting for You.</strong> 
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
                <h3>Kedarnath + Badrinath + Gangotri + Yamunotri Char Dham Yatra</h3>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The Combination of <strong>Kedarnath + Badrinath</strong> or <strong>Gangotri + Yamunotri</strong> or <strong>Full Char Dham Yatra</strong> costs you much lesser. The Aim of <strong>Mount Yatra</strong> is to make your journey more <strong>Cost Effective</strong> and <strong>Beautiful Experience</strong>. We Suggest you to choose a Combo Package . Although its your choice <i className="fa-sharp fa-solid fa-face-smile"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Badrinath