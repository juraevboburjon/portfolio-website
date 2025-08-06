import ProjectsWrapper from "./ProjectsWrapper";

function Projects() {
  return (
    <div className="w-screen flex flex-col justify-center items-center bg-white text-black py-30">
      <h1 className="font-bold text-4xl">프로젝트 상세</h1>
      <p className="text-gray-600 mt-2.5">
        주요 프로젝트의 세부 사항을 확인해보세요
      </p>

      <ProjectsWrapper />
    </div>
  );
}

export default Projects;
