import "../app/globals.css";
import { iconsHome } from "./icons.js";

function HomeIcons() {
  return (
    <div className="flex space-x-16 logos items-center justify-between w-[920px]">
      <div className="logo-corusel">
        {iconsHome.map((icon, i) => (
          <img src={icon} alt="" key={i} />
        ))}
      </div>
    </div>
  );
}

export default HomeIcons;
