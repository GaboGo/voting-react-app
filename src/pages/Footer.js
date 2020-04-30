import React from "react";
const Footer = () => {
  return (
    <footer>
      <section
        className="contact"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL +
            `/assets/people.jpg`})`
        }}
      >
        <div className="white-screen"></div>
        <div className="left">
          <span>Is there anyone else you would want us to add?</span>
        </div>
        <div className="rigth">
          <div className="submit-btn">
            <span>Submit a Name</span>
          </div>
        </div>
      </section>
      <section className="credits">
        <ul className="breadcrumbs-footer">
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
        <ul className="breadcrumbs-social">
          <li>Follow Us</li>
          <li>
            <img src={process.env.PUBLIC_URL + "/assets/fb.png"} />
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/assets/tw.png"} />
          </li>
        </ul>
      </section>
    </footer>
  );
};
export default Footer;
