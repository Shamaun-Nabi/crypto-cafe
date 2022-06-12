import React, { useEffect, useState } from "react";
import { Audio, TailSpin } from "react-loader-spinner";
import CoinCard from "../CoinCard/CoinCard";

export default function Coins() {
  const [coin, setcoin] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log("first check", coin);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setcoin(data);
        setLoading(false);
        // console.log("second check", coin);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <TailSpin width="50" heigth="50"   color="#FFFFFF" />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div>
            <p className="text-white text-center mt-4">
              <p className="text-3xl">Available Currencies</p>
              Total Coins : {coin.length}
            </p>
            <div className="flex justify-center items-center ">
              <Audio
                heigth="20"
                width="20"
                color="#5FD068"
                ariaLabel="loading-indicator"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              {coin.map((onecoin) => (
                <CoinCard coins={onecoin} key={onecoin.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
