import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/hero-art.png";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="mt-3  ">
        <div className="container mx-auto rounded-lg Landing md:h-screen">
          <div className="grid grid-cols-2 p-4 md:p-2  ">
            <div className=" flex justify-center items-center p-5 ">
              <div className="text-white">
                <h2 className="text-2xl md:text-5xl text-white font-semibold">
                  NFT Marketplace Explore, Collect or Sell
                </h2>
                <p className="mt-3 font-thin">
                  NFT artists are cracking the male-dominated decentralized
                  space to voice major changes in the virtual world.
                  Distinctively foster B2B networks whereas state of the art
                  opportunities continually facilitate vertical mindshare
                </p>
                <Link to="coins">
                  <button
                    type="button"
                    className="bg-gradient-to-r from-blue-700 to-pink-600 px-7 py-3 md:py-4 rounded-md mt-4 font-semibold text-md md:text-lg"
                  >
                    Explore Items
                  </button>
                </Link>
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <div>
                <img src={HeroImg} alt="landing img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
