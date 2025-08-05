import Education from "@/components/Education";
import HomePage from "@/components/HomePage";
import KeyFrame from "@/components/KeyFrame";
import TechStacks from "@/components/TechStacks";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <HomePage />
      <KeyFrame />
      <TechStacks />
      <Education />
    </div>
  );
}
