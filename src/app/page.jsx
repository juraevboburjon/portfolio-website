import Education from "@/components/Education";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <HomePage />
      <Projects />
      <Education />
    </div>
  );
}
