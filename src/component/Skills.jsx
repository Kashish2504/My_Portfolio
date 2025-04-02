import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import Circle from "./UI/Circle";

const Skills = () => {
  return (
    <>
      <div className="bg-white w-screen h-22"></div>
      <div className="flex flex-wrap justify-center items-center h-screen bg-emerald-300 gap-5 ">
        <Circle title="HTML" color="text-orange-600" text="text-xl">
          <FaHtml5 className={`text-orange-600 text-7xl`} />
        </Circle>

        <Circle title="CSS" color="text-blue-600" text="text-xl">
            <FaCss3Alt className={` text-blue-600 text-7xl `}/>
        </Circle>

        <Circle title="Javascript" color="text-yellow-400" text="text-xl">
              <FaJsSquare className={`text-yellow-400 text-7xl`} />
        </Circle>

        <Circle title="Tailwind" color="text-cyan-500" text="text-xl">
              <RiTailwindCssFill className={`text-cyan-500 text-7xl`} />
        </Circle> 

        <Circle title="React" color="text-sky-400" text="text-xl">
              <FaReact className={`text-sky-400 text-7xl`} />
        </Circle>
        
        <Circle title="Python" color="text-sky-400" text="text-xl">
              <FaPython className={`text-blue-700 text-7xl`} />
        </Circle>

        <Circle title="React" color="text-sky-400" text="text-5xl">
            <RiNextjsFill className={`text-yellow-400 text-9xl`} />
        </Circle>

        <Circle title="React" color="text-sky-400" text="text-5xl">
              <FaReact className="text-sky-400 text-9xl" />
        </Circle>

      </div>
    </>
  );
};

export default Skills;
