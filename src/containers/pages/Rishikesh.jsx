import React from 'react';
import './mussoorie.css';

const Rishikesh = () => {
  return (
    <div>
      <div className="background-image-rishikesh">
        <h1 className="background-image-heading text-center">RISHIKESH</h1>
      </div>
      <div className="destination-content section__padding">
        <div className="content-box">
          <div className="image-box">
            <img
              src="./Images/rishikesh-images/rishikesh-1.jpg"
              alt="mussoorie1"
            />
          </div>
          <div className="content">
            <h4>All About Rishikesh !</h4>
            <p>
            Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of the Indian state Uttarakhand. It is situated on the right bank of the Ganges River and is a pilgrimage town for Hindus, with ancient sages and saints meditating here in search of higher knowledge. There are numerous temples and ashrams built along the banks of the river.
            </p>
          </div>
        </div>
        <hr />
        <div className="content-box content-box-2">
          <div className="content">
            <h4>Why To Visit Rishikesh ?</h4>
            <p>
            Rishikesh is the only destination in the world that is equally popular for pilgrimage, Yoga, and Adventure Sports. It is situated in the foothills of the Shivalik range on the banks of the river Ganga in Northern India. Rishikesh has also become a popular destination for white water rafting and kayaking, attracting tourists from both India and abroad. It is also a center for hiking, backpacking, camping, rock climbing, rappelling, kayaking, and bungee jumping.
            </p>
          </div>
          <div className="image-box">
            <img
              src="./Images/rishikesh-images/rishikesh-3.jpg"
              alt="mussoorie1"
            />
          </div>
        </div>
        <hr />
        <div className="content-box">
          <div className="image-box">
            <img
              src="./Images/rishikesh-images/rishikesh-2.jpg"
              alt="mussoorie1"
            />
          </div>
          <div className="content">
            <h4>Rishikesh Food Guide</h4>
            <p>
            Due to the high influx of tourists and pilgrims to Rishikesh respectively, there are plenty of restaurants and roadside food stalls mushroomed at Rishikesh where chiefly Indian vegetarian food is served along with Punjabi and Garhwali dishes. Being a revered place of religious importance, non-vegetarian food and alcohol is strictly prohibited in Rishikesh.
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
                <h3>Rishikesh Trip Plan.</h3>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                To explore <strong>Rishikesh</strong> and its nearby
                surroundings at a relaxed pace, you would need{" "}
                <strong>2-3 Days</strong> minimum as there are plenty of places in
                and around Rishikesh. I would recommend to do these Activities <strong>Bungee Jumping, River Rafting, Para-Gliding</strong> and visit these places{" "}
                <strong>
                  Triveni Ghat, Kunjapuri Devi Temple, Vashishta Gufa, Neer Garh Waterfall, Ram Jhula, The Beatles Ashram, Lakshman Jhula Bridge
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
                <h3>Rishikesh Trip From Delhi ?</h3>
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
                Hurry Up! Don't waste your time . <strong>Rishikesh is waiting for You.</strong> 
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
                <h3>Rishikesh + Dehradun + Mussoorie Package</h3>
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

export default Rishikesh