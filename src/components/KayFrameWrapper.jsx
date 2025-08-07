import Image from "next/image";
import { useFadeScroll } from "./useFadeScroll";

function KayFrameWrapper() {
  useFadeScroll();
  return (
    <div className=" flex flex-col w-[900px]">
      <div
        data-aos="fade-up"
        className="flex gap-10 items-center justify-between mt-25"
      >
        <div className="w-80">
          <h1 className="text-2xl font-extrabold mt-5">모든 프론트엔드 개발</h1>
          <p className="text-gray-600 text-sm tracking-[0.5px] font-light mt-5">
            React.js를 이용한 프론트엔드 개발경험이 있으며,
            Javascript(ES6)능숙합니다. 핵심적인 React library 활용 경험이
            있습니다.
          </p>
        </div>

        <div className="f">
          <Image
            src="/keyframe-img1.png"
            alt="Here is image"
            className="rounded"
            width={480}
            height={480}
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="flex gap-10 items-center justify-between mt-25"
      >
        <div className="f">
          <Image
            src="/keyframe-img2.png"
            alt="Here is image"
            className="rounded"
            width={480}
            height={480}
          />
        </div>

        <div className="w-80">
          <h1 className="text-2xl font-extrabold mt-5">커뮤니케이션 및 협업</h1>
          <p className="text-gray-600 text-sm tracking-[0.5px] font-light mt-5">
            Github 이용한 협업 경험이 있으며, Figma, Notion 등의 협업 도구 사용
            경험도 있습니다. 기획, 디자인, 총무 등 다양한 직무 경험을 기반으로
            다른 직군과 원활한 커뮤니케이션이 가능합니다.
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="flex gap-10 items-center justify-between mt-25"
      >
        <div className="w-80">
          <h1 className="text-2xl font-extrabold mt-5">
            새러운 기술 배우고 공부
          </h1>
          <p className="text-gray-600 text-sm tracking-[0.5px] font-light mt-5">
            프론트엔드 개발 분야에서 새로운 기술과 트렌드를 끊임없이 배우고
            공부하며, 사용자 경험을 최우선으로 생각하는 개발자가 되기 위해
            노력합니다.
          </p>
        </div>

        <div className="f">
          <Image
            src="/keyframe-img3.png"
            alt="Here is image"
            className="rounded"
            width={480}
            height={480}
          />
        </div>
      </div>
    </div>
  );
}

export default KayFrameWrapper;
