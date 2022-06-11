import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";

export default function Coins() {
  const [coin, setcoin] = useState([]);
  // console.log("first check", coin);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=75&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setcoin(data);
        // console.log("second check", coin);
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <p className="text-white text-center mt-4">
            <p className="text-3xl">Available Currencies</p>
            Total Coins : {coin.length}
          </p>
          <div className="grid grid-cols-4 ">
            {coin.map((onecoin) => (
              <CoinCard coins={onecoin} key={onecoin.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
