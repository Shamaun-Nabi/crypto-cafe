import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";

export default function CoinDetails() {
  const { id } = useParams();
  const [coins, setCoins] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`)
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        console.log(data);
        setLoading(false);
      });
  }, [id]);
  return (
    <>
      <div>
        <p className="font-semibold text-3xl text-white text-center mt-5">
          {coins.name}
        </p>

        {loading ? (
          <div className="flex justify-center">
            <Circles
              ariaLabel="loading-indicator"
              height="50"
              width="50"
              color="#ffffff"
            />
          </div>
        ) : (
          <div className=" container mx-auto grid grid-cols-2 mt-4 bg-slate-800 w-[450px] md:w-[550px] h-[350px] p-3 rounded-md shadow-md shadow-white">
            <div className="flex justify-center items-center">
              <div>
                <h3 className="text-white text-lg">Name : {coins.name}</h3>
                <h5 className="text-white text-lg">
                  Rank : {coins.coingecko_rank}
                </h5>
                <h6 className="text-white text-lg">
                  Score : {coins.coingecko_score}
                </h6>
                <h6 className="text-white text-lg">
                  Current Price Bdt :{" "}
                  <span className="text-green-500">
                    {coins.market_data?.current_price?.bdt} ৳
                  </span> <br /> <br />
                  <Link to="/contact" className="bg-green-500 p-2 rounded-md">Buy Now</Link>
                </h6>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img className="animate-pulse" src={coins.image?.large} alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
