import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="form-container section__padding" id="section-4">
      <h2 className='text-center'>Contact Us Now</h2>
      <h6 className="text-center">mountyatra@gmail.com</h6>
          <h6 className="text-center">
            +91 9412979959 <span>|</span> +91 7895212535
          </h6><br />
      <form action="https://formspree.io/f/xbjerznb"
  method="POST">
        <div className="row">
          <div className="mb-3 col">
            <label for="exampleFormControlInput1" className="form-label">
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3 col">
            <label for="exampleFormControlInput1" className="form-label">
              {" "}
              Phone No.{" "}
            </label>
            <input
              type="tel"
              name="Mobile-Number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            {" "}
            Email address{" "}
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="row">
          <div className="mb-3 col">
            <label for="exampleFormControlInput1" className="form-label">
              {" "}
              Check-In Date{" "}
            </label>
            <input
              type="date"
              name="check-in-date"
              className="form-control"
              id="exampleFormControlInput1"
              required

            />
          </div>
          <div className="mb-3 col">
            <label for="exampleFormControlInput1" className="form-label">
              {" "}
              Check-Out Date{" "}
            </label>
            <input
              type="date"
              name="check-out-date"
              className="form-control"
              id="exampleFormControlInput1"
              required

            />
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col">
            <label for="exampleFormControlInput1" className="form-label">
              {" "}
              Adults{" "}
            </label>
            <input
              type="number"
              name="No-Of-Adults"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter No. Of Adults"
              required

            />
          </div>
          <div className="mb-3 col">
            <label for="exampleFormControlInput1" className="form-label">
              {" "}
              Children{" "}
            </label>
            <input
              type="number"
              name="No-Of-Childs"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter No. Of Child"
              required

            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label"> Choose Destinations </label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="mussoorie"
              name="destination"
            />
            <label className="form-check-label" for="inlineCheckbox1">
              Mussoorie
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="dehradun"
              name="destination"

            />
            <label className="form-check-label" for="inlineCheckbox2">
              Dehradun
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="rishikesh"
              name="destination"

            />
            <label className="form-check-label" for="inlineCheckbox3">
              Rishikesh
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox4"
              value="kedarnath"
              name="destination"

            />
            <label className="form-check-label" for="inlineCheckbox4">
              Kedarnath
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox5"
              value="Badrinath"
              name="destination"

            />
            <label className="form-check-label" for="inlineCheckbox5">
              Badrinath
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox6"
              value="nainital"
              name="destination"

            />
            <label className="form-check-label" for="inlineCheckbox6">
              Nainital
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            {" "}
            Type Your Message{" "}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="message"
          >
            {" "}
          </textarea>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
