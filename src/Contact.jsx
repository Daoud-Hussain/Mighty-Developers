import React from "react";

const Contact = () => {
  return (
    <>
      <div class="container mt-5">
        <h1 className="text-center">Contact Us</h1>
        <h6 >Here's why you should work with us.</h6>
        <div className="row d-flex flex-row">
          <div className="col-md-6 ">
            <ul>
              <li>Expert work Proficiency</li>
              <li>Customized Solutions</li>
              <li>Strong Communication</li>
              <li>Clean, Reusable Code</li>
              <li>Timely Delivery</li>
            </ul>
          </div>
          <div class="col-md-6 pt-2">
            <ul>
              <li>Cost-Efficiency</li>
              <li>Client-Centric Approach</li>
              <li>Usability</li>
              <li>Post-Launch Support</li>
            </ul>
          </div>
        </div>
        <br />

        <div class="row">
          <div class="col-md-6">
            <h3>Personal Information</h3>
            <p>
              <strong>Name:</strong> Daoud Hussain
            </p>
            <p>
              <strong>Phone:</strong> +92 348 3016704
            </p>
            <p>
              <strong>Email:</strong> daoudhussain302@gmail.com
            </p>
            <p>
              <strong>Website:</strong> daoud-hussain.github.io/Portfolio
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
