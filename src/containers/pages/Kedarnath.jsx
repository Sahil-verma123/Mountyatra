import React from 'react';
import './mussoorie.css';

const Kedarnath = () => {
  return (
    <div>
      <div className="background-image-kedarnath">
        <h1 className="background-image-heading text-center">KEDARNATH</h1>
      </div>
      <div className="destination-content section__padding">
        <div className="content-box">
          <div className="image-box">
            <img
              src="./Images/kedarnath-images/kedarnath-1.jpg"
              alt="mussoorie1"
            />
          </div>
          <div className="content">
            <h4>About Kedarnath Yatra.</h4>
            <p>
            The extreme weather condition of Kedarnath prompts the temple to remain open from the end of April to the beginning of November. It is one of the twelve Jyotirlingas of Kedar or Lord Shiva. In Kedarnath alone, there are more than 200 shrines dedicated to Lord Shiva. 4G network is now available at Kedarnath by Jio, Airtel, and BSNL.
            </p>
          </div>
        </div>
        <hr />
        <div className="content-box content-box-2">
          <div className="content">
            <h4>22 Kilometres of Walk.</h4>
            <p>
            The temple is not directly accessible by road and has to be reached by a 22 kilometres (14 mi) uphill trek from Gaurikund. Pony, mule and manchan service is available to reach the temple. According to Hindu legends, the temple was initially built by the Pandavas, and is one of the twelve Jyotirlingas, the holiest Hindu shrines of Shiva. The Pandavas were supposed to have pleased Shiva by doing penance in Kedarnath
            </p>
          </div>
          <div className="image-box">
            <img
              src="./Images/kedarnath-images/kedarnath-2.jpg"
              alt="mussoorie1"
            />
          </div>
        </div>
        <hr />
        <div className="content-box">
          <div className="image-box">
            <img
              src="./Images/kedarnath-images/kedarnath-3.jpg"
              alt="mussoorie1"
            />
          </div>
          <div className="content">
            <h4>Mahabharata Connection With Kedarnath.</h4>
            <p>
            The Mahabharata, which gives the account of the Pandavas and the Kurukshetra War, does not mention any place called Kedarnath. One of the earliest references to Kedarnath occurs in the Skanda Purana (c. 7th-8th century), which contains a story describing the origin of the Ganges river. The text names Kedara (Kedarnath) as the place where Shiva released the holy water from his matted hair.
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
                <h3>Kedarnath Trip Plan.</h3>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                To explore <strong>Kedarnath</strong> and its nearby
                surroundings at a relaxed pace, you would need{" "}
                <strong>3-4 Days</strong> minimum as there are plenty of places in
                and around Kedarnath. I would recommend to visit these places{" "}
                <strong>
                Guptkashi, Kalimat Almora, Ukhimath, Chopta, Tungnath, Vasuki Tal Lake, Triyuginarayan Temple etc
                </strong>{" "}
                etc.
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
                <h3>Kedarnath Trip From Delhi ?</h3>
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
                Hurry Up! Don't waste your time . <strong>Kedarnath is waiting for You.</strong> 
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

export default Kedarnath