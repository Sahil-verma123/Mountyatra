import React from "react";
import "./mussoorie.css";

const Mussoorie = () => {
  return (
    <div>
      <div className="background-image">
        <h1 className="background-image-heading text-center">MUSSOORIE</h1>
      </div>
      <div className="destination-content section__padding">
        <div className="content-box">
          <div className="image-box">
            <img
              src="./Images/mussoorie-images/mussoorie-1.jpg"
              alt="mussoorie1"
            />
          </div>
          <div className="content">
            <h4>Mussoorie, the queen of hill stations.</h4>
            <p>
              <strong>Why is Mussoorie famous? </strong> Mussoorie, the queen of
              hill stations, is famous for its scenic beauty, good social life
              and entertainment. The excellent climate makes it an attractive
              holiday resort. Thronged by holidayers, it vibrates with gaiety
              and merry making during the summer season. It is about 35
              kilometres (22 mi) from the state capital of Dehradun and 290 km
              (180 mi) north of the national capital of New Delhi.
            </p>
          </div>
        </div>
        <hr />
        <div className="content-box content-box-2">
          <div className="content">
            <h4>Kempty Falls Mussoorie</h4>
            <p>
              Kempty Falls is the most popular and one of the oldest tourist
              spot near Mussoorie. Developed before more than 150 years ago by a
              British man, Kempty Falls is the most fascinating picnic spot or a
              perfect day out place nearby Mussoorie at a distance of 15 km.
            </p>
          </div>
          <div className="image-box">
            <img
              src="./Images/mussoorie-images/mussoorie-2.jpg"
              alt="mussoorie1"
            />
          </div>
        </div>
        <hr />
        <div className="content-box">
          <div className="image-box">
            <img
              src="./Images/mussoorie-images/mussoorie-3.jpg"
              alt="mussoorie1"
            />
          </div>
          <div className="content">
            <h4>Why Visit Dhanaulti ?</h4>
            <p>
              Dhanaulti is a place for those who are seeking a holiday of
              privacy in the hills away from the hustle-bustle of city life.
              Dhanaulti is a paradise for the tourists and its pristine beauty
              will rejuvenate your mind, body and soul.
            </p>
            <p>
              The pleasant weather, wooded slopes, invigorating views of the
              snow-capped peaks of the Himalayas adds peace and tranquillity for
              the tourists visiting Dhanaulty.
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
                <h3>Mussoorie Trip Plan.</h3>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                To explore <strong>Mussoorie</strong> and its nearby
                surroundings at a relaxed pace, you would need{" "}
                <strong>2 Days</strong> minimum as there are plenty of places in
                and around Mussoorie. I would recommend to visit these places{" "}
                <strong>
                  Lal Tibba, Kempty Falls, Dhanaulti, Gun Hill, Clouds End
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
                <h3>Mussoorie Trip Budget.</h3>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Mussoorie Trip Budget FOR CAR & HOTEL EXPENSES </strong>{" "}
                <i className="fa-sharp fa-solid fa-arrow-down"></i> <br />
                <br />
                Package for <strong>1 Nights / 2 Days</strong> will cost{" "}
                <strong>
                  {" "}
                  <i className="fa-solid fa-indian-rupee-sign"></i>9000
                </strong>{" "}
                <br />
                Package for <strong>2 Nights / 3 Days</strong> will cost{" "}
                <strong>
                  {" "}
                  <i className="fa-solid fa-indian-rupee-sign"></i>15000
                </strong>{" "}
                <br />
                Package for <strong>3 Nights / 4 Days</strong> will cost{" "}
                <strong>
                  {" "}
                  <i className="fa-solid fa-indian-rupee-sign"></i>21000
                </strong>
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
                <h3>Mussoorie + Dehradun + Rishikesh Package</h3>
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
  );
};

export default Mussoorie;
