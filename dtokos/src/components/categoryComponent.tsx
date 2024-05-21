/* eslint-disable @next/next/no-img-element */
export default function CategoryComponent() {
  return (
    <div className=" w-full h-[800px] font-sora">
      <h1 className=" text-center text-3xl">Category</h1>
      <div className=" grid grid-cols-4 place-content-around mt-24">
        <div className=" flex flex-col items-center justify-center gap-5">
          <div className=" w-[85x] h-[85px] bg-slate-200 p-5 rounded-2xl">
            <img className=" w-full h-full" src="/tshirt.png" alt="shirt" />
          </div>
          <p className=" text-sm">T-Shirt</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-5">
          <div className=" w-[85px] h-[85px]  bg-slate-200 p-5 rounded-2xl">
            <img className=" w-full h-full" src="/shoes.png" alt="shirt" />
          </div>
          <p className=" text-sm">Shoes</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-5">
          <div className=" w-[85px] h-[85px]  bg-slate-200 p-5 rounded-2xl">
            <img className=" w-full h-full" src="/food.png" alt="shirt" />
          </div>
          <p className=" text-sm">food and beverage</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-5">
          <div className=" w-[85px] h-[85px]  bg-slate-200 p-5 rounded-2xl">
            <img className=" w-full h-full" src="/videogame.png" alt="shirt" />
          </div>
          <p className=" text-sm">Console</p>
        </div>
      </div>
    </div>
  );
}
