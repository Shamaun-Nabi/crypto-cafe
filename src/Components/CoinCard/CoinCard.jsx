import React from "react";
import { Link } from "react-router-dom";

export default function CoinCard({coins}) {
  const { name, symbol, image } = coins;
//   console.log(props.coins);
  return (
    <>
      <Link to="/conindetails">
        <div className="bg-slate-200 w-64 h-28 flex space-x-7 mx-2 my-2 rounded-md justify-evenly items-center p-3 shadow-sm shadow-slate-200">
          <img className="w-24" src={image} alt="img" />
          <div>
            <span className="font-semibold">{name}</span>
            <p>{symbol}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
