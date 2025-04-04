import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {FaCuttlefish } from "react-icons/fa6";
import Circle from "./UI/Circle";

const Skills = () => {
  return (
    <>
    
      <div className="bg-white w-screen h-22"></div>
      <div className="justify-center items-center h-110 bg-amber-400">
        
        <h1 className="font-bold text-5xl pt-9 pl-130 text-[#f8f5f2]">My Skills</h1>

        <p className="text-[#f8f5f2] pl-95 text-xl pt-5 ">Always learning, always growing – one skill at a time! 🚀💡"</p>
      
      <div className="flex flex-wrap pt-20 gap-5 pl-10">
        

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
        
        <Circle title="Python" color="text-blue-700" text="text-xl">
              <FaPython className={`text-blue-700 text-7xl`} />
        </Circle>

        <Circle title="Next.js" color="text-yellow-400" text="text-xl">
            <RiNextjsFill className={`text-yellow-400 text-9xl`} />
        </Circle>

        <Circle title="C" color="text-blue-400" text="text-3xl">
            <FaCuttlefish className={`text-blue-400 text-7xl` }/>
        </Circle>

      </div>
      </div>
    </>
  );
};

export default Skills;
