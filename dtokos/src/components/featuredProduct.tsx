/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
interface ImockData {
  title: string;
  image: string;
  description: string;
  price: number;
}

import { CiShoppingCart } from "react-icons/ci";

export default function FeaturedProductComponent() {
  const mockData: ImockData[] = [
    {
      title: "Brownies Singkong",
      image: "/brown3.jpeg",
      description:
        "Brownies legin dari singkong, banyak topping choco chips, oreo, keju, dan matcha.",
      price: 10000,
    },
    {
      title: "Brownies Box",
      image: "/brown2.jpeg",
      description:
        "Brownies legin dari singkong, banyak topping choco chips, oreo, keju, dan matcha. packed menggunakan box ukuran sedang",
      price: 10000,
    },
    {
      title: "Brownies Box Kertas",
      image: "/brown1.jpeg",
      description:
        "Brownies legin dari singkong, banyak topping choco chips, oreo, keju, dan matcha. packed menggunakan box kertas",
      price: 10000,
    },
    {
      title: "Macbook pro 2024",
      image: "/mac1.jpeg",
      description: "Brand new macbook pro 2024. powered with m4 pro processor",
      price: 10000,
    },
  ];
  return (
    <div className=" h-[800px] max-sm:h-full w-full font-sora">
      <h1 className=" text-center text-3xl">Top Selling Product</h1>
      <div className=" flex max-sm:flex-col gap-5 max-sm:gap-10 mt-36 w-full max-sm:justify-center max-sm:items-center justify-around">
        {mockData.map((item) => {
          return (
            <div className=" shadow relative text-justify w-[300px] h-[400px] flex flex-col gap-3 bg-slate-50 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl">
              <div className=" absolute right-4 top-4 cursor-pointer">
                <CiShoppingCart size={30} />
              </div>
              <div className=" w-[300px] h-[300px] rounded-tr-xl rounded-tl-xl">
                <img
                  className=" w-full h-full object-cover rounded-tr-xl rounded-tl-xl"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className=" flex justify-between w-full text-sm pl-3 pr-3">
                <h1>{item.title}</h1>
                <p>
                  {item.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
              <div className=" max-w-full text-xs p-3 text-slate-400">
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
