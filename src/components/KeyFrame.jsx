import KayFrameWrapper from "./KayFrameWrapper";

function KeyFrame() {
  return (
    <div className="w-screen flex flex-col justify-center items-center bg-white text-black py-30">
      <h1 className="font-bold text-4xl">{/* 프로젝트 상세 */}핵심 역량</h1>
      <p className="text-gray-600 mt-2.5">
        아이디어를 신뢰할 수 있는 개발쪽으로 구현합니다.
        {/* 주요 프로젝트의 세부 사항을 확인해보세요 */}
      </p>

      <div className="flex">
        <KayFrameWrapper />
      </div>
    </div>
  );
}

export default KeyFrame;
