import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <span className="text-white text-4xl text-center">Contact Us</span>
        </div>
      </div>

      <div className="flex justify-center mt-5 ">
        <Link to="bd-adress" className="bg-teal-500 text-white p-2 rounded-md shadow-md shadow-slate-100">
          BD Headoffice Adress
        </Link>
        <Link to="us-adress" className="bg-teal-500 text-white ml-3  p-2 rounded-md shadow-md shadow-slate-100">
          US Headoffice Adress
        </Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  );
}

export default Contact;
