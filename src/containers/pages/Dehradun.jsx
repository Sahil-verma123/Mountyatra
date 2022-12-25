import React from 'react';
import './mussoorie.css';

const Dehradun = () => {
  return (
    <div>
    <div className="background-image-dehradun">
      <h1 className="background-image-heading text-center">DEHRADUN</h1>
    </div>
    <div className="destination-content section__padding">
      <div className="content-box">
        <div className="image-box">
          <img
            src="./Images/dehradun-images/dehradun-1.jpg"
            alt="mussoorie1"
          />
        </div>
        <div className="content">
          <h4>Why Vist Dehradun ?</h4>
          <p>
          
Dehradun City is one of the oldest cities of India, bejeweled-like a glittering jewel in the lower Himalayan mountain ranges.

Dehradun is the gateway to the famous hill station of Mussoorie and the pilgrimage spots of Haridwar and Rishikesh.  This city is famous for its weather, Dehradun climate remains salubrious throughout the year.
          </p>
        </div>
      </div>
      <hr />
      <div className="content-box content-box-2">
        <div className="content">
          <h4>What is Dehradun famous for?</h4>
          <p>
          Dehradun is famous among tourist as Historical, Picnic Spots, Educational Institutes, Food, Capital City, Shopping, Zoo, Business Hub.Dehradun is recommended destination for Corporates, Couples, Family and Kids, Foreigners, Groups, Solo.Dehradun is popular destination for following activities/ interests -<strong> Biking, Business Hub, Char Dham Route, Christmas and New Year, Leisure, Shopping, Others </strong>
          </p>
        </div>
        <div className="image-box">
          <img
            src="./Images/dehradun-images/dehradun-2.jpg"
            alt="mussoorie1"
          />
        </div>
      </div>
      <hr />
      <div className="content-box">
        <div className="image-box">
          <img
            src="./Images/dehradun-images/dehradun-3.jpg"
            alt="mussoorie1"
          />
        </div>
        <div className="content">
          <h4>One Crazy Fact About <strong>Sahastradhara</strong></h4>
          <p>
          Many tourists visit Sahastradhara in summers to beat the scorching heat of the sun. The interesting fact about this place is that the sulphur spring of Sahastradhara contains medicinal properties, which can cure several skin ailments in humans.
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
                <h3>Dehradun Trip Plan.</h3>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                To explore <strong>Dehradun</strong> and its nearby
                surroundings at a relaxed pace, you would need{" "}
                <strong>1-2 Days</strong> minimum as there are plenty of places in
                and around Dehradun. I would recommend to visit these places{" "}
                <strong>
                Tapkeshwar Mahadev temple, Robbers Cave, Lachhiwala, Sahastradhara, Bhuddha Temple, Malsi Deer Park, Dak Phathar etc
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
                <h3>Dehradun Trip From Delhi ?</h3>
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
                Hurry Up! Don't waste your time . <strong>Dehradun is waiting for You.</strong> 
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
                <h3>Dehradun + Mussoorie + Rishikesh Package</h3>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The Combination of <strong>Mussoorie + Rishikesh</strong> or <strong>Mussoorie + Dehradun</strong> or <strong>Mussoorie + Rishikesh + Dehradun</strong> costs you much lesser. The Aim of <strong>Mount Yatra</strong> is to make your journey more <strong>Cost Effective</strong> and <strong>Beautiful Experience</strong>. We Suggest you to choose a Combo Package . Although its your choice <i className="fa-sharp fa-solid fa-face-smile"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Dehradun