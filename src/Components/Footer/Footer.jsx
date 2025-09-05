import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-black w-5/6 mx-auto  p-10 flex  ">
      <nav className="mx-auto">
        <h6 className="footer-title font-bold text-xl">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="mx-auto">
        <h6 className="footer-title font-bold text-xl">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="mx-auto">
        <h6 className="footer-title font-bold text-xl">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>

      
    </footer>
    

     
  );
};

export default Footer;
