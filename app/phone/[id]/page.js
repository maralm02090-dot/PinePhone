"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const params = useParams();
  const id = params.id;
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [number, setNumber] = useState(0);

  const getPhoneData = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const phone = await response.json();
    console.log(phone);

    setPhoneDetails(phone);
  };

  const minus = () => {
    setNumber(number - 1);
  };
  const plus = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    getPhoneData();
  }, []);

  return (
    <div className="bg-[#f2f4fa] w-full min-h-screen flex flex-col pl-10">
      <Link href="/phone" className="text-blue-400 pt-10 pb-5">
        ← Утаснууд руу буцах
      </Link>

      <div className="w-[900px] rounded-lg h-[500px] bg-white flex p-6 gap-6">
        {phoneDetails !== null && (
          <img
            className="w-[300px] h-[300px] object-cover"
            src={phoneDetails.thumbnail}
          />
        )}
        <div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col ">
                <p className="text-gray-500 text-[14px] ">APPLE</p>
                {phoneDetails !== null && (
                  <h1 className="text-black text-[30px] font-black">
                    {phoneDetails.title}
                  </h1>
                )}
              </div>

              {phoneDetails !== null && (
                <p className="text-black">⭐️ {phoneDetails.rating}</p>
              )}
              {phoneDetails !== null && (
                <p className="text-black">{phoneDetails.description}</p>
              )}

              {phoneDetails !== null && (
                <p className="text-black font-black text-[30px]">
                  $ {phoneDetails.price}
                </p>
              )}
            </div>
          </div>
          <div className="border-1 border-gray-300 border-solid rounded-lg w-[500px] h-[200px] flex flex-col items-center mt-6">
            <div className="flex gap-50 pt-3">
              <div className="flex gap-2">
                <button
                  onClick={minus}
                  className="w-[35px] font-bold h-[35px] rounded-lg bg-gray-200 text-black"
                >
                  -
                </button>
                <p className="text-black text-[18px] font-bold pt-1">
                  {number}
                </p>
                <button
                  onClick={plus}
                  className="w-[35px] font-bold h-[35px] rounded-lg bg-gray-200 text-black"
                >
                  +
                </button>
              </div>
              <p className="text-black text-[18px] flex pt-1">
                Нийт: ${" "}
                {phoneDetails !== null && number * phoneDetails.price}{" "}
              </p>
            </div>

            <button className="bg-[#ff6801] rounded-lg w-[450px] h-[50px] flex items-center justify-center text-white mt-4">
              Сагсанд хийх
            </button>
            <p className="text-green-400 w-full flex pl-6 pt-5">
              ✅ {number} ширхэг {phoneDetails !== null && phoneDetails.title}{" "}
              сагсанд нэмэгдлээ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
