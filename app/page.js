import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#f2f4fa] w-full flex flex-col items-center pt-50 h-[100vw]">
      <h1 className="text-black text-[50px] font-black">Pine Phone Shop</h1>
      <p className="text-gray-500 font-normal text-[15px]å">
        Шинэ утас эндээс сонго
      </p>
      <Link
        href="/phone"
        className="w-[200px] flex justify-center items-center mt-7 h-[35px] rounded-[15px] text-white bg-[#10182a]"
      >
        Утаснууд үзэх ➞
      </Link>
    </div>
  );
}
