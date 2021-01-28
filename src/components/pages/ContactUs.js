import React from "react";
import "./styles.css";
import Navbar from "../layout/Navbar";
import { Button, Form } from "react-bootstrap";

const Contactus = () => {
  let styles = {
    marginTop: "50px",
    border: "solid",
    padding: "30px",
  };
  let feedbackarea = {
    height: "100px",
  };
  function FeedBackSubmited() {
    alert("Thank you for your Feedback");
  }

  return (
    <div className="dashboards ">
      <Navbar />
      <div className="main-container contactus">
        <Form>
          <div class="row">
            <div class="col-25">
              <label for="fname">First Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              ></input>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Last Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              ></input>
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="subject">Subject</label>
            </div>
            <div class="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              ></textarea>
            </div>
          </div>
          <div class="row">
            <Button variant="primary" onClick={FeedBackSubmited} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Contactus;
