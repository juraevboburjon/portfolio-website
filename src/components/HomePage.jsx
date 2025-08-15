"use client";
import HomeIcons from "@/components/HomeIcons";
import Image from "next/image";
import { useFadeScroll } from "./useFadeScroll";

function HomePage() {
  useFadeScroll();

  function downloadResume() {
    const link = document.createElement("a");
    link.href = "/Juraev_Mukhammadbobur.pdf";
    link.download = "Juraev_Mukhammadbobur.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const downloadIcon = (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div
        data-aos="fade-up"
        className="flex items-center justify-between w-[920px] mx-auto"
      >
        <div className="">
          <h1 className="font-bold text-5xl">
            <span>주라에브</span>
            <span className="block mt-2">무함마드버부르</span>
          </h1>
          <p className="w-[490px] mt-8 text-gray-600">
            React를 사용하여 반응형 및 인터랙티브 웹 애플리케이션을 직접 구축한
            경험이 있는 동기 부여형 프론트엔드 개발자.
          </p>
          <button
            onClick={() => downloadResume()}
            className="flex justify-center items-center gap-2 bg-white px-8 py-2  text-black font-bold mt-8 min-w-40 rounded-lg hover:bg-white/90 transition-colors cursor-pointer"
          >
            이력서 다운로드
            <span>{downloadIcon}</span>
          </button>
        </div>
        <div className="">
          <Image
            className="rounded-full"
            src="/home_img4.webp"
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
