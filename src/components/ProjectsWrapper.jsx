import Image from "next/image";

function ProjectsWrapper() {
  return (
    <div className=" flex flex-col w-[900px]">
      <div className="flex gap-10 items-center justify-between mt-25">
        <div className="w-96">
          <span className="px-2 py-1 text-xs border-black border rounded-4xl">
            Front End
          </span>
          <h1 className="text-2xl font-extrabold mt-5">Mega Coffe Order App</h1>
          <p className="text-gray-600 text-sm tracking-[0.5px] font-light mt-5">
            Mega Coffe Order App - 는 커피 주문을 위한 웹 애플리케이션입니다.
            음료를 선택하고 온라인으로 주문할 수 있는 편리한 인터페이스를
            제공합니다.
          </p>
          <button className="px-8 py-2 bg-black text-white mt-10 rounded">
            자세히 보기
          </button>
        </div>

        <div className="f">
          <Image
            src="/megacoffe.png"
            alt="Here is image"
            className="rounded"
            width={480}
            height={480}
          />
        </div>
      </div>

      <div className="flex gap-10 items-center justify-between mt-25">
        <div className="f">
          <Image
            src="/coolpic.png"
            alt="Here is image"
            className="rounded"
            width={480}
            height={480}
          />
        </div>

        <div className="w-96">
          <span className="px-2 py-1 text-xs border-black border rounded-4xl">
            MERN
          </span>
          <h1 className="text-2xl font-extrabold mt-5">Cool Pic</h1>
          <p className="text-gray-600 text-sm tracking-[0.5px] font-light mt-5">
            Cool Pic - 사진 공유 및 검색을 위한 최신 웹 애플리케이션입니다.
            자바스크립트로 구축된 이 플랫폼을 통해 사용자는 사진을 게시하고,
            다른 사람이 업로드한 콘텐츠를 탐색하며, 시각적으로 풍부한 환경에서
            활동할 수 있습니다.
          </p>
          <button className="px-8 py-2 bg-black text-white mt-10 rounded">
            자세히 보기
          </button>
        </div>
      </div>

      <div className="flex gap-10 items-center justify-between mt-25">
        <div className="w-96">
          <span className="px-2 py-1 text-xs border-black border rounded-4xl">
            MERN
          </span>
          <h1 className="text-2xl font-extrabold mt-5">Mega Movie Seats</h1>
          <p className="text-gray-600 text-sm tracking-[0.5px] font-light mt-5">
            Movie Seats - 온라인 영화 좌석 예약 플랫폼, 온라인 영화 티켓 예매를
            위한 최신 웹 애플리케이션!
          </p>
          <button className="px-8 py-2 bg-black text-white mt-10 rounded">
            자세히 보기
          </button>
        </div>

        <div className="f">
          <Image
            src="/movieseats.png"
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

export default ProjectsWrapper;
