"use client";
import { useFadeScroll } from "./useFadeScroll";
import KayFrameWrapper from "./KayFrameWrapper";

function KeyFrame() {
  useFadeScroll();
  return (
    <div className="w-screen flex flex-col justify-center items-center bg-white text-black py-30">
      <div data-aos="fade-up" className="text-center">
        <h1 className="font-bold text-4xl">핵심 역량</h1>
        <p className="text-gray-600 mt-2.5">
          아이디어를 신뢰할 수 있는 개발쪽으로 구현합니다.
        </p>
      </div>

      <div className="flex">
        <KayFrameWrapper />
      </div>
    </div>
  );
}

export default KeyFrame;
