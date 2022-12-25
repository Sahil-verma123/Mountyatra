import React from 'react';
import './mussoorie.css';

const Nainital = () => {
  return (
    <div>
      <div className="background-image-nainital">
        <h1 className="background-image-heading text-center">NAINITAL</h1>
      </div>
      <div className="destination-content section__padding">
        <div className="content-box">
          <div className="image-box">
            <img
              src="./Images/nainital-images/nainital-1.jpg"
              alt="mussoorie1"
            />
          </div>
          <div className="content">
            <h4>About Nainital And its Location.</h4>
            <p>
            Nainital is located in the Kumaon foothills of the Jagbeer Himalayas at a distance of 285 km (177 mi) from the state capital Dehradun and 345 km (214 mi) from New Delhi, the capital of India. From the tops of the higher peaks, "magnificent views can be obtained of the vast plain to the south, or of the mass of tangled ridges lying north, bound by the great snowy range which forms the central axis of the Himalayas.
            </p>
          </div>
        </div>
        <hr />
        <div className="content-box content-box-2">
          <div className="content">
            <h4>Nainital - The Lake City of India.</h4>
            <p>
            Nainital is a paradise for nature lovers. The most captivating aspect about Nainital is its hilly surroundings and the poised lake. The "Naini Lake" (Tal meaning lake) offers an enthralling and mesmerizing experience to the tourist which is why it is sometimes referred to as the ‘Queen of Lakes’.
            </p>
          </div>
          <div className="image-box">
            <img
              src="./Images/nainital-images/nainital-2.jpg"
              alt="mussoorie1"
            />
          </div>
        </div>
        <hr />
        <div className="content-box">
          <div className="image-box">
            <img
              src="./Images/nainital-images/nainital-3.jpg"
              alt="mussoorie1"
            />
          </div>
          <div className="content">
            <h4>Activities in Nainital</h4>
            <p>
            There are a number of places that one can pay a visit to while holidaying in Nainital. However, if one has less time, one can surely go for a place which interests him/her the most. Since Nainital offers a number of experiences which ranges from trekking, boating, shopping, picnic, sightseeing, Rope-way, spiritual one and others through a number of places which have these things to offer to the inquisitive and zealous traveler.
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
                <h3>Nainital Trip Plan.</h3>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                To explore <strong>Nainital</strong> and its nearby
                surroundings at a relaxed pace, you would need{" "}
                <strong>2 Days</strong> minimum as there are plenty of places in
                and around Nainital. I would recommend to visit these places{" "}
                <strong>
                Naini Lake, Nainital Zoo, Aerial Ropeway Nainital, Naina Devi Temple, The Mall Road, Nainital, Tiffin Top etc.
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
                <h3>Nainital Trip From Delhi ?</h3>
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
                Hurry Up! Don't waste your time . <strong>Nainital is waiting for You.</strong> 
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
                <h3>Nainital + Mussoorie + Rishikesh Package</h3>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The Combination of <strong>Mussoorie + Nainital</strong> or <strong>Rishikesh + Nainital</strong> or <strong>Mussoorie + Rishikesh + Nainital</strong> costs you much lesser. The Aim of <strong>Mount Yatra</strong> is to make your journey more <strong>Cost Effective</strong> and <strong>Beautiful Experience</strong>. We Suggest you to choose a Combo Package . Although its your choice <i className="fa-sharp fa-solid fa-face-smile"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nainital