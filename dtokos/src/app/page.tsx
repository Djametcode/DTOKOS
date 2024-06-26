import AboutMeComponent from "@/components/aboutMeComponent";
import CarouselComponent from "@/components/carouselComponent";
import CategoryComponent from "@/components/categoryComponent";
import CopyrightComponent from "@/components/copyrightComponent";
import FeaturedProductComponent from "@/components/featuredProduct";
import HeaderComponent from "@/components/headerComponent";
import IntroduceComponent from "@/components/introduceComponent";
import SubscribeComponent from "@/components/subscribeComponent";

export default function Home() {
  return (
    <div className=" w-screen h-full relative">
      {/* <div className=" absolute z-0 top-[50px] -left-[50px] w-[800px] h-[700px] bg-gradient-to-br from-purple-500/45 to-blue-600/45 rounded-full blur-3xl"></div>
      <div className=" absolute z-0 bottom-[1600px] -right-[50px] w-[600px] h-[600px] bg-gradient-to-b from-purple-500/45 to-blue-600/45 rounded-full blur-3xl"></div>
      <div className=" absolute z-0 bottom-[900px] -left-[50px] w-[500px] h-[500px] bg-gradient-to-b from-purple-500/45 to-blue-600/45 rounded-full blur-3xl"></div> */}
      <div className=" fixed top-0 w-full z-30">
        <HeaderComponent />
      </div>
      <div className=" m-20 flex max-sm:m-3 max-sm:flex-col max-sm:gap-10 max-sm:mt-[100px] max-sm:h-screen relative z-20 mt-[200px]">
        <div className=" basis-1/2 h-[725px] flex items-start justify-center rounded-3xl max-sm:hidden">
          <div className=" h-[400px]">
            <CarouselComponent />
          </div>
        </div>
        <div className=" basis-1/2 h-[900px]">
          <IntroduceComponent />
        </div>
      </div>
      <div className=" relative z-20">
        <CategoryComponent />
        <FeaturedProductComponent />
      </div>
      <div className=" relative z-20">
        <SubscribeComponent />
      </div>
      <AboutMeComponent />
      <CopyrightComponent />
    </div>
  );
}
