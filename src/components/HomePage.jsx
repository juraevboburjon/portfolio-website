import HomeIcons from "@/components/HomeIcons";
import Image from "next/image";

function HomePage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex items-center justify-between w-[920px] mx-auto">
        <div className="">
          <h1 className="font-bold text-5xl">
            <span>주라에브</span>
            <span className="block mt-2">무함마드버부르</span>
          </h1>
          <p className="w-[490px] mt-8 text-gray-600">
            React를 사용하여 반응형 및 인터랙티브 웹 애플리케이션을 직접 구축한
            경험이 있는 동기 부여형 프론트엔드 개발자.
          </p>
        </div>
        <div className="">
          <Image
            className="rounded-full"
            src="/home_img.jpg"
            width={350}
            height={350}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <HomeIcons />
      </div>
    </div>
  );
}

export default HomePage;
