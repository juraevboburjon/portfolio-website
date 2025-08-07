import Info from "./Info";

function Education() {
  return (
    <div className="w-screen flex flex-col justify-center items-center py-30">
      <div data-aos="fade-up">
        <h1 className="text-center font-bold text-4xl">교육 및 어학</h1>

        <div className="flex flex-col items-center justify-between mt-15 gap-10">
          <div className="flex justify-between items-start w-[820px] mx-auto">
            <p className="text-gray-600">* 2022 - 2024</p>
            <p className="font-bold text-xl">계명문화대학교</p>
            <div className="text-gray-600 w-[450px]">
              <p>Korean language courses </p>
              대학교 및 기관에서 체계적인 한국어 교육 과정을 수료하였으며,
              읽기,쓰기,듣기,말하기 등 실무 및 학문적 활용 능력을 고루 갖춤.
            </div>
          </div>

          <div className="flex justify-between items-start w-[820px] mx-auto">
            <p className="text-gray-600">* 2024</p>
            <p className="font-bold text-xl">경복대학교</p>
            <div className="text-gray-600 w-[450px]">
              소프트웨어융합 전공
              <p>
                웹 프로그래밍 기초, 이미지 프로세싱 및 인터렉티브 미디어
                프로그래밍 학습 기초 디자인 및 UI/UX 디자인 학습
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 border-[0.5px] mt-10 w-[820px]" />

        <div className="flex justify-between items-start w-[820px] mx-auto mt-10">
          <p className="text-gray-600">* 2023</p>
          <p className="font-bold text-xl">TOPIK</p>
          <div className="text-gray-600 w-[450px]">
            <p>한국어능력 시험 3급</p>
          </div>
        </div>

        <div className="flex justify-between items-start w-[820px] mx-auto mt-10">
          <p className="text-gray-600">* 2024</p>
          <p className="font-bold text-xl">Sammi.ac</p>
          <div className="text-gray-600 w-[450px]">
            <p>Foundation (HTML CSS)</p>
          </div>
        </div>

        <div className="flex justify-between items-start w-[820px] mx-auto mt-10">
          <p className="text-gray-600">* 2024</p>
          <p className="font-bold text-xl">Udemy.com</p>
          <div className="text-gray-600 w-[450px]">
            <p>Web development JS & React</p>
          </div>
        </div>

        <Info />
      </div>
    </div>
  );
}

export default Education;
