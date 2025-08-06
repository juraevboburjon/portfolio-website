import Image from "next/image";
import { projects } from "./projects.js";
import Link from "next/link.js";

function ProjectsWrapper() {
  return (
    <div className="grid grid-cols-3 w-[950px] gap-8">
      {projects.map((project, i) => (
        <div key={i} className="grid items-start justify-between mt-10">
          <div className="relative max-w-72">
            <span
              className="absolute top-1 left-3 px-4 py-1.5 text-xs rounded-4xl bg-white/90 border border-black font-semibold shadow"
              style={{ pointerEvents: "none" }}
            >
              {project.stack}
            </span>
            <Image
              src={project.image}
              alt="Here is image"
              className="rounded"
              width={280}
              height={280}
            />

            <h1 className="text-2xl font-extrabold mt-2">
              {project.projectName}
            </h1>
            <p className="text-gray-600 text-xs tracking-[0.5px] font-light ">
              {project.desc}
            </p>
            <button className="px-8 py-2 bg-black text-white mt-5 rounded">
              <Link href={project.sitelink}>자세히 보기</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsWrapper;
