import { icons } from "./icons.js";

function HomeIcons() {
  return (
    <div className="flex items-center justify-between  w-[920px] ">
      {icons.map((icon, i) => (
        <div className="w-8" key={i}>
          {icon}
        </div>
      ))}
    </div>
  );
}

export default HomeIcons;
