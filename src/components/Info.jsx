function Info() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-45">
      <h1 className="font-bold text-4xl text-center w-[350px] leading-11">
        감사합니다 <br />더 궁금한 점이 있다면 편하게 연락주세요
      </h1>

      <div className="flex flex-col px-8 py-8 rounded-xl bg-gray-600/30 mt-10 gap-y-3 text-base">
        <p className="font-bold">
          전화번호
          <span className="font-light ml-5">010 8414 5758</span>
        </p>

        <p className="font-bold">
          이메일
          <span className="font-light ml-10">
            mukhammadboburjuraev.@gmail.com
          </span>
        </p>

        <p className="font-bold">
          linkedIn
          <span className="font-light ml-5">@juraevmukhammadbobur</span>
        </p>
      </div>
    </div>
  );
}

export default Info;
