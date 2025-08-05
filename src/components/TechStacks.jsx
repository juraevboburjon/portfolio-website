import { iconsTechStack } from "./icons.js";

function TechStacks() {
  return (
    <div className="w-screen flex flex-col justify-center items-center py-30">
      <h1 className="font-bold text-4xl">기술 스택 및 도구</h1>
      <p className="text-gray-600 mt-2.5">아래의 기술을 사용할 수 있습니다.</p>

      <div className="flex justify-between items-center gap-5 mt-15">
        {iconsTechStack.map((icon, i) => (
          <div className="flex flex-col bg-white p-3 rounded" key={i}>
            <div className="w-10">{icon}</div>
          </div>
        ))}
      </div>

      {/* <div className="ml-42 flex justify-between items-center gap-5 mt-5">
        {iconsTechStack.map((icon, i) => (
          <div className="flex flex-col bg-white p-3 rounded" key={i}>
            <div className="w-10">{icon}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default TechStacks;
