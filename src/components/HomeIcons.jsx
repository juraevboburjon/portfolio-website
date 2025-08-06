import "../app/globals.css";
import { iconsHome } from "./icons.js";

function HomeIcons() {
  return (
    <div className="flex space-x-16 logos items-center justify-between w-[920px]">
      <div className="animate">
        {iconsHome.map((icon, i) => (
          <div key={i} className="logo-corusel">
            <div className="w-8 overflow-hidden">{icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeIcons;
