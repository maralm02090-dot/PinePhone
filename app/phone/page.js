import Link from "next/link";

export default async function Home() {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones",
  );

  const data = await response.json();
  const phones = data.products;

  return (
    <div className="bg-[#f2f4fa] w-full h-[150vw] flex flex-col pl-10 pt-20">
      <h1 className="text-black text-[30px] font-black">📱 Утаснууд</h1>
      <p className="text-gray-500 text-[15px]">{phones.length} утас</p>
      <div className="flex flex-wrap gap-5">
        {phones.map((phone) => (
          <Link
            href={`/phone/${phone.id}`}
            key={phone.id}
            className="bg-white w-[230px] pl-5 pb-5 rounded-lg h-[300px] flex flex-col"
          >
            <img
              src={phone.thumbnail}
              alt={phone.title}
              className="w-full h-[300px] object-contain"
            />
            <div className="flex flex-col">
              <p className="text-black text-[15px] font-bold">{phone.title}</p>
              <p className="text-gray-500 text-[13px]">${phone.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
