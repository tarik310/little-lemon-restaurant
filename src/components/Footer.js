import { Link } from "react-router-dom";

import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links-container">
        <h4>Services</h4>
        <Link className="" to="/">
          Home
        </Link>
        <Link className="" to="/table-reserve">
          Reserve
        </Link>
        <Link className="" to="/menu">
          Menu
        </Link>
        <Link className="" to="/about">
          About
        </Link>
      </div>
      <div>
        <Link className="" to="/">
          <img
            width={"100px"}
            className="logo2"
            src="/images/logo2.png"
            alt="Little Lemon"
          />
        </Link>
      </div>
      <div>
        <div className="footer-links-container">
          <h4>Media</h4>
          <Link className="footer-block" href="https://www.facebook.com">
            Facebook
          </Link>
          <Link className="footer-block" href="" target="_blank" rel="noreferrer">
            Instagram
          </Link>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p className="">123 Street, 321203 Chicago</p>
          <Link className="" href="#">
            +112 345 678 90
          </Link>
          <Link className="" href="#">
            CSR@littlelemon.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
